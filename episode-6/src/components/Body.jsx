import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listofRestaurants, setlistofRestaurants] = useState([]);
    const [FilteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchtext, setsearchText] = useState("");

    // Whenever state variable updates,react triggers a reconciliation cycle(re-renders the component)
    console.log("Body Re-Rendered")

    useEffect(()=>{
        // console.log("useEffect Called")
        fetchData();
    }, []) // first is a callback function second one is dependency array

    const fetchData = async() =>{
        const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=21.99740&lng=79.00110&carousel=true&third_party_vendor=1");

        const json = await data.json();

        console.log(json);

        // Optional Chaining
        setlistofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    // Conditional Rendering - Rendering based on condition is known as Conditional Rendering
    // if(listofRestaurants.length == 0){
    //     return <Shimmer />
    //     // return <h1>Loading...</h1>
    // }

    // console.log("Body rendered")

        return listofRestaurants.length == 0 ? <Shimmer /> : (
            <div className="body">
                <div className="filter">
                    <div className="search">
                        <input type="text" 
                        className="search-box" 
                        value={searchtext}
                        onChange={(e)=>{
                            setsearchText(e.target.value)}}
                        />
                        <button onClick={()=>{
                            // Filter the restaurant cards and update the UI
                            // we need searchtext
                            console.log(searchtext)

                            const filteredResto = listofRestaurants.filter((res)=>{
                                return res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                            })

                            // setlistofRestaurants(filteredResto);
                            setFilteredRestaurants(filteredResto);
                        }}>Search</button>
                    </div>
                    <button 
                    className="filter-btn"
                    onClick= {() => {
                        const filteredLists = listofRestaurants.filter(
                            (res) => res.info.avgRating > 4.3
                        );
                        setlistofRestaurants(filteredLists)
                    }}
                    >
                    Top Rated Restaurants
                    </button>
                </div>
                <div className="res-container">
                    {FilteredRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    )) }
                </div>
            </div>
        )
    }

export default Body;