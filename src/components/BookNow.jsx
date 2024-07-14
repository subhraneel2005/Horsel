import React, { useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useUser } from "@clerk/clerk-react";
import { SignInButton } from "@clerk/clerk-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BookNow() {

    const { user } = useUser();

    const [value, setValue] = useState(dayjs('2024-07-01'));
    const [formData, setFormData] = useState({
        horse: '',
        slot: '',
        name: '',
        email: '',
        phone: '',
        altPhone: '',
        date: value
    });

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
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSlotClick = (slot) => {
        setFormData({
            ...formData,
            slot: slot
        });
    };

    const handleDateChange = (newValue) => {
        setValue(newValue);
        setFormData({
            ...formData,
            date: newValue
        });
    };

    const handleSubmit = () => {
        console.log(formData);
        toast(`Thankyou for Booking ${formData.horse}, ${user.firstName}`)
    };

    if (!user) {
        return (
            <div className='booknow min-h-screen w-full flex justify-center items-center flex-col space-y-7'>
                <h1 className='text-7xl font-[Syne]'>Not logged in</h1>
                <SignInButton>
                    <button className='font-[Harmony] bg-black text-white bg-opacity-70 px-7 py-3 rounded-lg'>Login</button>
                </SignInButton>
            </div>
        );
    }

    return (
        <div className='select-none min-h-screen overflow-hidden font-[Syne] flex justify-center items-center booknow flex-col'>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition: Slide
                />
            <h1 className='py-14 font-[Harmony] text-[72px] font-[500] leading-[80px] text-center'>Booking Page</h1>
            <div className='w-full h-full flex justify-center items-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 px-4 py-10 gap-6'>
                    <div className='shadow-lg bookBox1 flex flex-col justify-center items-center'>
                        <h2 className='subHeadings w-full mb-5 px-7'>Selected Horse</h2>
                        <div className='grid grid-cols-2 gap-4'>
                            {['Horse1', 'Horse2', 'Horse3', 'Horse4'].map(horse => (
                                <label key={horse} className='rounded-lg gap-2 smallBox flex justify-center items-center'>
                                    <input
                                        type='radio'
                                        name='horse'
                                        value={horse}
                                        onChange={handleInputChange}
                                    />
                                    <span>{horse}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className='shadow-lg bookBox1 flex flex-col justify-center items-center'>
                        <h2 className='subHeadings w-full mb-5 px-7'>Personal Info</h2>
                        <div className='grid grid-cols-2 gap-4'>
                            <input type='text' name='name' className='rounded-lg outline-none border-none smallBox flex px-3 justify-center items-center' placeholder='Name' onChange={handleInputChange} />
                            <input type='text' name='email' className='rounded-lg px-3 smallBox outline-none border-none flex justify-center items-center' placeholder='Email' onChange={handleInputChange} />
                            <input type='text' name='phone' className='rounded-lg px-3 smallBox flex justify-center outline-none border-none items-center' placeholder='Phone No.' onChange={handleInputChange} />
                            <input type='text' name='altPhone' className='px-3 outline-none border-none rounded-lg smallBox flex justify-center items-center' placeholder='Alternate Phone No.' onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className='bookBox3 shadow-lg flex justify-center items-center'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                                <DemoItem>
                                    <DateCalendar value={value} onChange={handleDateChange} />
                                </DemoItem>
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='bookBox4 shadow-lg flex flex-col justify-center items-center'>
                            <h2 className='subHeadings w-full mb-5 px-7'>Select Slot</h2>
                            <div className='grid grid-cols-3 gap-6'>
                                {times.map((time) => (
                                    <div
                                        key={time.time}
                                        className='cursor-pointer px-6 py-3 rounded-sm flex justify-center items-center text-gray-200'
                                        style={{ background: formData.slot === time.time ? "#60381f" : "#C0713E" }}
                                        onClick={() => handleSlotClick(time.time)}
                                    >
                                        {time.time}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className='bookButton font-[Syne] text-white text-xl mt-[40px]' onClick={handleSubmit}>
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookNow;
