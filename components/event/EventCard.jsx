import Image from 'next/image'
import Link from 'next/link'
import ActionButton from '../common/ActionButton'
const EventCard = ({ event }) => {
    return (
        <div className="overflow-hidden rounded-md bg-[#242526]">
            <Image
                src={event?.imageUrl}
                alt={event?.name}
                className="w-full"
                width={500}
                height={500}
            />
            <div className="p-3">
                <Link href={`/details/${event?.id}`} className="font-bold text-lg">
                    {event?.name}
                </Link>
                <p className="text-[#9C9C9C] text-sm mt-1">
                    {event?.location}
                </p>
                <div className="text-[#737373] text-sm mt-1">
                    <span>{event?.interested_ids?.length ? event?.interested_ids?.length : "0"} Interested</span>
                    <span>{" "}|{" "}</span>
                    <span>{event?.going_ids?.length ? event?.going_ids?.length : "0"} Going</span>
                </div>
                <ActionButton />
            </div>
        </div>
    )
}

export default EventCard
