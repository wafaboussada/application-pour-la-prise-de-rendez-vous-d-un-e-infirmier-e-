// import React, { Component } from 'react';
// import ListItem from './ListItem';
// import InputRange from 'react-input-range';


// class InfirmierList extends Component {

//     render() {
//         const {onchange=()=>{},contact={}, value=""}=this.props
//       const{
//         id="",
//         Prénom="",
//       Nom="",
//       Mail="",
//       ville="",
//       gouvernorat="",
//       date="",
//       experience="pas d'experience",
//       taux="non indiqué",
//       disponibilité="",
//       sexe="",
//       }=contact
//         return (
//             <div className="listInfirmiers">
//                <div className="listInfirmiersgauche">
//                    <div className="recherchesectiongauche">
//                    <div className="rechercherfiltrer">
//                    <i className="fas fa-map-marker-alt icon"></i>
//                    <p>Rechercher par emplacement</p></div>
//                    <div className="listInfirmierssearch"><input onChange={(event)=>this.props.onChangeVille(event)} placeholder="ville"></input>
//                    <i className="fas fa-search icon iconsearch"></i></div></div>
//                    <div className="filtersection">
//                    <div className="rechercherfiltrer filtrer">
//                    <i className="fas fa-filter icon"></i>
//                    <p>Filtrer les resultats</p>
//                    </div>
//                    <h5>Age</h5>
//                    <input id="typeinp" type="range" min="0" max="5"step="1"/>
//                    <h5>Expérience</h5>
//                    <input id="typeinp" type="range" min="0" max="5" step="1"/>
//                    <h5>Sexe</h5>
//                    <label><input type="checkbox" />Homme</label>
//                    <label><input type="checkbox" />Femme</label>
//                    <h5>Quand-est que vous avez besoin d'un ou d'une infirmière</h5>
//                    <div className="disponibilitésemaine">
//                    <div className="input-section">
//                      <label><input type="checkbox"/>Lundi</label>
//                      <label><input type="checkbox" />Mardi</label>
//                      <label><input type="checkbox" />Mercredi</label>
//                      <label><input type="checkbox"/>Jeudi</label>
//                      <label><input type="checkbox"/>Vendredi</label>
//                      <label><input type="checkbox"/>Samedi</label>
//                      <label><input type="checkbox"/>Dimanche</label>
//                     </div>
//                     <div className="input-section">
//                     <label><input type="checkbox" />Matin</label>
//                      <label><input type="checkbox" />Après midi</label>
//                      <label><input type="checkbox" />Tard dans l'apès midi</label>
//                      <label><input type="checkbox" />Soir</label>
//                     </div>
//                     </div></div>
//                </div>
//                <div>
//                    <h1>Trouver un ou une infirmière</h1>
//                    <p className="rechercheinfimières">Vous cherchez un(e) infirmièr(e) à domicile de confiance? AlloFermli(ya) a un large aperçu 
//                        des différents infirmièrs, avec 21.278 infirmièr(e)s disponibles pour vos critères de recherche. 
//                        Commencez à contacter nos infirmièrs maintenant pour trouver un(e) infirmièr(e) adéquate en un rien de temps!</p>
//                    {console.log(contact)}
                   
//                {contact.filter((el,i)=>{ 
  
//   return(el.Nom.toLowerCase().includes(value.toLowerCase()))}).map((el,i)=>{
//    return 
//    <ListItem key={i} Prénom={el.Prénom} Nom={el.Nom} sexe={el.sexe} Mail={el.Mail} ville={el.ville} 
//                     gouvernorat={el.gouvernorat} date={el.date} experience={el.experience} taux={el.taux} 
//                     disponibilite={el.jours}/>
//   })

//   }
//   </div>
//   <div>
//       <p className="Infirmiers">Tous les infirmier(e)s</p>
//       <img src="https://www.google.com/maps/d/thumbnail?mid=1EnSWY68ofI5qFt05NcNFeq1O_n8&hl=en"/>
//   </div>
//   </div>
//         )
//     }
// }
// export default InfirmierList; 
import React, { Component } from 'react';
import {Map,InfoWindow, Marker, GoogleApiWrapper} from 'google-map-react';
import {Link} from'react-router-dom';
import ListItem from './ListItem';


class InfirmierList extends Component {
    constructor(props){
        super(props);
        this.state={
          value:'',
          value20:'',
        }
      }
    render() {
        const {onchange=()=>{},contact={}, value1=""}=this.props
      const{
        id="",
        Prénom="",
      Nom="",
      Mail="",
      ville="",
      gouvernorat="",
      date="",
      experience="pas d'experience",
      taux="non indiqué",
      disponibilité="",
      sexe="",
      jours=[],
      photoprofil="https://fr-fr.roomlala.com/prod/file/welchome/image/icones/profil-big.png"
      }=contact
      return (
                    <div className="listInfirmiers">
                       <div className="listInfirmiersgauche">
                           <div className="recherchesectiongauche">
                           <div className="rechercherfiltrer">
                           <i className="fas fa-map-marker-alt icon"></i>
                           <p>Rechercher par emplacement</p></div>
                           <div className="listInfirmierssearch"><input onChange={(event)=>this.props.onChangeVille1(event)} placeholder="ville"></input>
                           <i className="fas fa-search icon iconsearch"></i></div></div>
                           <div className="filtersection">
                           <div className="rechercherfiltrer filtrer">
                           <i className="fas fa-filter icon"></i>
                           <p>Filtrer les resultats</p>
                           </div>
                           <h5>Age</h5>
                           <input id="typeinp" type="range" min="0" max="5"step="1"/>
                           <h5>Expérience</h5>
                           <input id="typeinp" type="range" min="0" max="5" step="1"/>
                           <h5>Sexe</h5>
                           <label><input type="checkbox" />Homme</label>
                           <label><input type="checkbox" />Femme</label>
                           <h5>Quand-est que vous avez besoin d'un ou d'une infirmière</h5>
                           <div className="disponibilitésemaine">
                           <div className="list-filter-semaine-temps">
                             <label><input type="checkbox"/>Lundi</label>
                             <label><input type="checkbox" />Mardi</label>
                             <label><input type="checkbox" />Mercredi</label>
                             <label><input type="checkbox"/>Jeudi</label>
                             <label><input type="checkbox"/>Vendredi</label>
                             <label><input type="checkbox"/>Samedi</label>
                             <label><input type="checkbox"/>Dimanche</label>
                            </div>
                            <div className="list-filter-semaine-temps">
                            <label><input type="checkbox" />Matin</label>
                             <label><input type="checkbox" />Après midi</label>
                             <label><input type="checkbox" />Tard dans l'apès midi</label>
                             <label><input type="checkbox" />Soir</label>
                            </div>
                            </div></div>
                       </div>
                       <div>
                       {console.log(this.props.photoprofil)}
                           <h1>Trouver un ou une infirmière</h1>
                           <p className="rechercheinfimières">Vous cherchez un(e) infirmièr(e) à domicile de confiance? AlloFermli(ya) a un large aperçu 
                               des différents infirmièrs, avec 21.278 infirmièr(e)s disponibles pour vos critères de recherche. 
                               Commencez à contacter nos infirmièrs maintenant pour trouver un(e) infirmièr(e) adéquate en un rien de temps!</p>
                               <label className="label headerbtn">  <Link className=" linktoinscrire" to='/Components/Inscrire'>Vous n'avez pas de compte? Inscrivez-vous!</Link></label>
               {contact.filter((el,i)=>{ 
  
  return(el.gouvernorat.toLowerCase().includes(value1.toLowerCase()))}).map((el,i)=>{
   return <ListItem key={i} photoprofil={el.photoprofil} Prénom={el.Prénom} Nom={el.Nom} sexe={el.sexe} Mail={el.Mail} ville={el.ville} 
                       gouvernorat={el.gouvernorat} date={el.date} experience={el.experience} taux={el.taux} 
                       disponibilite={el.jours}/>
       

  })

  }
  {console.log(this.props.sexe)}
  <div>
  

            </div></div>
            <div>
      <p className="Infirmiers">Tous les infirmier(e)s</p>
       <img src="https://www.google.com/maps/d/thumbnail?mid=1EnSWY68ofI5qFt05NcNFeq1O_n8&hl=en"/>
   </div>
            </div>
        )
    }
}
export default InfirmierList; 
