const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'sitF0JAI#uWXKD_qBoJNnefJM50u7iMg7efI1zXrAqFKgkCCc0so',
    MONGODB: process.env.MONGODB || 'mongodb+srv://udavin56:1234@cluster0.urhma.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    AUTO_VOICE:"true"
};
