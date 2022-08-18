import { faker } from "@faker-js/faker";
import { v4 as uuid4 } from "uuid";

function userFixtures() {
  const name = faker.name;

  return {
    id: uuid4(),
    name: name,
    post_count: Math.floor(Math.random() * 10),
    email: `${name}@yopmail.com`,
    bio: faker.lorem,
    username: name,
    avatar: faker.image,
  };
}

export default userFixtures;
