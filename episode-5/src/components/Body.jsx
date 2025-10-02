import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { use, useState } from "react"; // named import

const Body = () => {
    // Local State Variable - Super powerful variable
    // const [listofRestaurants, setlistofRestaurants] = useState([
    // {
    //     info: {
    //         id: "1003414",
    //         name: "Pizza Hut",
    //         cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/bd7954b5-a431-4726-b2da-4670ceba472d_1003414.JPG",
    //         locality: "Chhindwara",
    //         areaName: "Chhindwara City",
    //         costForTwo: "₹350 for two",
    //         cuisines: [
    //             "Pizzas"
    //         ],
    //         avgRating: 4.3,
    //         parentId: "721",
    //         avgRatingString: "4.3",
    //         totalRatingsString: "186",
    //         sla: {
    //             deliveryTime: 55,
    //             lastMileTravel: 14.1,
    //             serviceability: "SERVICEABLE",
    //             slaString: "55-65 mins",
    //             lastMileTravelString: "14.1 km",
    //             iconType: "ICON_TYPE_EMPTY"
    //         }
    //     }
    // },
    // {
    //     info: {
    //         id: "1003417",
    //         name: "Burger King",
    //         cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/bd7954b5-a431-4726-b2da-4670ceba472d_1003414.JPG",
    //         locality: "Chhindwara",
    //         areaName: "Chhindwara City",
    //         costForTwo: "₹350 for two",
    //         cuisines: [
    //             "Pizzas"
    //         ],
    //         avgRating: 3.6,
    //         parentId: "721",
    //         avgRatingString: "4.3",
    //         totalRatingsString: "186",
    //         sla: {
    //             deliveryTime: 55,
    //             lastMileTravel: 14.1,
    //             serviceability: "SERVICEABLE",
    //             slaString: "55-65 mins",
    //             lastMileTravelString: "14.1 km",
    //             iconType: "ICON_TYPE_EMPTY"
    //         },
    //         availability: {
    //             nextCloseTime: "2025-10-03 00:00:00",
    //             opened: true
    //         },
    //         badges: {},
    //         isOpen: true,
    //         type: "F",
    //         badgesV2: {
    //             entityBadges: {
    //                 imageBased: {},
    //                 textBased: {},
    //                 textExtendedBadges: {}
    //             }
    //         },
    //         aggregatedDiscountInfoV3: {
    //             header: "ITEMS",
    //             subHeader: "AT ₹98"
    //         },
    //         orderabilityCommunication: {
    //             title: {},
    //             subTitle: {},
    //             message: {},
    //             customIcon: {}
    //         },
    //         differentiatedUi: {
    //             displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //             differentiatedUiMediaDetails: {
    //                 mediaType: "ADS_MEDIA_ENUM_IMAGE",
    //                 lottie: {},
    //                 video: {}
    //             }
    //         },
    //         reviewsSummary: {},
    //         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //         restaurantOfferPresentationInfo: {},
    //         externalRatings: {
    //             aggregatedRating: {
    //                 rating: "--"
    //             }
    //         },
    //         ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    //     },
    //     analytics: {
    //         context: "seo-data-be84a39b-0073-4bc6-860c-6d1a07cdfc6a"
    //     },
    //     cta: {
    //         link: "https://www.swiggy.com/city/chhindwara/pizza-hut-chhindwara-city-rest1003414",
    //         text: "RESTAURANT_MENU",
    //         type: "WEBLINK"
    //     },
    //     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    // },
    // {
    //     info: {
    //         id: "150632",
    //         name: "Raimens Cafe 79",
    //         cloudinaryImageId: "eohdm5sdnq6e2u46xeux",
    //         locality: "Teacher's Colony",
    //         areaName: "VIP Road",
    //         costForTwo: "₹250 for two",
    //         cuisines: [
    //             "Bakery",
    //             "Pizzas",
    //             "Snacks",
    //             "Beverages"
    //         ],
    //         avgRating: 4.9,
    //         veg: true,
    //         parentId: "164782",
    //         avgRatingString: "4.4",
    //         totalRatingsString: "4.7K+",
    //         sla: {
    //             deliveryTime: 52,
    //             lastMileTravel: 14.4,
    //             serviceability: "SERVICEABLE",
    //             slaString: "50-60 mins",
    //             lastMileTravelString: "14.4 km",
    //             iconType: "ICON_TYPE_EMPTY"
    //         },
    //         availability: {
    //             nextCloseTime: "2025-10-02 22:30:00",
    //             opened: true
    //         },
    //         badges: {
    //             imageBadges: [
    //                 {
    //                     imageId: "Rxawards/_CATEGORY-Desserts.png",
    //                     description: "Delivery!"
    //                 },
    //                 {
    //                     imageId: "Ratnesh_Badges/Rx_Awards_2025/_Legendary%20Restaurants.png",
    //                     description: "Delivery!"
    //                 },
    //                 {
    //                     imageId: "v1695133679/badges/Pure_Veg111.png",
    //                     description: "pureveg"
    //                 }
    //             ]
    //         },
    //         isOpen: true,
    //         type: "F",
    //         badgesV2: {
    //             entityBadges: {
    //                 imageBased: {
    //                     badgeObject: [
    //                         {
    //                             attributes: {
    //                                 description: "Delivery!",
    //                                 imageId: "Rxawards/_CATEGORY-Desserts.png"
    //                             }
    //                         },
    //                         {
    //                             attributes: {
    //                                 description: "Delivery!",
    //                                 imageId: "Ratnesh_Badges/Rx_Awards_2025/_Legendary%20Restaurants.png"
    //                             }
    //                         },
    //                         {
    //                             attributes: {
    //                                 description: "pureveg",
    //                                 imageId: "v1695133679/badges/Pure_Veg111.png"
    //                             }
    //                         }
    //                     ]
    //                 },
    //                 textBased: {},
    //                 textExtendedBadges: {}
    //             }
    //         },
    //         aggregatedDiscountInfoV3: {
    //             header: "ITEMS",
    //             subHeader: "AT ₹99"
    //         },
    //         orderabilityCommunication: {
    //             title: {},
    //             subTitle: {},
    //             message: {},
    //             customIcon: {}
    //         },
    //         differentiatedUi: {
    //             displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //             differentiatedUiMediaDetails: {
    //                 mediaType: "ADS_MEDIA_ENUM_IMAGE",
    //                 lottie: {},
    //                 video: {}
    //             }
    //         },
    //         reviewsSummary: {},
    //         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //         restaurantOfferPresentationInfo: {},
    //         externalRatings: {
    //             aggregatedRating: {
    //                 rating: "--"
    //             }
    //         },
    //         ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    //     },
    //     analytics: {
    //         context: "seo-data-be84a39b-0073-4bc6-860c-6d1a07cdfc6a"
    //     },
    //     cta: {
    //         link: "https://www.swiggy.com/city/chhindwara/raimens-cafe-79-teachers-colony-vip-road-rest150602",
    //         text: "RESTAURANT_MENU",
    //         type: "WEBLINK"
    //     },
    //     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    // },
    // {
    //     info: {
    //         id: "774546",
    //         name: "Shree Naivedyam",
    //         cloudinaryImageId: "2274f59cb8efcfab1f446b195bcbda3b",
    //         locality: "Khajri Road",
    //         areaName: "Chhindwara City",
    //         costForTwo: "₹300 for two",
    //         cuisines: [
    //             "Chinese",
    //             "South Indian",
    //             "Pizzas",
    //             "Beverages"
    //         ],
    //         avgRating: 4.2,
    //         veg: true,
    //         parentId: "428968",
    //         avgRatingString: "4.2",
    //         totalRatingsString: "128",
    //         sla: {
    //             deliveryTime: 57,
    //             lastMileTravel: 13.6,
    //             serviceability: "SERVICEABLE",
    //             slaString: "55-65 mins",
    //             lastMileTravelString: "13.6 km",
    //             iconType: "ICON_TYPE_EMPTY"
    //         },
    //         availability: {
    //             nextCloseTime: "2025-10-02 23:00:00",
    //             opened: true
    //         },
    //         badges: {
    //             imageBadges: [
    //                 {
    //                     imageId: "v1695133679/badges/Pure_Veg111.png",
    //                     description: "pureveg"
    //                 }
    //             ]
    //         },
    //         isOpen: true,
    //         type: "F",
    //         badgesV2: {
    //             entityBadges: {
    //                 imageBased: {
    //                     badgeObject: [
    //                         {
    //                             attributes: {
    //                                 description: "pureveg",
    //                                 imageId: "v1695133679/badges/Pure_Veg111.png"
    //                             }
    //                         }
    //                     ]
    //                 },
    //                 textBased: {},
    //                 textExtendedBadges: {}
    //             }
    //         },
    //         aggregatedDiscountInfoV3: {
    //             header: "₹40 OFF",
    //             subHeader: "ABOVE ₹399",
    //             discountTag: "FLAT DEAL"
    //         },
    //         orderabilityCommunication: {
    //             title: {},
    //             subTitle: {},
    //             message: {},
    //             customIcon: {}
    //         },
    //         differentiatedUi: {
    //             displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //             differentiatedUiMediaDetails: {
    //                 mediaType: "ADS_MEDIA_ENUM_IMAGE",
    //                 lottie: {},
    //                 video: {}
    //             }
    //         },
    //         reviewsSummary: {},
    //         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //         restaurantOfferPresentationInfo: {},
    //         externalRatings: {
    //             aggregatedRating: {
    //                 rating: "--"
    //             }
    //         },
    //         ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    //     },
    //     analytics: {
    //         context: "seo-data-be84a39b-0073-4bc6-860c-6d1a07cdfc6a"
    //     },
    //     cta: {
    //         link: "https://www.swiggy.com/city/chhindwara/shree-naivedyam-khajri-road-chhindwara-city-rest774546",
    //         text: "RESTAURANT_MENU",
    //         type: "WEBLINK"
    //     },
    //     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    // },
    // ]); // Here listofRestaurants is a super powerful variable, useState has the default values, setlistofRestaurants is the function which will change listofRestaurants variable value

    const [listofRestaurants, setlistofRestaurants] = useState(resList); // Here listofRestaurants is a super powerful variable, useState has the default values, setlistofRestaurants is the function which will change listofRestaurants variable value
    
    // Normal JS Variable
    // let listofRestaurants = null; we can write it as const [listofRestaurants] = useState(null);
    // let listofRestaurants = [
    // {
    //     info: {
    //         id: "1003414",
    //         name: "Pizza Hut",
    //         cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/bd7954b5-a431-4726-b2da-4670ceba472d_1003414.JPG",
    //         locality: "Chhindwara",
    //         areaName: "Chhindwara City",
    //         costForTwo: "₹350 for two",
    //         cuisines: [
    //             "Pizzas"
    //         ],
    //         avgRating: 4.3,
    //         parentId: "721",
    //         avgRatingString: "4.3",
    //         totalRatingsString: "186",
    //         sla: {
    //             deliveryTime: 55,
    //             lastMileTravel: 14.1,
    //             serviceability: "SERVICEABLE",
    //             slaString: "55-65 mins",
    //             lastMileTravelString: "14.1 km",
    //             iconType: "ICON_TYPE_EMPTY"
    //         }
    //     }
    // },
    // {
    //     info: {
    //         id: "1003417",
    //         name: "Burger King",
    //         cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/bd7954b5-a431-4726-b2da-4670ceba472d_1003414.JPG",
    //         locality: "Chhindwara",
    //         areaName: "Chhindwara City",
    //         costForTwo: "₹350 for two",
    //         cuisines: [
    //             "Pizzas"
    //         ],
    //         avgRating: 3.6,
    //         parentId: "721",
    //         avgRatingString: "4.3",
    //         totalRatingsString: "186",
    //         sla: {
    //             deliveryTime: 55,
    //             lastMileTravel: 14.1,
    //             serviceability: "SERVICEABLE",
    //             slaString: "55-65 mins",
    //             lastMileTravelString: "14.1 km",
    //             iconType: "ICON_TYPE_EMPTY"
    //         },
    //         availability: {
    //             nextCloseTime: "2025-10-03 00:00:00",
    //             opened: true
    //         },
    //         badges: {},
    //         isOpen: true,
    //         type: "F",
    //         badgesV2: {
    //             entityBadges: {
    //                 imageBased: {},
    //                 textBased: {},
    //                 textExtendedBadges: {}
    //             }
    //         },
    //         aggregatedDiscountInfoV3: {
    //             header: "ITEMS",
    //             subHeader: "AT ₹98"
    //         },
    //         orderabilityCommunication: {
    //             title: {},
    //             subTitle: {},
    //             message: {},
    //             customIcon: {}
    //         },
    //         differentiatedUi: {
    //             displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //             differentiatedUiMediaDetails: {
    //                 mediaType: "ADS_MEDIA_ENUM_IMAGE",
    //                 lottie: {},
    //                 video: {}
    //             }
    //         },
    //         reviewsSummary: {},
    //         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //         restaurantOfferPresentationInfo: {},
    //         externalRatings: {
    //             aggregatedRating: {
    //                 rating: "--"
    //             }
    //         },
    //         ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    //     },
    //     analytics: {
    //         context: "seo-data-be84a39b-0073-4bc6-860c-6d1a07cdfc6a"
    //     },
    //     cta: {
    //         link: "https://www.swiggy.com/city/chhindwara/pizza-hut-chhindwara-city-rest1003414",
    //         text: "RESTAURANT_MENU",
    //         type: "WEBLINK"
    //     },
    //     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    // },
    // {
    //     info: {
    //         id: "150632",
    //         name: "Raimens Cafe 79",
    //         cloudinaryImageId: "eohdm5sdnq6e2u46xeux",
    //         locality: "Teacher's Colony",
    //         areaName: "VIP Road",
    //         costForTwo: "₹250 for two",
    //         cuisines: [
    //             "Bakery",
    //             "Pizzas",
    //             "Snacks",
    //             "Beverages"
    //         ],
    //         avgRating: 4.9,
    //         veg: true,
    //         parentId: "164782",
    //         avgRatingString: "4.4",
    //         totalRatingsString: "4.7K+",
    //         sla: {
    //             deliveryTime: 52,
    //             lastMileTravel: 14.4,
    //             serviceability: "SERVICEABLE",
    //             slaString: "50-60 mins",
    //             lastMileTravelString: "14.4 km",
    //             iconType: "ICON_TYPE_EMPTY"
    //         },
    //         availability: {
    //             nextCloseTime: "2025-10-02 22:30:00",
    //             opened: true
    //         },
    //         badges: {
    //             imageBadges: [
    //                 {
    //                     imageId: "Rxawards/_CATEGORY-Desserts.png",
    //                     description: "Delivery!"
    //                 },
    //                 {
    //                     imageId: "Ratnesh_Badges/Rx_Awards_2025/_Legendary%20Restaurants.png",
    //                     description: "Delivery!"
    //                 },
    //                 {
    //                     imageId: "v1695133679/badges/Pure_Veg111.png",
    //                     description: "pureveg"
    //                 }
    //             ]
    //         },
    //         isOpen: true,
    //         type: "F",
    //         badgesV2: {
    //             entityBadges: {
    //                 imageBased: {
    //                     badgeObject: [
    //                         {
    //                             attributes: {
    //                                 description: "Delivery!",
    //                                 imageId: "Rxawards/_CATEGORY-Desserts.png"
    //                             }
    //                         },
    //                         {
    //                             attributes: {
    //                                 description: "Delivery!",
    //                                 imageId: "Ratnesh_Badges/Rx_Awards_2025/_Legendary%20Restaurants.png"
    //                             }
    //                         },
    //                         {
    //                             attributes: {
    //                                 description: "pureveg",
    //                                 imageId: "v1695133679/badges/Pure_Veg111.png"
    //                             }
    //                         }
    //                     ]
    //                 },
    //                 textBased: {},
    //                 textExtendedBadges: {}
    //             }
    //         },
    //         aggregatedDiscountInfoV3: {
    //             header: "ITEMS",
    //             subHeader: "AT ₹99"
    //         },
    //         orderabilityCommunication: {
    //             title: {},
    //             subTitle: {},
    //             message: {},
    //             customIcon: {}
    //         },
    //         differentiatedUi: {
    //             displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //             differentiatedUiMediaDetails: {
    //                 mediaType: "ADS_MEDIA_ENUM_IMAGE",
    //                 lottie: {},
    //                 video: {}
    //             }
    //         },
    //         reviewsSummary: {},
    //         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //         restaurantOfferPresentationInfo: {},
    //         externalRatings: {
    //             aggregatedRating: {
    //                 rating: "--"
    //             }
    //         },
    //         ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    //     },
    //     analytics: {
    //         context: "seo-data-be84a39b-0073-4bc6-860c-6d1a07cdfc6a"
    //     },
    //     cta: {
    //         link: "https://www.swiggy.com/city/chhindwara/raimens-cafe-79-teachers-colony-vip-road-rest150602",
    //         text: "RESTAURANT_MENU",
    //         type: "WEBLINK"
    //     },
    //     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    // },
    // {
    //     info: {
    //         id: "774546",
    //         name: "Shree Naivedyam",
    //         cloudinaryImageId: "2274f59cb8efcfab1f446b195bcbda3b",
    //         locality: "Khajri Road",
    //         areaName: "Chhindwara City",
    //         costForTwo: "₹300 for two",
    //         cuisines: [
    //             "Chinese",
    //             "South Indian",
    //             "Pizzas",
    //             "Beverages"
    //         ],
    //         avgRating: 4.2,
    //         veg: true,
    //         parentId: "428968",
    //         avgRatingString: "4.2",
    //         totalRatingsString: "128",
    //         sla: {
    //             deliveryTime: 57,
    //             lastMileTravel: 13.6,
    //             serviceability: "SERVICEABLE",
    //             slaString: "55-65 mins",
    //             lastMileTravelString: "13.6 km",
    //             iconType: "ICON_TYPE_EMPTY"
    //         },
    //         availability: {
    //             nextCloseTime: "2025-10-02 23:00:00",
    //             opened: true
    //         },
    //         badges: {
    //             imageBadges: [
    //                 {
    //                     imageId: "v1695133679/badges/Pure_Veg111.png",
    //                     description: "pureveg"
    //                 }
    //             ]
    //         },
    //         isOpen: true,
    //         type: "F",
    //         badgesV2: {
    //             entityBadges: {
    //                 imageBased: {
    //                     badgeObject: [
    //                         {
    //                             attributes: {
    //                                 description: "pureveg",
    //                                 imageId: "v1695133679/badges/Pure_Veg111.png"
    //                             }
    //                         }
    //                     ]
    //                 },
    //                 textBased: {},
    //                 textExtendedBadges: {}
    //             }
    //         },
    //         aggregatedDiscountInfoV3: {
    //             header: "₹40 OFF",
    //             subHeader: "ABOVE ₹399",
    //             discountTag: "FLAT DEAL"
    //         },
    //         orderabilityCommunication: {
    //             title: {},
    //             subTitle: {},
    //             message: {},
    //             customIcon: {}
    //         },
    //         differentiatedUi: {
    //             displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //             differentiatedUiMediaDetails: {
    //                 mediaType: "ADS_MEDIA_ENUM_IMAGE",
    //                 lottie: {},
    //                 video: {}
    //             }
    //         },
    //         reviewsSummary: {},
    //         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //         restaurantOfferPresentationInfo: {},
    //         externalRatings: {
    //             aggregatedRating: {
    //                 rating: "--"
    //             }
    //         },
    //         ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    //     },
    //     analytics: {
    //         context: "seo-data-be84a39b-0073-4bc6-860c-6d1a07cdfc6a"
    //     },
    //     cta: {
    //         link: "https://www.swiggy.com/city/chhindwara/shree-naivedyam-khajri-road-chhindwara-city-rest774546",
    //         text: "RESTAURANT_MENU",
    //         type: "WEBLINK"
    //     },
    //     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    // },
    // ]
        return (
            <div className="body">
                <div className="filter">
                    <button 
                    className="filter-btn"
                    onClick= {() => {
                        // console.log("Button Clicked");
                        // Filter logic here
                        const filteredLists = listofRestaurants.filter(
                            (res) => res.info.avgRating > 4.2
                        );
                        setlistofRestaurants(filteredLists)
                        // listofRestaurants = listofRestaurants.filter(
                        //     (res) => res.info.avgRating > 4.5
                        // )
                        // console.log(listofRestaurants)
                    }}
                    >
                    Top Rated Restaurants
                    </button>
                </div>
                <div className="res-container">
                    {listofRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    )) }
                    {/* {resList.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    )) } */}
                </div>
            </div>
        )
    }

export default Body;