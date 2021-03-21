import BreedList from '../BreedList';
import styles from './BreedCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const BreedCard = ({breed, toggleFav}) => {
  const breedInfo = breed;
  const favIcon = breedInfo.isFav ? faHeart : faPaw;
  const favStyle = breedInfo.isFav ? 'styles.favIconOn' : 'styles.favIconOff';

  const favouriteHandle = (event) => {
    event.stopPropagation();
    toggleFav(breed);
}

  return (
  <div className={styles.Card}>
    <h2>{breedInfo.breed}</h2>
    <h3>Country: {breedInfo.country}</h3>
    <p>Origin: {breedInfo.origin}</p>
    <p>Coat: {breedInfo.coat}</p>
    <p>Pattern: {breedInfo.pattern}</p>
    <FontAwesomeIcon onClick={favouriteHandle} className={favStyle} icon={favIcon} size='lg' />
  </div>
)};

export default BreedCard;
