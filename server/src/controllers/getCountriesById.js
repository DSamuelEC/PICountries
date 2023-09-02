const { Country, Activity } = require('../db.js');

const getCountryById = async (req, res) => {
    try {
        const { id } = req.params;
        const countryInDb = await Country.findByPk(id.toUpperCase(), {
            include: Activity
        });
        if (!countryInDb) return res.status(404).json({ error: "Country does not exist" })
        return res.status(200).json(countryInDb)
    } catch (error) {
        return res.status(500).json({ error: 'Failed to get country' })
    }
}

module.exports = getCountryById;