const { Country, Activity } = require('../db.js');
const { Op } = require('sequelize');

const countriesGet = async (req, res) => {
    try {
        const { name } = req.query;
        
        if (name) {
            const countriesByName = await Country.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    }
                },
                include: [
                    {
                        model: Activity,
                        attributes: ['name'],
                        through: { attributes: [] },
                    }
                ]
            })
            if(!countriesByName.length) return res.status(404).json({ error: "There aren't countries" })
            return res.status(200).json(countriesByName)
        }

        const countries = await Country.findAll({
            /*order: [
                ['name', 'ASC']
            ],*/
            include: [
                {
                    model: Activity,
                    attributes: ['name'],
                    through: { attributes: [] },
                }
            ]
        })
        /*let aux  = countries[0].toJSON() esto quita todas las consas innecesarias en el .log
        console.log(aux);*/
        if (!countries.length) return res.status(404).json({ error: "There aren't countries" })
        return res.status(200).json(countries)
    } catch (error) {
        return res.status(500).json({ error: 'Failed to load countries' })
    }
};

module.exports = countriesGet;