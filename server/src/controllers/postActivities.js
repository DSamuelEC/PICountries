const { Country, Activity } = require('../db.js');
const { Op } = require('sequelize');

const postActivities = async (req, res) => {
    try {
        const { name, difficulty, season, countryName } = req.body;
        if (!name || !difficulty || !season || !countryName) return res.status(404).json({ error: 'Please fill all the inputs and add countries to the activity' });

        const activityInDb = await Activity.findOne({
            where: {
                name: {
                    [Op.iLike]: name
                }
            }
        });
        if (activityInDb) return res.status(404).json({ error: 'Activity already exists' });

        const activityCreated = await Activity.create({
            name,
            difficulty,
            season
        });
        await activityCreated.addCountries(countryName)

        const activitySearchDb = await Activity.findOne({
            where: {
                id: activityCreated.id
            },
            include: {
                model: Country
            }
        });

        if (activitySearchDb) return res.status(200).json({ message: 'Activity successfully created' })
    } catch (error) {
        //return res.status(500).json({ error: 'There was a problem creating the Activity' })
        return res.status(500).json(error)
    };
};

module.exports = postActivities;

/*
        const { name, difficulty, season, countryName } = req.body;
        //return res.send()
        if (!name || !difficulty || !season || !countryName) return res.status(404).json({ error: 'Please fill all the inputs and add countries to the activity' });
        
        const activityCreated = await Activity.create({
            name,
            difficulty,
            season
        });
        await activityCreated.addCountry(countryName)
        //console.log(activityCreated);

        //if (activityCreated) return res.status(200).json({ message: 'Activity successfully created' })
*/