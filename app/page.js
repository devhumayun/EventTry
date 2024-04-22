import Header from "@/components/common/Header";
import EventList from "@/components/event/EventList";

export default function Home() {
  return (
    <section className="container">
      <Header />
      <EventList />
    </section>
  );
}
