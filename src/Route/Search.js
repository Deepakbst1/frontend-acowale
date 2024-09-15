import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchCard from "../Card/SearchCard";
import axios from "axios";

const Search = () => {
    const location = useLocation(); // Get the current location object
    const q = new URLSearchParams(location.search).get("query");
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:8000/api/search?q=${q}`);
                console.log(response.data.data.articles);
                const orignelData = response.data.data.articles;
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