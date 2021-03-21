import BreedsList from './../../components/BreedList';



const Dashboard = ({breedsList, toggleFav}) => {

  return (
    <BreedsList breedsList={breedsList} toggleFav={toggleFav} />
  )
};

export default Dashboard;