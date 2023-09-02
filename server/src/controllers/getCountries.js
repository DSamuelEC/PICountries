const { Country, Activity } = require('../db.js');
const { Op } = require('sequelize');

const countriesGet = async (req, res) => {
    try {
        const { name } = req.query;
        //console.log(name);
        if (name) {
            const countriesByName = await Country.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                        /*se usa op.ilike para realizar una búsqueda que no distingue entre mayúsculas y minúsculas y que encuentra registros 
                        que contienen la cadena name en cualquier parte del nombre.
                        Se usa % antes y después de ${ name } son comodines que permiten que cualquier texto preceda o siga a la cadena name.
                        Esto significa que buscará registros donde el nombre contiene la cadena name, sin importar lo que haya antes o después*/
                    }
                },
                include: [
                    {
                        model: Activity,
                        attributes: ['name'],
                        through: { attributes: [] },
                    }
                ]//lo del include es un extra para filtrar en el front por actividad
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
        })//lo del include es un extra para filtrar en el front por actividad
        /*let aux  = countries[0].toJSON() esto quita todas las consas innecesarias en el .log
        console.log(aux);*/
        if (!countries.length) return res.status(404).json({ error: "There aren't countries" })
        return res.status(200).json(countries)
    } catch (error) {
        return res.status(500).json({ error: 'Failed to load countries' })
    }
};

module.exports = countriesGet;