import React from "react";
import { Card, Button, Image } from "react-bootstrap";
import { randomAvatar } from "../utils";

function Profile(props) {
  const { user } = props;

  const handleNavigateToProfile = () => {
    // Navigate to the profile page
  };

  return (
    <Card className="border-0 p-2">
      <div className="d-flex ">
        <Image
          src={randomAvatar()}
          roundedCircle
          width={48}
          height={48}
          className="my-3 border border-primary border-2"
        />
        <Card.Body>
          <Card.Title className="fs-6">{user.name}</Card.Title>
          <Button variant="primary" onClick={handleNavigateToProfile}>
            See profile
          </Button>
        </Card.Body>
      </div>
    </Card>
  );
}

export default Profile;
