import React, { useContext, useState } from 'react'
import { FormContext } from './FormContext'

const Step1 = () => {

   const {name, setName, email, setEmail, number, setNumber, handleValidation, error} = useContext(FormContext);

  return (
    
        <div className='px-4 mt-6 my-auto'>
                <h3 className='text-black text-3xl font-bold'>Personal Info</h3>
                <p className='text-slate-500 text-base'>Please provide your name, email address and phone number.</p>
                <form action="" onSubmit={handleValidation} className='pt-12'>
                    <div className='mb-4'>
                        <div className='flex justify-between items-center'>
                            <label htmlFor="name" className="block text-base font-medium leading-6 text-gray-900">
                                Name
                            </label>

                            {error&&name==='' ? <span className='text-red-500 text-base'>This field is required</span> : '' }
                        </div>
                        <div>
                            <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            type="text"
                            name="name"
                            id="name"
                            className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Enter your name"
                            />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <div className='flex justify-between items-center'>
                            <label htmlFor="email" className="block text-base font-medium leading-6 text-gray-900">
                                Email Address
                            </label>

                            {error && email === '' ? (
                                <span className='text-red-500 text-base'>This field is required</span>
                                ) : email !== '' && !email.includes('@') ? (
                                <span className='text-red-500 text-base'>Invalid Email</span>
                                ) : null}
                        </div>
                        <div>
                            <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            name="email"
                            id="email"
                            className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Enter you email address"
                            />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <div className='flex justify-between items-center'>
                            <label htmlFor="number" className="block text-base font-medium leading-6 text-gray-900">
                                Phone Number
                            </label>

                            {error&&number==='' ? <span className='text-red-500 text-base'>This field is required</span> : '' }
                        </div>
                        <div>
                            <input
                            onChange={(e) => setNumber(e.target.value)}
                            value={number}
                            type="text"
                            name="number"
                            id="number"
                            className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Enter your phone number"
                            />
                        </div>
                    </div>
                    <button type='submit' className='mt-16 float-right py-2 px-5 rounded-md bg-sky-700 text-slate-100 text-base'>Next Step</button>
                </form>
            </div>
  )
}

export default Step1