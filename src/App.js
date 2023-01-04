import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/navigation/navigation.component';
import Home from './components/routes/home/home.components';

class App extends Component {

  render(){
    
    return (
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />}/>
          <Route path='shop' element={<Home />}/>
        </Route>
      </Routes>
    )
  }
}

export default App;
