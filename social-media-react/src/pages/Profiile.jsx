import React from "react";
import {useParams} from "react-router-dom"
import Layout from "../components/Layout";
import ProfileDetails from "../components/profile/ProfileDetails";
import useSWR from "swr";
import {fetcher} from "../helpers/axios";
import {Post} from "../components/posts";
import {Row} from "react-bootstrap";


function Profile() {
    const {profileId} = useParams();

    const posts = useSWR("/post/", fetcher, {
        refreshInterval: 20000,
    });

    return (
        <Layout hasNavigationBack>
            <ProfileDetails/>
            <div>
                <Row className="my-4">
                    {posts.data?.results.map((post, index) => (
                        <Post key={index} post={post} refresh={posts.mutate}/>
                    ))}
                </Row>
            </div>
        </Layout>
    )
}

export default Profile;
