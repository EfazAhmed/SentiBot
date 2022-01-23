import PropTypes from 'prop-types';
import '../styles/Index.css'

const Header = (props) => {
  return (
      <header>
          <h1>{props.title}</h1>
      </header>
  )
};

export default Header;
