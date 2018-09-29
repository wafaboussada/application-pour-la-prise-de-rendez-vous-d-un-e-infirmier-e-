import React, { Component } from 'react';
import {Link} from'react-router-dom';
import logo from './logo.svg';
class Footer extends Component {
    render() {
        return (
        <div className="terms-of-service">
          <div className="service-section-left">
             <div className="service-logo">
              <a href="https://">
               <Link to="/"><img src={logo} width="150px"alt=""/></Link>
              </a>
             </div>
             <h4 className="service-parag">Suivez-nous sur :</h4>
             <div className="footer-portfolio">
               <ul className="footer-social-media" >
                 <li><i class="social-media fab fa-facebook-f"></i></li>
                 <li><i className="social-media fab fa-twitter"></i></li>
                 <li><i class="social-media fab fa-instagram"></i></li>
                 <li><i className="social-media fab fa-linkedin-in"></i></li>
               </ul>
             </div>
          </div>
          <div className="service-section-right">
              <ul className="service-section-bloc">
                <li ><h3 ><a className="footer-subtitle" href="https://">Infermier(e)</a></h3></li>
                <li><h5 ><a className="subtitle" href="https://">Comment nous travaillons</a></h5></li>
                <li><h5 ><a className="subtitle" href="https://">Aide</a></h5></li>
                <li><h5 ><a className="subtitle" href="https://">Confidentialité</a></h5></li>
                <li><h5 ><a className="subtitle" href="https://">Conditions</a></h5></li>
                <li><h5 ><a className="subtitle" href="https://">Tarifs</a></h5></li>
              </ul>
              <ul className="service-section-bloc">
                <li><h3 ><a className="footer-subtitle" href="https://">Découvrir</a></h3></li>
                <li><h5 ><a className="subtitle" href="https://">A propos de nous</a></h5></li>
                <li><h5 ><a className="subtitle" href="https://">Confiance et Sécurité</a></h5></li>
                <li><h5 ><a className="subtitle" href="https://">Les normes communautaires</a></h5></li>
                <li><h5 ><a className="subtitle" href="https://">Témoignages</a></h5></li>
               </ul>
               <ul className="service-section-bloc">
                <li><h3><a className="footer-subtitle" href="https://">Recherches fréquentes</a></h3></li>
                <li><h5 ><a className="subtitle" href="https://">Infermier(e) Tunis</a></h5></li>
                <li><h5 ><a className="subtitle" href="https://">Infermier(e) Sousse</a></h5></li>
                <li><h5 ><a className="subtitle" href="https://">Infermier(e) Nabeul</a></h5></li>
                <li><h5 ><a className="subtitle" href="https://">Infermier(e) Sfax</a></h5></li>
                <li><h5 ><a className="subtitle" href="https://">Infermier(e) Gabes</a></h5></li>
              </ul>
              <ul className="service-section-bloc">
                <li><h3><a className="footer-subtitle" href="https://">Souvent recherché</a></h3></li>
                <li><h5 ><a className="subtitle" href="https://">Infermier(e)s recherchés</a></h5></li>
                <li><h5 ><a className="subtitle" href="https://">Trouver un(e) Infermier(e)</a></h5></li>
                <li><h5 ><a className="subtitle" href="https://">Trouver un job d'Infermier</a></h5></li>
                <li><h5 ><a className="subtitle" href="https://">Conseils pour les patients</a></h5></li>
                <li><h5 ><a className="subtitle" href="https://">Conseils pour les infermiers</a></h5></li>
              </ul>
          </div>
        </div>
       )
    }
}
export default Footer; 