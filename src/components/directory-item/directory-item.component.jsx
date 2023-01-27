import { Component } from 'react';
import { DirectoryItemContainer, BackgroundImage, Body } from './directory-item.styles';

class DirectoryItem extends Component {

  render(){
    const {title, imageUrl} = this.props.category;
    return (
      <DirectoryItemContainer to={`/shop/${title}`}>
        <BackgroundImage imageUrl={imageUrl}/>
        <Body>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Body>
      </DirectoryItemContainer>
    );
  };
};


export default DirectoryItem;