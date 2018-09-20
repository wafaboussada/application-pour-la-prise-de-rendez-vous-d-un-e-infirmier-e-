import React, { Component } from 'react';
import {Link} from'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <div>
                    <img alt=""/>
              
                    <div class="navbar">
  
            <div class="dropdown">
              <button class="dropbtn">Recherchez un(e) infirmièr(e) 
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <label>  <Link to='/Components/InfirmierList' >Trouver une infirmière</Link></label>
                <label>  <Link to='/Components/ConseilsPatients' >Conseils pour les patients</Link></label>
              </div>

            </div>
  <div class="dropdown">
    <button class="dropbtn">Jobs pours les infirmiers
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <label>  <Link to='/Components/InfirmierList' >Trouver un Job d'infirmier</Link></label>
      <label>  <Link to='/Components/ConseilsPatients' >Conseils pour les infirmiers</Link></label>
   
    </div>
    
  </div>  

<div class="dropdown">
<label>  <Link to='/Components/Inscrire'>S'inscrire</Link></label>
<label>  <Link to='/Components/Connexion' >Connexion</Link></label>
</div>
</div>
  </div> 
</div>
  
        )
    }
}
export default Header; 