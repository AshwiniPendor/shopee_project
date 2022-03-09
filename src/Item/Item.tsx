//import Button from '@material-ui/core/Button';

import { Button } from '@mui/material';
import { Wrapper } from './Item.styles';
import { CartItemType } from '../Home/Home';



type Props = {
  item: any;
  handleAddToCart: (clicked: CartItemType) => void;
}

    const Item: React.FC<Props> = ({item,  handleAddToCart }) => {

   
  return(
        
        <Wrapper>

          <img src={item.image} alt={item.title} />
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
          </div>

          <Button onClick={() => handleAddToCart(item)}>
            Add to Cart
            
            </Button>


        </Wrapper>
          
 
   
  )
}
  

export default Item;