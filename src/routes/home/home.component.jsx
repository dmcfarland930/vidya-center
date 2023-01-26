import { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';

class Home extends Component {
  constructor(){
    super();

    this.state = {
      categories: [
        {
          "id": 1,
          "title": "hats",
          "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
        },
        {
          "id": 2,
          "title": "jackets",
          "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
        },
        {
          "id": 3,
          "title": "sneakers",
          "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
        },
        {
          "id": 4,
          "title": "womens",
          "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
        },
        {
          "id": 5,
          "title": "mens",
          "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
        }
      ],
      searchField: ''
    };
  }
  
  render(){
    
    const {categories} = this.state;

    return (
      <div>
        <Outlet />
        <Directory categories={categories}/>
      </div>
    )
  }
}

export default Home;
