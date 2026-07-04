import { useEffect, useState } from "react";
import { useNavigate } from "react-router";


const Friends = () => {

    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        fetch("/friends.json")
            .then((res) => res.json())
            .then((data) => {
                setFriends(data);
                setLoading(false);
            });
            
    }, []);
    if (loading) {
    return (
        <div className="flex justify-center items-center min-h-75 text-[#244D3F]">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    );
}
    return (
        <>
            <div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-6">Your Friends</h2>

                    <div className="grid grid-cols-4 gap-4">
                        {friends.map((friend) => (
                            <div
                                key={friend.id}
                                onClick={() =>
                                    navigate(`/friend/${friend.id}`, {
                                        state: friend,
                                    })
                                }
                                className="cursor-pointer bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center mb-8"
                            >
                                <img
                                    src={friend.picture}
                                    alt={friend.name}
                                    className="w-20 h-20 rounded-full object-cover"
                                />

                                <h3 className="text-xl font-semibold mt-2">
                                    {friend.name}
                                </h3>

                                <p className="text-[#64748B]  text-sm mt-1">
                                    {friend.days_since_contact}d ago
                                </p>

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

                                <span
                                    className={`mt-4 px-4 py-1 rounded-full text-white text-sm ${friend.status === "overdue"
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
                            </div>
                        ))}
                    </div>
                </div>
          </div>
        </>
    );
};

export default Friends;