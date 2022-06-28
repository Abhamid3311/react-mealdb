import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import Meal from './Meal';


const Resturants = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMeals(data.meals);
                console.log(data.meals);
            });
    }, [searchText]);


    const searchTextField = e => {
        setSearchText(e.target.value);
    };
    return (
        <div>
            <h2 className='text-success my-3'>Food Ninja</h2>
            <input placeholder='search your food' onChange={searchTextField} type="text" />

            <Row className=''>
                {
                    meals.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}
                    ></Meal>)
                }
            </Row>
        </div>
    );
};

export default Resturants;