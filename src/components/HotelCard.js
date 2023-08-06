
const HotelCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId } = resData?.data; // ? is optional chaining

    return (
        <div className="hotel-card" style={{ background: "#d3d3d34d" }}>
            <img className="hotel-logo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} />
            <h3>{name}</h3>
            <div className="details-wrapper">
                <h4>{cuisines.join(', ')}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{costForTwo / 100} FOR TWO</h4>
                <h4>{deliveryTime} minutes</h4>
            </div>
        </div>
    )
}

export default HotelCard;