import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

function BookList (){
  return <section className='bookList'>
    
    <Book/>
    <Book/>
    <Book/>

  </section>
}
const Book = ()=> {
  return  <article  className='book'>
<Image/>
<Title/>
<Author/>
  </article> 
}
const Image = ()=> <img src='https://m.media-amazon.com/images/I/71FvrzgqDqL._SY342_.jpg'
alt='Book title 1'
/>;
const Title = ()=> <h2>Parmar SSC Fatman | GK/GS Theory Book | English Medium </h2>;
const Author = ()=> {
  return <h2>Parmar Sir</h2>;
  
};







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);