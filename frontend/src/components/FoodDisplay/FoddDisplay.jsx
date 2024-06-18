import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoredContext } from '../../context/StoredContext'
import FoodItem from '../FoodItem/FoodItem'

const FoddDisplay = ({category}) => {

    const {food_list} =useContext(StoredContext)


  return (
    <div className='food_display' id='food_display'>
        <h2>Top dishes near you</h2>
        <div className='food-display-list'>
            {food_list.map((item,index)=>{
                if(category==='All' || category===item.category){
                    return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                }
               
            })}

        </div>
      
    </div>
  )
}

export default FoddDisplay
