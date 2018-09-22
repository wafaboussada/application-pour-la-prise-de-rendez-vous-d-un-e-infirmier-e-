import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Inscrire extends Component {
      
        render() {
          return (
          <div className="body-inscrire">
          <div className="inscription">
              <h4 className="inscription-title">S'inscrire</h4>
              <b className="Inscription-par-fb">Inscription avec Facebook</b>
              <h5 ClassName="ou">ou</h5>
              <b className="inscription-par-mail">Inscrivez-vous avec votre adresse e-mail</b>
              <div className="formulaire">
                <input className="input-item" placeholder="Prénom" onChange={(event) => this.props.changeprénom(event)} ></input>
                <input className="input-item class" placeholder="Nom de famille"onChange={(event) => this.props.changenom(event)} ></input>
                <input className="input-item" placeholder="E-mail" onChange={(event) => this.props.changemail(event)}></input>
                <input className="input-item" type="password" placeholder="Choisissez un mot de passe" onChange={(event) => this.props.changemdp(event)} ></input>
                <label ><Link className='button-item' onClick={()=>this.props.submit()} to='/Components/Choix' >S'inscrire</Link></label>
              </div>
            </div>
          </div>
          );
        }
      }
export default Inscrire; 
