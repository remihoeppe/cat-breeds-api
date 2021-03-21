import BreedCard from '../BreedCard';
import styles from './BreedList.module.scss';

const BreedList = ({breedsList, toggleFav}) => {
  

  return (
    <div className={styles.GridContainer}>
      {breedsList.map((breedInfo, index) => 
      <BreedCard key={index} breed={breedInfo} toggleFav={toggleFav}/>
      )}
    </div>
  )
}

export default BreedList;