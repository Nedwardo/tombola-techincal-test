import { Button, Drawer } from '@mui/material';
import { CartContext } from './CartContext';
import { useContext } from 'react';
import BeanCartItem from './BeanCartItem';

function BeanCartComponent() {
    const { cart, showCart, setShowCart } = useContext(CartContext);

    return (
    <>
    {
        showCart && <Drawer open={true} anchor="right" onClose={() => setShowCart(false)} sx={{"display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column"}}>
            <h1 style={{textAlign: "center"}}>Cart</h1>
            {cart.map(beanCartObject => {
                return <BeanCartItem key={beanCartObject.item._id} beanCartObject={beanCartObject} />
            })}
            <Button sx={{"marginTop": "auto", "minWidth": "15vw"}} variant="outlined"> Checkout </Button>
        </Drawer>
    }
    </>
    )
}

export default BeanCartComponent