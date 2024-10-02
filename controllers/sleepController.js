// In-memory "database" for now
let sleepData = [];

// POST /sleep - Add sleep data
const createSleepData = (req, res) => {
    const { userId, startTime, endTime, sleepQuality } = req.body;

    const sleepEntry = {
        id: sleepData.length + 1,
        userId,
        startTime,
        endTime,
        sleepQuality
    };

    sleepData.push(sleepEntry);
    res.status(201).json(sleepEntry);
}

// GET /sleep/:userId - Get sleep data for a user
const getSleepDataByUserId = (req, res) => {
    const { userId } = req.params;
    const userSleepData = sleepData.filter(entry => entry.userId === userId);

    if (userSleepData.length > 0) {
        res.json(userSleepData);
    } else {
        res.status(404).json({ message: 'No sleep data found for this user' });
    }
}

// GET /sleep - Get all existing sleep data
const getAllSleepData = (req, res) => {
    res.status(200).json(sleepData);
};

module.exports = {
    getAllSleepData,
    getSleepDataByUserId,
    createSleepData
};