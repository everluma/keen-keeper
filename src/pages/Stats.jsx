import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const Stats = () => {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("timeline") || "[]");
    setTimeline(data);
  }, []);

  // count
  const call = timeline.filter((t) => t.type === "Call").length;
  const text = timeline.filter((t) => t.type === "Text").length;
  const video = timeline.filter((t) => t.type === "Video").length;

  const data = [
    { name: "Call", value: call },
    { name: "Text", value: text },
    { name: "Video", value: video },
  ];

  // colors
  const COLORS = ["#15803d", "#a855f7", "#16a34a"]; 
  

  return (
    <div className="bg-[#f3f4f6] min-h-screen px-10 py-16">
      
      <div className="max-w-6xl mx-auto">

          <h1 className="text-4xl font-bold mb-6 mx-w-6xl mx-auto">
            Friendship Analytics
          </h1>


      <div className="max-w-6xl mx-auto bg-white p-10 rounded-3xl shadow-sm">
        

        {/* Header */}
        <div className="mb-10">
          
          <p className="text-gray font-bold">
            By Interaction Type
          </p>
        </div>

        {/* Chart  */}
        <div className="flex justify-center items-center">
          <div className="w-[300px] h-[300px]">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  innerRadius={90}
                  outerRadius={120}
                  paddingAngle={3}
                >
                  {data.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

       
        <div className="flex justify-center gap-8 mt-10">

          <LegendItem color="bg-green-900" label="Call" value={call} />
          <LegendItem color="bg-purple-500" label="Text" value={text} />
          <LegendItem color="bg-green-600" label="Video" value={video} />

        </div>
      </div>

      </div>
    </div>
  );
};

const LegendItem = ({ color, label, value }) => {
  return (
    <div className="flex items-center gap-2">
      <span className={`w-4 h-4 rounded-full ${color}`}></span>
      <p className="text-sm font-medium text-gray-700">
        {label}: {value}
      </p>
    </div>
  );
};

export default Stats;