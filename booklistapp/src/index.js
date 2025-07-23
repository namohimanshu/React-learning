import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import jpImage from './image/jp.jpg'

const image='https://m.media-amazon.com/images/I/71FvrzgqDqL._SY342_.jpg';
const title= 'Parmar SSC Fatman | GK/GS Theory Book | English Medium' ;
const author='Parmar Sir';

const someFunction = (param1, param2)=> {
  console.log(param1,param2)
}
someFunction(1+3,'ji')


/** 
function BookList (){
  return <section className='bookList'>
    
    <Book name="Himanshu"/>
    <Book name="Amit" number={123}/>
    <Book  testMessage="testing this"/>

  </section>
}
   props are used to pass data/object from parent to child 
  */

function BookList (){
  return <section className='bookList'>
    <Book author={author} title={title} img={image}/>
    <Book author={author} title={title} img={image}/>
    <Book author={author} title={title} img={image}/>

  </section>
}
/** 
const Book = (props)=> {
  console.log(props);

  return  <article  className='book'>
<img src= {props.img}
alt='Book title 1'
/>
<h2>{props.title}</h2>
<h2>{props.author}</h2>
  </article> 
}
*/
/** 
const Image = ()=> <img src={image}
alt='Book title 1'
/>;
const Title = ()=> <h2>{title}</h2>;
const Author = ()=> {
  return <h2>{author}</h2>;
  
};
*/
const Book = (props)=> {
  console.log(props);
const {img,title,author,children}=props
  return  <article  className='book'>
<img src= {img}
alt='Book title 1'
/>
<h2>{title}</h2>
<h2>{author}</h2>
{children}
  </article> 
}
const firstBook ={
  author:"JP morgan",
  title : "How to handle money ",
  image : "/image/jp.jpg",


}

/**
 * if image is inside public folder then path should be like this "/image/jp.jpg"
 * if inside src folder then we have to import this first import jpImage from './image/jp.jpg'
 * @returns 
 */

function NewBookList(){
 return <section className='NewBookList'>
  <Book author={firstBook.author} title={firstBook.title}  img={firstBook.image}>
    <p>uichreuivreuvruvui
    </p>
    <button>click me </button>
  </Book>

   <Book author={firstBook.author} title={firstBook.title}  img={firstBook.image}/>
    <Book author={firstBook.author} title={firstBook.title}  img={firstBook.image}/>
 </section>
}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
    <BookList />
    <NewBookList />
    </React.StrictMode>

 
);