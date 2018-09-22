import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Choix extends Component {
    render() {
        return (
            <div>
            <label >  <Link className="choice-item" to='/Components/CoordonneesInfirmiers'>Je suis un(e) infirmièr(e)</Link></label>
            <label >  <Link className="choice-item" to='/Components/InfirmierList' >Je cherche un(e) infirmièr(e)</Link></label>
            </div>
        )

    }
}
export default Choix;