import Header from "@/components/common/Header";
import EventList from "@/components/event/EventList";

export default function Home({ searchParams: { query } }) {
  return (
    <section className="container">
      <Header />
      <EventList query={query} />
    </section>
  );
}
