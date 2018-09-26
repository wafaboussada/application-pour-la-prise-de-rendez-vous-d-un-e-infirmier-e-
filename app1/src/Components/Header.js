import React, { Component } from 'react';
import {Link} from'react-router-dom'
import logo from './logo.svg';
import logoimg from './logoimg.svg';
class Header extends Component {
    render() {
        return (
          <div>
            <div>
              <div className="navbar">
              <img  src={logo} width="70px"/>
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
                   <label className="label headerbtn">  <Link className="dropdown-item btnheader" to='/Components/Inscrire'>S'inscrire</Link></label>
                   <label className="label headerbtn">  <Link className="dropdown-item btnheader" to='/Components/Connexion' >Connexion</Link></label>
                 </div>
               </div>
            </div> 
          </div> 
        )
    }
}
export default Header; 