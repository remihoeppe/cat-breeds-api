import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Dashboard from './../Dashboard';
import Favs from './../Favs';


const Routes = ({breedsList, toggleFav}) => {
  return (
    <Switch>
      <Route exact path ='/'>
        <Dashboard breedsList={breedsList} toggleFav={toggleFav}/>
      </Route>
      <Route path='/favs'>
        <Favs breedsList={breedsList} toggleFav={toggleFav}/>
      </Route>
    </Switch>
  )
};

export default Routes;