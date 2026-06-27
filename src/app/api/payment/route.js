import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { stripe } from '../../../../lib/stripe';
import { auth } from '../../../../lib/auth';


export async function POST() {
  try {
    const headersList = await headers()
    const origin = headersList.get('origin')
const userSession = await auth.api.getSession({
headers:await headers()
})
const user = userSession?.user
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
        customer_email:user?.email,
      line_items: [
        {
          // Provide the exact Price ID (for example, price_1234) of the product you want to sell
          price: 'price_1Tn0575VnXPfWZ41iNJDNPJf',
          quantity: 1,
        },
      ],
      metadata : {
        priceId:"price_1Tn0575VnXPfWZ41iNJDNPJf"
      },
      mode: 'payment',
      success_url: `${origin}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
    });
    return NextResponse.redirect(session.url, 303)
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    )
  }
}