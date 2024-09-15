import { useEffect, useState } from "react"
import HeadlineCard from "../Card/HeadlineCard"
import axios from "axios";
import { API_KEY } from "./api";


const Home = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                // const response = await axios.get("http://localhost:8000/api/search?q=example");
                const response = await axios.get(`https://gnews.io/api/v4/search?q=example&apikey=${API_KEY}`);
                const orignelData = response.data.articles;
                setData(orignelData) 
            } catch (error) {
                alert(error)
            }finally{
                setLoading(false)
            }
        }
        fetchData();
    }, [])

    return (
        <div>
            {
                loading ? <p>Loading.....</p>:<HeadlineCard data={data}/>
            }
        </div>)
}

export default Home;

