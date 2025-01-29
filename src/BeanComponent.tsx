import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Bean } from "./bean";
import { useState } from "react";

export default function BeanComponent(props: {bean: Bean}) {
    const [showDescription, setShowDescription] = useState(false);
    return (
    <Box component="li" sx={{ listStyle: 'none', mb: 2 }} key={props.bean._id}>
        <Card sx={{ maxWidth: 345 }} onMouseOver={() => setShowDescription(true)} onMouseOut={() => setShowDescription(false)}>
            <CardMedia
                component="img"
                height="200"
                image={props.bean.Image}
                alt={props.bean.Name}
                sx={{ objectFit: 'contain' }}
                loading="lazy"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.bean.Name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Bean Colour: {props.bean.colour}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Country of Origin: {props.bean.Country}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Price: {props.bean.Cost}
                </Typography>
                { showDescription && <Typography variant="body1" color="text.secondary" sx={{ "&:hover": {"hidden": true} }}>
                    Description: {props.bean.Description}
                </Typography> }

            </CardContent>
        </Card>
    </Box>

    )
}