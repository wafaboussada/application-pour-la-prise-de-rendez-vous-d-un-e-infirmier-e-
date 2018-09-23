import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="container1">
            <div className="containerIntro">
            <div className='search'>
            <div className='box'>
                <h2>Cherchez près de chez vous</h2>
                <div className="searchItem">
    
        <span><i className="fa fa-search text-white" ></i></span>
    <input className="inputSearch" onChange={(event)=>this.props.onChangeVille(event)} type="text" placeholder="Ville" /></div></div>
    <ul>{
       this.props.tabVilles.filter(x=>{
        return this.props.value.trim() && x.toLowerCase().includes(this.props.value.toLowerCase())
       }).map(x=>{
         return <li>{x}</li>
       })
     }</ul>

            </div>
            <div className="inscription-gratuite">
            <div className='box'>
            <h2>Vous etes un infirmier ou une infirmière</h2>
            <button className="btn">Inscription gratuite</button></div>
            </div>
            </div>
            </div>

        )
    }
}
export default Search;