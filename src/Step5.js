import React, { useContext, useState } from 'react'
import { FormContext } from './FormContext';
import thankYou from './assets/images/icon-thank-you.svg'



const Step5 = () => {
    const {togglebtn, selectedAddons, selectedPlan, setStep2, setStep4, setStep3} = useContext(FormContext)
    const [display, setDisplay] = useState(false)

    const planPrice = Number(selectedPlan.price.match(/\d+/)[0]);

  return (
    <div>
    {display ? 
                <div className='text-center pt-16'>
                    <div className='mx-auto flex justify-center items-center'>
                        <img src={thankYou} alt="" />
                    </div>
                    <div>
                        <p className='text-3xl font-bold my-4'>Thank you!</p>
                        <p className='text-slate-600 text-lg'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@pacessteres.com</p>
                    </div>
                </div> 
            :
            <div>
                <h2 className='text-3xl text-slate-900 font-bold'>Finishing Up</h2>
                    <p className='text-base text-slate-600'>Double-check everything looks okay before confirming</p>
                    <div className=''>
                        <div className='bg-slate-100 rounded-lg p-6 flex flex-col gap-y-5 mb-6 mt-8'>
                            <div className='flex justify-between items-center pb-8 border-b-2'>
                                <div>
                                    <p className='text-base font-bold'>{selectedPlan.plan} ({togglebtn ? 'Yearly' : 'Monthly'})</p>
                                    <p className='underline text-slate-500 text-base cursor-pointer' onClick={()=>{setStep4(false); setStep2(true)}}>Change</p>
                                </div>
                                <p className='text-base font-bold'>{selectedPlan.price}</p>
                            </div>
                            <div>
                                {selectedAddons.map((addon) =>{
                                    return(
                                        <div className='flex justify-between text-base'>
                                            <p>{addon.title}</p>
                                            <p>{addon.price}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='flex justify-between px-4 text-base'>
                            <p>Total(per {togglebtn ? 'year' : 'month'})</p>
                            <p className='font-bold'>+${planPrice + selectedAddons.reduce((count, card) => {
                                const numericValue = Number(card.price.match(/\d+/)[0]);
                                return count + numericValue}, 0)}/{togglebtn ? 'yr' : 'mo'}</p>
                        </div>
                        <div className='mb-8 flex justify-between'>
                            <button onClick={()=>{setStep4(false); setStep3(true)}} className='block mt-16 border py-2 px-5 rounded-md bg-transparent text-sky-700 text-base'>Go Back</button>
                            <button onClick={() => setDisplay(true)} className='block mt-16 py-2 px-5 rounded-md bg-sky-700 text-slate-100 text-base'>Confirm</button>
                        </div>
                    </div>
            </div> }

                
    </div>
  )
}

export default Step5