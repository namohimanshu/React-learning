import React from 'react';
import ReactDOM from 'react-dom/client';


function BookList (){
  return <div>
    <h2>BookList App</h2>
  </div>
}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);