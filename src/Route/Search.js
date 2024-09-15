import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchCard from "../Card/SearchCard";
import axios from "axios";
import { API_KEY } from "./api";

const Search = () => {
    const location = useLocation(); // Get the current location object
    const q = new URLSearchParams(location.search).get("query");
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                // const response = await axios.get(`http://localhost:8000/api/search?q=${q}`);
                const response = await axios.get(`https://gnews.io/api/v4/search?q=${q}&apikey=${API_KEY}`);

                // console.log(response.data.articles);
                const orignelData = response.data.articles;
                setData(orignelData);    
            } catch (error) {
                alert(error);
            }finally{
                setLoading(false);
            }
        }
        if (q) {
           fetchData();
        }
    },[q])

    return (
        <div>
            {
                loading ? <p>Loading.....</p>:<SearchCard data={data}/>
            }
        </div>
    )
}

export default Search;