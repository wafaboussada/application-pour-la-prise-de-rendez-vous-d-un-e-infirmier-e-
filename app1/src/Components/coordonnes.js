// import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
// class CoordonneesInfirmiers extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//           value:'',
//           name:"",
//           jours:{}

//         }
//       }

//     render() {
//         return (
//             <div>
//                 <p>Veuillez entrer vos renseignements pour compléter votre inscription </p>
//                 <div className="général">
//                   <h3>Général</h3>
//                   <div>
//                       <label>Adresse</label>
//                       <input placeholder="Entrez votre adresse"  ></input>
//                       <div>
//                         <div>
//                          <label>Gouvernorat</label>
//                          <select  onChange={(event)=>this.props.changegouvernorat(event)}>
//                          <option value="gouvernorat">gouvernorat</option>
//                            <option value="Ariana">Ariana</option>
//                            <option value="Béja">Béja</option>
//                            <option value="BenArous">BenArous</option>
//                            <option value="Bizerte">Bizerte</option>
//                            <option value="Gabès">Gabès</option>
//                            <option value="Gafsa">Gafsa</option>
//                            <option value="Jendouba">Jendouba</option>
//                            <option value="Kairouan">Kairouan</option>
//                            <option value="Kasserine">Kasserine</option>
//                            <option value="Kébili">Kébili</option>
//                            <option value="Kef">Kef</option>
//                            <option value="Mahdia">Mahdia</option>
//                            <option value="Manouba">Manouba</option>
//                            <option value="Médenine">Médenine</option>
//                            <option value="Monastir">Monastir</option>
//                            <option value="Nabeul">Nabeul</option>
//                            <option value="Sfax">Sfax</option>
//                            <option value="SidiBouzid">SidiBouzid</option>
//                            <option value="Siliana">Siliana</option>
//                            <option value="Sousse">Sousse</option>
//                            <option value="Tataouine">Tataouine</option>
//                            <option value="Tozeur">Tozeur</option>
//                            <option value="Tunis">Tunis</option>
//                            <option value="Zaghouan">Zaghouan</option>
//                       </select>
//                       </div>
//                     </div>
//                     <div>
//                     <label>Ville</label>
//                     <input  onChange={(event) => this.props.changeVille(event)} ></input>
//                     </div>
//                   </div>
//                   <div>
//                       <label>Date de naissance</label>
//                       <input type="date"  onChange={(event)=>{this.props.changedate(event)}}></input>
//                   </div>
//                   <div>
//                       <label>Sexe</label>
//                       <select  >
//                         <option onChange={(event)=>console.log(event.target.value)} value="femme">Femme</option>
//                         <option value="homme">Homme</option>
//                       </select>
//                   </div>
//                 </div>
//                 <div className="coordonnées">
//                   <h3>Coordonnées</h3>
//                   <div>
//                       <label>Numéro de téléphone portable </label>
//                       <input type="tel" ></input>
//                   </div>
//                   <div>
//                       <label> envoyez-moi un e-mail lors de la réception d'un nouveau message </label>
//                       <select onChange={(event) => this.props.check(event)} >
//                          <option value="oui">Oui</option>
//                          <option value="non">Non</option>
//                       </select>      
//                   </div>
//                 </div>
//                 <div className="a-propos">
//                   <h3>A propos de moi</h3>
//                   <div>
//                       <label>Avez-vous une expérience!! si oui, depuis combien de temps: </label>
//                       <select onChange={(event)=>this.props.changeexperience(event)}>
//                          <option value="pas-d'expérience ">Pas d'expérience</option>
//                          <option value="0-1">0 - 1 ans</option>
//                          <option value="1-2">1 - 2 ans</option>
//                          <option value="2-3">2 - 3 ans</option>
//                          <option value="3-4">3 - 4 ans</option>
//                          <option value="4-5">4 - 5 ans</option>
//                          <option value="5-6">5 - 6 ans</option>
//                          <option value="6-7">6 - 7 ans</option>
//                          <option value="7-8">7 - 8 ans</option>
//                          <option value="8-9">8 - 9 ans</option>
//                          <option value="9-10">9 - 10 ans</option>
//                          <option value="sup10"> >10 ans</option>
//                       </select>      
//                   </div>
//                 </div>
//                 <div className="prix">
//                     <label>Taux moyenne pour une visite</label>
//                     <div>
//                        <input onChange={(event)=>this.props.changetaux(event)}></input>
//                        <label>DT</label>
//                     </div>
//                 </div>
//                 <div className="disponibilité">
//                   <div className="temps">
//                      <label><input onChange={(e)=>this.props.handleSubmittemps(e)} name="temps" value="matin" type="checkbox" />Matin</label>
//                      <label><input onChange={(e)=>this.props.handleSubmittemps(e)} name="temps" value="Après midi" type="checkbox" />Après midi</label>
//                      <label><input onChange={(e)=>this.props.handleSubmittemps(e)} name="temps" value="Tard dans l'après midi" type="checkbox" />Tard dans l'apès midi</label>
//                      <label><input onChange={(e)=>this.props.handleSubmittemps(e)} name="temps" value="Soir" type="checkbox" />Soir</label>
//                   </div>
//                   <div className="jours">
//                   <label><input type="checkbox" name="semaine"/>Toute la semaine</label>
//                      <label><input onChange={(e)=>this.props.handleSubmit(e)} type="checkbox" name="jours" value="lundi" />Lundi</label>
//                      <label><input onChange={(e)=>this.props.handleSubmit(e)} type="checkbox" name="jours" value="mardi" />Mardi</label>
//                      <label><input onChange={(e)=>this.props.handleSubmit(e)} type="checkbox" name="jours" value="mercredi"/>Mercredi</label>
//                      <label><input onChange={(e)=>this.props.handleSubmit(e)} type="checkbox" name="jours" value="jeudi"/>Jeudi</label>
//                      <label><input onChange={(e)=>this.props.handleSubmit(e)} type="checkbox" name="jours" value="vendredi"/>Vendredi</label>
//                      <label><input onChange={(e)=>this.props.handleSubmit(e)} type="checkbox"name="jours" value="samedi"/>Samedi</label>
//                      <label><input onChange={(e)=>this.props.handleSubmit(e)} type="checkbox" name="jours" value="dimanche"/>Dimanche</label>
//                   </div>
//                 </div>
//                 <div className="photo">
//                     <label>Photo de profil</label>
//                     <input type="file" onChange={(event)=>this.props.changephotoprofil(event)}/>
//                     <h6>Des photos nesttes et de face sont trés importantes, c'est une facon d'apprendre à se connaitre. Personne n'a envie de parler à un paysage! Télécharger une photo qui montre clairement votre visage</h6>
//                 </div>
//                 {console.log(this.props.jours)}
                
//               <label className="label">  <Link className="choice-item" to='/Components/InfirmierList'onClick={()=>this.props.submit1()}>Enregistrer</Link></label>
//             </div>
//         )
//     }
// }
// export default CoordonneesInfirmiers;