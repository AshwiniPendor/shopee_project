import  { useState } from 'react'
import { useQuery } from 'react-query';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import { Wrapper , Button } from './Home.styles';
import Item from '../Item/Item'
import Drawer from '@mui/material/Drawer';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';



export type CartItemType = {
  id: number;
  description: string
  category: string;
  image: string;
  price: number;
  title: string;
  amount: number; 


}
const getProducts = async (): Promise<CartItemType[]> =>
await (await fetch('http://fakestoreapi.com/products')).json();




const Home = () => {

   const [ cartOpen,  setCartOpen ] = useState(false);
   const[ cartItems, setCartItems ] = useState([] as  CartItemType[]);
   
   const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
     getProducts
     );
    
     console.log(data);


   const getTotalItems = (items: CartItemType[]) => 
   items.reduce((ack: number, items) => ack + items.amount, 0); 

   const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      const isItemInCart =  prev.find(item => item.id === clickedItem.id)
     if(isItemInCart){
       return prev.map(item => 
         item.id === clickedItem.id
         ?{...item, amount: item.amount + 1 }
         : item
  
       );
       
     }
         return [...prev, {...clickedItem, amount: 1}];
  
        });
      };    

    const handleRemoveFromCart = (id: number) => {
        setCartItems(prev => 
          prev.reduce((ack, item) =>{
  
            if(item.id === id ){
              if( item.amount=== 1 ) return ack;
              return [...ack, {...item, amount: item.amount -1 }];
            }else{
              return [...ack, item];
            }
  
          },[] as CartItemType[])
        );
     };
     if (isLoading) return <LinearProgress/>;
     if (error) return <div>Something went wrong...</div>;    
     
  return (
      <Wrapper >
         <Header />
        <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
            <Cart
              cartItems={cartItems}
              addToCart={handleAddToCart}
             removeFromCart={handleRemoveFromCart} />  
          </Drawer>

          <Button onClick={() => setCartOpen(true)}>
            <Badge badgeContent={getTotalItems(cartItems)} color='error'>
            <ShoppingCartOutlinedIcon /> Cart
            </Badge>
        </Button>

         <Grid container spacing={3}>
            {data?.map(item => (
              <Grid item key={item.id} xs={12} sm={4}>
              <Item item={item} handleAddToCart={handleAddToCart} />
           </Grid>
            ))}
            </Grid>
      <Footer />
    </Wrapper>
  );
}
  export default Home;