import { useEffect, useState } from "react"
import SearchCard from "../Card/SearchCard"
import axios from "axios";
import CategoryCard from "../Card/TopHeadlineCard";
import { useLocation } from "react-router-dom";
import { API_KEY } from "./api";

const Science = () => {
    const [data, setData] = useState([]);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const country = queryParams.get("country");
    const language = queryParams.get("language");
    const [loading,setLoading] = useState(false)
  
    console.log(country);
    console.log(language);

    useEffect(() => {
        const data = async () => {
            try {
                setLoading(true)
                // const response = await axios.get(`http://localhost:8000/api/category?category=science&country=${country}&lang=${language}`);
                const response = await axios.get(`https://gnews.io/api/v4/top-headlines?category=science&apikey=${API_KEY}&country=${country}&lang=${language}`);
                const orignelData = response.data.articles;
                setData(orignelData)
            } catch (error) {
                alert(`${error}`)
            } finally {
                setLoading(false)
            }
        }
        data()
    },[])
    return (
        <>
            { loading ? <p>Loading.......</p> :<CategoryCard data={data} />}
        </>
    )
}

export default Science;