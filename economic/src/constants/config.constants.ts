import { Type } from '@sinclair/typebox';
import { Value } from '@sinclair/typebox/value';

const envSchema = Type.Object({
  PORT: Type.String(),
  GITHUB_ID: Type.String(),
  GITHUB_SECRET: Type.String(),
});
// TODO: this is ugly, find a better way to do this
if (!Value.Check(envSchema, Bun.env)) throw new Error('Invalid env variables');
export const env = Value.Cast(envSchema, Bun.env);