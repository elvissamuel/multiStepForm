import React, { useContext, useState } from 'react'
import arcade from './assets/images/icon-arcade.svg';
import advanced from './assets/images/icon-advanced.svg';
import pro from './assets/images/icon-pro.svg';
import classNames from 'classnames'
import { FormContext } from './FormContext';

const Step2 = () => {
    const [yearly, setYearly] = useState(false);
    const {toggleBtn, setToggleBtn, step3, setStep3, setStep2, addPlan, selectedPlan} = useContext(FormContext);

  return (
    <div>
        <h2 className='text-2xl font-bold'>Select Your Plan</h2>
                <p className='text-base text-slate-600'>You have the option of monthly or yearly billing</p>

                <div className='flex flex-col md:flex-row gap-4 my-8 pb-20 relative w-full '>
                    <div className={classNames('flex gap-8 md:flex-col border px-4 py-4 w-full md:w-1/3 rounded-lg cursor-pointer transition-all duration-500', {'border-slate-900' : selectedPlan.plan === 'Arcade'})} onClick={()=>addPlan('Arcade', toggleBtn ? '$90/yr' : '$9/mo')}>
                        <div className='md:mb-8'>
                            <img src={arcade} alt="" />
                        </div>
                        <div>
                            <h2 className='text-base font-bold'>Arcade</h2>
                            <p className='text-base text-slate-600'>{toggleBtn ? '$90/yr' : '$9/mo'}</p>
                            {toggleBtn && <p className='text-base'>2 months free</p>} 
                        </div>
                    </div>
                    
                    <div className={classNames('flex gap-8 md:flex-col border px-4 py-4 w-full md:w-1/3 rounded-lg cursor-pointer transition-all duration-500', {'border-slate-900' : selectedPlan.plan === 'Advanced'})} onClick={()=>addPlan('Advanced', toggleBtn ? '$120/yr' : '$12/mo')}>
                        <div className='md:mb-8'>
                            <img src={advanced} alt="" />
                        </div>
                        <div>
                            <h2 className='text-base font-bold'>Advanced</h2>
                            <p className='text-base text-slate-600'>{toggleBtn ? '$120/yr' : '$12/mo'}</p>
                            {toggleBtn && <p className='text-base'>2 months free</p>} 

                        </div>
                    </div>

                    <div className={classNames('flex gap-8 md:flex-col border px-4 py-4 w-full md:w-1/3 rounded-lg cursor-pointer transition-all duration-500', {'border-slate-900' : selectedPlan.plan === 'Pro'})} onClick={()=>addPlan('Pro', toggleBtn ? '$150/yr' : '$15/mo')}>
                        <div className='md:mb-8'>
                            <img src={pro} alt="" />
                        </div>
                        <div>
                            <h2 className='text-base font-bold'>Pro</h2>
                            <p className='text-base text-slate-600'>{toggleBtn ? '$150/yr' : '$15/mo'}</p>
                            {toggleBtn && <p className='text-base'>2 months free</p>} 

                        </div>
                    </div>

                    <div className='absolute bottom-0 flex justify-center items-center gap-4 w-full h-14 bg-slate-100'>
                        <span className='text-base'>Monthly</span>
                        <div onClick={() => setToggleBtn(!toggleBtn)} className={classNames('flex cursor-pointer w-14 h-7 scale-75 bg-slate-900 rounded-full transition-all duration-500', {'bg-slate-400': toggleBtn, })}>
                            <span className={classNames('h-7 w-7 bg-red-600 rounded-full transition-all duration-500', {'bg-black ml-7': toggleBtn,})}></span>
                        </div>
                        <span className='text-base'>Yearly</span>
                    </div>
                </div>

                <div className='mb-8'>  
                <button onClick={() => setStep2(false)} className='md:mt-16 border py-2 px-5 rounded-md bg-transparent text-sky-700 text-base'>Go Back</button>
                <button onClick={() => {setStep3(true); setStep2(false)}} className='md:mt-16 float-right py-2 px-5 rounded-md bg-sky-700 text-slate-100 text-base'>Next Step</button>
                </div>
    </div>
  )
}

export default Step2