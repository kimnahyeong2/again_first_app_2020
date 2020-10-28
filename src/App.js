import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }){
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image:
      "https://cdn.crowdpic.net/detail-thumb/thumb_d_CDC14868821FF3F20C77BC8BC15E6355.jpg",
      rating: 5
  },
  {
    id:2,
    name: "Samgyeopsal",
    image:
      "https://pds.joins.com/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg",
      rating: 4.9
  },
  {
    id:3,
    name: "Bibimbap",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhls3790.tistory.com%2F356&psig=AOvVaw0vzW24_hCeDbPZcxp7VEgt&ust=1603985193797000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjHkdTM1-wCFQAAAAAdAAAAABAD",
      rating: 4.8
  },
  {
    id:4,
    name: "Doncasu",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2019/01/12/b9343d314206275c1b6d0d0c4fcc2ce71.jpg",
      rating: 5.5
  },
  {
    id:5,
    name: "Kimbap",
    image:
      "https://craftlog.com/m/i/5934748=s1280=h960",
      rating: 4.7
  }

]

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food 
          key={dish.id}
          name={dish.name} 
          picture={dish.image} 
          rating={dish.rating}
          />
      ))}      
    </div>
  );
}

export default App;
