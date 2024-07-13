import React from 'react'

function BookNow() {
  return (
    <div className='booknow min-h-screen h-full'>
        <h1 className='py-14 mt-32 bookHeroText text-center'>Booking Page</h1>
        <div className='w-full h-full flex justify-center items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 px-4 gap-6'>
            <div className='shadow-lg bookBox1 flex flex-col justify-center items-center'>
                <h2 className='subHeadings w-full mb-5 px-7'>Selected Horse</h2>

                <div className='grid grid-cols-2 gap-4'>
                    <label className='rounded-lg gap-2 smallBox flex justify-center items-center'>
                    <input type='radio' name='horse'/>
                    <span>Horse1</span>
                    </label>
                    
                    <label className='rounded-lg gap-2 smallBox flex justify-center items-center'>
                    <input type='radio' name='horse'/>
                    <span>Horse2</span>
                    </label>
                    
                    <label className='rounded-lg smallBox gap-2 flex justify-center items-center'>
                    <input type='radio' name='horse'/>
                    <span>Horse3</span>
                    </label>

                    <label className='rounded-lg smallBox gap-2 flex justify-center items-center'>
                    <input type='radio' name='horse'/>
                    <span>Horse4</span>
                    </label>
                </div>

            </div>

            <div className='shadow-lg bookBox1 flex flex-col justify-center items-center'>
                <h2 className='subHeadings w-full mb-5 px-7'>Personal Info</h2>

                <div className='grid grid-cols-2 gap-4'>
                <input type='text' className='rounded-lg outline-none border-none smallBox flex px-3 justify-center items-center' placeholder='Name'/>
                <input type='text' className='rounded-lg px-3 smallBox outline-none border-none flex justify-center items-center' placeholder='Email'/>
                <input type='text' className='rounded-lg px-3 smallBox flex justify-center outline-none border-none items-center' placeholder='Phone No.'/>
                <input type='text' className='px-3 outline-none border-none rounded-lg smallBox flex justify-center items-center'placeholder='Alternate Phone No.'/>
                </div>

            </div>

            <div className='bookBox3 shadow-lg'>

            </div>
            <div className='bookBox4 shadow-lg'>

            </div>
        </div>
        </div>
    </div>
  )
}

export default BookNow