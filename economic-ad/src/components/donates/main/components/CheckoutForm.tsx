'use client'

import React, { useState } from 'react';

import CustomDonationInput from './CustomDonationInput';
import StripeTestCards from './StripeTestCards';

import { formatAmountForDisplay } from '~utils/numbers';
import * as config from '~constants/stripe-const';
import { createCheckoutSession } from '~actions/stripe';

export default function CheckoutForm(): JSX.Element {
    const [loading] = useState<boolean>(false)
    const [input, setInput] = useState<{ customDonation: number }>({
        customDonation: Math.round(config.MAX_AMOUNT / config.AMOUNT_STEP),
    })

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
        e: any
    ): void =>
        setInput({
            ...input,
            [e.currentTarget.name]: e.currentTarget.value,
        })

    return (
        <form action={createCheckoutSession}>
            <CustomDonationInput
                className="checkout-style"
                name="customDonation"
                min={config.MIN_AMOUNT}
                max={config.MAX_AMOUNT}
                step={config.AMOUNT_STEP}
                currency={config.CURRENCY}
                onChange={handleInputChange}
                value={input.customDonation}
            />
            <StripeTestCards />
            <button
                className="checkout-style-background"
                type="submit"
                disabled={loading}
            >
                Donate {formatAmountForDisplay(input.customDonation, config.CURRENCY)}
            </button>
        </form>
    )
}