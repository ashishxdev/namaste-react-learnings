import Shimmer from './Shimmer';
import { useParams } from 'react-router';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
  // Earlier
    // const [resinfo, setresinfo] = useState(null);

    const { resId } = useParams();

    // useEffect(()=>{
    //     fetchmenu();
    // },[])
    
    // const fetchmenu = async()=>{
    //     const data = await fetch(MENU_API + resId)
    //     const json = await data.json();

    //     console.log(json)
    //     setresinfo(json.data)
    // }

    // Now
    const resinfo = useRestaurantMenu(resId);
    
    if (resinfo === null) {
        return <Shimmer />;
    }
    const { name, cuisines, costForTwoMessage } = resinfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resinfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card;
    // console.log(itemCards)
    // If we were using GraphQL it reduces this complexity
    
    return (
    <div className='menu'>
      <h1>{name}</h1>
      <p>{cuisines.join(", ")} - Rs.{costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map(item => 
        <li key={item.card.info.id}>
            {item.card.info.name} - Rs. {item.card.info.price/100}
        </li>)}

        {/* <li>{itemCards[0].card.info.name}</li>
        <li>{itemCards[1].card.info.name}</li>
        <li>{itemCards[2].card.info.name}</li> */}

      </ul>
    </div>
  )
}

export default RestaurantMenu;
