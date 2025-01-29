import BeanComponent from "./BeanComponent";
import { Grid2 } from '@mui/material';
import { Bean } from "./bean";

function BeanListComponent(props: {beans: Bean[]}) {
    return (
        <Grid2 container spacing={2} component="ol" sx={{ p: 0 }}>
        {props.beans.map(bean => (
            <Grid2 item xs={12} sm={6} md={4} key={bean.Name}>
                <BeanComponent bean={bean} />
            </Grid2>
        ))}
    </Grid2>
    )
}

export default BeanListComponent