/* eslint-disable react/prop-types */

export const Posts = ({ post }) => {
  return (
    <div>
      <p>{post?.title}</p>
      <p>{post?.body}</p> 
    </div>
  );
};
