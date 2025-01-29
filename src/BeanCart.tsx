import { Button, Drawer } from '@mui/material';
import { CartContext } from './CartContext';
import { useContext } from 'react';
import BeanComponent from './BeanComponent';

function BeanCartComponent() {
    const { cart, showCart, setShowCart } = useContext(CartContext);


    const cartContent = cart.map( (beanCartObject) => {
        <BeanComponent bean={beanCartObject.item} />
    })

    return (
    <>
    {
        showCart && <Drawer open={true} anchor="right">
            {cartContent}
            <h1>some text</h1>
            <Button onClick={() => setShowCart(false)} variant="outlined"> Close cart </Button>
        </Drawer>
    }
    </>)
}

export default BeanCartComponent