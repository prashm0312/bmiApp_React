import BmiForm from './bmiDemo/BmiForm';
import BmiScore from './bmiDemo/BmiScore';
import {useState} from 'react'

function App() {
  const [bmi, setBmi] = useState(0);
const [bmiType, setBmiType] = useState("Not Calculated");
const onFormSubmit = (w, h) => {
    let b = calculateBmi(w, h);
  setBmi(b);
  console.log(bmi)
  let bType = weightType(b);
  setBmiType(bType);
};
const calculateBmi = (w, h) => (w / (h * h)).toFixed(2);
const weightType = (bmi) => {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (18.5 < bmi && bmi < 24.9) {
    return "Normal";
  } else if (24.9 < bmi && bmi < 29.9) {
    return "Over Weight";
  } else if (29.9 < bmi && bmi < 34.9) {
    return "Obesity Class 1";
  } else if (34.9 < bmi && bmi < 39.9) {
    return "Obesity Class II";
  } else if (bmi > 39.9) {
    return "Obesity Class III";
  }
};

  return (
    <div className="App">
     <BmiForm getData={onFormSubmit}/>
     <BmiScore bmiVal={bmi} bmiType={bmiType}/>
     
    </div>
  );
}

export default App;
