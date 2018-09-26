// import React, { Component } from 'react';

// class ServicesClients extends Component {
//     render() {
//         return (
//             <div>
//                <h2 className='servicesTitle'>Vous aider rapidement à trouver un(e) infirmièr(e) près de chez vous </h2>
//                <div className='services'>
//                    <div className='service'>
//                    <i className="fas fa-map-marker-alt"></i>
//                    <h3>Infirmièr(e)s dans votre région</h3>
//                    </div>
//                    <div className='service'>
//                    <i className="fas fa-child"></i>
//                    <h3>Economisez</h3>
//                    </div>
//                    <div className='service'>
//                    <i className="fas fa-american-sign-language-interpreting"></i>
//                    <h3>Entrez en contact rapidement</h3>
//                    </div>
//                    <div className='service'>
//                    <i className="fas fa-comments"></i>
//                    <h3>Créez votre profil gratuitement</h3>
//                    </div>
//                    <div className='service'>
//                    <i className="fas fa-user-circle"></i>
//                    <h3>Commentaires et recommandations</h3>
//                    </div>
//                    <div className='service'>
//                    <i className="fas fa-user-check"></i>
//                    <h3>Vérifications de l'utilsateur</h3>
//                    </div>
//                </div>
//             </div>
//         )
//     }
// }
// export default ServicesClients; 
import React, { Component } from 'react';

class ServicesClients extends Component {
    render() {
        return (
            <div>
               <h2 className='servicesTitle'>Vous aider rapidement à trouver un(e) infirmièr(e) près de chez vous </h2>
               <div className='services'>
                   <div className='service'>
                     <i class="fas fa-map-marker-alt red-color"></i>
                     <h3>Infirmièr(e)s dans votre région</h3>
                   </div>
                   <div className='service'>
                     <i class="fas fa-child red-color"></i>
                     <h3>Economisez</h3>
                   </div>
                   <div className='service'>
                     <i class="fas fa-american-sign-language-interpreting red-color"></i>
                     <h3>Entrez en contact rapidement</h3>
                   </div>
                   <div className='service'>
                     <i class="fas fa-comments red-color iconservicesclients"></i>
                     <h3>Créez votre profil gratuitement</h3>
                   </div>
                   <div className='service'>
                     <i class="fas fa-user-circle red-color"></i>
                     <h3>Commentaires et recommandations</h3>
                   </div>
                   <div className='service'>
                     <i class="fas fa-user-check red-color"></i>
                     <h3>Vérifications de l'utilsateur</h3>
                   </div>
               </div>
            </div>
        )
    }
}
export default ServicesClients; 