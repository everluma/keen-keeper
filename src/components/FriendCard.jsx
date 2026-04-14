import { useNavigate } from "react-router-dom";

const FriendCard = ({ friend }) => {
  const navigate = useNavigate();

  
  const statusStyles = {
    "on-track": "bg-green-100 text-green-700",
    "almost due": "bg-yellow-100 text-yellow-600",
    "overdue": "bg-red-100 text-red-600",
  };

  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col items-center text-center border border-gray-100"
    >
      {/* Round Picture */}
      <img 
        src={friend.picture} 
        alt={friend.name}
        className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-gray-50"
      />
      
      {/* Name and Days */}
      <h2 className="text-xl font-bold text-gray-800">{friend.name}</h2>
      <p className="text-gray-500 text-sm mb-3">{friend.days_since_contact} days since contact</p>
      
      {/* Tags  */}
      <div className="flex gap-2 mb-4">
        {friend.tags.map((tag, index) => (
          <span key={index} className="bg-blue-50 text-blue-600 text-[10px] px-2 py-1 rounded font-bold uppercase">
            {tag}
          </span>
        ))}
      </div>

      {/* Status Button-like Tag */}
      <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${statusStyles[friend.status]}`}>
        {friend.status}
      </span>
    </div>
  );
};

export default FriendCard;