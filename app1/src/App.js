import React,{Component}  from 'react';
import axios from'axios';
import Header from './Components/Header';
import Home from './Components/Home';
import {Route} from'react-router-dom'
import InfirmierList from'./Components/InfirmierList';
import ConseilsPatients from'./Components/ConseilsPatients';
import Inscrire from'./Components/Inscrire';
import Connexion from'./Components/Connexion';
import Choix from './Components/Choix';
import CoordonneesInfirmiers from './Components/CoordonneesInfirmiers';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      Prénom:"",
      Nom:"",
      Mail:"",
      MotDePasse:"",
      isAlert:true,
      contact:[],
      value:'',
    }
  }
  onChangeVille=(event)=>{
    this.setState({
      value:event.target.value
    })
  }

  changeprénom=(event)=>{
     this.setState({
       Prénom:event.target.value
     })
  }
  changenom=(event)=>{
    this.setState({
      Nom:event.target.value
    })
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
  getData = ()=>{
    axios.get('/contacts').then((res)=>{
      this.setState({contact:res.data})
      console.log( this.state.contact)
      })
  }
  submit=()=>{
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
    if(this.state.Nom ==="" || this.state.Prénom ==="" || this.state.Mail ==="" || this.state.MotDePasse===""){
      msg= msg + "Une des entrées est vide !!!\n"
      this.setState({
        isAlert:false
      })
  
    }
    if(this.state.isAlert===false){
    alert(msg);
    }
    else{
      axios.post("/add-contact",{
        Prénom:this.state.Prénom,Nom:this.state.Nom,Mail:this.state.Mail,MotDePasse:this.state.MotDePasse}).
      then(this.getData)
      .catch(err => alert(err))
    }
  }
  
  componentDidMount(){
  
  this.getData()
  
  }
  
  
  render() {
    return (
      <div className="App">
      
      <Header/>
      <div>
        <Route exact path="/"component={Home} />
        <div>
        <Route exact path="/Components/InfirmierList" render={(props)=><InfirmierList contact={this.state.contact} 
        value={this.state.value} onChangeVille={this.onChangeVille}/>}/>
        <Route exact path="/ConseilsPatients" component={ConseilsPatients} />
        </div>
        <div>
        <Route exact path="/Components/Inscrire" render={(props)=>
            <Inscrire changeprénom={this.changeprénom}
            changenom={this.changenom}
            changemail={this.changemail} 
            changemdp={this.changemdp}
            submit={this.submit}
            Prénom={this.state.Prénom}
            Nom={this.state.Nom}
            Mail={this.state.Mail}
            MotDePasse={this.state.Mail}/>}/>
        <Route exact path="/Components/Connexion" component={Connexion} />
        <Route exact path ="/Components/Choix" component={Choix}/>
        <Route exact path="/Components/CoordonneesInfirmiers" component={CoordonneesInfirmiers}/>
        
        </div>
        

        
      </div>
         
      
      </div>
    );
  }
}
export default App;
