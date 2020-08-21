import React, { Component } from 'react';
import './App.css';
import List from './List';


class App extends Component { // class or function (export same line on function)
  static defaultProps = { //if u want to initialize only once. App wa=new App()
    store: {
      lists: [],
      allCards: {},
    }
  };

  render() {
    const { store } = this.props  //destructuring
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;


// Index is calling the App Component
// App is calling the List Component
// List is calling the Card Component


// function App({store}) {
//   return (
//     <div className="App">
//       <h1>
//         My Application
//       </h1>
//       <div className='App-list'>
//         {
//           store.lists.map((value) =>
//           {
//             return <List></List>
//           }
//           )
//         }
//       </div>
//     </div>
//   );
// }

