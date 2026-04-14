import { useNavigate } from "react-router-dom";

const FriendCard = ({ friend }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="border p-4 cursor-pointer"
    >
      <img src={friend.picture} />
      <h2>{friend.name}</h2>
      <p>{friend.days_since_contact} days ago</p>
      <p>{friend.status}</p>
    </div>
  );
};

export default FriendCard;