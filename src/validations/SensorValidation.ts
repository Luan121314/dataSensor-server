import * as yup from 'yup';
import { ParamsShowDeviceProps, ParamsShowProps } from '../interfaces';
import Sensor from '../models/Sensor';

class SensorValidation {
    async create(data: Sensor) {
        const schema = yup.object().shape({
            value: yup.string().required(),
            unity: yup.string().required(),
            deviceId: yup.string().required(),
        });
        await schema.validate(data, {
            abortEarly: false,
        });
    }

    async show(data: ParamsShowProps) {
        const schema = yup.object().shape({
            id: yup.string().required(),
            limit: yup.number().notRequired(),
        });
        await schema.validate(data, {
            abortEarly: false,
        });
    }

    async showDevice(data: ParamsShowDeviceProps) {
        const schema = yup.object().shape({
            deviceId: yup.string().required(),
            limit: yup.number().notRequired(),
        });
        await schema.validate(data, {
            abortEarly: false,
        });
    }
}

export default new SensorValidation();
