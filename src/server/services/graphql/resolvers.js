import logger from '../../helpers/logger';

export default function resolver() {
  const { db } = this;
  const { Post } = db.models; 
  return resolvers;

  const resolvers = {
    RootQuery: {
      posts(root, args, context) {
        return Post.findAll({order: [['createdAt', 'DESC']]});
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
        logger.log({ level: 'info', message: 'Post was created' });
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
};
