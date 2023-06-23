import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <div className="navdiv">
      <p className="cr-belue fs-6 fw-bolder">BOOKStore CMS</p>
      <ul>
        <li><Link className="Link" to="/">BOOKS</Link></li>
        <li><Link className="Link" to="/categories">CATAGORY</Link></li>
        {/* <li><Link to="/counter">Counter</Link></li> */}
      </ul>
    </div>
    <p className="cr-belue"><i className="bi-person-circle" /></p>
  </nav>
);

export default Navigation;
