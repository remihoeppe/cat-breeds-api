import styles from './NavBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

const NavBar = () => {

  return (
    
    <div>
      <div>
        <FontAwesomeIcon icon={faCat} size='3x'/>
      </div>

      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/favs">Favs</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default NavBar;