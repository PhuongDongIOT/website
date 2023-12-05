'use server'

import type { Stripe } from 'stripe'

import { PrintObject } from '~components/donates/main';
import { stripe } from '~lib/stripe'

export default async function Index({
  searchParams,
}: {
  searchParams: { session_id: string }
}): Promise<JSX.Element> {
  if (!searchParams.session_id)
    throw new Error('Please provide a valid session_id (`cs_test_...`)')

  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.retrieve(searchParams.session_id, {
      expand: ['line_items', 'payment_intent'],
    })

  const paymentIntent = checkoutSession.payment_intent as Stripe.PaymentIntent

  return (
    <>
      <h2>Status: {paymentIntent.status}</h2>
      <h3>Checkout Session response:</h3>
      <PrintObject content={checkoutSession} />
    </>
  )
}