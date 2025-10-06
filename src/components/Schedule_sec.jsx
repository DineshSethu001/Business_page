import  ScheduleImage  from "../assets/stats.webp"
import {IoIosArrowRoundForward} from 'react-icons/io'

export default function Schedule_sec(){

    return(
        <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
            <div className="flex flex-xol md:flex-row items-center justify-between gap-12 mdLgap-24">
                {/* left */}
                <div className="md:w-1/2 w-full">
                    <img className="w-full h-auto" src={ScheduleImage} alt="Schedule img"/>
                </div>
                {/* right */}
                <div className="md:w-1/2 w-full">
                <p className="uppercase text-orange-500 font-semibold">schedule</p>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6">StreamLine Your Business <br/>with smart scheduling solution</h2>
                <p className="text-gray-600 mb-8">Take control of your time and boost productivity with our intelligent scheduling system. Automate appointments, manage team availability and deliver exceptional customer experiences through seamless calender management</p>
                <a className="text-blue-500 text-semibold flex items-center gap-2 hover:gap-4 transition-all" href='#'>Explore Scheduling features<IoIosArrowRoundForward className="w-5 h-5"/></a>

                </div>
            </div>
        </section>
    )
}