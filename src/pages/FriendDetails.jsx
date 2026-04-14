import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiPhone, HiChatAlt2, HiVideoCamera, HiPencil } from "react-icons/hi";
import toast from "react-hot-toast";

const FriendDetails = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((f) => String(f.id) === String(id));
        setFriend(found);
      });
  }, [id]);

  
  const handleInteraction = (type) => {
    const newEntry = {
      id: Date.now(),
      friendId: id,
      friendName: friend.name,
      type: type,
      date: new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    };

    // local storage
    const existingTimeline = JSON.parse(localStorage.getItem("timeline") || "[]");
    const updatedTimeline = [newEntry, ...existingTimeline];
    localStorage.setItem("timeline", JSON.stringify(updatedTimeline));

    //toast added
    toast.success(`${type} with ${friend.name} logged!`);
  };

  if (!friend) return <div className="text-center py-20">Loading details...</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      {/* Left Column - Friend Info Card */}
      <div className="lg:col-span-1 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center h-fit">
        <img src={friend.picture} alt={friend.name} className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-blue-50" />
        <h2 className="text-2xl font-bold text-gray-900">{friend.name}</h2>
        <span className="mt-2 px-4 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase">{friend.status}</span>
        
        <div className="flex gap-2 my-4">
          {friend.tags.map((tag, i) => (
            <span key={i} className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">{tag}</span>
          ))}
        </div>
        
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{friend.bio}</p>
        <p className="text-gray-400 text-xs mb-8">{friend.email}</p>

        <div className="w-full flex flex-col gap-3">
          <button className="w-full py-2 bg-gray-50 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition">⏰ Snooze 2 Weeks</button>
          <button className="w-full py-2 bg-gray-50 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition">📦 Archive</button>
          <button className="w-full py-2 bg-red-50 text-red-600 rounded-lg font-medium hover:bg-red-100 transition">🗑️ Delete</button>
        </div>
      </div>

      {/* Right Column */}
      <div className="lg:col-span-2 flex flex-col gap-6">
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Days Since Contact", val: friend.days_since_contact },
            { label: "Goal (Days)", val: friend.goal },
            { label: "Next Due Date", val: friend.next_due_date }
          ].map((s, i) => (
            <div key={i} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-center">
              <p className="text-gray-500 text-[10px] uppercase font-bold mb-1">{s.label}</p>
              <h4 className="text-lg font-bold text-gray-800">{s.val}</h4>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-xs font-bold uppercase mb-1">Current Goal</p>
            <h4 className="text-xl font-bold">Contact every {friend.goal} days</h4>
          </div>
          <button className="px-4 py-2 bg-gray-100 text-green-900 rounded-full hover:bg-gray-200 flex items-center gap-2 font-bold transition">
            <HiPencil size={20}/> Edit
          </button>
        </div>

        {/* Quick Check-In Card */}
        <div className="bg-green-900 p-8 rounded-3xl text-white shadow-lg">
          <h3 className="text-xl font-bold mb-2">Quick Check-In</h3>
          <p className="text-blue-100 text-sm mb-6">Log a recent interaction to reset the timer.</p>
          <div className="grid grid-cols-3 gap-4">
            <button onClick={() => handleInteraction('Call')} className="bg-white/10 hover:bg-white/20 p-4 rounded-xl flex flex-col items-center gap-2 transition cursor-pointer">
              <HiPhone size={24}/> <span>Call</span>
            </button>
            <button onClick={() => handleInteraction('Text')} className="bg-white/10 hover:bg-white/20 p-4 rounded-xl flex flex-col items-center gap-2 transition cursor-pointer">
              <HiChatAlt2 size={24}/> <span>Text</span>
            </button>
            <button onClick={() => handleInteraction('Video')} className="bg-white/10 hover:bg-white/20 p-4 rounded-xl flex flex-col items-center gap-2 transition cursor-pointer">
              <HiVideoCamera size={24}/> <span>Video</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
