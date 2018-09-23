import React, { Component } from 'react';
import ListItem from './ListItem';

class InfirmierList extends Component {
    constructor(props){
        super(props);
        this.state={
          value:'',
        }
      }
    render() {
        const {onchange=()=>{},contact={}, value=""}=this.props
      const{
        id="",
        Prénom="",
      Nom="",
      Mail="",
      MotDePasse="",
      }=contact
        return (
            <div>
               <div>
                   <div>
                       <input onChange={(event)=>this.props.onChangeVille(event)}></input>
                   <i className="fal fa-map-marker-alt"></i>
                   <h4>Rechercher par emplacement</h4>
                   <input></input>
                   <i className="fas fa-search"></i>
                   </div>
                   <div><img src="https://imgur.com/a/XXwu2i5"></img></div>
               </div>
               <div>
               {contact.filter((el,i)=>{ 
  
  return(el.Nom.toLowerCase().includes(value.toLowerCase()))}).map((el,i)=>{
   return <ListItem key={i} Prénom={el.Prénom} Nom={el.Nom} Mail={el.Mail} MotDePasse={el.MotDePasse}/>
  })

  }
  <div>
  <input onChange={(event)=>{this.setState({value:event.target.value})} }type="file" name="mon_fichier" id="mon_fichier" />
  {console.log(value)}

            </div></div></div>
        )
    }
}
export default InfirmierList; 