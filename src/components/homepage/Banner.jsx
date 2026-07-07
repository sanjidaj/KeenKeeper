import { FaPlus } from "react-icons/fa";

const Banner = () => {
    return (
        <>
            <div className="space-y-8">
                <div className="  flex justify-center text-center">
                    <div className="max-w-4xl mx-auto space-y-4 mt-10">
                        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Friends to keep close in your life</h1>
                        <p className="text-[#64748B] text-sm md:text-[16px]">Your personal shelf of meaningful connections. Browse, tend, and nurture the<br />relationships that matter most.</p>

                        <div className="inline-flex">
                            <button className="bg-[#244D3F] text-white flex gap-2 items-center py-2 px-2"><span><FaPlus /></span>Add a Friend</button>
                        </div>
                    </div>
                </div>
                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
                    <div className=" bg-white text-center py-4 ">
                        <p className="text-[#244D3F] font-semibold text-3xl">10</p>
                        <p className="text-[#64748B]">Total Friends</p>
                    </div>
                    <div className=" bg-white text-center py-4 ">
                        <p className="text-[#244D3F] font-semibold text-3xl">4</p>
                        <p className="text-[#64748B]">On Track</p>
                    </div>
                    <div className=" bg-white text-center py-4 ">
                        <p className="text-[#244D3F] font-semibold text-3xl">3</p>
                        <p className="text-[#64748B]">Need Attention</p>
                    </div>
                    <div className=" bg-white text-center py-4 ">
                        <p className="text-[#244D3F] font-semibold text-3xl">7</p>
                        <p className="text-[#64748B] ">Interactions This Month</p>
                    </div>
                  
                </div>
                <hr className="text-[#E9E9E9]"/>
            </div>
        </>
    );
};

export default Banner;