import 'server-only'

import Stripe from 'stripe';
import { env } from '~configs/config';

export const stripe = new Stripe(env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2023-10-16',
  appInfo: {
    name: 'nextjs-with-stripe-typescript-demo',
    url: 'https://nextjs-with-stripe-typescript-demo.vercel.app',
  },
})