export const helper = (countries, filterContinent) => {
    let data = [...countries]
    if (filterContinent !== '') data = data.filter(coun => coun.continent === filterContinent)
    return data;
};