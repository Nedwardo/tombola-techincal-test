import { memo, useEffect, useState } from "react";
import { Bean } from "./bean";
import BeanOfTheDayComponent from "./BeanOfTheDay";
import BeanSearchComponent from "./BeanSearch";

const BeansCatalogueComponent = memo(() => {
    const [beans, setBeans] = useState<Bean[]>([]);  
    useEffect(() => {
        const fetchBeans = async () => {
            const response = await fetch("http://localhost:8080");
            const beans = await response.json() as Bean[];
            setBeans(beans)
        }
        fetchBeans()
    }, []);

    return (
        <>
        <BeanOfTheDayComponent beans={beans}/>
        <BeanSearchComponent beans={beans}/>
        </>
    )
})

export default BeansCatalogueComponent