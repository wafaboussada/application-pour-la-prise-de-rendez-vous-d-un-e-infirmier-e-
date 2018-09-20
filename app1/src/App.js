import React,{Component}  from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import {Route} from'react-router-dom'
import InfirmierList from'./Components/InfirmierList';
import ConseilsPatients from'./Components/ConseilsPatients';
import Inscrire from'./Components/Inscrire';
import Connexion from'./Components/Connexion';


class App extends Component {
  render() {
    return (
      <div className="App">
      
      <Header/>
      <div>
        <Route  exact path="/"component={Home} />
        <div>
        <Route exact path="/Components/InfirmierList" component={InfirmierList} />
        <Route exact path="/ConseilsPatients" component={ConseilsPatients} />
        </div>
        <div>
        <Route exact path="/Components/Inscrire" component={Inscrire} />
        <Route exact path="/Components/Connexion" component={Connexion} />
        </div>
        

        
      </div>
            
      
      </div>
    );
  }
}
export default App;
