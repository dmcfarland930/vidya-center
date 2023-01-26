import { Component } from 'react';
import DirectoryItem from '../directory-item/directory-item.component';

import './directory.styles.scss'

class Directory extends Component {

  render(){
    const {categories} = this.props;
    return (
      <div className="categories-container">
        {categories.map((category)=> (
          <DirectoryItem key={category.id} category={category}/>
        ))}
      </div>
    );
  };
};


export default Directory;