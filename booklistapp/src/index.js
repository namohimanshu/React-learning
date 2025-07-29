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
const secondBook = {
  author:"Himanshu Singh",
  title :"How not to be poor",
  image : "/image/mybook1.avif",
}
/** now use many book in a list  */
const mybookList = [
  {
     author:"JP chase",
  title : "How to handle money ",
  image : "/image/jp.jpg",
  id: 1,
  },
  {
     author:"Himanshu Singh",
  title :"How not to be poor",
  image : "/image/mybook1.avif",
  id:2,
  }
]
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
     <Book author={secondBook.author} title={secondBook.title}  img={secondBook.image}/>
 </section>
}
/** map method - creates a new Array from calling a function for every array element  */
const names= ['jhnon','peter'];
const newNames= names.map((name)=>{
  console.warn(name);
  return <h1>{name}</h1>
})
//
// function MyBookList (){
//   return <section className='MYBookList'>
// {/* <h1>{newNames}</h1> */}
// {
//   mybookList.map((book)=>{
//      const {image,title,author,id}=book
//     console.log(book)
//     return (

//       <Book img= {image} author={author} title={title } key ={id}></Book>

//     );
//   })
// }
//   </section>
// }
//////
/** key Prop  */

// const MyBookList = ()=>{
//   return (
//     <section className='MyBookList'>
//       {
//         mybookList.map((book)=>{
//           return <MyBook book={book} key={book.id} />
//         })
//       }
//     </section>
//   )
// }

//now using spread operator 
const MyBookList =()=> {
  return <section className='MyBookList'>
     <MyEvent/>
    { mybookList.map((book) => {
      return <MyBook {...book} key={book.id}/>
    })

    }
  </section>
}
//event handling in React
const MyEvent = () =>{
  const handleFormInput = ()=>{
    console.log('handle form input');
  };
  const handleButtonClick = ()=>{
    alert('handle button input');
  };
return (
<section className='myEvent'>
  <form>
    <h2>example form</h2>
    <input type='text' name="enter" onChange={handleFormInput} style={{margin:'1rem 0'}} />
    <button onClick={handleButtonClick}>click me </button>
  </form>
</section>
);
};
const MyBook = (props)=> {
  console.log('making a comp for reuse ')
  
  const {image,author,title,id}=props
  return <section className='MyBook'>
    <h2>test purpose</h2>
    <img src={image} alt={title}/>
    <h2>{title}</h2>
    <h4>{author}</h4>
  </section>

}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
    <BookList />
    <NewBookList />
    <MyBookList/>
    </React.StrictMode>

 
);