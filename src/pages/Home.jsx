import { useEffect, useState } from "react";
import FriendCard from "../components/FriendCard";
import Loader from "../components/Loader";
import { HiUserAdd } from "react-icons/hi";

const Home = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/friends.json")
      .then((res) => {
        if (!res.ok) throw new Error("File Not Found");
        return res.json();
      })
      .then((data) => {
        setFriends(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  // js funtion


  const totalFriends = friends.length;
  const onTrack = friends.filter(f => f.status === "on-track").length;
  const needAttention = friends.filter(f => f.status !== "on-track").length;

  return (
    <div className="bg-[#f3f4f6] min-h-screen">



      {/* Banner Section */}
      <section className="bg-[#f3f4f6] py-12 px-6 text-center border border-gray-300 mb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Friends to keep close in your life</h1>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Your Personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <button className="bg-green-900 text-white px-6 py-2 rounded-lg flex items-center gap-2 mx-auto font-medium mb-12">
          <HiUserAdd /> Add a Friend
        </button>

        {/*  Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {[
            { label: "Total Friends", val: totalFriends },
            { label: "On Track", val: onTrack },
            { label: "Need Attention", val: needAttention },
            { label: "Interactions This Month", val: 12 },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border-b-4 border-gray-300">
              <h2 className="text-3xl font-bold">{item.val}</h2>
              <p className="text-gray-500 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
        
      </section>

      {/* hr added in here 
       <hr className="w-full align-middle max-w-4xl border-gray-400 mb-8" /> */}

      {/* Friends List Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h3 className="text-xl font-bold mb-6">Your Friends</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
