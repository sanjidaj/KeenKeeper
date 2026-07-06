import {useState } from "react";
import phoneImg from "../../assets/call.png"
import textImg from "../../assets/text.png";
import videoImg from "../../assets/video.png";

const Timeline = () => {

    const [timeline] = useState(() => {
        return JSON.parse(localStorage.getItem("timeline")) || [];
    });
    const [filter, setFilter] = useState("all");

    return (
            <div className="py-10">
                <h1 className="text-4xl font-semibold mb-8">Timeline</h1>
            
            <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-72 bg-white shadow rounded-lg px-4 py-2 mb-4"
            >
                
                <option value="all">All</option>
                <option value="Call">Call</option>
                <option value="Text">Text</option>
                <option value="Video">Video</option>
            </select>

                <div className="space-y-4 mb-10">
                    {timeline
                     .filter(item => filter === "all" || item.type === filter)
                     .map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-xl shadow p-3 flex items-center gap-4 "
                        >
                            <img
                                src={
                                    item.type === "Call"
                                        ? phoneImg
                                        : item.type === "Text"
                                            ? textImg
                                            : videoImg
                                }
                                alt={item.type}
                                className="w-10 h-10"
                            />

                            <div>
                                <h3 className="text-lg font-semibold">
                                    {item.title}
                                </h3>

                                <p className="text-[#64748B]">
                                    {item.date}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    
    );
};


export default Timeline;