import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const FriendDetails = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((f) => f.id == id);
        setFriend(found);
      });
  }, [id]);

  if (!friend) return <p>Loading...</p>;

  return (
    <div>
      <h1>{friend.name}</h1>
      <img src={friend.picture} />
      <p>{friend.email}</p>
    </div>
  );
};

export default FriendDetails;