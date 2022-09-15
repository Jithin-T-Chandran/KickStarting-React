import './App.css';
import FormComponent from './Components/FormComponent';

function App() {
  const saveDataHandler =(formData)=>{
    const allData = {
      ...formData,
      id:Math.random().toString()
    }
    console.log(allData)
  }
  
  return (
    <div className="App">
     <FormComponent onSaveData={saveDataHandler}/>
    </div>
  );
}

export default App;
