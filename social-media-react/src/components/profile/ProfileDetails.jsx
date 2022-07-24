import React from "react";
import {getUser} from "../../hooks/user.actions";
import {randomAvatar} from "../../utils";
import {format} from "timeago.js";
import { Image } from "react-bootstrap";


function ProfileDetails () {
    const user = getUser();

    return (
        <div>
            <div className="d-flex flex-row">
                <Image
                    src={randomAvatar()}
                    roundedCircle
                    width={48}
                    height={48}
                    className="me-2 border border-primary border-2"
                />
                <div className="d-flex flex-column justify-content-start align-self-center mt-2">
                    <p className="fs-6 m-0">{user.name}</p>
                    <p className="fs-6 fw-lighter">
                        <small>{format(user.created)}</small>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProfileDetails;
