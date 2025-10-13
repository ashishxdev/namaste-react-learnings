// import React from 'react'

// class UserClass extends React.Component{
//     constructor(props){
//         super(props);
//         // console.log(props)

//         this.state = {
//             count: 0,
//             count2: 2,
//         }
//         console.log(this.props.name + "Child Constructor")
//     }

//     componentDidMount(){
//         console.log(this.props.name + "Child Component did Mount")

//         // Api call
//     }

//     render(){
//         // De-structuring
//         const { name, location} = this.props;
//         const { count, count2 } = this.state;
//         console.log(this.props.name + "Child Render")

//         return (
//         <div className="user-card">
//             {/* <h1>Count = {this.state.count}</h1> */}
//             <h1>Count = {count}</h1>
//             <h1>Count = {count2}</h1>

//             <button onClick={()=>{
//                 // NEVER UPDATE STATE VARIABLES DIRECTLY 
//                 // this.state.count = this.state.count + 1; // This is wrong

//                 this.setState({
//                     count: this.state.count + 1,
//                     count2: this.state.count2 + 1
//                 })
//             }}>Increase Count</button>

//             <h2>Name: {name}</h2>
//             <h3>Location: {location}</h3>
//             <h4>Contact: @ashishrana2004</h4>
//         </div>)
//     }
// }

// export default UserClass

import React from 'react'

class UserClass extends React.Component{
    constructor(props){
        super(props);
        // console.log(props)

        this.state = {
            userinfo: {
                name: "Dummy",
                location: "Default"
            }
        }
    }

    async componentDidMount(){
        // Api call
        const data = await fetch("https://api.github.com/users/ashishxdev")
        const json = await data.json();
        console.log(json)

        this.setState({
            userinfo: json,
        })
    }

    componentDidUpdate(){
        console.log("Component did Update")
    }

    // when i move to another page
    componentWillUnmount(){
        console.log("Component did unmount")
    }
    
    render(){
        // De-structuring
        const { name, location, avatar_url} = this.state.userinfo;
        // debugger;
        // First component renders with dummy data 
        return (
        <div className="user-card">
            <img src={avatar_url} />
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @ashishrana2004</h4>
        </div>)
    }
}

export default UserClass