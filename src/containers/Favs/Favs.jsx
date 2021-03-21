import BreedList from './../../components/BreedList';

import { useEffect, useState} from 'react'
import FeedbackPanel from './../../components/FeedbackPanel';


const Favs = ({breedsList, toggleFav}) => {
  const [favBreeds, setFavBreeds] = useState(breedsList.filter(breed => breedsList.isFav));

  useEffect (() => {
    setFavBreeds(breedsList.filter(breed => breed.isFav));
  }, [breedsList])

  console.log(favBreeds)

  return favBreeds.length
  ? <BreedList breedsList={favBreeds} toggleFav={toggleFav} />
  : <FeedbackPanel title={'No breeds'} description={'You have no favourite breeds.'} />

};

export default Favs;