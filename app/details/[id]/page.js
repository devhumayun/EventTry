import Details from "@/components/event-details/Details";
import EventHero from "@/components/event-details/EventHero";
import Map from "@/components/event-details/Map";

const EventDetailsPage = ({ params: { id } }) => {
  return (
    <main>
      <EventHero />
      <section className="container">
        <div className="grid grid-cols-5 gap-12 my-12">
          <Details />
          <Map />
        </div>
      </section>
    </main>
  );
};

export default EventDetailsPage;
