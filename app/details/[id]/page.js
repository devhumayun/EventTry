import Details from "@/components/event-details/Details";
import EventHero from "@/components/event-details/EventHero";
import Map from "@/components/event-details/Map";
import { getEventById } from "@/db/queries";

const EventDetailsPage = async ({ params: { id } }) => {
  const eventInfo = await getEventById(id);

  return (
    <main>
      <EventHero eventInfo={eventInfo} />
      <section className="container">
        <div className="grid grid-cols-5 gap-12 my-12">
          <Details deatils={eventInfo?.details} swags={eventInfo?.swags} />
          <Map location={eventInfo?.location} />
        </div>
      </section>
    </main>
  );
};

export default EventDetailsPage;
