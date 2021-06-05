import 'reflect-metadata';
import { Connection, createConnection } from 'typeorm';

async function connection(): Promise<Connection> {
    const connection = await createConnection();
    console.log(`${connection.options.type} connected`);

    return connection;
}

export default connection();
