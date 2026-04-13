// const heading = React.createElement(
//     "h1", // type
//     { id: "heading", xyz: "abc"}, // attribute and props too
//     "Hello World from React!") // children and props too

// console.log(heading) // give heading as an object

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading) // heading is a react element which is a js object

// when we done React.createElement it creates a js object it's not an h1 tag
// render is converting this object to h1 tag and putting it in div

// How to create a nested structure in react
/* <div id="parent">
        <div className="child">
            <h1>I'm H1 Tag</h1>
            <h2>I'm H2 Tag</h2>
        </div>
        <div className="child2">
            <h1>I'm H1 Tag</h1>
            <h2>I'm H2 Tag</h2>
        </div>
    </div>
*/
// React.createElement(Object) => HTML(Browser Understands)

const parent = React.createElement(
    "div",
    { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I'm H1 Tag"),
        React.createElement("h2", {}, "I'm H2 Tag")
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I'm H1 Tag"),
        React.createElement("h2", {}, "I'm H2 Tag")
    ])
])

// JSX

console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)
