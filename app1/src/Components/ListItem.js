import React, { Component } from 'react';
class ListItem extends Component{
    render() {
        
        return(
        <div className="movie-card">
        {/* <div className="movie-raiting"><Rating count={this.props.raiting}/></div> */}
          {/* <div className="movie-raiting">{this.props.raiting.split("").map(x => {
              return <Star />;
            })}</div> } */}
          {/* <div className="movie-image" ><img src={this.props.image} alt='' height="360px"/></div> */}
          <div className="movie-description">{this.props.Prénom} </div>
          <div className="movie-description">{this.props.Nom} </div>
          <div className="movie-description">{this.props.Mail} </div>
          <div className="movie-description">{this.props.MotDepasse} </div>
        </div>
        
      
    )
}
}
export default ListItem;

// const Star = () => {
//     return (<span>★</span>)
// }