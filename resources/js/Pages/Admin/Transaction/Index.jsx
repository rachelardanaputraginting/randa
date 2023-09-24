import CartItem from '@/Components/CartItem'
import Container from '@/Components/Container'
import Pagination from '@/Components/Pagination'
import ProductItem from '@/Components/ProductItem'
import TextInput from '@/Components/TextInput'
import App from '@/Layouts/App'
import { numberFormat } from '@/Libs/Helper'
import { Head, Link } from '@inertiajs/react'
import { IconArrowsMaximize, IconArrowsMinimize, IconCategory, IconChecks, IconCircleFilled, IconTrashX } from '@tabler/icons-react'
import React, { useState } from 'react'

export default function Index({ categories, carts, ...props }) {
    const [isOrderListOpen, setIsOrderListOpen] = useState(true)
    const { data: products, meta, links } = props.products

    const toggleOrderList = () => {
        setIsOrderListOpen(!isOrderListOpen)
    }

    const [showPaymentOptions, setShowPaymentOptions] = useState(false)

    const handleRadioChange = (e) => {
        if (e.target.value === '1') {
            setShowPaymentOptions(true)
        } else {
            setShowPaymentOptions(false)
        }
    }

    const total = carts.reduce((acc, cart) => acc + cart.price, 0)

    const quantity = carts.reduce((acc, cart) => acc + cart.quantity, 0)
    return (
        <>
            <Head title="Menu" />
            <Container>
                <div className="flex w-full">
                    {/* Start Button Card Order */}
                    <button
                        className="block fixed z-[100] bg-white rounded right-4 top-18 mt-1  p-4 text-orange-500"
                        onClick={toggleOrderList}
                    >
                        {isOrderListOpen ? <IconArrowsMinimize /> : <IconArrowsMaximize />}
                    </button>
                    {/* End Button Card Order */}

                    {/* Start Menu */}
                    <div className={`bg-white ${isOrderListOpen ? 'w-3/4' : 'w-full'}`}>

                        {/* Start Order List */}
                        <h3 className='text-2xl mt-10 mb-4 font-semibold text-slate-700'>Order List</h3>
                        <div className="flex w-full scrolling-wrapper overflow-x-scroll pb-1 flex-nowrap gap-x-4">
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
                        <div className="flex w-full scrolling-wrapper overflow-x-scroll pb-1 flex-nowrap gap-x-4">
                            <Link href={route('admin.transaction')} className="flex text-white">
                                <div className="w-32 h-32 bg-orange-500 rounded p-2 shadow">
                                    <IconCategory className='my-2' />
                                    <p className='block'>All Menu</p>
                                    <h6 className='text-lg font-semibold'>10 items</h6>
                                </div>
                            </Link>
                            {categories.map((category, index) => (
                                <Link href={`/admin/transaction?category=${category.slug}`} className="flex rounded text-white" key={index}>
                                    <div className="w-32 h-32  rounded border border-gray-300 text-slate-600 p-2" >
                                        <div className='w-8 h-8 mb-2' dangerouslySetInnerHTML={{ __html: category.icon }} />
                                        <p className='text-slate-500'>{category.name}</p>
                                        <h6 className='text-lg font-semibold'>10 items</h6>
                                    </div>
                                </Link>
                            ))}

                        </div>
                        {/* End Categories */}

                        {/* Start Special Menu */}
                        <div className="w-full">
                            <h3 className='text-2xl mt-10 mb-4 font-semibold text-slate-700'>Special menu for you</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-lg-4 gap-4 gap-y-8 w-full flex-wrap">
                                {products.map((product, index) => (
                                    <ProductItem product={product} key={index} />
                                ))}

                            </div>
                            {products.length > 0 &&
                                    <Pagination meta={meta} links={links} />
                            }
                        </div>
                        {/* End Special Menu */}
                    </div>
                    {/* End Menu */}

                    {/* Start Order Details */}
                    <div className={`w-3/4 sm:w-2/5 md:w-1/4 flex flex-col bg-white top-16 right-0 bottom-0 fixed max-h-screen border-l border-b rounded-bl border-gray-300 ml-2 ${isOrderListOpen ? 'block' : 'hidden'}`}>
                        <div className="fixed bg top-16 w-full flex flex-col justify-end">
                            <h3 className='text-xl pl-4 bg-white font-semibold text-slate-700 py-5'>Order Details</h3>
                            <hr />
                        </div>
                        <div className="px-4 h-3/6 flex flex-col h-full justify-start bg-white flex-1 pt-16 scrolling-wrapper overflow-y-scroll">
                            <div className="flex flex-col flex-1">
                                {carts.length > 0 ? <>
                                    {carts.map((cart, index) => (
                                        <CartItem key={index} cart={cart} />
                                    ))}
                                </> :
                                    <div className="flex justify-center items-center flex-1">
                                        <h1 className='text-slate-300'><IconTrashX size={64} />  </h1>
                                    </div>
                                }

                            </div>

                        </div>
                        <div className="h-max w-full px-4 pb-0 flex flex-col justify-start flex-1 bg-white">
                            <div className='space-y-3 flex flex-col justify-start mb-4'>
                                <hr />
                                <div className="flex justify-between">
                                    <p className='text-lg text-slate-500'>Quantity</p>
                                    <p className='text-lg font-bold text-slate-600'>{quantity}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className='text-lg font-semibold text-slate-500'>Total</p>
                                    <p className='text-lg font-bold text-slate-600'>Rp. {numberFormat(total)}</p>
                                </div>
                                <input type='text' className='w-full rounded border-gray-300 py-2.5 focus:ring-puple-300 focus:border-purple-600' placeholder='Customer name..' />
                                <div className='flex items-center gap-4'>
                                    <div className="w-1/2 flex items-center pl-4 border border-gray-300 rounded">
                                        <input id="bordered-radio-1" type="radio" value="1" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                                            onChange={handleRadioChange} />
                                        <label htmlFor="bordered-radio-1" className="w-full py-3 ml-2 text-sm font-medium text-slate-500">Paid Now</label>
                                    </div>
                                    <div className="w-1/2 flex items-center pl-4 border border-gray-300 rounded">
                                        <input id="bordered-radio-2" type="radio" value="2" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                                            onChange={handleRadioChange} />
                                        <label htmlFor="bordered-radio-2" className="w-full py-3 ml-2 text-sm font-medium text-slate-500">Paid Later</label>
                                    </div>
                                </div>
                                <div className='flex justify-between gap-4'>
                                    <select id="countries" className="bg-white border-gray-300 text-gray-900 rounded focus:ring-puple-300 focus:border-purple-600 block w-full p-2.5">
                                        <option selected disabled>Table</option>
                                        <option>T-1</option>
                                        <option>T-2</option>
                                        <option>T-3</option>
                                        <option>T-4</option>
                                        <option>T-4</option>
                                        <option>T-4</option>
                                        <option>T-4</option>
                                        <option>T-4</option>
                                        <option>T-4</option>
                                        <option>T-4</option>
                                    </select>
                                    {showPaymentOptions && (
                                        <select id="countries" className="bg-white border-gray-300 text-gray-900 rounded focus:ring-gray-300 focus:border-gray-300 border-[1px] focus:border-[1px] block w-full p-2.5">
                                            <option selected disabled>Payment</option>
                                            <option>Gopay</option>
                                            <option>QRIS</option>
                                            <option>Cash</option>
                                        </select>
                                    )}

                                </div>
                                {showPaymentOptions && (
                                    <input type='number' className='w-full rounded border-gray-300 py-2.5 focus:ring-puple-300 focus:border-purple-600' placeholder='Money..' />
                                )}
                                <hr />
                            </div>
                            <div className="pb-4 flex items-end flex-1 justify-end">
                                <button className='bg-purple-600 text-white px-3 py-4 w-full rounded'>
                                    Confirm
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

Index.layout = page => <App children={page} />
