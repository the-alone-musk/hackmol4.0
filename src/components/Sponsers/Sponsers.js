import devfolio from "../../../public/images/sponsors/devfolio.png"
import replut from '../../../public/images/sponsors/replit.png'
import solana from '../../../public/images/sponsors/solana.svg'
import file from '../../../public/images/sponsors/filecoine.png'
import polygon from "../../../public/images/sponsors/Polygonlogo.png"
import et from "../../../public/images/sponsors/etraa.jpeg"
function Sponsers() {
    return (
        <div className="w-full py-16 md:py-20 flex justify-center items-center gap-12 bg-slate-200 flex-col ">
            {/* <h1 className="container flex justify-center w-3/4 h-80 text-white text-3xl md:text-4xl font-extrabold shadow-bordered-black text-center border-white border-2 items-center">
            Sponsers
        </h1>    */}
            <h1 className="text-4xl uppercase  mb-2 font-bold font-Space-Grotesk">Sponsors</h1>

            <div className="flex items-center justify-center  flex-col">
                <div className="  font-Red-Hat-Display font-semibold text-lg border-2 border-black rounded w-[294px]  bg-[#FFC900] text-center px-10 py-2 shadow-3xl">
                    Diamond Sponsors
                </div>
                <div className=" flex items-center flex-wrap justify-center">
                    <div className="w-64 h-24  sm:w-[366px] md:h-[104px] mt-8 mx-2 flex items-center justify-center rounded-xl border-2 border-black shadow-3xl p-2 text-black bg-white ">
                        <img src={et.src} alt="Sponsor Image" className="p-2 h-24 " />
                        <h1 className="font-bold text-xl " >Ekara Financials</h1>
                    </div>
                  
                </div>
            </div>

            <div className="flex items-center justify-center  flex-col">
                <div className="  font-Red-Hat-Display font-semibold text-lg border-2 border-black  w-[250px]  md:w-[270px] rounded   bg-[#FF4E4E] text-center px-10 py-2 shadow-3xl">
                    Gold Sponsors
                </div>
                <div className=" flex items-center justify-center w-full md:w-10/12  flex-wrap">
                    <div className="w-[250px] h-[58px] md:w-[270px] md:h-[78px] mt-8 mx-2 flex items-center justify-center rounded-xl border-2 border-black shadow-3xl p-2 text-black bg-white ">
                        <img src={devfolio.src} alt="Sponsor Image" className="p-10" />
                        

                    </div>
                    <div className="w-[250px] h-[58px] md:w-[270px] md:h-[78px] mt-8 mx-2  flex items-center justify-center rounded-xl border-2 border-black shadow-3xl p-2 text-black bg-white ">
                        <img src={replut.src} alt="Sponsor Image" className="p-10" />
               

                    </div>
                    <div className="w-[250px] h-[58px] md:w-[270px] md:h-[78px] mt-8 mx-2 flex items-center justify-center rounded-xl border-2 border-black shadow-3xl p-2 text-black bg-white ">
                        <img src={polygon.src} alt="Sponsor Image" className="p-10" />
                        

                    </div>
                    <div className="w-[250px] h-[58px] md:w-[270px] md:h-[78px] mt-8 mx-2 flex items-center justify-center rounded-xl border-2 border-black shadow-3xl p-2 text-black bg-white ">
                        <img src={file.src} alt="Sponsor Image" className="p-10" />
                    </div>
                   
                    <div className="w-[250px] h-[58px] md:w-[270px] md:h-[78px] mt-8 mx-2 flex items-center justify-center rounded-xl border-2 border-black shadow-3xl p-2 text-black bg-white ">
                        <img src={solana.src} alt="Sponsor Image" className="p-10" />
                    </div>
                   
                   
                </div>
            </div>


            {/* <div className="flex items-center justify-center  flex-col">
                <div className="  font-Red-Hat-Display font-semibold text-lg border-2 border-black   w-[250px]  md:w-[270px] rounded  bg-[#39C0C7] text-center px-10 py-2 shadow-3xl">
                    Silver
                </div>
                <div className=" flex items-center justify-center  w-full flex-wrap">
                   
                    <div className="w-[250px] h-[58px] md:w-[270px] md:h-[78px] mt-8 mx-2  flex items-center justify-center rounded-xl border-2 border-black shadow-3xl p-2 text-black bg-white ">
                        <img src={devfolio.src} alt="Sponsor Image" className="p-10" />
                        To be decided

                    </div>
                    <div className="w-[250px] h-[58px] md:w-[270px] md:h-[78px] mt-8 mx-2  flex items-center justify-center rounded-xl border-2 border-black shadow-3xl p-2 text-black bg-white ">
                        <img src={devfolio.src} alt="Sponsor Image" className="p-10" />
                        To be decided

                    </div>
                    <div className="w-[250px] h-[58px] md:w-[270px] md:h-[78px] mt-8 mx-2  flex items-center justify-center rounded-xl border-2 border-black shadow-3xl p-2 text-black bg-white ">
                        <img src={devfolio.src} alt="Sponsor Image" className="p-10" />
                        To be decided

                    </div>
                </div>
            </div> */}

            {/* <div className="flex items-center justify-center  flex-col">
                <div className="  font-Red-Hat-Display font-semibold text-lg border-2 border-black    w-[250px]  md:w-[250px] rounded  bg-[#A27CFF] text-center px-10 py-2 shadow-3xl">
                    Bronze Sponsor
                </div>
                <div className=" flex items-center justify-center w-full  flex-wrap">
                    <div className="w-[250px]  h-12 md:w-[250px] md:h-[58px] mt-8 mx-2 flex items-center justify-center rounded-xl border-2 border-black shadow-3xl p-2 text-black bg-white ">
                        <img src={devfolio.src} alt="Sponsor Image" className="p-10" />
                        To be decided

                    </div>
                    <div className="w-[250px]  h-12 md:w-[250px] md:h-[58px] mt-8 mx-2 flex items-center justify-center rounded-xl border-2 border-black shadow-3xl p-2 text-black bg-white ">
                        <img src={devfolio.src} alt="Sponsor Image" className="p-10" />
                        To be decided

                    </div>
                   
                    <div className="w-[250px]  h-12 md:w-[250px] md:h-[58px] mt-8 mx-2 flex items-center justify-center rounded-xl border-2 border-black shadow-3xl p-2 text-black bg-white ">
                        <img src={devfolio.src} alt="Sponsor Image" className="p-10" />
                        To be decided

                    </div>
                    
                </div>
            </div> */}

        </div>
    )
}

export default Sponsers;