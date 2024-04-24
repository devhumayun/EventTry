"use client";
import { useAuth } from "@/app/hooks";
import PaymentForm from "@/components/common/PaymentForm";
// import { getEventById } from "@/db/queries";

// const generateMetadata = async ({ params: { eventId } }) => {
//   const event = await getEventById(eventId);

//   return {
//     title: `Eventry/payment - ${event?.name}`,
//     description: event?.details,
//   };
// };

const PaymentPage = ({ params: { eventId } }) => {
  const { auth } = useAuth();
  return (
    <main>
      <section className="container">
        <div className="bg-[#242526] p-6 rounded-lg max-w-xl mx-auto my-12">
          <h2 className="font-bold text-xl mb-8">Payment Details</h2>
          <PaymentForm eventId={eventId} auth={auth} />
        </div>
      </section>
    </main>
  );
};

export default PaymentPage;
