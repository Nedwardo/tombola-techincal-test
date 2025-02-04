import BeanCardComponent from "./BeanCardComponent";
import { Bean } from "./Bean";
import { Box } from "@mui/material";

function BeanOfTheDayComponent(props: {beans: Bean[]}) {
    const beanOfTheDay = props.beans.length > 0 ? props.beans.filter(bean => bean.isBOTD)[0] : undefined;
    return (<>
    {beanOfTheDay &&
        <Box maxWidth={0} sx={{marginLeft: "auto", marginRight: "auto", mb: 2, boxShadow: 2, "&:hover" : {boxShadow: 10}}} key={beanOfTheDay._id}>
            <BeanCardComponent bean={beanOfTheDay} showDetailed={false}/>
        </Box>
}
        </>
    )
}

export default BeanOfTheDayComponent