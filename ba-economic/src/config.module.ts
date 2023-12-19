import { Type } from '@sinclair/typebox';
import { Value } from '@sinclair/typebox/value';

const envSchema = Type.Object({
  APP_PORT: Type.String(),
  REDIS_PORT: Type.String(),
  REDIS_HOST: Type.String(),
  JWT_SECRET: Type.String(),
  JWT_NAME: Type.String(),
  JWT_AUDIENCE: Type.String(),
  JWT_ISSUER: Type.String(),
  JWT_ALGORITHM: Type.String(),
  MAIL_DRIVER: Type.String(),
  MAIL_SECURE: Type.String(),
  MAIL_REQUIRE_TLS: Type.String(),
  MAIL_LOGGER: Type.String(),
  MAIL_HOST: Type.String(),
  MAIL_PORT: Type.String(),
  MAIL_USERNAME: Type.String(),
  MAIL_PASSWORD: Type.String(),
  MAIL_ENCRYPTION: Type.String(),
});
// TODO: this is ugly, find a better way to do this
if (!Value.Check(envSchema, Bun.env)) throw new Error('Invalid env variables');
export const env = Value.Cast(envSchema, Bun.env);