import Header from "@/components/common/Header";
import Loader from "@/components/common/Loader";
import EventList from "@/components/event/EventList";
import { Suspense } from "react";

export default function Home({ searchParams: { query } }) {
  return (
    <section className="container">
      <Header />
      <Suspense key={query} fallback={<Loader />}>
        <EventList query={query} />
      </Suspense>
    </section>
  );
}
