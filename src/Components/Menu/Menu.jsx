import React from 'react'
import styles from './Menu.module.css'
import BreakfastImg from '../../Assets/breakfast.jpg'
import Lunching from '../../Assets/lunch.jpg'
import DinnerImg from '../../Assets/dinner.jpg'
import DessetImg from '../../Assets/dessert.jpg'
import{motion} from 'framer-motion'

const breakfast = [
  {
    id: 1,
    name: "English Breakfast",
    description: 'smoked chicken, sausage, tomato, mushrooms, black pudding, baked beans, eggs',
    price: '$12'
  },
  {
    id: 2,
    name: "Avocado Toast",
    description: 'poached egg, avocado, onion, tomatoes, bread',
    price: '$12'
  },
  {
    id: 3,
    name: "Burger",
    description: 'tortilla, egg, cheese, potatoes, beef',
    price: '$12'
  },
]

const lunch = [
  {
    id: 1,
    name: "Caesar Salad",
    description: 'chicken breast, romaine lettuce, tomato, mushrooms',
    price: '$15'
  },
  {
    id: 2,
    name: "spaghetti Carbonara",
    description: 'spaghetti, pancetta, garlic, eggs, pepper',
    price: '$14'
  },
  {
    id: 3,
    name: "Pizza",
    description: 'chorizao, italian salami, tomatoes, mushrooms, olives',
    price: '$14'
  },
];

const dinner = [
  {
    id: 1,
    name: "Spicy Beef",
    description: 'spicy beef, potatoes carrots, cheese sauce, spices',
    price: '$17'
  },
  {
    id: 2,
    name: "spaghetti Bolognese",
    description: 'onion, carrot, celery, minced meat, spaghetti, parmesan',
    price: '$14'
  },
  {
    id: 3,
    name: "Chickpea Curry",
    description: 'onion, chickpea salami, garlic, mushrooms, tomatoes',
    price: '$14'
  },
];

const dessert = [
  {
    id: 1,
    name: "Lemon Cake",
    description: 'flour, sugar, baking powder, lemon',
    price: '$17'
  },
  {
    id: 2,
    name: "Cinnamon Rolls",
    description: 'flour, salt, sugar, cinnamon, yeast, sour cream',
    price: '$14'
  },
  {
    id: 3,
    name: "Vegan Pancakes",
    description: 'flour, sugar, baking powder, soya, milk, blueberries',
    price: '$8'
  },
];


export default function Menu() {
  return <>
    <motion.div className="menu-page" initial={{x: "-100vw"}} animate={{x: 0}} transition={{duration: .25}}>
      <header className='mt-5'>
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h1 className='text-light'>Menu</h1>
        </div>
      </header>

      <div className="breakfast my-5">
        <div className="container">
          <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">Breakfast</h2>
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-6 d-flex justify-content-center">
              <img src={BreakfastImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {breakfast.map((breakfast) =>
                <div key={breakfast.id}>
                  <div class="card border-0">
                    <div class="card-body">
                      <h5 class="card-title text-center fs-3">{breakfast.name}</h5>
                      <p class="card-text text-center fs-5">{breakfast.description}</p>
                      <p class="card-text text-center fs-3 fw-bold text-success">{breakfast.price}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      <div className="lunch bg-dark py-5">
        <div className="container">
          <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">Lunch</h2>
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {lunch.map((lunch) =>
                <div key={lunch.id}>
                  <div class="card border-0 bg-dark text-light">
                    <div class="card-body">
                      <h5 class="card-title text-center fs-3">{lunch.name}</h5>
                      <p class="card-text text-center fs-5">{lunch.description}</p>
                      <p class="card-text text-center fs-3 fw-bold text-success">{lunch.price}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <img src={Lunching} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
            </div>

          </div>

        </div>
      </div>

      <div className="dinner my-5">
        <div className="container">
          <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">Dinner</h2>
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-6 d-flex justify-content-center">
              <img src={DinnerImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {dinner.map((dinner) =>
                <div key={dinner.id}>
                  <div class="card border-0">
                    <div class="card-body">
                      <h5 class="card-title text-center fs-3">{dinner.name}</h5>
                      <p class="card-text text-center fs-5">{dinner.description}</p>
                      <p class="card-text text-center fs-3 fw-bold text-success">{dinner.price}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      <div className="dessert bg-dark py-5">
        <div className="container">
          <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">Dessert</h2>
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {dessert.map((dessert) =>
                <div key={dessert.id}>
                  <div class="card border-0 bg-dark text-light">
                    <div class="card-body">
                      <h5 class="card-title text-center fs-3">{dessert.name}</h5>
                      <p class="card-text text-center fs-5">{dessert.description}</p>
                      <p class="card-text text-center fs-3 fw-bold text-success">{dessert.price}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <img src={DessetImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
            </div>

          </div>

        </div>
      </div>
    </motion.div>
  </>
}
