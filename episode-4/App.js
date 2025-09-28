import React from "react"
import ReactDOM from "react-dom/client"

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 *      - RestaurantCard
 *         - Image
 *         - Name of Res, Star Rating, cuisine, delivery time 
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

// Header
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/premium-vector/online-food-app-icon-food-shop-location-logo-also-online-resturent-location-template_608547-155.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

// Body
const RestaurantCard = (props) => {
    const { resData } = props;

    const {name,cuisines,avgRating,costForTwo,} = resData?.info; // Optional Chaining
    const {deliveryTime} = resData?.info.sla; // Optional Chaining

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} Minutes</h4>
        </div>
    )
}

const resList = [
    {
    info: {
        id: "151656",
        name: "Dev International",
        cloudinaryImageId: "enj3srsnhbltbom2ovvh",
        locality: "khajri road",
        areaName: "Mohan Nagar",
        costForTwo: "₹100 for two",
        cuisines: [
            "Chinese",
            "Fast Food",
            "Beverages"
        ],
        avgRating: 4.3,
        parentId: "71556",
        avgRatingString: "4.3",
        totalRatingsString: "582",
        sla: {
            deliveryTime: 54,
            lastMileTravel: 13.6,
            serviceability: "SERVICEABLE",
            slaString: "50-60 mins",
            lastMileTravelString: "13.6 km",
            iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
            nextCloseTime: "2025-09-28 22:30:00",
            opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
            entityBadges: {
                imageBased: {},
                textBased: {},
                textExtendedBadges: {}
            }
        },
        aggregatedDiscountInfoV3: {
            header: "₹100 OFF",
            subHeader: "ABOVE ₹299",
            discountTag: "FLAT DEAL"
        },
        differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
                lottie: {},
                video: {}
            }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
            aggregatedRating: {
                rating: "--"
            }
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
        context: "seo-data-e4ca5a44-43a0-4640-ab77-893163727882"
    },
    cta: {
        link: "https://www.swiggy.com/city/chhindwara/dev-international-khajri-road-mohan-nagar-rest151656",
        type: "WEBLINK"
    }
},
{
    info: {
        id: "234875",
        name: "Adil Hotel",
        cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
        locality: "Rautha Wada",
        areaName: "Chhindwara Locality",
        costForTwo: "₹150 for two",
        cuisines: [
            "Biryani",
            "Tandoor"
        ],
        avgRating: 4.4,
        parentId: "27123",
        avgRatingString: "4.4",
        totalRatingsString: "1.4K+",
        sla: {
            deliveryTime: 50,
            lastMileTravel: 12.6,
            serviceability: "SERVICEABLE",
            slaString: "50-60 mins",
            lastMileTravelString: "12.6 km",
            iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
            nextCloseTime: "2025-09-29 00:00:00",
            opened: true
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
            entityBadges: {
                imageBased: {},
                textBased: {},
                textExtendedBadges: {}
            }
        },
        differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
                lottie: {},
                video: {}
            }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
            aggregatedRating: {
                rating: "--"
            }
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
        context: "seo-data-e4ca5a44-43a0-4640-ab77-893163727882"
    },
    cta: {
        link: "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
        type: "WEBLINK"
    }
},
{
    info: {
        id: "151518",
        name: "Bakery World",
        cloudinaryImageId: "mt2aggiscfl3yviatwng",
        locality: "Parasia Road",
        areaName: "Parasia Road",
        costForTwo: "₹250 for two",
        cuisines: [
            "Bakery",
            "Ice Cream",
            "Snacks",
            "Beverages"
        ],
        avgRating: 4.3,
        veg: true,
        parentId: "40363",
        avgRatingString: "4.3",
        totalRatingsString: "293",
        sla: {
            deliveryTime: 48,
            lastMileTravel: 14.1,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "14.1 km",
            iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
            nextCloseTime: "2025-09-28 22:30:00",
            opened: true
        },
        badges: {
            imageBadges: [
                {
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                    description: "pureveg"
                }
            ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
            entityBadges: {
                imageBased: {
                    badgeObject: [
                        {
                            attributes: {
                                description: "pureveg",
                                imageId: "v1695133679/badges/Pure_Veg111.png"
                            }
                        }
                    ]
                },
                textBased: {},
                textExtendedBadges: {}
            }
        },
        aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99"
        },
        differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
                lottie: {},
                video: {}
            }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
            aggregatedRating: {
                rating: "--"
            }
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
        context: "seo-data-e4ca5a44-43a0-4640-ab77-893163727882"
    },
    cta: {
        link: "https://www.swiggy.com/city/chhindwara/bakery-world-parasia-road-rest151518",
        type: "WEBLINK"
    }
},
{
    info: {
        id: "625927",
        name: "Kathi Junction",
        cloudinaryImageId: "nigqvxgzvyxtfjuqasgg",
        locality: "Bunglow Madhuvan Colony",
        areaName: "Prasia Road",
        costForTwo: "₹200 for two",
        cuisines: [
            "rolls",
            "Burgers",
            "Pizzas",
            "Fast Food"
        ],
        avgRating: 4.2,
        parentId: "1935",
        avgRatingString: "4.2",
        totalRatingsString: "404",
        sla: {
            deliveryTime: 50,
            lastMileTravel: 13.2,
            serviceability: "SERVICEABLE",
            slaString: "50-60 mins",
            lastMileTravelString: "13.2 km",
            iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
            nextCloseTime: "2025-09-28 23:15:00",
            opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
            entityBadges: {
                imageBased: {},
                textBased: {},
                textExtendedBadges: {}
            }
        },
        aggregatedDiscountInfoV3: {
            header: "₹100 OFF",
            subHeader: "ABOVE ₹399",
            discountTag: "FLAT DEAL"
        },
        differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
                lottie: {},
                video: {}
            }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
            aggregatedRating: {
                rating: "--"
            }
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
        context: "seo-data-e4ca5a44-43a0-4640-ab77-893163727882"
    },
    cta: {
        link: "https://www.swiggy.com/city/chhindwara/kathi-junction-bunglow-madhuvan-colony-prasia-road-rest625927",
        type: "WEBLINK"
    }
},
{
    info: {
        id: "150591",
        name: "Satkar Restaurant",
        cloudinaryImageId: "rvxp5xbniat84r6efku2",
        locality: "Sinchai Colony",
        areaName: "Satkar Chowk",
        costForTwo: "₹250 for two",
        cuisines: [
            "South Indian",
            "Indian",
            "Salads",
            "Desserts"
        ],
        avgRating: 4.4,
        veg: true,
        parentId: "21553",
        avgRatingString: "4.4",
        totalRatingsString: "3.2K+",
        sla: {
            deliveryTime: 42,
            lastMileTravel: 13.4,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "13.4 km",
            iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
            nextCloseTime: "2025-09-28 22:45:00",
            opened: true
        },
        badges: {
            imageBadges: [
                {
                    imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                    description: "Delivery!"
                },
                {
                    imageId: "Ratnesh_Badges/Rx_Awards_2025/_Milestone%20Restaurants.png",
                    description: "Delivery!"
                },
                {
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                    description: "pureveg"
                }
            ]
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
            entityBadges: {
                imageBased: {
                    badgeObject: [
                        {
                            attributes: {
                                description: "Delivery!",
                                imageId: "Rxawards/_CATEGORY-North%20Indian.png"
                            }
                        },
                        {
                            attributes: {
                                description: "Delivery!",
                                imageId: "Ratnesh_Badges/Rx_Awards_2025/_Milestone%20Restaurants.png"
                            }
                        },
                        {
                            attributes: {
                                description: "pureveg",
                                imageId: "v1695133679/badges/Pure_Veg111.png"
                            }
                        }
                    ]
                },
                textBased: {},
                textExtendedBadges: {}
            }
        },
        differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
                lottie: {},
                video: {}
            }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
            aggregatedRating: {
                rating: "--"
            }
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
        context: "seo-data-e4ca5a44-43a0-4640-ab77-893163727882"
    },
    cta: {
        link: "https://www.swiggy.com/city/chhindwara/satkar-restaurant-sinchai-colony-satkar-chowk-rest150591",
        type: "WEBLINK"
    }
}]

// not using keys (not acceptable) <<<<< index as key <<<<<< unique id (best practice)

const Body = () => {
        return (
            <div className="body">
                <div className="search">Search</div>
                <div className="res-container">
                    {resList.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    )) }
                </div>
            </div>
        )
    }

const AppLayout = () => {
        return (
            <div className="app">
                <Header />
                <Body />
            </div>
        )
    }

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)