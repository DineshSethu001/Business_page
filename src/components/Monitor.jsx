import  MonitorImage  from "../assets/monitor-card.webp"
import {IoIosArrowRoundForward} from 'react-icons/io'

export default function Schedule_sec(){

    return(
        <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
            <div className="flex flex-xol md:flex-row items-center justify-between gap-12 mdLgap-24">
                {/* left */}
                   <div className="md:w-1/2 w-full">
                <p className="uppercase text-green-500 font-semibold">Monitor</p>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6">Introducing best mobile <br/>Carousels</h2>
                <p className="text-gray-600 mb-8">Before the ship truly returns,
It sails round and round the world,
Round and round the world,
Ever circling, all around the world.</p>
                <a className="text-blue-500 text-semibold flex items-center gap-2 hover:gap-4 transition-all" href='#'>Learn more about monitoring<IoIosArrowRoundForward className="w-5 h-5"/></a>

                </div>
                {/* right */}
             
                <div className="md:w-1/2 w-full">
                    <img className="w-full h-auto" src={MonitorImage} alt="Schedule img"/>
                </div>
            </div>
        </section>
    )
}