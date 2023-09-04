import { useSelector } from 'react-redux'
import Country from '../country/Country';

const Countries = () => {
    const allCountries = useSelector(state => state.allCountries);

    return (
        <div>
            {
                allCountries.map((count, auxId) => {
                    return (
                        <Country
                            key={auxId}
                            id={count.id}
                            flag={count.flag}
                            name={count.name}
                            continent={count.continent}
                            activities={count.activities}
                        />
                    )
                })
            }
        </div>
    )
}

export default Countries;