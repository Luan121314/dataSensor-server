const password = process.env.MONGO_DATABASE_PASSWORD;
const username = process.env.MONGO_DATABASE_USERNAME;
const cluster = process.env.MONGO_DATABASE_CLUSTER;
const manifest = {
    database: {
        type: 'mongodb',
        useNewUrlParser: true,
        useUnifiedTopology: true,
        database: process.env.MONGO_DATABASE_NAME,
        url: `mongodb+srv://${username}:${password}@${cluster}.mongodb.net`,
    },
};

export default manifest;
