export const helper = (countries, filterByContinent, filterByActivities, sortByName, sortByPopulation) => {
    let data = [...countries];

    if (filterByContinent !== '') data = data.filter(coun => coun.continent === filterByContinent)
    if(filterByActivities !=='') data = data.filter(coun => coun.Activities.some(act => act.name === filterByActivities))

    if(sortByName === 'A-Z') data.sort((a,b) => a.name.localeCompare(b.name))
    if(sortByName === 'Z-A') data.sort((a,b) => b.name.localeCompare(a.name))
    if(sortByPopulation === 'Minor') data.sort((a, b) => a.population - b.population)
    if(sortByPopulation === 'Major') data.sort((a, b) => b.population - a.population)
    return data;
};