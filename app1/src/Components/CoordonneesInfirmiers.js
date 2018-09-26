import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class CoordonneesInfirmiers extends Component {
  
    render() {
        return (
            <div className="body-coordonnees">
                   <div className="title-coordonnees">
                       <p className="title-label">Veuillez entrer vos renseignements pour compléter votre inscription </p>
                   </div>
                   <div className="section">
                       <h3 className="section-title">Général</h3>
                       <div className="cordonnees">
                          <div className="left-cordonnees-item">
                             <label className="label-section">Adresse</label>
                             <label className="label-section">Gouvernerat</label>
                             <label  className="label-section">Ville</label>
                             <label  className="label-section">Date de naissance</label>
                             <label  className="label-section">Sexe</label>
                         </div>
                           <div className="right-cordonnees-item">
                             <input className="input-section" placeholder="Entrer votre adresse" onChange={(event) => this.props.changeAdresse(event)} ></input>
                             <select className="input-section option-color" onChange={(event)=>this.props.changegouvernorat(event)} >
                                <option value="Ariana">Ariana</option>
                                <option value="Béja">Béja</option>
                                <option value="BenArous">BenArous</option>
                                <option value="Bizerte">Bizerte</option>
                                <option value="Gabès">Gabès</option>
                                <option value="Gafsa">Gafsa</option>
                                <option value="Jendouba">Jendouba</option>
                                <option value="Kairouan">Kairouan</option>
                                <option value="Kasserine">Kasserine</option>
                                <option value="Kébili">Kébili</option>
                                <option value="Kef">Kef</option>
                                <option value="Mahdia">Mahdia</option>
                                <option value="Manouba">Manouba</option>
                                <option value="Médenine">Médenine</option>
                                <option value="Monastir">Monastir</option>
                                <option value="Nabeul">Nabeul</option>
                                <option value="Sfax">Sfax</option>
                                <option value="SidiBouzid">SidiBouzid</option>
                                <option value="Siliana">Siliana</option>
                                <option value="Sousse">Sousse</option>
                                <option value="Tataouine">Tataouine</option>
                                <option value="Tozeur">Tozeur</option>
                                <option value="Tunis">Tunis</option>
                                <option value="Zaghouan">Zaghouan</option>
                             </select>
                              <input className="input-section" placeholder="Entrer votre ville" onChange={(event) => this.props.changeville(event)} ></input>
                              <input className="input-section option-color" type="date" onChange={(event)=>{this.props.changedate(event)}} ></input>
                               <select className="input-section option-color" onChange={(event) => this.props.changesexe(event)} >
                                  <option value="femme">Femme</option>
                                  <option value="homme">Homme</option>
                               </select>
                            </div>
                         </div>
                     </div>
                    <div className="section">
                        <h3 className="section-title">Coordonnées</h3>
                        <div className="cordonnees">
                          <div className="left-cordonnees-item">
                             <label className="label-section">Numéro de téléphone portable </label>
                             <label className="label-section"> Envoyez-moi un e-mail lors de la réception d'un nouveau message </label>
                          </div>
                          <div className="right-cordonnees-item">
                             <input className="input-section" type="tel" ></input>
                              <select className="input-section option-color" onChange={(event) => this.props.check(event)} >
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>
                              </select>      
                          </div>
                        </div>
                    </div>
                  <div className="section">
                    <h3 className="section-title">A propos de moi</h3>
                    <div className="cordonnees">
                      <div className="left-cordonnees-item">
                        <label className="label-section">Avez-vous une expérience ?</label>
                        <label className="label-section">Si oui, depuit combien de temps: </label>
                      </div>
                      <div className="right-cordonnees-item option-padding">
                      <select className="input-section option-color" onChange={(event) => this.props.changeexperience(event)} >
                         <option value="pas-d'expérience ">Pas d'expérience</option>
                         <option value="0-1">0 - 1 ans</option>
                         <option value="1-2">1 - 2 ans</option>
                         <option value="2-3">2 - 3 ans</option>
                         <option value="3-4">3 - 4 ans</option>
                         <option value="4-5">4 - 5 ans</option>
                         <option value="5-6">5 - 6 ans</option>
                         <option value="6-7">6 - 7 ans</option>
                         <option value="7-8">7 - 8 ans</option>
                         <option value="8-9">8 - 9 ans</option>
                         <option value="9-10">9 - 10 ans</option>
                         <option value="sup10"> >10 ans</option>
                      </select>      
                     </div>
                    </div>
                  </div>
                  <div className="section">
                    <h3 className="section-title">Taux moyenne pour une visite</h3>
                    <div className="cordonnees">
                       <input className="input-section" onChange={(event) => this.props.changetaux(event)} ></input>
                       <label className="DT">DT</label>
                    </div>
                  </div>
    <div className="section">
        <h3 className="section-title">Disponibilité</h3>
        <div className="cordonnees">
           <div className="left-cordonnees-item">
                <label className="label-section">Coché votre disponibilité :</label>
            </div>
            <div className="right-cordonnees-item">
                <div className="input-section">
                     <label><input onChange={(e)=>this.props.handleSubmittemps(e)} name="temps" value="matin" type="checkbox" />Matin</label>
                     <label><input onChange={(e)=>this.props.handleSubmittemps(e)} name="temps" value="Après midi" type="checkbox" />Après midi</label>
                     <label><input onChange={(e)=>this.props.handleSubmittemps(e)} name="temps" value="Tard dans l'après midi" type="checkbox" />Tard dans l'apès midi</label>
                     <label><input onChange={(e)=>this.props.handleSubmittemps(e)} name="temps" value="Soir" type="checkbox" />Soir</label>
                </div>
                <div className="input-section">
                    <label><input type="checkbox" name="semaine"/>Toute la semaine</label>
                    <label><input onChange={(e)=>this.props.handleSubmit(e)} type="checkbox" name="jours" value="lundi" />Lundi</label>
                     <label><input onChange={(e)=>this.props.handleSubmit(e)} type="checkbox" name="jours" value="mardi" />Mardi</label>
                     <label><input onChange={(e)=>this.props.handleSubmit(e)} type="checkbox" name="jours" value="mercredi"/>Mercredi</label>
                     <label><input onChange={(e)=>this.props.handleSubmit(e)} type="checkbox" name="jours" value="jeudi"/>Jeudi</label>
                     <label><input onChange={(e)=>this.props.handleSubmit(e)} type="checkbox" name="jours" value="vendredi"/>Vendredi</label>
                     <label><input onChange={(e)=>this.props.handleSubmit(e)} type="checkbox"name="jours" value="samedi"/>Samedi</label>
                     <label><input onChange={(e)=>this.props.handleSubmit(e)} type="checkbox" name="jours" value="dimanche"/>Dimanche</label>
                </div>
               </div>
            </div>
        </div>
     <div className="section">
        <h3 className="section-title">Photo de profil</h3>
        <div className="cordonnees-photo">
           <input type="file"/>
           <h6 className="note-bien">Des photos nettes et de face sont trés importantes, c'est une facon d'apprendre à se connaitre. Personne n'a envie de parler à un paysage! Télécharger une photo qui montre clairement votre visage</h6>
        </div>
    </div>
    <label className="confirme"><Link className="choice-item" to='/Components/InfirmierList' onClick={()=>this.props.submit1()} >Enregistrer</Link></label>
</div>
      
        )
    }
}
export default CoordonneesInfirmiers;