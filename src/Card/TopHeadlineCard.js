// import { data } from "../Data";
import "./category.scss"

const CategoryCard = ({data}) => {
    return (
        <div className="category-card-container">
            {
                data.map((item, idx) => {
                    return (
                        <div className="category-card" key={idx}>
                            <div className="left-part">
                                <img src={item.image} alt="img" />
                                <a href={item.url} target="_blank" >{item.title}</a>
                            </div>
                            <div className="right-part">
                                <div style={{display:"flex",alignItems:"center",gap:"20px",flexWrap : "wrap"}}>
                                    <span className="span-color">Source- </span>
                                    <p style={{fontWeight:"700",}}>{item.source.name}</p>
                                </div>
                                <div className="color">
                                    <span className="span-color">Description :-</span>
                                    <p>{item.description}</p>
                                </div>
                                <div className="color">
                                    <span className="span-color">Content :-</span>
                                    <p>{item.content}</p>
                                </div>
                                <div className="color">
                                    <span className="span-color">Date :-</span>
                                    <p>{item.publishedAt}</p>
                                </div>


                                <div className="category-btn">
                                    <a href={item.source.url} target="_blank" rel="noopener noreferrer">
                                        full coverage
                                    </a>
                                </div >

                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default CategoryCard;