import React from 'react';
import Potato from './Potato';

function Food1({ fav }){
  return (
    <h1>
    I like {fav}
    </h1>
  );
}
function Food({ name, picture }){
  return (
    <div>
      <h2>
        I like {name}
      </h2>
      <img src={picture} alt={name}/>
    </div>
  );
}

const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image:
      "https://cdn.crowdpic.net/detail-thumb/thumb_d_CDC14868821FF3F20C77BC8BC15E6355.jpg"
  },
  {
    id:2,
    name: "Samgyeopsal",
    image:
      "https://pds.joins.com/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg"
  },
  {
    id:3,
    name: "Bibimbap",
    image:
      "https://lh3.googleusercontent.com/proxy/0HF53xFhi5IsuI-hfcv_LKJgISuJpk-ouf5Ilj7cYa0PkHJ6CfU8_WqAFbUIZT1FkEbWG_KDDJxV3qgcnhXvQ-6yGc5m6wuvTW0ERPWPPGM6rPFWa6LVAy1CYQD61hY"
  },
  {
    id:4,
    name: "Doncasu",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2019/01/12/b9343d314206275c1b6d0d0c4fcc2ce71.jpg"
  },
  {
    id:5,
    name: "Kimbap",
    image:
      "https://craftlog.com/m/i/5934748=s1280=h960"
  }

]

function renderFood(dish){
  console.log(dish);
  return <Food name={dish.name} picture={dish.image} />
}

function App() {
  return (
    <div>
      <Potato />
      <Food1 fav="kimchi"/>
      <Food1 fav="ramen"/>
      <Food1 fav="samgiopsal"/>
      <Food1 fav="chukumi"/>
      <br></br>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image}/>
      ))}
      <br></br>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
