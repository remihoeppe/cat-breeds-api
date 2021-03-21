import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {useEffect, useState} from 'react'
import axios from 'axios'
import './App.module.scss';
import Routes from './containers/Routes'
import BreedList from './components/BreedList';
import NavBar from './components/NavBar';


const App = () => {
  const [breedsList, setBreedsList] = useState([]);
  const [displayedBreeds, setDisplayedBreeds] = useState([])

  const updateBreeds = async () => {
    const newBreedsList = await getBreedsList('');
    setDisplayedBreeds(newBreedsList);
  }

  const getBreedsList = async () => {
    axios.get('https://catfact.ninja/breeds?limit=98')
    .then(data => {
      setBreedsList(data.data.data
        .map(object => ({...object, isFav: false})));
    });
  }

  const toggleFav = (breed) => {
    setBreedsList(breedsList.map(b => {
      return b.breed !== breed.breed 
      ? b : {...b, isFav: !b.isFav};
    }));
  }

  useEffect(() => {
    getBreedsList();
    console.log('useEffect is called')
  }, [])

  console.log(breedsList);

  return (
    <div className="App">
    <Router>
      <NavBar />
      <Routes breedsList={breedsList} toggleFav={toggleFav} />
    </ Router>
    </div>
  );
}

export default App;
