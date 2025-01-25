import { z } from 'zod';
import { UserStatus } from './user.constant';

const createUserValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'Password must be a string',
    })
    .nonempty('Password is required')
    .optional(),
});

const changeStatusValidationSchema = z.object({
  body: z.object({
    status: z.enum([...UserStatus] as [string, ...string[]]),
  }),
});

export const UserValidations = {
  createUserValidationSchema,
  changeStatusValidationSchema,
};
