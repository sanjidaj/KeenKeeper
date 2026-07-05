
import { FaArchive, FaRegTrashAlt, FaVideo } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineTextsms } from "react-icons/md";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { useLocation } from "react-router";
import { toast } from "react-toastify";


const FriendDetails = () => {
    const location = useLocation();
    const friend = location.state;

        const handleInteraction = (type) => {
            const newEntry = {
                id: Date.now(),
                date: new Date().toLocaleDateString(),
                type,
                title: `${type} with ${friend.name}`,
            };

            const timeline =
                JSON.parse(localStorage.getItem("timeline")) || [];

            timeline.push(newEntry);

            localStorage.setItem("timeline", JSON.stringify(timeline));

            toast.success(`${type} with ${friend.name}`);
        };

     
    
    return (
        <div>
            <div className="grid grid-cols-3 gap-6">


                <div className="space-y-2">

                    <div className="bg-white rounded-xl shadow p-4 text-center mt-10">
                        <img
                            src={friend.picture}
                            alt={friend.name}
                            className="w-20 h-20 rounded-full mx-auto object-cover"
                        />

                        <h2 className="text-xl font-semibold mt-4">
                            {friend.name}
                        </h2>

                        <span
                                    className={`mt-4 px-3 py-0.5 rounded-full text-white text-sm ${friend.status === "overdue"
                                            ? "bg-[#EF4444]"
                                            : friend.status === "almost due"
                                                ? "bg-[#EFAD44]"
                                                : "bg-[#244D3F]"
                                        }`}
                                >
                                    {friend.status === "almost due"
                                        ? "Almost Due"
                                        : friend.status === "on-track"
                                            ? "On-Track"
                                            : "Overdue"}
                                </span>

                        <div className="flex gap-1 mt-2 flex-wrap justify-center">
                                    {friend.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-[#CBFADB] text-[#244D3F] text-xs px-2 py-1 rounded-full uppercase"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                        <p className="italic text-[#64748B]  mt-4">
                            "{friend.bio}"
                        </p>

                        <p className="text-sm text-gray-400 mt-3">
                            Preferred: email
                        </p>
                    </div>

                    <button className="w-full bg-white rounded-xl shadow p-4 flex justify-center gap-3 items-center">
                        <RiNotificationSnoozeLine/>
                        Snooze 2 Weeks
                    </button>

                    <button className="w-full bg-white rounded-xl shadow p-4 flex justify-center gap-3 items-center">
                        <FaArchive/>
                        Archive
                    </button>

                    <button className="w-full bg-white rounded-xl shadow p-4 flex justify-center gap-3 items-center text-red-500 mb-10">
                        <FaRegTrashAlt/>

                        Delete
                    </button>

                </div>


                <div className="col-span-2 space-y-4 mt-10">


                    <div className="grid grid-cols-3 gap-4">

                        <div className="bg-white rounded-xl shadow p-6 text-center">
                            <h2 className="text-3xl font-bold text-[#244D3F]">
                                {friend.days_since_contact}
                            </h2>

                            <p className="text-[#64748B]  mt-2">
                                Days Since Contact
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow p-6 text-center">
                            <h2 className="text-3xl font-bold text-[#244D3F]">
                                {friend.goal}
                            </h2>

                            <p className="text-[#64748B]  mt-2">
                                Goal (Days)
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow p-6 text-center">
                            <h2 className="text-2xl font-bold text-[#244D3F]">
                                {friend.next_due_date}
                            </h2>

                            <p className="text-[#64748B]  mt-2">
                                Next Due
                            </p>
                        </div>

                    </div>


                    <div className="bg-white rounded-xl shadow p-6 flex justify-between items-start">

                        <div>
                            <h2 className="text-xl font-semibold text-[#244D3F]">
                                Relationship Goal
                            </h2>

                            <p className="text-[#64748B]  mt-4">
                                Connect every
                                <span className="font-bold text-black">
                                    {" "}{friend.goal} days
                                </span>
                            </p>
                        </div>

                        <button className="bg-[#F8FAFC] shadow rounded-lg px-3 py-1">
                            Edit
                        </button>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <h2 className="text-xl font-semibold text-[#244D3F] mb-6">
                            Quick Check-In
                        </h2>

                        <div className="grid grid-cols-3 gap-3">

                            <button onClick={() => handleInteraction("Call")} className="bg-[#F8FAFC] shadow  rounded-xl p-8 flex flex-col items-center gap-4">
                                <LuPhoneCall size={26} />
                                <span>Call</span>
                            </button>

                            <button onClick={() => handleInteraction("Text")} className="bg-[#F8FAFC] shadow  rounded-xl p-8 flex flex-col items-center gap-4">
                                <MdOutlineTextsms size={26} />
                                <span>Text</span>
                            </button>

                            <button onClick={() => handleInteraction("Video")} className="bg-[#F8FAFC] shadow  rounded-xl p-8 flex flex-col items-center gap-4">
                                <FaVideo size={26} />
                                <span>Video</span>
                            </button>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default FriendDetails;