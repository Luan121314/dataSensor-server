import manifest from './src/manifest';

const ormConfig = {
    ...manifest.database,
    synchronize: true,
    logging: false,
    entities: ['./src/models/**.ts'],
    migrations: ['./src/database/migrations/**.ts'],
    cli: {
        migrationsDir: './src/database/migrations',
    },
};

export default ormConfig;
