import CommentForm from './commentForm';
import CommentList from './commentList';
const CommentLayout = () => {
  return (
    <ul>
      <CommentForm />
      <CommentList />
    </ul>
  );
};

export default CommentLayout;
