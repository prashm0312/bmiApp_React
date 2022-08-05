import {Form,Button} from 'react-bootstrap';
import {useState} from 'react';
function BmiForm({getData}) {
const [weight,setWeight]=useState("");
const [height,setHeight]=useState("");
const [alert,setAlert]=useState(false);
const onSubmit=(e)=>
{
  e.preventDefault();
  if(isNaN(weight) || isNaN(height))
  {
    console.log("wrong input")
    setAlert(true);
  }
  else{
    getData(weight,height)
    console.log(weight+" "+height)
    setAlert(false)
  }
}

/* let alertMessage;
if (alert)
alertMessage=<div className='alert alert-danger'>Pls enter valid data</div>
else
alertMessage=""; */
  return (
    <div>BmiForm
<Form onSubmit={onSubmit}>
  <Form.Group className="mb-3" controlId="weightId">
    <Form.Label>Weight</Form.Label>
    <Form.Control
     type="text"
      placeholder="Weight:"
      value={weight} 
      onChange={(e)=>setWeight(e.target.value)}/>      
  </Form.Group>

  <Form.Group className="mb-3" controlId="heightId">
    <Form.Label>Height</Form.Label>
    <Form.Control
     type="text" 
     placeholder="Height:" 
     value={height} 
     onChange={(e)=>setHeight(e.target.value)}/>
         
  </Form.Group>
  <Button type='submit'>Get Bmi</Button>
  </Form>
  {alert&&<div className='alert alert-danger'>Pls enter valid data</div>}
    </div>
  )
}

export default BmiForm


