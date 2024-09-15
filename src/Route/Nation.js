import { useEffect, useState } from "react"
import SearchCard from "../Card/SearchCard"
import axios from "axios";
import CategoryCard from "../Card/TopHeadlineCard";
import { useLocation } from "react-router-dom";

const Nation = () => {

    const [data, setData] = useState([]);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const country = queryParams.get("country");
    const language = queryParams.get("language");
    const [loading,setLoading] = useState(false);
  
    console.log(country);
    console.log(language);
    useEffect(() => {
        
        const fetchData = async () => {
            try {
                setLoading(false)
                const response = await axios.get("http://localhost:8000/api/category?category=nation")
                const orignelData = response.data.data.articles;
                setData(orignelData) 
            } catch (error) {
                alert(error)
            }finally{
                setLoading(false)
            }
        }

        if (country&&language) {
            fetchData();
        }
    },[country, language])

    return (
        <>
           { loading ? <p>Loading.......</p> :<CategoryCard data={data} />}
        </>
    )
}

export default Nation;