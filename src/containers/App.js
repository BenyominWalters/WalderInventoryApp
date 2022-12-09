import React, {Component} from 'react';
import SearchBox from '../components/SearchBox';
import ItemList from '../components/ItemList';
import Scroll from '../components/Scroll';
import { items } from '../data/items'
import ErrorBoundary from '../components/ErrorBoundary';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
      super();
      this.state = {
          items: items,
          searchfield: ''
      }
  }

  // componentDidMount() {
  //     fetch('https://jsonplaceholder.typicode.com/users')
  //         .then(response => response.json())
  //         .then(users => this.setState({ robots: users }));
  // }

  onSearchChange = (event) => {
      this.setState({ searchfield: event.target.value });
  }

  render() {
      const { items, searchfield } = this.state;
      const filteredItems = items.filter(item => {
          return item.ItemName.toLowerCase().includes(searchfield.toLowerCase());
      })
      return !items.length ?
          <h1>Loading...</h1> :
          (
              <div className='tc'>
                  <h1 className='f1'>Walder Inventory</h1>
                  <SearchBox searchChange={this.onSearchChange} />
                  <Scroll>
                      <ErrorBoundary>
                          <ItemList items={filteredItems} />
                      </ErrorBoundary>
                  </Scroll>
              </div>
          );
  }

}

export default App;
