import { Component } from 'react';
import { Link } from 'react-router-dom';

import './directory-item.styles.scss'

class DirectoryItem extends Component {

  render(){
    const {title, imageUrl} = this.props.category;
    return (
      <Link className="directory-item-container" to={`/shop/${title}`}>
        <div className="background-image" style={{
          backgroundImage: `url(${imageUrl})`
        }}/>
        <div className="body">
          <h2>{title.toUpperCase()}</h2>
          <p>Shop Now</p>
        </div>
      </Link>
    );
  };
};


export default DirectoryItem;