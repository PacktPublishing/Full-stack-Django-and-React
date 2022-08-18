import { faker } from "@faker-js/faker";
import { v4 as uuid4 } from "uuid";
import userFixtures from "./user";

function postFixtures(isLiked = true, isEdited = false) {
  return {
    id: uuid4(),
    author: userFixtures(),
    body: faker.lorem,
    edited: isEdited,
    liked: isLiked,
    likes_count: Math.floor(Math.random() * 10),
    comments_count: Math.floor(Math.random() * 10),
  };
}

export default postFixtures;
