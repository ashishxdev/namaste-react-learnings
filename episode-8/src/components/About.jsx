import React from 'react' // React.Component comes from this
// we can do it like this too instead of using React.component we can destructure it like this
import { Component } from 'react'
import User from './User'
import UserClass from './UserClass'

// // Class Based Component
// class About extends React.Component{
//   constructor(props){
//     super(props);
//     console.log("Parent Constructor")
//   }

//   componentDidMount(){
//       console.log("Parent Component did Mount")
//   }

//   render(){
//     console.log("Parent Render")
//     return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React Episode 7</h2>
//       {/* <User name={"Aashish Rana (function)"}/> */}
//       <UserClass name={"Aashish Rana (class)"} location={"Tehri Garhwal (class)"}/>
//       {/* Now we have 2 instances (Using 2 instance of same class) - Now tell how they will be called*/}
//       <UserClass name={"Elon Musk"} location={"USA)"}/> 
//     </div>
//   )
//   }
// }

// Class Based Component
class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Episode 7</h2>
        <UserClass name={"Aashish Rana (class)"} location={"Tehri Garhwal (class)"} />
      </div>
    )
  }
}

// Functional Component
// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React Episode 7</h2>
//       {/* <User name={"Aashish Rana (function)"}/> */}
//       <UserClass name={"Aashish Rana (class)"} location={"Tehri Garhwal (class)"}/>
//     </div>
//   )
// }

export default About
