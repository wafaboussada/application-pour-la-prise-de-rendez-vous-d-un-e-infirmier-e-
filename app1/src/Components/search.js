import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="container1">
            <div className='search'>
                <h3>Cherchez près de chez vous</h3>
                <div class="input-group md-form form-sm form-1 pl-0">
    <div class="input-group-prepend">
        <span class="input-group-text blue lighten-2" id="basic-text1"><i class="fa fa-search text-white" aria-hidden="true"></i></span>
    </div>
    <input class="form-control my-0 py-1" type="text" placeholder="Ville" aria-label="Search"/>
</div>
            </div>
            <div className="inscription-gratuite">
            <h3>Vous etes un infirmier ou une infirmière</h3>
            <button className="btn">Inscription gratuite</button>
            </div>
            </div>

        )
    }
}
export default Search;