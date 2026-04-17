import { useEffect, useState } from "react";
import { HiPhone, HiChatAlt2, HiVideoCamera } from "react-icons/hi";

const Timeline = () => {
  const [entries, setEntries] = useState([]);
const [filter, setFilter] = useState("");

  useEffect(() => {
    const savedTimeline = JSON.parse(
      localStorage.getItem("timeline") || "[]"
    );
    setEntries(savedTimeline);
  }, []);

  const getIcon = (type) => {
    if (type === "Call") return <HiPhone className="text-blue-500" />;
    if (type === "Text") return <HiChatAlt2 className="text-green-500" />;
    if (type === "Video") return <HiVideoCamera className="text-purple-500" />;
    return null;
  };

  // filter logic
  const filteredEntries =
  filter === "" || filter === "All"
    ? entries
    : entries.filter((e) => e.type === filter);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Timeline</h1>

      {/* Filter select */}
      <div className="mb-6">
        
       <select
  value={filter}
  onChange={(e) => setFilter(e.target.value)}
  className="w-full md:w-64 px-4 py-2 border rounded-lg bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
>
  <option value="" disabled>Filter timeline</option>
  <option value="All">All</option>
  <option value="Call">Call</option>
  <option value="Text">Text</option>
  <option value="Video">Video</option>
</select>
      </div>

      {/* Empty state */}
      {filteredEntries.length === 0 ? (
        <p className="text-gray-500 text-center py-10 bg-white rounded-xl border border-dashed">
          No interactions logged yet. Log some interactions from a friend's profile!
        </p>
      ) : (
        <div className="space-y-4">
          {filteredEntries.map((entry, index) => (
            <div
              key={entry.id || index}
              className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 transition-all hover:shadow-md"
            >
              <div className="p-3 bg-gray-50 rounded-full text-2xl">
                {getIcon(entry.type)}
              </div>

              <div className="flex-1">
                <h4 className="font-bold text-gray-800">{entry.title}</h4>
                <p className="text-sm text-gray-500">{entry.date}</p>
              </div>

              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50 px-2 py-1 rounded">
                {entry.type}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Timeline;