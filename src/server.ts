import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import './database';
import route from './Routes';
import handlerErrors from './error/handlerErrors';

const app = express();
app.use(express.json());
app.use(cors());
app.use(route);
app.use(handlerErrors);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log(`Server running in ${PORT} port.`);
});
