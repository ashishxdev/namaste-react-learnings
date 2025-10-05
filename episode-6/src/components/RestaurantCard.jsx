import { CDN_URL } from "../utils/constant"; // how to import named exports

const RestaurantCard = (props) => {
    const { resData } = props;

    const {name,cuisines,avgRating,costForTwo,} = resData?.info; // Optional Chaining
    const {deliveryTime} = resData?.info.sla; // Optional Chaining

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" alt="res-logo" src={CDN_URL + resData.info.cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} Minutes</h4>
        </div>
    )
}

export default RestaurantCard;