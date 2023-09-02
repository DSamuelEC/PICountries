const { Activity } = require('../db.js');

const getActivities = async (req, res) => {
    try {
        const allActivities = await Activity.findAll()
        return res.status(200).json(allActivities)
    } catch (error) {
        return res.status(500).json({ error: 'Failed to get activities' })
    }
};

module.exports = getActivities;