import { Type } from '@sinclair/typebox';
import { Value } from '@sinclair/typebox/value';

const env_variable = {
  PORT: '7070',
  API_BASE_URL: 'http://localhost:4000/api',
  NODE_ENV: 'development',
  ANALYZE: 'true',
  GITHUB_ID: '999',
  GITHUB_SECRET: 'helloIamMan',
  NEXT_RUNTIME: 'nodejs',
  NEXT_PUBLIC_SUPABASE_URL: 'https://wdhccodpfudjngtccgyu.supabase.co',
  NEXT_PUBLIC_SUPABASE_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkaGNjb2RwZnVkam5ndGNjZ3l1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3Mzk5NjMsImV4cCI6MjAxNzMxNTk2M30.wA5BRFrWsZGBOQi7rex1lVK5iWA0jgMjSTYkuS15j0w',
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: 'pk_12345',
  STRIPE_SECRET_KEY: 'sk_12345',
  STRIPE_WEBHOOK_SECRET: 'whsec_1234',
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: 'pk_test_d2lzZS1yYXktMjYuY2xlcmsuYWNjb3VudHMuZGV2JA',
  CLERK_SECRET_KEY: 'sk_test_V8TiqgkWijRa8O4l1N9tWCQr9mMyHkB8i8vFeegEQX',
}

const envSchema = Type.Object({
  PORT: Type.String(),
  GITHUB_ID: Type.String(),
  GITHUB_SECRET: Type.String(),
  API_BASE_URL: Type.String(),
  NEXT_PUBLIC_SUPABASE_URL: Type.String(),
  NEXT_PUBLIC_SUPABASE_KEY: Type.String(),
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: Type.String(),
  STRIPE_SECRET_KEY: Type.String(),
});

// TODO: this is ugly, find a better way to do this
if (!Value.Check(envSchema, env_variable)) throw new Error('Invalid env variables');
export const env = Value.Cast(envSchema, env_variable);