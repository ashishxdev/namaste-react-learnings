import React from "react"
import ReactDOM from "react-dom/client"

// React.createElement => ReactElement - JS Object => (when we render it to a DOM it becomes an) HTMLElement(render)
// const heading = React.createElement("h1", {id: "heading"}, "This is a h1 tag")

// console.log(heading)

// JSX - is not HTML in JS - is HTML-like or XML-like syntax
// JSX (transpiled before it reaches the JS Engine) - Transpiled (Converted the code that browser can understand, react can understand) - Transpiled by PARCEL - Is parcel transpiling it by it's own - NO (it's done by Parcel package BABEL)

// JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => (when we render it to a DOM it becomes an) HTMLElement(render)

// React Element
const jsxheading = (<h1 id="heading" tabIndex="5">
    <p>Hello</p>
    This is a h1 tag using JSX
</h1>)

// const jsxheading = <h1 className="head" tabIndex="1">This is a h1 tag using JSX</h1>
console.log(jsxheading)

const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading)
root.render(jsxheading)


// React Components
// 1. Class based component - OLD - No one uses it now - uses javascript classes
// 2. Functional  component - NEW - uses javascript functions


// React Functional Component is just a normal javascript function which returns some piece of jsx

// All are same - Always component name should start with a capital letter
// const HeadingComponent = () => {
//     return <h1 className="heading">Namaste React Functional Component</h1>
// }
// const HeadingComponent2 = () => <h1 className="heading">Namaste React Functional Component</h1>;
// const HeadingComponent3 = () => (
// <h1 className="heading">Namaste React Functional Component</h1>)


// const HeadingComponent = () => (
//     <div id="container">
//     <h1 className="heading">Namaste React Functional Component</h1>
//     </div>
// )
// root.render(HeadingComponent) // We can't render it like this we can render only react elements like this not a component

// root.render(<HeadingComponent/>)


// const Title = ()=> (
//     <h1 className="head" tabIndex="5">
//     Namaste React using JSX
//     </h1>)
// Both are same 
// const Title = function(){
//     return (<h1 className="head" tabIndex="5">
//     Namaste React using JSX
//     </h1>)
// }

// const HeadingComponent = () => (
//     <div id="container">
//     {/* Component Composition */}
//     <Title/>
//     <h1 className="heading">Namaste React Functional Component</h1>
//     </div>
// )

// root.render(<HeadingComponent/>)




// How to put react element to our component
// const elem = <span>React Element</span>
// const title = (
//     <h1 className="head" tabIndex="5">
//     {elem}
//     Namaste React using JSX
//     <HeadingComponent/>
//     </h1>
//     )
// const number = 1000;

// const HeadingComponent = () => (
//     <div id="container">
//         {title}
//         {/* {we can run any js code inside this {}} */}
//         <h2>{number + 2000}</h2>
//         {console.log("It will work too")}
//         <h1 className="heading">Namaste React Functional Component</h1>
//     </div>
// )

// root.render(<HeadingComponent/>)


// how to render a component inside a react element
// const elem = <span>React Element</span>

// const HeadingComponent = () => (
//     <div id="container">
//         <h1 className="heading">Namaste React Functional Component</h1>
//     </div>
// )
// const title = (
//     <h1 className="head" tabIndex="5">
//     {elem}
//     Namaste React using JSX
//     <HeadingComponent/>
//     </h1>
//     )
// root.render(title)


// Cool Things
// 1.
// const title = (
//     <h1 className="head" tabIndex="5">
//     Namaste React using JSX
//     </h1>
//     )

// const data = api.getData() // Suppose this is a bad data malicious data

// const HeadingComponent = () => (
//     <div id="container">
//         {data}
//         <h1 className="heading">Namaste React Functional Component</h1>
//     </div>
// )

// root.render(<HeadingComponent/>)


// 2. 
const Title = () => (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX
    </h1>
)

const HeadingComponent = () => (
    <div id="container">
        {/* these 3 things are same */}
        {Title()}
        <Title />
        <Title></Title>
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
)

root.render(<HeadingComponent />)