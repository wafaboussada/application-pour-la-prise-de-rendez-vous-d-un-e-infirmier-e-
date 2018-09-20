import React,{Component}  from 'react';
import Search from './search';
import Services from './Services';



class Home extends Component {
  render() {
    return (
      <div className="App">
        <Search/>
        <Services/>
          
      </div>
    );
  }
}

export default Home;
