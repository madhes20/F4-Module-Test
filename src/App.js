
import React from 'react';
import axios from 'axios';
import image1 from './image.png'
import './App.css';

function App() {

  const [datas, setdatas] = React.useState([]);

  React.useEffect(()=>{
    const load = async()=>{
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setdatas(res.data)
    }
    load();
  },[]);
  
  return (
    <div className="App">
      <div className='navBar'>
        <h4>Social Media App</h4>
      </div>
      {
        datas.length>0 && 
          <div className='carts'>
            {
              datas.map((data)=>{
                return <div className='cart' key={data.id}>
                  <img src={image1} alt='img not found'/>
                  <p><b>UserId: </b>{data.userId}</p>
                  <p><b>Title: </b>{data.title}</p>
                  <p><b>Body: </b>{data.body}</p>
                  
                </div>
              })
            }
          </div>
      }
    </div>
  );
}

export default App;
