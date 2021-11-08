import * as Joi from "joi";
import { Request, Response, NextFunction } from 'express';

const options = {
    abortEarly: true,
    allowUnknown: false,
    stripUnknown: false
};

export const validateRequest = (req: Request, next: NextFunction, schema: Joi.AnySchema) => {
    const { error, value } = schema.validate(req.body, options);
    if (error) {
        next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
    } else {
        req.body = value;
        next();
    }
}

export const requestReversedArraySchemaValidate = (req: Request, res: Response, next: NextFunction) => {
    const requestReverseArraySchema = Joi.object({
        number: Joi.number()
            .integer()
            .min(1)
            .max(1000)
            .required(),
    });
    
    validateRequest(req, next, requestReverseArraySchema);
}