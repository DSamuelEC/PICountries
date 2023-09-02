const server = require("./src/server");
const { conn, Country } = require('./src/db.js');
const PORT = 3001;
const axios = require("axios");

/*conn.sync({ force: true }).then(() => {
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))*/

conn.sync({ alter: true })
    .then(() => {
        server.listen(PORT, async () => {
            const countries = await Country.findAll()
            if (!countries.length) {
                const { data } = await axios('http://localhost:5000/countries')
                const countriesInDb = data.map((coun) => {
                    return {
                        id: coun.cca3,
                        name: coun.name.common,
                        flag: coun.flags.png,
                        continent: coun.region,
                        capital: coun.capital
                            ? coun.capital[0]
                            : 'This country does not have a capital',
                        population: coun.population,
                    }
                })
                await Country.bulkCreate(countriesInDb)
            }
            console.log(`Server running on Port: ${PORT}`)
        })
    })
    .catch((error) => console.error(error.message))
