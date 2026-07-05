import {useState } from "react";
import phoneImg from "../../assets/call.png"
import textImg from "../../assets/text.png";
import videoImg from "../../assets/video.png";

const Timeline = () => {

    const [timeline] = useState(() => {
        return JSON.parse(localStorage.getItem("timeline")) || [];
    });

    return (
            <div className="py-10">
                <h1 className="text-4xl font-bold mb-8">Timeline</h1>
            <input type="text" className="input mb-4" placeholder="Filter timeline" list="types" />
            <datalist id="types">
                <option value="All"></option>
                <option value="Call"></option>
                <option value="Text"></option>
                <option value="Video"></option>
                
            </datalist>

                <div className="space-y-4 mb-10">
                    {timeline.map((item) => (
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