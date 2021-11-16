import Joi from 'joi';
import { z } from 'zod';

export const requestSchema = Joi.object({
  id: Joi.string().required(),
});

export const zodRequestSchema = z.object({
  id: z.string(),
});