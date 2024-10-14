import React, { useState } from 'react'
import {Link} from 'react-router-dom'

function Payment() {
    const [easypaisa, seteasypaisa] = useState(false)
    const [jazzcash, setjazzcash] = useState(false)
    const [craditcard, setcraditcard] = useState(false)
    const [bank, setbank] = useState(false)
    const [cashonDelivary, setcashonDelivary] = useState(false)
    const [orderbox, setorderbox] = useState(false)
    return (
        <>
            <div className="w-full py-5 h-auto md:h-screen relative">
                <div className="mt-16">
                    <h2 className='text-2xl font-semibold mb-2'>Select Payment Method</h2>
                    <div className="flex flex-col md:flex-row gap-3 w-full">
                        <div className="left gap-3 flex flex-wrap w-full md:w-[60%] lg:w-[70%]">
                            {/* easypaisa box................. */}
                            <div className="box w-[130px] h-[130px] flex items-center cursor-pointer justify-center flex-col text-center bg-white" onClick={() => seteasypaisa(true)}>
                                <img src="/payments/easypaisa.jpeg" className='w-[100px]' alt="payment" />
                                <h2 className='text-sm font-semibold text-gray-500 mt-2 text-center'>EasyPaisa</h2>
                            </div>
                            <div className={`easypaisa-box w-full absolute top-0 left-0 bg-white/25 backdrop-blur-sm h-full md:h-screen ${easypaisa ? "flex" : "hidden"} items-center justify-center`}>
                                <div className="box w-[95%] sm:w-[80%] lg:w-[50%] bg-white text-black border border-gray-100 text-sm shadow-md py-10 px-3 relative">
                                    <i className='fa-solid fa-close text-xl cursor-pointer absolute top-3 right-4 hover:text-blue-400' onClick={() => seteasypaisa(false)}></i>
                                    <p className=''>Experience easy payments – save your Easypaisa account as default method to pay!
                                        Please ensure your Easypaisa account is Active and has sufficient balance.
                                    </p>
                                    <p className='mt-2'>To confirm your payment after providing OTP:
                                    </p>
                                    <p className='mt-2'>- USSD prompt for Telenor Customers Only

                                    </p>
                                    <p className='ms-3'>• Unlock your phone and enter 5 digit PIN in the prompt to pay</p>
                                    <p className='my-3'>OR</p>
                                    <p>- Approve Payment in your Easypaisa App (Telenor and Other Networks)</p>
                                    <p className='ms-3'>  • Login to Easypaisa App and tap on payment notification to approve
                                    </p>
                                    <p className='ms-3'>  • If you miss the notification, go to My Approvals in side menu to confirm</p>

                                    <div className="flex flex-col mt-6">
                                        <label htmlFor="box">
                                            <p className='text-xs text-gray-600 mb-1'>Easypaisa Account Number</p>
                                        </label>
                                        <input type="text" id="box" className='py-2 w-[300px] px-3 border border-gray-400 outline-none focus:border-blue-400' />
                                    </div>
                                    <button className='bg-site-color text-white py-2 w-[250px] mt-7 rounded hover:bg-orange-600 text-lg font-semibold'>Pay Now</button>
                                </div>
                            </div>

                            {/* jazzcash box......................... */}
                            <div className="box w-[130px] h-[130px] flex items-center cursor-pointer justify-center flex-col text-center bg-white" onClick={()=>setjazzcash(true)}>
                                <img src="/payments/jazzcash.png" className='w-[100px]' alt="payment" />
                                <h2 className='text-sm font-semibold text-gray-500 mt-2 text-center'>JazzCash</h2>
                            </div>
                            <div className={`jazzcash-box w-full absolute top-0 left-0 bg-white/25 backdrop-blur-sm h-full md:h-screen ${jazzcash ? "flex" : "hidden"} items-center justify-center`}>
                                <div className="box w-[95%] sm:w-[80%] lg:w-[50%] bg-white text-black border border-gray-100 text-sm shadow-md py-10 px-3 relative">
                                    <i className='fa-solid fa-close text-xl cursor-pointer absolute top-3 right-4 hover:text-blue-400' onClick={() => setjazzcash(false)}></i>
                                    <p> FOR JAZZ/WARID</p>
                                    <p className='ms-3'>• Unlock your phone and you will receive a MPIN Input Prompt</p>
                                    <p className="mt-3">FOR OTHER NETWORKS</p>
                                    <p className='ms-3'>  • Log-in to your JazzCash App and enter your MPIN</p>
                                    <p className='mt-3'>Note: Ensure your JazzCash account is Active and has sufficient balance.</p>

                                    <div className="flex flex-col mt-6">
                                        <label htmlFor="box">
                                            <p className='text-xs text-gray-600 mb-1'>JazzCash Account Number</p>
                                        </label>
                                        <input type="text" id="box" className='py-2 w-[300px] px-3 border border-gray-400 outline-none focus:border-blue-400' />
                                    </div>
                                    <button className='bg-site-color text-white py-2 w-[250px] mt-7 rounded hover:bg-orange-600 text-lg font-semibold'>Pay Now</button>
                                </div>
                            </div>

                            {/* Credit/Debit Card box................. */}
                            <div className="box w-[130px] h-[130px] flex items-center cursor-pointer justify-center flex-col text-center bg-white" onClick={() => setcraditcard(true)}>
                                <img src="/payments/craditcard.jpeg" className='w-[70px]' alt="payment" />
                                <h2 className='text-sm font-semibold text-gray-500 mt-2 text-center'>
                                    Credit/Debit Card</h2>
                            </div>
                            <div className={`creditcard-box w-full absolute top-0 left-0 bg-white/25 backdrop-blur-sm h-full md:h-screen ${craditcard ? "flex" : "hidden"} items-center justify-center`}>
                                <div className="box w-[95%] sm:w-[80%] lg:w-[50%] bg-white text-black border border-gray-100 text-sm shadow-md py-10 px-3 relative">
                                    <i className='fa-solid fa-close text-xl cursor-pointer absolute top-3 right-4 hover:text-blue-400' onClick={() => setcraditcard(false)}></i>
                                    <div className="flex flex-col mt-2">
                                        <label htmlFor="box">
                                            <p className='text-xs text-gray-600 mb-1'>Card number</p>
                                        </label>
                                        <input type="text" id="box" className='py-2 w-[300px] px-3 border border-gray-400 outline-none focus:border-blue-400' placeholder='Card number' />
                                    </div>
                                    <div className="flex flex-col mt-5">
                                        <label htmlFor="box">
                                            <p className='text-xs text-gray-600 mb-1'>Name on card</p>
                                        </label>
                                        <input type="text" id="box" className='py-2 w-[300px] px-3 border border-gray-400 outline-none focus:border-blue-400' placeholder='Name on card' />
                                    </div>
                                    <div className="flex items-center gap-4 mt-5">
                                    <div className="flex flex-col">
                                        <label htmlFor="box">
                                            <p className='text-xs text-gray-600 mb-1'>Expiration date</p>
                                        </label>
                                        <input type="text" id="box" className='py-2 w-[185px] px-3 border border-gray-400 outline-none focus:border-blue-400' placeholder='MM/YY' />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="box">
                                            <p className='text-xs text-gray-600 mb-1'>CVV</p>
                                        </label>
                                        <input type="text" id="box" className='py-2 w-[100px] px-3 border border-gray-400 outline-none focus:border-blue-400' placeholder='CVV' />
                                    </div>
                                    </div>
                                    <button className='bg-site-color text-white py-2 w-[300px] mt-7 rounded hover:bg-orange-600 text-lg font-semibold'>Pay Now</button>
                                </div>
                            </div>

                            {/* bank box................................... */}
                            <div className="box w-[130px] h-[130px] flex items-center cursor-pointer justify-center flex-col text-center bg-white" onClick={() => setbank(true)}>
                                <img src="/payments/hblbank.jpeg" className='w-[100px]' alt="payment" />
                                <h2 className='text-sm font-semibold text-gray-500 mt-2 text-center'>
                                    HBL Bank Account</h2>
                            </div>
                            <div className={`bank-box w-full absolute top-0 left-0 bg-white/25 backdrop-blur-sm h-full md:h-screen ${bank ? "flex" : "hidden"} items-center justify-center`}>
                                <div className="box w-[95%] sm:w-[80%] lg:w-[50%] bg-white text-black border border-gray-100 text-sm shadow-md py-10 px-3 relative">
                                    <i className='fa-solid fa-close text-xl cursor-pointer absolute top-3 right-4 hover:text-blue-400' onClick={() => setbank(false)}></i>
                                    <div className="flex flex-col mt-2">
                                        <label htmlFor="box">
                                            <p className='text-xs text-gray-600 mb-1'>HBL Account Number</p>
                                        </label>
                                        <input type="text" id="box" className='py-2 w-[300px] px-3 border border-gray-400 outline-none focus:border-blue-400' />
                                    </div>
                                    <div className="flex flex-col mt-5">
                                        <label htmlFor="box">
                                            <p className='text-xs text-gray-600 mb-1'>CNIC NO.</p>
                                        </label>
                                        <input type="text" id="box" className='py-2 w-[300px] px-3 border border-gray-400 outline-none focus:border-blue-400' />
                                    </div>
                                    <button className='bg-site-color text-white py-2 w-[300px] mt-7 rounded hover:bg-orange-600 text-lg font-semibold'>Pay Now</button>
                                </div>
                            </div>

                            {/* cashonDelivary box................................ */}
                            <div className="box w-[130px] h-[130px] flex items-center justify-center cursor-pointer flex-col text-center bg-white" onClick={() => setcashonDelivary(true)}>
                                <img src="/payments/cashon.jpeg" className='w-[70px]' alt="payment" />
                                <h2 className='text-sm font-semibold text-gray-500 mt-2 text-center'>Cash On Delivery</h2>
                            </div>
                            <div className={`cashonDelivary-box w-full absolute top-0 left-0 bg-white/25 backdrop-blur-sm h-full md:h-screen ${cashonDelivary ? "flex" : "hidden"} items-center justify-center`}>
                                <div className="box w-[95%] sm:w-[80%] lg:w-[50%] bg-white text-black border border-gray-100 text-sm shadow-md py-10 px-3 relative">
                                    <i className='fa-solid fa-close text-xl cursor-pointer absolute top-3 right-4 hover:text-blue-400' onClick={() => setcashonDelivary(false)}></i>
                                    <p>- You may pay in cash to our courier upon receiving your parcel at the doorstep</p>
                                   
                                    <p className="mt-3">- Before agreeing to receive the parcel, check if your delivery status has been updated to 'Out for Delivery'</p>
                                   
                                    <p className='mt-3'>- Before receiving, confirm that the airway bill shows that the parcel is from Daraz</p>
                                    <p className='mt-3'>- Before you make payment to the courier, confirm your order number, sender information and tracking number on the parcel</p>
                                    <p className='mt-3'>- Cash Payment Fee of Rs. 50 applies only to Cash on Delivery payment method. There is no extra fee when using other payment methods</p>

                                   
                                    <button className='bg-site-color text-white py-2 w-[250px] mt-7 rounded hover:bg-orange-600 text-lg font-semibold' onClick={()=>setorderbox(true)}>Confirm Order</button>
                                </div>
                            </div>

                            {/* order successfully box................. */}
                            <div className={`order-box w-full absolute top-0 left-0 bg-white/25 backdrop-blur-sm h-full md:h-screen ${orderbox ? "flex" : "hidden"} items-center justify-center`}>
                                <div className="box w-[95%] flex flex-col items-center sm:w-[80%] lg:w-[50%] bg-white text-black border border-gray-100 text-sm shadow-md py-10 px-3 relative">
                                    <i className='fa-solid fa-close text-xl cursor-pointer absolute top-3 right-4 hover:text-blue-400' onClick={() => setorderbox(false)}></i>
                                    <h2 className='text-lg text-green-600 font-semibold'>Your Order is Added Successfully.</h2>
                                    <Link to="/"><button className='bg-site-color text-white py-2 w-[250px] mt-7 rounded hover:bg-orange-600 text-lg font-semibold'>Continue Shoping <i className='fa-solid fa-home text-lg ms-2'></i></button></Link>
                                </div>
                            </div>

                            {/* <div className="box w-[130px] h-[130px] flex items-center justify-center flex-col text-center bg-white">
                                <img src="/payments/wallet.png" className='w-[80px]' alt="payment" />
                                <h2 className='text-sm font-semibold text-gray-500 mt-2 text-center'>Daraz Wallet <br />
                                    <span className='text-xs'>Select to top up & pay</span></h2>
                            </div> */}
                        </div>
                        <div className="right w-full md:w-[40%] lg:w-[30%] bg-white py-8 h-[170px] px-3">
                            <h2 className='font-semibold text-lg'>Order Summary</h2>
                            <div className="flex items-center justify-between gap-2 my-4">
                                <h3 className='text-xs text-gray-400'>Subtotal(3 Items and shipping fee included)</h3>
                                <h3 className='text-sm whitespace-nowrap'>Rs. 346543</h3>
                            </div>
                            <div className="flex items-center flex-row gap-2 justify-between">
                                <h2 className='text-base font-semibold'>Total Amount</h2>
                                <h2 className='text-lg font-semibold text-site-color whitespace-nowrap'>Rs. 32746</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Payment