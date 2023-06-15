import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <p>BOOK Store CMS</p>
    <ul>
      <li><Link to="/">Book</Link></li>
      <li><Link to="/categories">Categories</Link></li>
    </ul>
  </nav>
);

export default Navigation;
