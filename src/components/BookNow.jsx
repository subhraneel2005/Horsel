import React from 'react'

function BookNow() {
  return (
    <div className='booknow min-h-screen h-full'>
        <h1 className='py-7 bookHeroText text-center'>Booking Page</h1>
        <div className='w-full h-full flex justify-center items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 px-4 gap-6'>
            <div className='shadow-lg bookBox1 flex flex-col justify-center items-center'>
                <h2 className='subHeadings w-full mb-5 px-7'>Selected Horse</h2>

                <div className='grid grid-cols-2 gap-4'>
                <div className='rounded-lg smallBox flex justify-center items-center'>Horse1</div>
                <div className='rounded-lg smallBox flex justify-center items-center'>Horse2</div>
                <div className='rounded-lg smallBox flex justify-center items-center'>Horse3</div>
                <div className='rounded-lg smallBox flex justify-center items-center'>Horse4</div>
                </div>

            </div>

            <div className='shadow-lg bookBox1 flex flex-col justify-center items-center'>
                <h2 className='subHeadings w-full mb-5 px-7'>Personal Info</h2>

                <div className='grid grid-cols-2 gap-4'>
                <div className='rounded-lg smallBox flex justify-center items-center'>Name</div>
                <div className='rounded-lg smallBox flex justify-center items-center'>Email</div>
                <div className='rounded-lg smallBox flex justify-center items-center'>Phone No.</div>
                <div className='rounded-lg smallBox flex justify-center items-center'>Alternate Phone No.</div>
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