import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';

import Country from '../country/Country';
import { setPage } from '../../redux/actions';
import { helper } from '../../helpers/helpers';

const Countries = () => {
    const { allCountries, page, filterByContinent } = useSelector((state) => state);
    const [nations, setNations] = useState([...allCountries]);
    const dispatch = useDispatch();

    useEffect(()=>{
        const data = helper(allCountries, filterByContinent);
        setNations(data);
    },[allCountries, filterByContinent]);

    const nextPage = () => {
        dispatch(setPage(page + 1));
    };

    const previousPage = () => {
        dispatch(setPage(Math.max(page - 1, 0)));
    };

    const num = 10;
    const start = page * num;
    const end = start + num;
    const totalPages = Math.ceil(nations.length / num);

    return (
        <div>
            {
                nations.slice(start, end).map((count, auxId) => {
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

            <button
                disabled={page === 0}
                onClick={previousPage}
            >
                Previous
            </button>
            <h3>Page: {page + 1}</h3>
            <button
                disabled={page === totalPages - 1}
                onClick={nextPage}
            >
                Next
            </button>

        </div>
    )
};

export default Countries;