import React from 'react'
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


function BookNow() {

    const [value, setValue] = React.useState(dayjs('2022-04-17'));

    const times = [
        { time: "3:00 PM" },
        { time: "4:00 PM" },
        { time: "5:00 PM" },
        { time: "6:00 PM" },
        { time: "7:00 PM" },
        { time: "8:00 PM" },
        { time: "9:00 PM" },
        { time: "10:00 PM" },
        { time: "11:00 PM" }
    ]
  return (
    <div className='min-h-screen w-full font-[Syne] flex justify-center items-center booknow flex-col'>
        <h1 className='py-14 font-[Harmony] text-[72px] font-[500] leading-[80px] text-center'>Booking Page</h1>
        <div className='w-full h-full flex justify-center items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 px-4 py-10 gap-6'>
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
            <div className='bookBox3 shadow-lg flex justify-center items-center'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                <DemoItem label="Controlled calendar">
                <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
                </DemoItem>
            </DemoContainer>
            </LocalizationProvider>
            </div>
            <div className='block'>
                <div className='bookBox4 shadow-lg flex flex-col justify-center items-center'>
                <h2 className='subHeadings w-full mb-5 px-7'>Select Slot</h2>
                    <div className='grid grid-cols-3 gap-6'>
                        {times.map((time) => (
                            <div className='cursor-pointer px-6 py-3 rounded-sm flex justify-center items-center text-gray-200' style={{background: "#C0713E"}}>
                                {time.time}
                            </div>
                        ))}
                    </div>
                </div>
                <button className='bookButton font-[Syne] text-white text-xl mt-[40px]'>
                    Book Now
                </button>
            </div>
        </div>
        </div>
    </div>
  )
}
export default BookNow