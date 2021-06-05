import { Router } from 'express';
import SensorController from './controllers/SensorController';

const route = Router();

route.post('/plants', SensorController.create);
route.get('/plants', SensorController.index);
route.get('/plants/:id', SensorController.show);
route.get('/plants/device/:deviceId', SensorController.showDevice);

export default route;
