import { Dispatch, SetStateAction } from "react";
import { Bean } from "./Bean";
import { BeanCartObject } from "./CartProvider";

export function addToCart(item: Bean, cart: BeanCartObject[], setCart: Dispatch<SetStateAction<BeanCartObject[]>>, setShowCart: Dispatch<SetStateAction<boolean>>, quantity: number){
    const itemInCartIndex = cart.findIndex(
        beanCartObject => beanCartObject.item._id === item._id
    );

    if (itemInCartIndex === -1){
        setCart([...cart, {item: item, quantity: quantity}]);
    }
    else{
        const newQuantity = cart[itemInCartIndex].quantity + quantity
        cart = cart.filter((beanCartItem) => {
            return beanCartItem.item._id != item._id
        })
        setCart([...cart, {item: item, quantity: newQuantity}]);
    }
    setShowCart(true);
}

export function removeFromCart(item: Bean, cart: BeanCartObject[], setCart: Dispatch<SetStateAction<BeanCartObject[]>>, quantity: number){
    const itemInCartIndex = cart.findIndex(beanCartObject => beanCartObject.item._id == item._id)
    if (itemInCartIndex == -1){
        return
    }

    const newQuantity = cart[itemInCartIndex].quantity - quantity
    cart = cart.filter((beanCartItem) => {
        return beanCartItem.item._id != item._id
    })
    if (newQuantity != 0){
        cart = [...cart, {item: item, quantity: newQuantity}]
    }
    setCart(cart)
}

export function quantityInCart(item: Bean, cart: BeanCartObject[]){
    const itemInCartIndex = cart.findIndex(
        beanCartObject => beanCartObject.item._id === item._id
    );
    if (itemInCartIndex == -1){
        return 0;
    }
    return cart[itemInCartIndex].quantity;
}