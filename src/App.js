import React, {useState} from 'react'
import './App.css'
import Pass from './Pass'
function App() {

  const [input, setInput] =useState('')
  const [textArea , setTextarea]= useState('')
  const [selected, setSelected] = useState('BCA')
  const [check, setCheck] = useState([])
  const [radio , setRadio] = useState('');
  const [user, setUser] = useState([{id:Math.random(), name:'input', bio:'textArea', course:'selected', hobbies:['check'], gender:'Male'}])
  
  
  const handleChange=(e)=>{
    if(e.target.checked===true){
      setCheck([...check, e.target.value])
    }
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setUser([...user, {id:Math.random(), name:input, bio:textArea, course:selected, hobbies:check, gender:radio}])
    
  }
console.log(user)
  return (
    <div >
      <div className="form__app">
      <form onSubmit={handleSubmit}>
  <label>
    Name:
    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
  </label><br/>
  <label>
    Bio:
  </label>
  <textarea value={textArea} onChange={(e)=>setTextarea(e.target.value)}>
  </textarea>
<br/>
<label>Couses: </label>
<select value={selected} onChange={(e)=>setSelected(e.target.value)}>
  <option value="BCA">BCA</option>
  <option value="BA">BA</option>
  <option value="MBA">MBA</option>
  <option value="CA">CA</option>
</select>
<br/>
<label>
          hobbies:</label>  <br/>
          <label>Cricket : </label>
          <input value="cricket" name="cricket" onChange={handleChange} type="checkbox"/>
          <label>Football : </label>
            <input value="Football"  onChange={handleChange} type="checkbox"/>
          <label>Soccer : </label>
            <input value="Soccer" onChange={handleChange} type="checkbox" />
<br/>
<label>
          Gender:</label><label>Male : 
          <input value="Male" onChange={(e)=>setRadio(e.target.value)} name="gender" type="radio"/>
            </label>
            <label>Female : 
          <input value="Female" onChange={(e)=>setRadio(e.target.value)} name="gender" type="radio"/>
          
          </label>
<br/>
  <input type="submit" value="Submit" />
</form>
</div>
<Pass user={user}/>

    </div>
  )
}

export default App
