import React from "react";
import {getUser} from "../../hooks/user.actions";
import { Button, Image } from "react-bootstrap";


function ProfileDetails () {
    const user = getUser();

    return (
        <div>
            <div className="d-flex flex-row border-bottom p-5">
                <Image
                    src={user.avatar}
                    roundedCircle
                    width={120}
                    height={120}
                    className="me-5 border border-primary border-2"
                />
                <div className="d-flex flex-column justify-content-start align-self-center mt-2">
                    <p className="fs-4 m-0">{user.name}</p>
                    <p className="fs-5">
                        <small>{user.posts_count} posts</small>
                    </p>
                    <Button variant="primary" size="sm" className="w-25">
                        Edit
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProfileDetails;
