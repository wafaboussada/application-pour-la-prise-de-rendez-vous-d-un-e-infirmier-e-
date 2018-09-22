import React, { Component } from 'react';
import {Link} from'react-router-dom'

class Header extends Component {
    render() {
        return (
          <div>
            <div>
              <div className="navbar">
               <div className="drop-left">
                <div className="dropdown">
                  <button className="dropbtn">Recherchez une infirmière
                     <i className="fa fa-caret-down"></i>
                  </button>
                  <div className="dropdown-content">
                     <label>  <Link className="dropdown-item" to='/Components/InfirmierList' >Trouver une infirmière</Link></label>
                     <label>  <Link className="dropdown-item" to='/Components/ConseilsPatients' >Conseils pour les patients</Link></label>
                  </div>
                </div>
                <div className="dropdown">
                   <button className="dropbtn">Jobs pours les infirmiers
                     <i className="fa fa-caret-down"></i>
                   </button>
                   <div className="dropdown-content">
                      <label>  <Link className="dropdown-item" to='/Components/InfirmierList' >Trouver un Job d'infirmier</Link></label>
                      <label>  <Link className="dropdown-item" to='/Components/ConseilsPatients' >Conseils pour les infirmiers</Link></label>
                   </div>
                 </div>  
                 </div>
                 <div className="dropdown drop-right">
                   <label className="label">  <Link className="dropdown-item" to='/Components/Inscrire'>S'inscrire</Link></label>
                   <label className="label">  <Link className="dropdown-item" to='/Components/Connexion' >Connexion</Link></label>
                 </div>
               </div>
            </div> 
          </div> 
        )
    }
}
export default Header; 