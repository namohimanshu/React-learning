import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
const image='https://m.media-amazon.com/images/I/71FvrzgqDqL._SY342_.jpg';
const title= 'Parmar SSC Fatman | GK/GS Theory Book | English Medium' ;
const author='Parmar Sir'
const someFunction = (param1, param2)=> {
  console.log(param1,param2)
}
someFunction(1+3,'ji')






function BookList (){
  return <section className='bookList'>
    
    <Book name="Himanshu"/>
    <Book name="Amit" number={123}/>
    <Book  testMessage="testing this"/>

  </section>
}
const Book = (props)=> {
  console.log(props);
  return  <article  className='book'>
<img src={image}
alt='Book title 1'
/>
<h2>{title}</h2>
<h2>{author}</h2>
  </article> 
}
/** 
const Image = ()=> <img src={image}
alt='Book title 1'
/>;
const Title = ()=> <h2>{title}</h2>;
const Author = ()=> {
  return <h2>{author}</h2>;
  
};
*/







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);