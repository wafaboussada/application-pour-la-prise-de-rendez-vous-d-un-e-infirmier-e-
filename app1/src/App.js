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
      value1:'',
      ville:"",
      gouvernorat:"",
      date:"",
      age:"",
      sexe:"",
      photoprofil:null,
      experience:"pas d'experience",
      taux:"non indiqué",
      disponibilité:"",
      jours:{},temps:{},
      tabVilles:['Ariana','Béja','BenArous','Bizerte','Gabès','Gafsa','Jendouba','Kairouan','Kasserine','Kébili','Kef','Mahdia','Manouba','Médenine',
          'Monastir','Nabeul','Sfax','SidiBouzid','Siliana','Sousse','Tataouine','Tozeur','Tunis','Zaghouan'
          ],
          value:'',
      
    }
  }
  handleSubmit=(e)=>{
      this.setState({
        [e.target.name]:[...this.state.jours,e.target.value]
    })
  }
  handleSubmittemps=(e)=>{
    this.setState({
      [e.target.name]:[...this.state.temps,e.target.value]
  })
}



  changeVille=(event)=>{
    this.setState({
      ville:event.target.value
    })
  }
  
  changegouvernorat=(event)=>{
    this.setState({
      gouvernorat:event.target.value
    })
  }
  changedate=(event)=>{
    this.setState({
      date:event.target.value
    })
  }
  onChangeVille1=(event)=>{
    this.setState({
      value1:event.target.value
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
  changesexe=(event)=>{
    this.setState({
      sexe:event.target.value
    })
  }
  changeexperience=(event)=>{
    this.setState({
      experience:event.target.value
    })
  }
  changetaux=(event)=>{
    this.setState({
      taux:event.target.value
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
  changephotoprofil=(event)=>{
    this.setState({
      photoprofil:event.target.files[0]
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
    // else{
    //   axios.post("/add-contact",{
    //     Prénom:this.state.Prénom,Nom:this.state.Nom,Mail:this.state.Mail,MotDePasse:this.state.MotDePasse}).
    //   then(this.getData)
    //   .catch(err => alert(err))
    // }
  }
  submit1=()=>{
    axios.post("/add-contact",{
      Prénom:this.state.Prénom,Nom:this.state.Nom,Mail:this.state.Mail,
      ville:this.state.ville,gouvernorat:this.state.gouvernorat, age:this.state.age,experience:this.state.experience,
          taux:this.state.taux,disponibilité:this.state.disponibilite,photoprofil:this.state.photoprofil
      }).
    then(this.getData)
    .catch(err => alert(err))
  }
  componentDidMount(){
  
  this.getData()
  
  }
  onChangeVille=(event)=>{
    this.setState({
      value:event.target.value
    })
  }
  
  

  
  
  render() {
    return (
     
      <div className="App">
      <Header/>
      <div>
        <Route exact path="/" render={(props)=><Home onChangeVille={this.onChangeVille} value={this.state.value} tabVilles={this.state.tabVilles} />} />
        <div>
        <Route exact path="/Components/InfirmierList" render={(props)=><InfirmierList contact={this.state.contact} 
        value1={this.state.value1} onChangeVille1={this.onChangeVille1}/>}/>
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
        <Route exact path="/Components/CoordonneesInfirmiers" render={
          (props)=><CoordonneesInfirmiers 
          handleSubmit={this.handleSubmit}
          handleSubmittemps={this.handleSubmittemps}
          jours={this.state.jours}
          changeVille={this.changeVille}
          changegouvernorat={this.changegouvernorat}
          changedate={this.changedate}
          changesexe={this.changesexe}
          changeexperience={this.changeexperience}
          changetaux={this.changetaux}
          ville={this.state.ville}
          gouvernorat={this.state.gouvernorat}
          date={this.state.date}
          photoprofil={this.state.photoprofil}
          changephotoprofil={this.changephotoprofil}
          age={this.state.age}
          experience={this.state.experience}
          taux={this.state.taux}
          disponibilité={this.state.disponibilite}
          jours={this.state.jours}
          
          
          submit1={this.submit1}/>
          }/>
        
        </div>
        

        
      </div>
         
      
      </div>
    );
  }
}
export default App;
