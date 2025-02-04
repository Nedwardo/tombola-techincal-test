import { memo, useEffect, useState } from "react";
import { Bean } from "./Bean";
import BeanOfTheDayComponent from "./BeanOfTheDay";
import BeanListComponent from "./BeanList";
import BeanAppBar from "./BeanAppBar";

const BeansCatalogueComponent = memo(() => {
    const [beans, setBeans] = useState<Bean[]>([]);  
    const [filteredBeans, setFilteredBeans] = useState<Bean[]>([]);
    useEffect(() => {
        const fetchBeans = async () => {
            const response = await fetch("http://localhost:8000");
            const beans = await response.json() as Bean[];
            beans.map(bean => bean.Image = bean.Image + "?w=345")
            setBeans(beans)
            setFilteredBeans(beans)
        }
        fetchBeans()
    }, []);

    return (
        <>
        <BeanAppBar beans={beans} setFilteredBeans={setFilteredBeans}/>
        <BeanOfTheDayComponent beans={beans}/>
        <BeanListComponent beans={filteredBeans}/>
        </>
    )
})

export default BeansCatalogueComponent