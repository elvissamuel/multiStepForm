import React, { useContext, useState } from 'react'
import sideBarLg from '../src/assets/images/bg-sidebar-desktop.svg'
import sideBarBg from '../src/assets/images/bg-sidebar-mobile.svg'
import { ExclamationCircleIcon } from '@heroicons/react/20/solid'
import Step1 from './Step1'
import { FormContext } from './FormContext'
import classNames from 'classnames'

import Step2 from './Step2'
import Step3 from './Step3'
import Step5 from './Step5'

const Form = () => {

    const {step2, step3, step4, selectedPlan, selectedAddons, togglebtn} = useContext(FormContext);

  return (
    <div className='flex justify-center md:pt-10 relative'>
        <div className='flex flex-col md:flex-row gap-12 bg-white md:p-4 rounded-xl h-[612px] w-11/12 md:w-4/5 xl:w-3/5 '>
            <div className='w-screen bg-imgMobile md:bg-imgDesktop absolute md:relative top-0 left-0 md:w-1/3 md:h-full bg-no-repeat bg-cover pb-12 z-0'>
                {/* <img src={sideBarLg} alt="" /> */}
                <div className='flex md:flex-col gap-8 justify-center md:pl-4 lg:pl-12  p-6 md:pt-14'>
                    <div className='flex gap-2'>
                        <div className={classNames('h-8 w-8 rounded-[50%] bg-lime-100 border flex justify-center items-center text-slate-950 text-sm', {'text-zinc-50 bg-transparent font-bold' : step2||step3||step4})}>1</div>
                        <div>
                            <p className='hidden md:block  text-sm text-slate-400'>STEP 1</p>
                            <p className='hidden md:block  text-sm font-bold'>YOUR INFO</p>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className={classNames('h-8 w-8 rounded-[50%]  border flex justify-center items-center text-slate-50 text-sm', {'bg-lime-100 text-slate-950 font-bold' : step2,})}>2</div>
                        <div>
                            <p className='hidden md:block text-sm text-slate-400'>STEP 2</p>
                            <p className='hidden md:block text-sm font-bold'>SELECT PLANS</p>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className={classNames('h-8 w-8 rounded-[50%] border flex justify-center items-center text-slate-50 text-sm', {'bg-lime-100 text-slate-950 font-bold' : step3})}>3</div>
                        <div>
                            <p className='hidden md:block  text-sm text-slate-400'>STEP 3</p>
                            <p className='hidden md:block  text-sm font-bold'>ADD-ONS</p>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className={classNames('h-8 w-8 rounded-[50%] border flex justify-center items-center text-slate-50 text-sm', {'bg-lime-100 text-slate-950 font-bold' : step4})}>4</div>
                        <div>
                            <p className='hidden md:block  text-sm text-slate-400'>STEP 4</p>
                            <p className='hidden md:block  text-sm font-bold'>SUMMARY</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-black rounded-lg bg-white px-3 pt-2 md:pt-12 w-full md:w-2/3 pr-4 mt-20 md:mt-2 z-20'>

                
               {step2 ? <Step2 /> : step3 ? <Step3 /> : step4 ? <Step5 /> : <Step1 /> } 
            </div>
            
            {/* <Step1 /> */}
        </div>
    </div>
  )
}

export default Form