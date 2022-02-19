import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsurl} = this.props;
    return <div className="my-3">
      <div className="card" >
      <img src={!imageUrl?"https://c.ndtvimg.com/2022-01/ntb3ssmg_prime-minister-narendra-modi-wef-davos_625x300_17_January_22.jpg":imageUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
       <h5 className="card-title">{title}...</h5>
       <p className="card-text">{description}...</p>
       <a href={newsurl} target="_blank" className="btn btn-sm btn-dark" rel="noreferrer">Read More</a>
     </div>
  </div>
  </div>;
  }
}

export default NewsItem;
