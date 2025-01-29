import BeanComponent from "./BeanComponent";
import { Bean } from "./bean";

function BeanOfTheDayComponent(props: {beans: Bean[]}) {
    const beanOfTheDay = props.beans.filter(bean => bean.isBOTD)[0]
    return (beanOfTheDay && <BeanComponent bean={beanOfTheDay}/>)
}

export default BeanOfTheDayComponent