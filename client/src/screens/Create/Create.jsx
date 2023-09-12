import { useState } from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import validate from "../../validate/validate.js";
import createHelper from "../../helpers/createHelper.js";

const Create = () => {
    const { allCountries } = useSelector((state) => state);
    const [createActivity, setCreateActivity] = useState({
        name: '',
        difficulty: '',
        season: '',
        countryName: []
    });

    const [errors, setErrors] = useState({});


    const handleInputOnChange = (event) => {
        const { name, value } = event.target
        if (name === 'country') {
            setCreateActivity({
                ...createActivity,
                countryName: [...createActivity.countryName, value]
            })
        } else {
            setCreateActivity({ ...createActivity, [name]: value })
            setErrors(validate({ ...createActivity, [name]: value }))
        }
    };

    const hanldeSubmitCreate = async (event, createActivity) => {
        event.preventDefault();
        createHelper(createActivity);
        setCreateActivity({
            name: '',
            difficulty: '',
            season: '',
            countryName: []
        })
    };

    return (
        <div>
            <form onSubmit={(event) => hanldeSubmitCreate(event, createActivity)}>
                <label htmlFor="name">
                    Name of Activity:{' '}
                </label>
                <input
                    type='text'
                    name='name'
                    value={createActivity.name}
                    onChange={handleInputOnChange}
                />
                {errors.name && <p>{errors.name}</p>}

                <hr />

                <label htmlFor="difficulty">
                    Difficulty:{' '}
                </label>
                <input
                    type='number'
                    name='difficulty'
                    value={createActivity.difficulty}
                    onChange={handleInputOnChange}
                />
                {errors.difficulty && <p>{errors.difficulty}</p>}

                <hr />

                <label htmlFor="season">
                    Season:{' '}
                </label>
                <input
                    type='text'
                    name='season'
                    value={createActivity.season}
                    onChange={handleInputOnChange}
                />
                {errors.season && <p>{errors.season}</p>}

                <hr />

                <label htmlFor='country'>
                    Where can you do this activity? {' '}
                </label>
                <select name='country' onChange={handleInputOnChange}>
                    {allCountries
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((country) => {
                            return (
                                <option key={country.id} value={country.id}>
                                    {country.name}
                                </option>
                            )
                        })}
                </select>
                {!createActivity.countryName.length && (
                    <p>Must input at least one country</p>
                )}
                
                <hr />

                <button
                    type='submit'
                    disabled={
                        Object.keys(errors).length > 0 || !createActivity.countryName.length
                    }
                >
                    Create Activity
                </button>
            </form>
            <button>
                <Link to='/home'>BACK TO HOME</Link>
            </button>
        </div>
    )
};

export default Create;