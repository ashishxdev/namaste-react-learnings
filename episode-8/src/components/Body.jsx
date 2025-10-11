import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [listofRestaurants, setlistofRestaurants] = useState([]);
    const [FilteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchtext, setsearchText] = useState("");

    useEffect(()=>{
        fetchData();
    }, []) 

    const fetchData = async() =>{
        const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=21.99740&lng=79.00110&carousel=true&third_party_vendor=1");

        const json = await data.json();

        console.log(json);

        // Optional Chaining
        setlistofRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

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
                            console.log(searchtext)

                            const filteredResto = listofRestaurants.filter((res)=>{
                                return res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                            })

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
                        <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>
                    )) }
                </div>
            </div>
        )
    }

export default Body;