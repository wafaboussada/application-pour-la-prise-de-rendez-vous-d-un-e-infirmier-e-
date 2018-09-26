import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Choix extends Component {
    render() {
        return (
            <div className="body-inscrire">
            <div className="choice-inscription">
               <h4 className="inscription-title">Complétez votre inscription</h4>
               <label className="choice-background"><Link className="choice-item" to='/Components/CoordonneesInfirmiers'>Je suis un(e) infirmièr(e)</Link></label>
               <label className="choice-background"><Link className="choice-item" to='/Components/InfirmierList' >Je cherche un(e) infirmièr(e)</Link></label>
            </div>
          </div>
        )

    }
}
export default Choix;