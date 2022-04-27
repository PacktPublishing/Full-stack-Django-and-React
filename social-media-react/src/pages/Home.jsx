import React from "react";
import { useSelector } from "react-redux";

function Home() {

  const { user } = useSelector((state) => state.auth);

  console.log(user.id);

  if(!user) {
    return <div>Loading!</div>
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>
        Welcome, {user.name}!
      </p>
    </div>
  );
}

export default Home;
