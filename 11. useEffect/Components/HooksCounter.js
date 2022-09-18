import React,{useState,useEffect} from 'react'

function HooksCounter() {
    const [count,setCount] = useState(0);
    const [name,setName] = useState('');
    useEffect(()=>{
        console.log('UseEffect updating document title');
        document.title = `You clicked ${count} times`;
    },[count]);

    const onClickhandler = () =>{
        setCount(count + 1);
    }
    const onChangehandler = (event) =>{
        setName(event.target.value);
    }
  return (
    <div>
        <input type="text" value={name} onChange={onChangehandler}/>
        <button type='button' onClick={onClickhandler}>Clicked {count} times</button>
        </div>
  )
}

export default HooksCounter