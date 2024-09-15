import { useState } from "react";
// import { data } from "../Data";
import "./hedline.scss"

const HeadlineCard = ({data}) => {
    return (
        <div className="headline-container">
            {
                data.map((item, idx) => {
                    return (
                        <div className="headline-card" key={idx}>
                            <div className="headline">
                                <p>{item.source.name}</p>
                                <p>{item.description}</p>
                                <div className="headline-link">
                                    <a href={item.source.url} target="_blank" rel="noopener noreferrer">
                                        {item.title}
                                    </a>
                                    <div class="go-corner" href={item.source.url}>
                                    <div class="go-arrow">
                                    </div>
                                    </div>
                                    </div>
                            </div>
                            <img src={item.image} alt="image" />
                        </div>
                    )
                })
            }

        </div>
    )
}

export default HeadlineCard;