import { Request, Response } from 'express';
import { getMongoRepository } from 'typeorm';
import AppError from '../error/AppError';
import Sensor from '../models/Sensor';
import sensorValidation from '../validations/SensorValidation';

class SensorController {
    async create(request: Request, response: Response) {
        const { unity, value, deviceId } = request.body;
        await sensorValidation.create(request.body);
        const sensorRepository = getMongoRepository(Sensor);
        const sensor = sensorRepository.create({ unity, value, deviceId });
        await sensorRepository.save(sensor);
        return response.status(201).json(sensor);
    }
    async index(request: Request, response: Response) {
        const sensorRepository = getMongoRepository(Sensor);
        const { limit } = request.query;
        const limitDefault = 20;
        const sensories = await sensorRepository.find({
            order: { created_at: 'DESC' },
            take: Number(limit) || limitDefault,
        });
        return response.json(sensories);
    }
    async show(request: Request, response: Response) {
        const { id } = request.params;
        const limitDefault = 20;
        const limit = Number(request.query.limit) || limitDefault;
        await sensorValidation.show({ id, limit });
        const sensorRepository = getMongoRepository(Sensor);
        const data = await sensorRepository.findOne({ id });

        if (!data) {
            throw new AppError('not exists', 403);
        }

        return response.json(data);
    }
    async showDevice(request: Request, response: Response) {
        const { deviceId } = request.params;
        const limitDefault = 20;
        const limit = Number(request.query.limit) || limitDefault;
        await sensorValidation.showDevice({ deviceId, limit });
        const sensorRepository = getMongoRepository(Sensor);
        const data = await sensorRepository.find({ deviceId, order: { created_at: 'DESC' } });

        if (!data) {
            throw new AppError('not exists', 403);
        }

        return response.json(data);
    }
}

export default new SensorController();
