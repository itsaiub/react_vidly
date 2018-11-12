import React, { Component, Fragment } from "react";
import "./App.css";
import Counters from "./component/Practice/Counters";
import Navbar from "./component/Practice/Navbar";
//import Movies from './component/Movies';

class App extends Component {
   state = {
      counters: [
         { id: 1, value: 0 },
         { id: 2, value: 0 },
         { id: 3, value: 0 },
         { id: 4, value: 0 }
      ]
   };

   handleIncrement = counterId => {
      const counters = [...this.state.counters];
      const index = counters.findIndex(c => c.id === counterId);
      counters[index] = { ...counters[index] };
      counters[index].value++;
      this.setState({ counters });
   };

   handleDecrement = counterId => {
      const counters = [...this.state.counters];
      const index = counters.findIndex(c => c.id === counterId);
      counters[index] = { ...counters[index] };
      counters[index].value--;
      this.setState({ counters });
   };

   handleDelete = counterId => {
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({ counters });
   };

   handleReset = () => {
      const counters = this.state.counters.map(c => {
         c.value = 0;
         return c;
      });
      this.setState({ counters });
   };

   render() {
      return (
         <Fragment>
            <Navbar
               totalCounters={this.state.counters.filter(c => c.value > 0).length}
            />
            <main className="container">
               <Counters
                  onReset={this.handleReset}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  onDelete={this.handleDelete}
                  counters={this.state.counters}

               />
            </main>
         </Fragment>
      );
   }
}

export default App;
