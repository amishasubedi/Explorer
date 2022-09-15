import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const dummyData = [
    {
      id: 1,
      name: "Amisha",
      image:
        "https://media-exp1.licdn.com/dms/image/C5603AQFHoqZRoC8JWQ/profile-displayphoto-shrink_200_200/0/1654656935350?e=1668643200&v=beta&t=IUWljsCJ_jpGmY2gHYP6D4__3dq3j3N0hB1NZP8hjIQ",
      placeCount: 3,
    },
  ];
  return <UsersList items={dummyData} />;
};

export default Users;
