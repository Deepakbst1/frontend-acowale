import { useEffect, useState } from "react"
import axios from "axios";
import CategoryCard from "../Card/TopHeadlineCard";
import { useLocation } from "react-router-dom";
import { API_KEY } from "./api";

const World = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const country = queryParams.get("country");
    const language = queryParams.get("language");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://gnews.io/api/v4/top-headlines?category=world&apikey=${API_KEY}&country=${country}&lang=${language}`);
                const orignelData = response.data.articles;
                setData(orignelData);
            } catch (error) {
                alert(`${error}`)
            }finally{
                setLoading(false)
            }
        }
        if(country&&language){
            fetchData()
        }
    }, [country, language])

    return (
        <>
            {
                loading ? <p>loading......</p> : <CategoryCard data={data} />
            }
        </>
    )
}

export default World;