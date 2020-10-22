import React, {useState} from 'react'

function App() {

  const [input, setInput] =useState('')
  const [textArea , setTextarea]= useState('')
  const [selected, setSelected] = useState('grapefruit')
  const [checkone, setCheckOne] = useState('')
  const [checktwo, setChecktwo] = useState('')
  const [checkthree, setCheckthree] = useState('')
  const handleSubmit=(e)=>{
    e.preventDefault();
    alert(input +" "+ textArea + " " + selected )
  }
  return (
    <div>
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
<label>Fruits: </label>
<select value={selected} onChange={(e)=>setSelected(e.target.value)}>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
<br/>
<label>
          hobbies:</label>  <br/>
          <label>Cricket : </label>
          <input type="checkbox"/>
          <label>Football : </label>

            <input value="" type="checkbox"/>
          <label>Soccer : </label>

            <input type="checkbox" />
            


<br/>
<label>
          Gender:</label><label>Male : 
          <input
        name="gender"
            type="radio"/>
            </label>
            <label>Female : 
          <input name="gender"
            type="radio"/></label>
<br/>
  <input type="submit" value="Submit" />
</form>
    </div>
  )
}

export default App
