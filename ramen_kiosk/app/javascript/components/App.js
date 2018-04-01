import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Belows are pages components
import Header from './Header';
import MenuPicker from './MenuPicker';
import ItemPicker from './ItemPicker';
import PageNotFound from './PageNotFound';



class App extends Component {
  render() {
    return (
      <Router basename='/patrons'>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={MenuPicker} />
            <Route exact path="/:menuId/items" component={ItemPicker} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
