import React, { Component } from 'react';
class ListItem extends Component{
    render() {
        
        return(
        <div className="infirmier-card">
        <div>
            {this.props.photoprofil}
        </div>
          <div>
              <div className="nom-prenom">
          <div className="movie-description">{this.props.Prénom}</div>
          <div className="movie-description">{this.props.Nom} </div></div>
          <div className="movie-description">{this.props.sexe}</div>
          <div>
              {this.props.ville}
              {this.props.gouvernorat}
          </div>
          <div className="movie-description">{this.props.Mail} </div>
          
          <div>Date de naissance:{this.props.date}</div>
          <div>{this.props.experience}ans d'expérience</div>
          <div>Taux moyenne pour une visite(Dt):{this.props.taux}</div>
          <div>{this.props.jours}
          </div></div>
        </div>
        
      
    )
}
}
export default ListItem;

// const Star = () => {
//     return (<span>★</span>)
// }