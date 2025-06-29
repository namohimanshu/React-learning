import React from "react";
import ReactDOM from 'react-dom/client'

// function greeting (){
//     return <h2>my component</h2>
// }

// function Greeting (){
//     return React.createElement('h2',{},'Hello');
// }
// function Greeting (){
//     return React.createElement(
//         'div',{},
//         React.createElement('h4',{},"hello")
//     );
// }

// function Greeting(){
//     return <div>
//         <h2>Hi guys</h2>
//         <p> React js</p>
//     </div>
// }

function Greeting(){
    return <div>
       <Message/>
       <Person/>
    </div>
}

const Person = () => <h2>this is person</h2>;
const Message = () => {
    return <h2> this is message</h2>
}
const root= ReactDOM.createRoot
(document.getElementById('root'));
root.render(<Greeting/>);