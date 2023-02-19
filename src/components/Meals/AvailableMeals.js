import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItem from './MealItem/MealIteam'

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Gibson Les Paul Standard 2019',
    description: 'Sunburst',
    price: 2199.00,
  },
  {
    id: 'm2',
    name: 'Fender Stratocastor US 2022',
    description: 'Black',
    price: 1799.00,
  },
  {
    id: 'm3',
    name: 'Musicman Stingray Bass 5 String',
    description: 'Metallic blue',
    price: 1899.00,
  },
  {
    id: 'm4',
    name: 'Rickenbacker 360',
    description: 'Green',
    price: 3400.00,
  },
]

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ))

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}

export default AvailableMeals
