const manifest = {
    // database: {
    //     database: process.env.DATABASE_NAME || 'test',
    //     port: 3306,
    //     host: process.env.DATABASE_HOST || 'localhost',
    //     username: process.env.DATABASE_USERNAME || 'root',
    //     password: process.env.DATABASE_PASSWORD || null,
    // },
    database: {
        type: 'mongodb',
        username: 'sensor',
        password: 'rvzpPE7FUSTa2CFG',
        useNewUrlParser: true,
        useUnifiedTopology: true,
        database: 'datasensors',
        url: `mongodb+srv://sensor:rvzpPE7FUSTa2CFG@mongodatabase01.7udss.mongodb.net`,
    },
};

export default manifest;
