import { useState } from 'react';
import Form from './Form';
import { FormContext } from './FormContext';



function App() {
  const [name, setName] = useState('');
    const [email, setEmail] = useState(''); 
    const [number, setNumber] = useState('');
    const [error, setError] = useState(false);
    const [error2, setError2] = useState(false);
    const [step2, setStep2] = useState();
    const [step3, setStep3] = useState();
    const [step4, setStep4] = useState();
    const [selectedPlan, setSelectedPlan] = useState([]);
    const [selectedAddons, setSelectedAddons] = useState([]);
    const [toggleBtn, setToggleBtn] = useState(false);

    

    const addAddons = (title, price) =>{
      
      setSelectedAddons(prev => {
        const existing = prev.some((addon) => addon.title === title);
        if(existing){
          return prev.filter((addon) => addon.title !== title)
        } else{
          return [...prev, {title, price}]
        }
      })
    }
    const removeAddons = (title) =>{
      setSelectedAddons(() => selectedAddons.filter((card) => card.title === title))
    }

    const addPlan = (plan, price) => {
      setSelectedPlan({plan, price})
    }


    // const planPrice = Number(selectedPlan.price.match(/\d+/)[0]);


    const handleValidation = (e) => {
        e.preventDefault();
        if(name === '' || email === '' || number === ''){
            setError(true)
        }  else if(email.includes('@') && name.length > 0 && number.length > 0){
          setStep2(true)
      } else{
          setStep2(false)
      } 
    }

    const contextValues = {name, setName, email, setEmail, number, toggleBtn, setToggleBtn, setNumber, handleValidation, error, error2, step2, setStep2, step3, setStep3, step4, setStep4, addPlan, selectedPlan, selectedAddons, addAddons, removeAddons}
  return (
    <FormContext.Provider value={contextValues}>
      <div className='bg-slate-100 w-full h-screen pb-6'>
        <Form />
      </div>
    </FormContext.Provider>
  );
}

export default App;
