import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Bean } from "./Bean";
import StarIcon from '@mui/icons-material/Star';

export default function BeanCardComponent(props: {bean: Bean, showDetailed: boolean}) {
    return (
        <Card sx={{ maxWidth: "fit-content",  minWidth: 250}}>
            <CardMedia
                component="img"
                height="200"
                image={props.bean.Image}
                alt={props.bean.Name}
                sx={{ objectFit: 'contain',  margin:"5px"}}
                loading="lazy"
            />
            <CardContent>
                {!props.showDetailed && <Typography gutterBottom variant="h5" component="h2">
                    {props.bean.Name}
                </Typography> }
                <Typography variant="body2" color="text.secondary">
                    Bean Colour: {props.bean.colour}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Country of Origin: {props.bean.Country}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Price: {props.bean.Cost}
                </Typography>
                {props.showDetailed && <Typography variant="body1" color="text.secondary">
                    Description: {props.bean.Description}
                </Typography>}
                {props.bean.isBOTD && <><Typography variant="body1" color="text.primary">
                    <StarIcon/>Bean of the Day<StarIcon/>
                </Typography></>}
            </CardContent>
        </Card>
    )
}