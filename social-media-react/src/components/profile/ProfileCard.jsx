import React from "react";
import { Card, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ProfileCard(props) {
  const navigate = useNavigate();
  const { user } = props;

  const handleNavigateToProfile = () => {
    navigate(`/profile/${user.id}/`);
  };

  return (
    <Card className="border-0 p-2" data-testid="profile-card">
      <div className="d-flex ">
        <Image
          src={user.avatar}
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

export default ProfileCard;
