import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { BeanCartObject } from "./CartProvider";
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { quantityInCart, removeFromCart } from "./CartHelpers";

export default function BeanCartItem(props: {beanCartObject: BeanCartObject}) {
    const { cart, setCart } = useContext(CartContext);

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                    {props.beanCartObject.item.Name}
                </Typography>
            </CardContent>
            <CardMedia
                component="img"
                height="200"
                image={props.beanCartObject.item.Image}
                alt={props.beanCartObject.item.Name}
                sx={{ objectFit: 'contain' }}
                loading="lazy"
            />
            <CardContent>
                <Typography variant="body1" color="text.secondary">
                    Price: {props.beanCartObject.item.Cost}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Quantity: {quantityInCart(props.beanCartObject.item, cart)}
                </Typography>
                <Button onClick={() => removeFromCart(props.beanCartObject.item, cart, setCart, 1)}><DeleteIcon/></Button>
            </CardContent>
        </Card>
    )
}