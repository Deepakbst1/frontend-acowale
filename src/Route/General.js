import { useEffect, useState } from "react";
import axios from "axios"
import SearchCard from "../Card/SearchCard";
import CategoryCard from "../Card/TopHeadlineCard";
import { useLocation } from "react-router-dom";
import { API_KEY } from "./api";

const General = () => {
    const [data, setData] = useState([]);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const country = queryParams.get("country");
    const language = queryParams.get("language");
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                // const fetchData = await axios.get(`http://localhost:8000/api/category?category=general&country=${country}&lang=${language}`);
                const fetchData = await axios.get(`https://gnews.io/api/v4/top-headlines?category=general&apikey=${API_KEY}&country=${country}&lang=${language}`);
                const orignelData = fetchData.data.articles;
                setData(orignelData)
            } catch (error) {
                alert(`${error}`)
            } finally {
                setLoading(false)
            }
        }
        if (country&&language) {
            fetchData()
        }
    },[country,language])

    return (
        <>
        {
             loading ? <p>Loading.......</p> :<CategoryCard data={data} />
        }
        </>)
}

export default General;