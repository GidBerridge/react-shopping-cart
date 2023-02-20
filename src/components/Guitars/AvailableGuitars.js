import classes from './AvailableGuitars.module.css'
import Card from '../UI/Card'
import GuitarItem from './GuitarItem/GuitarItem'

const DUMMY_GUITARS = [{
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

const AvailableGuitars = () => {
    const guitarsList = DUMMY_GUITARS.map((guitar) => ( <
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