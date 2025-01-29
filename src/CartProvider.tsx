import { ReactElement, useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { Bean } from './bean';

type Children = {children: ReactElement | ReactElement[]}

export type BeanCartObject = {item: Bean, quantity: number}

export const CartProviderComponent = ({ children }: Children) => {
    const [showCart, setShowCart] = useState(false);
    const [cart, setCart] = useState<BeanCartObject[]>([]);

    const value = {
        setCart,
        cart,
        setShowCart,
        showCart
    }

    return <CartContext.Provider value={value}> {children} </CartContext.Provider>
}

export function AddToCart(item: Bean){
    const { cart, setCart } = useContext(CartContext);

    const itemInCartIndex = cart.findIndex(beanCartObject => beanCartObject.item._id == item._id)

    if (itemInCartIndex === -1){
        setCart([...cart, {item: item, quantity: 1}])
    }
    else{
        cart[itemInCartIndex].quantity += 1
        setCart(cart)
    }
}

export function RemoveFromCart(item: Bean){
    const { cart, setCart } = useContext(CartContext);

    const itemInCartIndex = cart.findIndex(beanCartObject => beanCartObject.item._id == item._id)
    if (itemInCartIndex == -1){
        return
    }

    cart[itemInCartIndex].quantity -= 1
    if (cart[itemInCartIndex].quantity == 0){
        cart.splice(itemInCartIndex, 1)
    }
    setCart(cart)
}