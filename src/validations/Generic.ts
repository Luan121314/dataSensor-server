import * as yup from 'yup';

class GenericValidation {
    async id(id: string): Promise<void> {
        const schema = yup.object().shape({
            id: yup.string().required(),
        });
        await schema.validate(
            { id },
            {
                abortEarly: false,
            },
        );
    }
}

export default GenericValidation;
