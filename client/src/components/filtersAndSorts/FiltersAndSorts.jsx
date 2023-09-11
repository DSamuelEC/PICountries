import FilterByActivities from "../filterByActivities/FilterByActivities";
import FilterByContinent from "../filterByContient/FilterByContinent";
import SortByName from "../sortByName/SortByName";
import SortByPopulation from "../sortByPopulation/SortByPopulation";

const FiltersAndSorts = () => {

    return (
        <div>
            <FilterByContinent />
            <FilterByActivities />
            <h4>Sort: </h4>
            <SortByName />
            <SortByPopulation />
        </div>
    )
};

export default FiltersAndSorts;