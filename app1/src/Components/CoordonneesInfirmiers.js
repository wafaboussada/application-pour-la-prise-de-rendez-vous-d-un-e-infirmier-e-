import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class CoordonneesInfirmiers extends Component {
    render() {
        return (
            <div>
            <label className="label">  <Link className="choice-item" to='/Components/InfirmierList'>Enregistrer</Link></label>
            </div>
        )

    }
}
export default CoordonneesInfirmiers;