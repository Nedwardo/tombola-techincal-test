import BeanCardComponent from "./BeanCardComponent";
import { Box, Grid2 } from '@mui/material';
import { Bean } from "./Bean";
import { useState } from "react";
import BeanDetailedView from "./BeanDialogue";

function BeanListComponent(props: {beans: Bean[]}) {
    const [beanDetailedView, setBeanDetailedView] = useState<Bean | null>(null);

    return (
        <Grid2 container spacing={2} columns={12} sx={{ p: 0, justifyContent: "center" }}>
            {props.beans.map(bean => (
                <Grid2 key={bean.Name} onClick={() => !beanDetailedView && setBeanDetailedView(bean)}>
                    <Box component="li" sx={{ listStyle: 'none', mb: 2, boxShadow: 2, "&:hover" : {boxShadow: 10}}} key={bean._id}>
                        <BeanCardComponent bean={bean} showDetailed={false}/>
                    </Box>
                </Grid2>
            ))}
            {!!beanDetailedView && <BeanDetailedView bean={beanDetailedView} open={!!beanDetailedView} closeDialogue={() => setBeanDetailedView(null)}/>}
        </Grid2>
    )
}

export default BeanListComponent