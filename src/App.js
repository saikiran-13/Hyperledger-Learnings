
import './App.css';
import {useState,useEffect} from "react"

function App() {
  const [data,setData] = useState([])
  useEffect(()=>{
    async function sendData(){
      let res = await fetch('http://localhost:5000')
      res = await res.json()
      console.log(res)
      const arr = [res]
    
      setData(arr)
    }
    sendData()
  },[])
  // console.log(data)
  return (
    <div className="App">
      <h1>{data.map((ele,ind)=>{
        return <div key={ind}>{ele.output}</div>
      })}</h1>
    </div>
  );
}

export default App;
