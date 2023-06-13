import './App.css';
import {Counter} from './Components/Counter';
import Firstcode from './Components/Firstcode';
import Message from './Components/Message';
import RepeatMessage from './Components/RepeatMessage';

// Javascript 
function App() {

  const students = [
    {
      nickName: "Yamuna",
      pic: "https://i.pinimg.com/280x280_RS/e4/86/86/e4868681b6e2cc4ce83c3b9a5d010b6c.jpg",
    },

    {
      nickName: "Vindya",
      pic: "https://i.pinimg.com/736x/59/37/5f/59375f2046d3b594d59039e8ffbf485a.jpg",
    },

    {
      nickName: "Sushil",
      pic: "https://themusclemedics.com/wp-content/uploads/2018/04/Circle-Profile-PNG.png",
    },
    {
      nickName: "Bharti",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuPyLBCLuRQ2EMf1Tdz8GRtdsy2KAGUcZgAg&usqp=CAU",
    },
    {
      nickName: "Shivam",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlGf1LsCO_POD_MWK0T40UPrQZfYOjgU0SvQ&usqp=CAU",
    },
  ];

  return (
    <div>
       {/* <Firstcode/> */}
       <Counter/>
    
    <div className="App">
     
      {students.map((element)=>{
        return <RepeatMessage nickNname={element.nickName} pic={element.pic}/>
      })}
      {/* <h1>Hello World</h1>
      <h2>Welcome to React</h2>
      
      {/* <Message 
      Nicname="Guvi"  
      image="https://akm-img-a-in.tosshub.com/lingo/itne/images/story/202206/guvi_logo.png"/>
   */}

    {/* <RepeatMessage
    Nicname="Guvi"  
    image="https://akm-img-a-in.tosshub.com/lingo/itne/images/story/202206/guvi_logo.png"
    
    />
    <RepeatMessage
    Nicname="XYZ"  
    image="https://akm-img-a-in.tosshub.com/lingo/itne/images/story/202206/guvi_logo.png"
    
    />
    <RepeatMessage
    Nicname="ABC"  
    image="https://akm-img-a-in.tosshub.com/lingo/itne/images/story/202206/guvi_logo.png"
    
    />
    <RepeatMessage
    Nicname="PQR"  
    image="https://akm-img-a-in.tosshub.com/lingo/itne/images/story/202206/guvi_logo.png"
    
    /> */}

</div>
</div>
    // Props =>Passing an Props
    //Properties

    // JSX is not HTML inside Javscript 
    // HTML Like syntax
    // JSX Javscript XML => it is an extension that allows us to write HTML like code within our JS Files

    // Advantages of JSX
    // Write Less Code
    // Less Repition
    // Readability
    // Developer Good Expereince.


    // class attribite=> reserved keyword for classes and objects so we wont use it in react
    // *****
    // className attribute
    // ******

    // class is an reseeverd for Classes (OOPS)

    
    
  );
}

export default App;
