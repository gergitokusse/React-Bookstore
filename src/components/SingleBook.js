import PropTypes from 'prop-types';
import RemoveBookButton from './RemoveBookButton';

const SingleBook = ({ id, title, author }) => (
  <div>
    <p>{title}</p>
    <p>{author}</p>
    <RemoveBookButton key={id} id={id} />
  </div>
);

export default SingleBook;

SingleBook.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
