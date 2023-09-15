import Container from '@/Components/Container'
import App from '@/Layouts/App'
import { Head } from '@inertiajs/react'
import { IconArrowsMaximize, IconArrowsMinimize, IconBox, IconCards, IconCategory, IconCheck, IconChecklist, IconChecks, IconCircle, IconCircle0Filled, IconCircleFilled, IconCoffee, IconLockOpen, IconMinus, IconPlus, IconX } from '@tabler/icons-react'
import React, { useState } from 'react'


export default function Dashboard(props) {
    const [isOrderListOpen, setIsOrderListOpen] = useState(true)

    const toggleOrderList = () => {
        setIsOrderListOpen(!isOrderListOpen)
    }
    return (
        <>
            <Head title="Dashboard" />
            <Container>
                <div className="flex w-full">

                    {/* Start Button Card Order */}
                    <button
                        className="block fixed z-[100] bg-white rounded right-4 top-18 mt-1  p-4 text-orange-600"
                        onClick={toggleOrderList}
                    >
                        {isOrderListOpen ? <IconArrowsMinimize /> : <IconArrowsMaximize />}
                    </button>
                    {/* End Button Card Order */}

                    {/* Start Menu */}
                    <div className={`bg-white ${isOrderListOpen ? 'w-3/4' : 'w-full'}`}>

                        {/* Start Order List */}
                        <h3 className='text-2xl mt-10 mb-4 font-semibold text-slate-700'>Order List</h3>
                        <div className="flex w-full overflow-x-scroll flex-nowrap gap-x-4">
                            {/* Start Order */}
                            <div className="flex gap-x-4 p-2 border border-gray-300 rounded text-white">
                                <div className="w-16 h-16 bg-sky-500 rounded p-2 flex justify-center items-center">
                                    <h3 className='text-4xl font-semibold text-center'>T1</h3>
                                </div>
                                <div className="flex">
                                    <div className='h-16 w-32 text-slate-800 flex flex-col flex-1 justify-between'>
                                        <h5 className='font-semibold text-xl'>Rachel</h5>
                                        <span className='text-slate-500'>2 Item</span>
                                    </div>
                                    <div className='flex justify-center items-end flex-col flex-1 justify-between h-16 w-32 text-slate-800'>
                                        <h5 className='font-semibold text-xs flex items-center gap-x-2 py-1 px-2 bg-green-500 rounded text-white'><IconChecks size={18} />  Done</h5>
                                        <div className='text-slate-500 flex items-center gap-x-2'> <IconCircleFilled size={16} className='text-green-500' />Already Paid</div>
                                    </div>
                                </div>
                            </div>
                            {/* End Order */}
                        </div>
                        {/* End Order List */}

                        {/* Start Categories */}
                        <h3 className='text-2xl mt-10 mb-4 font-semibold text-slate-700'>Categories</h3>
                        <div className="flex w-full overflow-x-scroll flex-nowrap gap-x-4">
                            <div className="flex text-white">
                                <div className="w-32 h-32 bg-orange-600 rounded p-2 shadow">
                                    <IconCategory className='my-2' />
                                    <p className='block'>All Menu</p>
                                    <h6 className='text-lg font-semibold'>10 items</h6>
                                </div>
                            </div>

                            <div className="flex rounded text-white">
                                <div className="w-32 h-32  rounded border border-gray-300 text-slate-600 p-2">
                                    <IconCoffee className='my-2' />
                                    <p className='text-slate-500'>Coffe</p>
                                    <h6 className='text-lg font-semibold'>10 items</h6>
                                </div>
                            </div>
                            <div className="flex rounded text-white">
                                <div className="w-32 h-32  rounded border border-gray-300 text-slate-600 p-2">
                                    <IconCoffee className='my-2' />
                                    <p className='text-slate-500'>Coffe</p>
                                    <h6 className='text-lg font-semibold'>10 items</h6>
                                </div>
                            </div>
                            <div className="flex rounded text-white">
                                <div className="w-32 h-32  rounded border border-gray-300 text-slate-600 p-2">
                                    <IconCoffee className='my-2' />
                                    <p className='text-slate-500'>Coffe</p>
                                    <h6 className='text-lg font-semibold'>10 items</h6>
                                </div>
                            </div>
                            <div className="flex rounded text-white">
                                <div className="w-32 h-32  rounded border border-gray-300 text-slate-600 p-2">
                                    <IconCoffee className='my-2' />
                                    <p className='text-slate-500'>Coffe</p>
                                    <h6 className='text-lg font-semibold'>10 items</h6>
                                </div>
                            </div>
                            <div className="flex rounded text-white">
                                <div className="w-32 h-32  rounded border border-gray-300 text-slate-600 p-2">
                                    <IconCoffee className='my-2' />
                                    <p className='text-slate-500'>Coffe</p>
                                    <h6 className='text-lg font-semibold'>10 items</h6>
                                </div>
                            </div>
                            <div className="flex rounded text-white">
                                <div className="w-32 h-32  rounded border border-gray-300 text-slate-600 p-2">
                                    <IconCoffee className='my-2' />
                                    <p className='text-slate-500'>Coffe</p>
                                    <h6 className='text-lg font-semibold'>10 items</h6>
                                </div>
                            </div>
                            <div className="flex rounded text-white">
                                <div className="w-32 h-32  rounded border border-gray-300 text-slate-600 p-2">
                                    <IconCoffee className='my-2' />
                                    <p className='text-slate-500'>Coffe</p>
                                    <h6 className='text-lg font-semibold'>10 items</h6>
                                </div>
                            </div>
                            <div className="flex rounded text-white">
                                <div className="w-32 h-32  rounded border border-gray-300 text-slate-600 p-2">
                                    <IconCoffee className='my-2' />
                                    <p className='text-slate-500'>Coffe</p>
                                    <h6 className='text-lg font-semibold'>10 items</h6>
                                </div>
                            </div>
                            <div className="flex rounded text-white">
                                <div className="w-32 h-32  rounded border border-gray-300 text-slate-600 p-2">
                                    <IconCoffee className='my-2' />
                                    <p className='text-slate-500'>Coffe</p>
                                    <h6 className='text-lg font-semibold'>10 items</h6>
                                </div>
                            </div>
                            <div className="flex rounded text-white">
                                <div className="w-32 h-32  rounded border border-gray-300 text-slate-600 p-2">
                                    <IconCoffee className='my-2' />
                                    <p className='text-slate-500'>Coffe</p>
                                    <h6 className='text-lg font-semibold'>10 items</h6>
                                </div>
                            </div>
                            <div className="flex rounded text-white">
                                <div className="w-32 h-32  rounded border border-gray-300 text-slate-600 p-2">
                                    <IconCoffee className='my-2' />
                                    <p className='text-slate-500'>Coffe</p>
                                    <h6 className='text-lg font-semibold'>10 items</h6>
                                </div>
                            </div>
                            <div className="flex rounded text-white">
                                <div className="w-32 h-32  rounded border border-gray-300 text-slate-600 p-2">
                                    <IconCoffee className='my-2' />
                                    <p className='text-slate-500'>Coffe</p>
                                    <h6 className='text-lg font-semibold'>10 items</h6>
                                </div>
                            </div>
                            <div className="flex rounded text-white">
                                <div className="w-32 h-32  rounded border border-gray-300 text-slate-600 p-2">
                                    <IconCoffee className='my-2' />
                                    <p className='text-slate-500'>Coffe</p>
                                    <h6 className='text-lg font-semibold'>10 items</h6>
                                </div>
                            </div>
                            <div className="flex rounded text-white">
                                <div className="w-32 h-32  rounded border border-gray-300 text-slate-600 p-2">
                                    <IconCoffee className='my-2' />
                                    <p className='text-slate-500'>Coffe</p>
                                    <h6 className='text-lg font-semibold'>10 items</h6>
                                </div>
                            </div>
                            <div className="flex rounded text-white">
                                <div className="w-32 h-32  rounded border border-gray-300 text-slate-600 p-2">
                                    <IconCoffee className='my-2' />
                                    <p className='text-slate-500'>Coffe</p>
                                    <h6 className='text-lg font-semibold'>10 items</h6>
                                </div>
                            </div>
                            <div className="flex rounded text-white">
                                <div className="w-32 h-32  rounded border border-gray-300 text-slate-600 p-2">
                                    <IconCoffee className='my-2' />
                                    <p className='text-slate-500'>Coffe</p>
                                    <h6 className='text-lg font-semibold'>10 items</h6>
                                </div>
                            </div>

                        </div>
                        {/* End Categories */}

                        {/* Start Special Menu */}
                        <div className="w-full">
                            <h3 className='text-2xl mt-10 mb-4 font-semibold text-slate-700'>Special menu for you</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-lg-4 gap-4 w-full flex-wrap">
                                <div className="h-[400px] mb-4 relative">
                                    <span className='bg-white opacity-4 text-black absolute p-2 px-3 rounded opacity-[0.8] shadow right-2 top-2'>Coffe</span>
                                    <img src="https://assets-pergikuliner.com/sjuhly1RSlpU40nj40K59-4lfXg=/fit-in/1366x768/smart/filters:no_upscale()/https://assets-pergikuliner.com/uploads/bootsy/image/19888/coffee_shop_di_bekasiip.jpg" alt="" className='rounded max-h-[260px] w-full' />
                                    <div className="py-2">
                                        <p className='text-slate-500 py-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <h6 className='text-3xl font-semibold text-slate-700'>Rp. 10.000</h6>
                                    </div>
                                </div>
                                <div className="h-[400px] mb-4">
                                    <img src="https://assets-pergikuliner.com/sjuhly1RSlpU40nj40K59-4lfXg=/fit-in/1366x768/smart/filters:no_upscale()/https://assets-pergikuliner.com/uploads/bootsy/image/19888/coffee_shop_di_bekasiip.jpg" alt="" className='rounded' />
                                    <div className="py-2">
                                        <p className='text-slate-500 py-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <h6 className='text-3xl font-semibold text-slate-700'>Rp. 10.000</h6>
                                    </div>
                                </div>
                                <div className="h-[400px] mb-4">
                                    <img src="https://assets-pergikuliner.com/sjuhly1RSlpU40nj40K59-4lfXg=/fit-in/1366x768/smart/filters:no_upscale()/https://assets-pergikuliner.com/uploads/bootsy/image/19888/coffee_shop_di_bekasiip.jpg" alt="" className='rounded' />
                                    <div className="py-2">
                                        <p className='text-slate-500 py-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <h6 className='text-3xl font-semibold text-slate-700'>Rp. 10.000</h6>
                                    </div>
                                </div>
                                <div className="h-[400px] mb-4">
                                    <img src="https://assets-pergikuliner.com/sjuhly1RSlpU40nj40K59-4lfXg=/fit-in/1366x768/smart/filters:no_upscale()/https://assets-pergikuliner.com/uploads/bootsy/image/19888/coffee_shop_di_bekasiip.jpg" alt="" className='rounded' />
                                    <div className="py-2">
                                        <p className='text-slate-500 py-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <h6 className='text-3xl font-semibold text-slate-700'>Rp. 10.000</h6>
                                    </div>
                                </div>
                                <div className="h-[400px] mb-4">
                                    <img src="https://assets-pergikuliner.com/sjuhly1RSlpU40nj40K59-4lfXg=/fit-in/1366x768/smart/filters:no_upscale()/https://assets-pergikuliner.com/uploads/bootsy/image/19888/coffee_shop_di_bekasiip.jpg" alt="" className='rounded' />
                                    <div className="py-2">
                                        <p className='text-slate-500 py-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <h6 className='text-3xl font-semibold text-slate-700'>Rp. 10.000</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Special Menu */}
                    </div>
                    {/* End Menu */}

                    {/* Start Order Details */}
                    <div className={`w-3/4 sm:w-2/5 md:w-1/4 bg-white right-0 top-16 fixed overflow-y-scroll max-h-screen border-l border-b rounded-bl border-gray-300 ml-2 ${isOrderListOpen ? 'block' : 'hidden'}`}>
                        <div className="px-4 flex flex-col h-full justify-start flex-1">
                            <div className="h-fit flex flex-col justify-end pt-6 md:12 space-y-3">
                                <h3 className='text-xl font-semibold text-slate-700 mb-6'>Order Details</h3>
                                <hr />
                            </div>
                            <div className="flex flex-col flex-1">
                                <div className="flex order py-4 flex-flex-column gap-4">
                                    <div className="flex gap-2 w-1/2 sm:w-2/3 overflow-hidden">
                                        <img src="https://assets-pergikuliner.com/sjuhly1RSlpU40nj40K59-4lfXg=/fit-in/1366x768/smart/filters:no_upscale()/https://assets-pergikuliner.com/uploads/bootsy/image/19888/coffee_shop_di_bekasiip.jpg" alt="" className='rounded h-16 w-16 hidden md:block' />
                                        <div className="flex flex flex-col justify-between">
                                            <h6 className='text-base text-slate-700'>wdwqs</h6>
                                            <h5 className='text-lg font-semibold text-slate-700'>Rp. 10.000</h5>
                                        </div>
                                    </div>
                                    <div className="w-1/2 sm:w-1/3 text-end flex flex-col flex-1 justify-between">
                                        <IconX size={16} color='red' className='ml-auto' />
                                        <div className="flex justify-between align-center  mt-5 ">
                                            <IconPlus size={32} className='text-white bg-orange-600 border p-1 rounded' />
                                            <p className='text-center mx-auto text-lg'>100</p>
                                            <IconMinus size={32} color='red' className='border p-1 rounded' />
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <div className='space-y-3 mb-20 flex flex-col justify-start mb-4'>
                                <hr />
                                <div className="flex justify-between">
                                    <p className='text-lg text-slate-500'>Quantity</p>
                                    <p className='text-lg font-bold text-slate-600'>9</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className='text-lg text-slate-500'>Subtotal</p>
                                    <p className='text-lg font-bold text-slate-600'>Rp. 40.000</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className='text-lg font-semibold text-slate-500'>Total</p>
                                    <p className='text-lg font-bold text-slate-600'>#000099</p>
                                </div>
                                <hr />

                                <input type='search' className='w-full rounded border-gray-300 focus:ring-puple-300 focus:border-purple-600' placeholder='Customer name..' />
                                <hr />
                                <div className='flex justify-between gap-4'>
                                    <select id="countries" className="bg-white border-gray-300 text-gray-900 rounded focus:ring-puple-300 focus:border-purple-600 block w-full p-2.5">
                                        <option selected disabled>-- Choose table --</option>
                                        <option>T-1</option>
                                        <option>T-2</option>
                                        <option>T-3</option>
                                        <option>T-4</option>
                                    </select>
                                    <select id="countries" className="bg-white border-gray-300 text-gray-900 rounded focus:ring-gray-300 focus:border-gray-300 border-[1px] focus:border-[1px] block w-full p-2.5">
                                        <option selected disabled>-- Choose Payment --</option>
                                        <option>Gopay</option>
                                        <option>QRIS</option>
                                        <option>Cash</option>
                                    </select>
                                </div>

                                <button className='bg-purple-600 text-white px-3 py-4 w-full rounded'>
                                    Bayar
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* End Order Details */}

                </div>
            </Container>
        </>
    )
}

Dashboard.layout = page => <App children={page} />