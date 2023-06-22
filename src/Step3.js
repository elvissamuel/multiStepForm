import React, { useContext, useState } from 'react'
import { FormContext } from './FormContext';

const Step3 = () => {
    const [isChecked, setIsChecked] = useState(false);
  const {setStep2, setStep3, setStep4, selectedAddons, addAddons, toggleBtn} = useContext(FormContext);
  const [onlineChecked, setOnlineChecked] = useState(false);
  const [largerChecked, setLargerChecked] = useState(false);
  const [customChecked, setCustomChecked] = useState(false);


  return (
    <div>
         <h2 className='text-2xl font-bold'>Pick Add-ons</h2>
                <p className='text-slate-600'>Add-ons help enhance your gaming experience</p>

                <div className='flex justify-between items-center border rounded-lg p-5 mt-8'>
                    <div className='flex items-center gap-6'>
                        <input type="checkbox" checked={selectedAddons.some((addon) => addon.title === 'Online Service')} onChange={() => addAddons('Online Service', `${toggleBtn ? '+$10/yr' : '+$1/Mo'}`)} name="" id="" />
                        <div>
                            <h3 className='text-base font-bold'>Online Service</h3>
                            <p className='text-base text-slate-600'>Access to multiplayer games</p>
                        </div>
                    </div>
                    <p>{toggleBtn ? '+$10/yr' : '+$1/Mo'}</p>
                </div>

                <div className='flex justify-between items-center border rounded-lg p-5 mt-2' >
                    <div className='flex items-center gap-6'>
                        <input type="checkbox" checked={selectedAddons.some((addon) => addon.title === 'Larger Storage')} onChange={() => addAddons('Larger Storage', `${toggleBtn ? '+$20/yr' : '+$2/Mo'}`)} name="" id="" />
                        <div>
                            <h3 className='text-base font-bold'>Larger Storage</h3>
                            <p className='text-base text-slate-600'>Extra 1TB of cloud save</p>
                        </div>
                    </div>
                    <p>{toggleBtn ? '+$20/yr' : '+$2/Mo'}</p>
                </div>

                <div className='flex justify-between items-center border rounded-lg p-5 mt-2'>
                    <div className='flex items-center gap-6'>
                        <input type="checkbox" checked={selectedAddons.some((addon) => addon.title === 'Customizable Profile')} onChange={() => addAddons('Customizable Profile', `${toggleBtn ? '+$20/yr' : '+$2/Mo'}`)} name="" id="" />
                        <div>
                            <h3 className='text-base font-bold'>Customizable Profile</h3>
                            <p className='text-base text-slate-600'>Custom theme on your profile</p>
                        </div>
                    </div>
                    <p>{toggleBtn ? '+$20/yr' : '+$2/Mo'}</p>
                </div>

                <div className='mb-8'>  
                <button onClick={() => {setStep3(false); setStep2(true)}} className='mt-4 md:mt-16 border py-2 px-5 rounded-md bg-transparent text-sky-700 text-base'>Go Back</button>
                <button onClick={() => {setStep4(true); setStep3(false)}} className='mt-4 md:mt-16 float-right py-2 px-5 rounded-md bg-sky-700 text-slate-100 text-base'>Next Step</button>
                </div>
    </div>
  )
}

export default Step3