import HotelCard from "./HotelCard";
import { dataArray } from "./utility";
import { useState } from "react";


const Body = () => {

    // let listOfHotel = dataArray;
    let [listOfHotel, setListOfHotel] = useState(dataArray);

    return (
        <div className="body">

            <div className="search">
                <div>
                    <button onClick={() => {
                        console.log('clicked top rated', listOfHotel);
                        const filteredList = dataArray.filter((res) => res.data.avgRating > 4);
                        setListOfHotel(filteredList);
                    }} >Top Rated Hotel</button>
                    <button onClick={() => {
                        console.log('clicked low rated', listOfHotel);
                        const filteredList = dataArray.filter((res) => res.data.avgRating < 4);
                        setListOfHotel(filteredList);
                    }} >Low Rated Hotel</button>
                    <button onClick={() => {
                        console.log('clicked reset', listOfHotel);
                        setListOfHotel(dataArray);
                    }} >clear</button>
                </div>
            </div>
            <div className="hotel-container">
                {/* // hotel card // because it should be reusable             */}
                {/* for looping in jsx use map function */}
                {listOfHotel.map(hotel =>
                    <HotelCard key={hotel.data.id} resData={hotel} />
                )}
                {/* <HotelCard resData={dataArray[0]} /> */}
                {/* <HotelCard hotelName="KFC" cuisine="Burger, Fast food" /> */}
            </div>
        </div>
    )
}
export default Body;