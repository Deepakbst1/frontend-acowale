import { useEffect, useState } from "react"
import HeadlineCard from "../Card/HeadlineCard"
import axios from "axios";


const Home = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await axios.get("http://localhost:8000/api/search?q=example");
                const orignelData = response.data.data.articles;
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

