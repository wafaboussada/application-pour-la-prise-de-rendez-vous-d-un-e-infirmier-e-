import React, { Component } from 'react';

class Connexion extends Component {
    constructor(compt){
        super();
        this.state={
          Mail:"",
          MotDePasse:"",
          isAlert:true
        }
      }
     
      changemail=(event)=>{
        this.setState({
          Mail:event.target.value
        })
      }
      changemdp=(event)=>{
        this.setState({
          MotDePasse:event.target.value
        })
      }
      connexion=()=>{
        let msg="";
        if(this.state.MotDePasse.length<8){
          msg= msg + "Le mot de passe contient moins de 8 caractères !!!\n";
          this.setState({
            isAlert:false
          })
        }
        let posAtt=this.state.Mail.search("@");
        let ch=this.state.Mail.slice(posAtt);
        let posDot=ch.includes(".");
        if(posAtt<1 || posDot===false){
            msg= msg + "adresse email ne pas valide !!! \n"
          this.setState({
            isAlert:false
          })
        }
        if( this.state.Mail ==="" || this.state.MotDePasse){
          msg= msg + "Une des entrées est vide !!!\n"
      
        }
        if(this.state.isAlert===false){
        alert(msg);
      
        }
      }
        render() {
          return (
          <div className="body-inscrire">
          <div className="inscription">
              <h4 className="inscription-title">Connexion</h4>
              <b className="Inscription-par-fb">Sidentifier avec Facebook</b>
              <h5 ClassName="ou">ou</h5>
              <b className="inscription-par-mail">Sidentifier avec votre adresse e-mail</b>
              <div className="formulaire">
                <input className="input-item" placeholder="E-mail" onChange={(event) => this.changemail(event)}></input>
                <input className="input-item" type="password" placeholder="Choisissez un mot de passe" onChange={(event) => this.changemdp(event)} ></input>
                <button className="button-item" onClick={()=>this.connexion()}>Connexion</button>
              </div>
            </div>
          </div>
          );
        }
      }
export default Connexion; 
