import classes from './AvailableGuitars.module.css'
import Card from '../UI/Card'
import GuitarItem from './GuitarItem/GuitarItem'

const DUMMY_GUITARS = [{
        id: 'm1',
        name: 'Gibson Les Paul',
    description: 'Delux 2019, Sunburst',
        price: 2299.00,
    },
    {
        id: 'm2',
        name: 'Fender Stratocastor US',
        description: 'Standard 2022, Cream',
        price: 1799.00,
    },
    {
        id: 'm3',
        name: 'Fender Jazz Bass',
        description: 'Fretless, Black',
        price: 1899.00,
    },
    {
        id: 'm4',
        name: 'Rickenbacker 360',
        description: 'Semi-Acoustic, Green',
        price: 3400.00,
    },
]

const AvailableGuitars = () => {
    const guitarsList = DUMMY_GUITARS.map((guitar) => ( 
        <
        GuitarItem id = { guitar.id }
        key = { guitar.id }
        name = { guitar.name }
        description = { guitar.description }
        price = { guitar.price }
        />
    ))

    return ( 
        < section className = { classes.guitars } >
            <Card>
                <ul> { guitarsList } </ul>  
            </Card> 
        </section>
        )
}

export default AvailableGuitars