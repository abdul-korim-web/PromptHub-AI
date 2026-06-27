import { redirect } from "next/navigation";
import { stripe } from "../../../../lib/stripe";
import { getPaymentAction } from "@/actions/getPaymentAction";
import { auth } from "../../../../lib/auth";
import { headers } from "next/headers";

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams;

  if (!session_id)
    throw new Error("Please provide a valid session_id (`cs_test_...`)");

  const {
    status,
    metadata,
    customer_details: { email: customerEmail },
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  if (status === "open") {
    return redirect("/");
  }

  if (status === "complete") {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    const userInfo = session?.user;
    const priceId = metadata.priceId;
   
    const result = await getPaymentAction(session_id, priceId, userInfo?.id);
    return (
      <section id="success">
        <p>
          We appreciate your business! A confirmation email will be sent to{" "}
          {customerEmail}. If you have any questions, please email{" "}
          <a href="mailto:orders@example.com">orders@example.com</a>.
        </p>
      </section>
    );
  }
}
