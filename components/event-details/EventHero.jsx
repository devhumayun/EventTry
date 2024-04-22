import EventImage from '@/public/events/google-io-2023-1.png'
import Image from 'next/image'
import ActionButton from '../common/ActionButton'
const EventHero = () => {
    return (
        <section className="container">
            <div className="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
                <Image
                    src={EventImage}
                    alt='event-image'
                    className="h-[450px] mx-auto"
                />
            </div>
            {/* Details */}
            <div className="flex items-end">
                <div className="flex-auto py-4">
                    <h1 className="font-bold text-2xl">Google I/O Extended</h1>
                    <p className="text-[#9C9C9C] text-base mt-1">
                        Rangpur, Dhaka, Bangladesh, Rangpur, Bangladesh
                    </p>
                    <div className="text-[#737373] text-sm mt-1">
                        <span>1k Interested</span>
                        <span>|</span>
                        <span>40K Going</span>
                    </div>
                </div>
                <ActionButton fromDetails={true} />
            </div>
        </section>
    )
}

export default EventHero
