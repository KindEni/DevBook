import logger from '../../helpers/logger';

const posts = [
  {
    id: 2,
    text: "Lorem ipsum",
    user: {
      avatar: "/uploads/avatar1.png",
      username: "Test User",
    },
  },
  {
    id: 1,
    text: "Lorem ipsum",
    user: {
      avatar: "/uploads/avatar2.png",
      username: "Test User 2",
    },
  },
];

const resolvers = {
  RootQuery: {
    posts(root, args, context) {
      return posts;
    },
  },

  RootMutation: {
    addPost(root, { post, user }, context) {
      const postObject = {
        ...post, // => {    text: String! }

        user /* =>  {
                    username: String!
                    avatar: String!
                } */,
        id: posts.length + 1,
      };
      posts.push(postObject);
      return postObject;
      /*  This means a Post Type should be return, which is exactly what the addPost function does.

      type Post {
        id: Int - posts.length + 1
        text: String - ...post
        user: User - user
    }
       */
    },
  },
};

export default resolvers;
