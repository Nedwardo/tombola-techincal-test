import { createContext, Dispatch, SetStateAction } from 'react';
import { BeanCartObject } from './CartProvider';

export const CartContext = createContext<{
    setCart: Dispatch<SetStateAction<BeanCartObject[]>>,
    cart: BeanCartObject[],
    setShowCart: Dispatch<SetStateAction<boolean>>,
    showCart: boolean
}>({setCart: () => {}, cart: [], setShowCart: () => {}, showCart: false})
