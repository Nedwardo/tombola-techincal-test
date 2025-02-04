import { ReactElement, useState } from 'react';
import { CartContext } from './CartContext';
import { Bean } from './Bean';

type Children = {children: ReactElement | ReactElement[]}

export type BeanCartObject = {item: Bean, quantity: number}

export const CartProviderComponent = ({ children }: Children) => {
    const [showCart, setShowCart] = useState<boolean>(false);
    const [cart, setCart] = useState<BeanCartObject[]>([]);

    const value = {
        setCart,
        cart,
        setShowCart,
        showCart
    }

    return <CartContext.Provider value={value}> {children} </CartContext.Provider>
}