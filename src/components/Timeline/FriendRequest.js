import React, { useState, useEffect } from "react";
import headers from "../auth/headers";
import FriendRequestList from "./FriendRequestList";

const FriendRequest = ({ currentUser, logOut }) => {
  console.log(currentUser);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      const response = await fetch(
        "http://localhost:5000/users/received-request",
        {
          headers: headers(),
        }
      );
      const friendsList = await response.json();
      //   console.log(friendsList);
      setFriends(friendsList.data);
    };
    if (currentUser._id) {
      getFriends();
    }
  }, [currentUser._id]);

  return (
    <>
      
      <div className="container ">
        <div className="row">
          <div className="col-sm-10 offset-sm-1 col-md-6 offset-md-3 post-card mt-5">
            {friends.length > 0 &&
              friends.map((item) => {
                return <FriendRequestList key={item.from._id} friends={item} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendRequest;
