import { Legend, Pie, PieChart, Tooltip } from "recharts";

const Stats = () => {
    const timeline = JSON.parse(localStorage.getItem("timeline")) || [];
    const callCount = timeline.filter(item => item.type === "Call").length;
    const textCount = timeline.filter(item => item.type === "Text").length;
    const videoCount = timeline.filter(item => item.type === "Video").length;

    const data = [
        { name: 'Call', value: callCount, fill: '#244D3F' },
        { name: 'Text', value: textCount, fill: '#7E35E1' },
        { name: 'Video', value: videoCount, fill: '#37A163' },

    ];

    return (
        <div className="py-10">
            <h1 className="text-4xl font-semibold mb-8">Friendship Analytics</h1>
            <div className="shadow my-10 bg-white p-10">
                <h3 className="text-xl text-[#414c5b]">By Interaction Type</h3>
                <PieChart style={{
                     width: '100%', maxWidth: '300px', maxHeight: '80vh', aspectRatio: 1 ,margin:"auto"
                     }} 
                     responsive>
                    <Pie
                        data={data}
                        innerRadius="80%"
                        outerRadius="100%"
                        // Corner radius is the rounded edge of each pie slice
                        cornerRadius="50%"
                        fill="#8884d8"
                        // padding angle is the gap between each pie slice
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={true}
                    />
                    <Legend/>
                    <Tooltip/>
                </PieChart>
            </div>
        </div>
    );
};

export default Stats;