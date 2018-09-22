import React, {Component}  from 'react';
class Maps extends Component {
  render() {
    return (
        <div className="Maps-party">
           <div className="maps-img">
               <img className="maps"  src="https://cdn.logitravel.fr/cloudcontent/fotos/tours/maps/40459/305x214_4944522694.jpg"  alt="maps"/>
           </div>
           <div className="maps-decription">
               <h1 className="maps-info">Il y a toujours un(e) infirmier(e) à proximité de chez vous</h1>
               <b className="maps-stat">Avec <span className="maps-number">25.594 </span> infirmier(e)s actifs, nous aurons toujours une(e) infirmier(e) disponible pour vous dans votre quartier.Regardez rapidement les infirmier(e)s disponibles dans votre quartier! </b>
               <a className="maps-btn" href="http"><b> Voir toutes les infirmier(e)s</b> </a>
           </div>
        </div>
      )
    }
  }
  export default Maps;
