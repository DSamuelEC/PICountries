import { useDispatch, useSelector } from "react-redux";

import { filterActivities, setPage } from '../../redux/actions.js'

const FilterByActivities = () => {
    const { activities } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handlerActivities = (event) => {
        dispatch(filterActivities(event.target.value))
        dispatch(setPage(0))
    };

    return (
        <div>
            <select onChange={handlerActivities}>
                {
                    activities.length && activities.map((activity) => {
                        return (
                            <option key={activity.id} value={activity.name}>{activity.name}</option>
                        )
                    })
                }
            </select>
        </div>
    )
};

export default FilterByActivities;