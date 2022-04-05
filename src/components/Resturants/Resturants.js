import React, { useEffect, useState } from 'react';

const Resturants = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, [searchText]);


    const searchTextField = e => {
        setSearchText(e.target.value);
    };
    return (
        <div>
            <h2>Find Food What You Want</h2>
            <input onChange={searchTextField} type="text" />
            <h3>Result Found: {meals.length}</h3>
        </div>
    );
};

export default Resturants;