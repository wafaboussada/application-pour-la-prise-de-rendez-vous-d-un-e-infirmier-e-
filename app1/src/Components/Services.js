// import React, { Component } from 'react';
// class Services extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>Types de soins à domicile</h3>
//                 <ul>
//                     <li>Pansements simples et complexes</li>
//                     <li>Injections (anticoagulants, antibiotiques, vitamines, anti-inflammatoires, vaccins...)</li>
//                     <li>Aide à la toilette et à l'habillage</li>
//                     <li>Prise en charge des patients diabétiques, surveillance glycémie et insuline</li>
//                     <li>L’intervention auprès des femmes enceintes</li>
//                     <li>L’intervention auprès des personnes limitées dans leurs déplacements</li>
//                 </ul>
//             </div>
//         )
//     }
// }
// export default Services;
import React, { Component } from 'react';
class Services extends Component {
    render() {
        return (
            <div className="body-services">
                <h3 className="title-services">Types de soins à domicile</h3>
                <ul className="groupe-of-seurvices">
                    <li className="service-item">Pansements simples et complexes</li>
                    <li className="service-item">Injections (anticoagulants, antibiotiques, vitamines, anti-inflammatoires, vaccins...)</li>
                    <li className="service-item">Prise en charge des patients diabétiques, surveillance glycémie et insuline</li>
                    <li className="service-item">L’intervention auprès des femmes enceintes</li>
                    <li className="service-item">L’intervention auprès des personnes limitées dans leurs déplacements</li>
                </ul>
            </div>
        )
    }
}
export default Services;
