import Image from 'next/image'
import ActionButton from '../common/ActionButton'
const EventHero = ({ eventInfo }) => {
    return (
        <section className="container">
            <div className="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
                <Image
                    src={eventInfo?.imageUrl}
                    alt={eventInfo?.name}
                    className="h-[450px] mx-auto"
                    width={900}
                    height={900}
                />
            </div>
            {/* Details */}
            <div className="flex items-end">
                <div className="flex-auto py-4">
                    <h1 className="font-bold text-2xl">{eventInfo?.name}</h1>
                    <p className="text-[#9C9C9C] text-base mt-1">
                        {eventInfo?.location}
                    </p>
                    <div className="text-[#737373] text-sm mt-1">
                        <span>{eventInfo?.interested_ids?.length ? eventInfo?.interested_ids?.length : "0"} Interested</span>
                        <span>{" "}|{" "}</span>
                        <span>{eventInfo?.going_ids?.length ? eventInfo?.going_ids?.length : "0"} Going</span>
                    </div>
                </div>
                <ActionButton eventId={eventInfo?.id} interested_ids={eventInfo?.interested_ids} fromDetails={true} />
            </div>
        </section>
    )
}

export default EventHero
