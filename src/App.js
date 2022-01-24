import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Card from './components/Card';
import CardList from './components/CardList';
import 'tachyons'



class App extends React.Component {
  constructor(){
    super();
    this.state ={
      arr:[]
    }
  }
  render(){
return(
    <CardList/>
)
  }
  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(data =>{
  //     this.setState({arr:data})
  //   })
  // }
  // render(){
  //   const {arr} = this.state;
  //   return(
  //     <>
  //     {
  //       arr.map((item, i) =>{
  //         return <Card user={item}/>
  //       })
  //     }
  //     </>
  //   )
  // }
}

// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       counter:0
//     }
//   }
//   componentDidMount(){

//   }

//   addOne = () => {
//     this.setState({counter:this.state.counter+1});
//   }

//   render(){
//     return (
//       <div className="App">
//         <header className="App-header">
//           <button onClick={this.addOne}> Add One </button>
//           {this.state.counter}
//         </header>
//       </div>
//     );
//   }
// }

export default App;
