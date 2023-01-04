import { Component } from 'react';
import CategoryItem from '../category-item/category-item.component';

import './directory.styles.scss'

class Directory extends Component {

  render(){
    const {categories} = this.props;
    return (
      <div className="categories-container">
        {categories.map((category)=> (
          <CategoryItem key={category.id} category={category}/>
        ))}
      </div>
    );
  };
};


export default Directory;