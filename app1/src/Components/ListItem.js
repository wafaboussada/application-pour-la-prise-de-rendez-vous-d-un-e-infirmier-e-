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
          <div className="listitemdescription">{this.props.Prénom}</div>
          <div className="listitemdescription">{this.props.Nom} </div></div>
          <div className="listitemdescription">{this.props.sexe}</div>
          <div className="gouvernoratvilleiconsearch">
          <i class="fas fa-map-marker-alt icongouvernoratvilleiconsearch"></i>
          <div className="gouvernoratville">
              <div className="listitemdescription">{this.props.ville}</div>
              <div className="listitemdescription">{this.props.gouvernorat}</div>
          </div>
          </div>
          <div className="movie-description">{this.props.Mail} </div>
          
          {/* <div>Date de naissance:{this.props.date}</div> */}
          <div className="experience">Expérience:{this.props.experience}</div>
          <div className="taux">Taux moyenne pour une visite(Dt):{this.props.taux}</div>
          <div>{this.props.jours}
          </div>
          <button className="btncontact">Contacter</button>
          </div>
        </div>
        
      
    )
}
}
export default ListItem;

// const Star = () => {
//     return (<span>★</span>)
// }