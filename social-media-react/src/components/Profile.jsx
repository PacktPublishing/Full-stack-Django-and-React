import React from "react";
import { PropTypes } from "prop-types";
import { Card, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { RANDOM_AVATAR } from "../utils";

function Profile(props) {
  const navigate = useNavigate();
  const { user } = props;

  const handleNavigateToProfile = () => {
    navigate(`/profile/${user.id}`);
  };

  return (
    <Card className="border-0 p-3">
      <div className="d-flex ">
        <Image
          src={RANDOM_AVATAR}
          roundedCircle
          width={65}
          height={65}
          className="my-3"
        />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Button variant="primary" onClick={handleNavigateToProfile}>
            See profile
          </Button>
        </Card.Body>
      </div>
    </Card>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default Profile;
