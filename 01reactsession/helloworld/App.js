
// document.createElement

//create an element is the core thing of React.
const heading=React.createElement('h1',{id:"title"},"Hello World from React")

//create an root=>job of ReactDOM
const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(heading)
console.log(heading)
// it returns an object
// h1 is not an h1 tag , it is an object
// React h1 element

{/* <div>
        <div>
            <h1></h1>
            <h1></h1>
        </div>
    </div> */}


const parent=React.createElement('div',{id:"parent"},
React.createElement("div",{id:"child"},
[
    React.createElement("h1",{},"I am h1 tag"),
    React.createElement("h2",{},"I am h2 tag"),

]))

console.log(parent)

const root1=ReactDOM.createRoot(document.getElementById('root'))
root1.render(parent)

{/* <div>
        <div>
            <h1></h1>
            <h1></h1>
        </div>
         <div>
            <h1></h1>
            <h1></h1>
        </div>
    </div> */}

    // JSX in React
    // Logic+view Part over there and it doesnt complicate
    