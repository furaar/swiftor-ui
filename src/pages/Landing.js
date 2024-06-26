import React from 'react';
import { Button } from 'primereact/button';
import Header from "../components/Dashboard/Header";

const Landing = () => {
    return (
        <>
            {/* <Header /> */}
            <div className="grid grid-nogutter surface-0 text-800">
                <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                    <section>
                        <span className="block text-6xl font-bold mb-1">Create the reports</span>
                        <div className="text-6xl text-primary font-bold mb-3">your clients deserve to see</div>
                        <p className="mt-0 mb-4 text-700 line-height-3">Swiftor is a cloud based report generator tool that helps you log findings and share it with client.</p>

                        <Button label="Purchase Now" type="button" className="mr-3" raised />
                        <Button label="Live Demo" type="button" outlined />
                    </section>
                </div>
                <div className="col-12 md:col-6 overflow-hidden">
                    <img src="https://images.wombo.art/generated/3a7bbbb7-bbec-4c2d-817b-401221273585/final.jpg?Expires=1717959664&Signature=h0dC4QQklq~GoOmtQ9BRBis4gtDATrccu4U7IdJ~8WXSzX~0yOjn8UexBrPlKeO1xTsF-xkzCMdbt5MbnAjxfHvLZTevTUAiGMLmff0SeTVFvLjvASWy7rQgqwMQoev7EHTKEgxM5Zs~zl-7NrHB67YsrYYkKZHdjtcY~vTn~~yyif2kmxct4cPlRIyP1Vn74svPzNUuPDVrnJA~yIl4cKCAiMOcHNpVMN-xLPApPX7JI~0K776GsHv2Ha559PoAwxXJ3~BcZAHvcgISdtWYd5YvIDI6xCpPZR81SWw9oj11k4x2l~ZoFs6nBg7tXJY6NBfX6BAFMi5OvMMekIZJSg__&Key-Pair-Id=K1ZXCNMC55M2IL" alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
                </div>
            </div>
            <div className="surface-section px-4 py-8 md:px-6 lg:px-8 text-center">
                <div className="mb-3 font-bold text-3xl">
                    <span className="text-900">One Product, </span>
                    <span className="text-blue-600">Many Solutions</span>
                </div>
                <div className="text-700 mb-6">Our product is designed to meet the needs of modern hackers with various tools and VMs.</div>
                <div className="grid">
                    <div className="col-12 md:col-4 mb-4 px-5">
                        <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                            <i className="pi pi-desktop text-4xl text-blue-500"></i>
                        </span>
                        <div className="text-900 text-xl mb-3 font-medium">Tailored for Modern Needs</div>
                        <span className="text-700 line-height-3">Our product is tailored to satisfy modern users with cutting-edge tools and VMs.</span>
                    </div>
                    <div className="col-12 md:col-4 mb-4 px-5">
                        <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                            <i className="pi pi-lock text-4xl text-blue-500"></i>
                        </span>
                        <div className="text-900 text-xl mb-3 font-medium">Customizable Encryption</div>
                        <span className="text-700 line-height-3">Reports support multiple encryption methods such as HTML, PDF, and others.</span>
                    </div>
                    <div className="col-12 md:col-4 mb-4 px-5">
                        <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                            <i className="pi pi-check-circle text-4xl text-blue-500"></i>
                        </span>
                        <div className="text-900 text-xl mb-3 font-medium">Easy to Use</div>
                        <span className="text-700 line-height-3">Using prebuilt templates and export, our product is easy to use.</span>
                    </div>
                    <div className="col-12 md:col-4 mb-4 px-5">
                        <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                            <i className="pi pi-globe text-4xl text-blue-500"></i>
                        </span>
                        <div className="text-900 text-xl mb-3 font-medium">Fast & Global Support</div>
                        <span className="text-700 line-height-3">We work in three different time zones to deliver the best services.</span>
                    </div>
                    <div className="col-12 md:col-4 mb-4 px-5">
                        <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                            <i className="pi pi-github text-4xl text-blue-500"></i>
                        </span>
                        <div className="text-900 text-xl mb-3 font-medium">AI</div>
                        <span className="text-700 line-height-3">Drop the hassle and let your buddy take care off it.</span>
                    </div>
                    <div className="col-12 md:col-4 md:mb-4 mb-0 px-3">
                        <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                            <i className="pi pi-shield text-4xl text-blue-500"></i>
                        </span>
                        <div className="text-900 text-xl mb-3 font-medium">Trusted Security</div>
                        <span className="text-700 line-height-3">Used by companies such as CTRL IT and Metadata Services, our product is trusted for its security.</span>
                    </div>
                </div>
            </div>

            <div className="surface-0">
                <div className="text-900 font-bold text-6xl mb-4 text-center">Pricing Plans</div>
                <div className="text-700 text-xl mb-6 text-center line-height-3">We believe in supporting anonymity and the web3 culture. Our platform accepts payments in ETH.</div>

                <div className="grid">
                    <div className="col-12 lg:col-4">
                        <div className="p-3 h-full">
                            <div className="shadow-2 p-3 h-full flex flex-column" style={{ borderRadius: '6px' }}>
                                <div className="text-900 font-medium text-xl mb-2">Basic</div>
                                <div className="text-600">Plan description</div>
                                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                                <div className="flex align-items-center">
                                    <span className="font-bold text-2xl text-900">$9</span>
                                    <span className="ml-2 font-medium text-600">per month</span>
                                </div>
                                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                                <ul className="list-none p-0 m-0 flex-grow-1">
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span className="text-900">Arcu vitae elementum</span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span className="text-900">Dui faucibus in ornare</span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span className="text-900">Morbi tincidunt augue</span>
                                    </li>
                                </ul>
                                <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300 mt-auto" />
                                <Button label="Buy Now" className="p-3 w-full mt-auto" />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 lg:col-4">
                        <div className="p-3 h-full">
                            <div className="shadow-2 p-3 h-full flex flex-column" style={{ borderRadius: '6px' }}>
                                <div className="text-900 font-medium text-xl mb-2">Premium</div>
                                <div className="text-600">Plan description</div>
                                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                                <div className="flex align-items-center">
                                    <span className="font-bold text-2xl text-900">$29</span>
                                    <span className="ml-2 font-medium text-600">per month</span>
                                </div>
                                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                                <ul className="list-none p-0 m-0 flex-grow-1">
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span className="text-900">Arcu vitae elementum</span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span className="text-900">Dui faucibus in ornare</span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span className="text-900">Morbi tincidunt augue</span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span className="text-900">Duis ultricies lacus sed</span>
                                    </li>
                                </ul>
                                <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300" />
                                <Button label="Buy Now" className="p-3 w-full" />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 lg:col-4">
                        <div className="p-3 h-full">
                            <div className="shadow-2 p-3 flex flex-column" style={{ borderRadius: '6px' }}>
                                <div className="text-900 font-medium text-xl mb-2">Enterprise</div>
                                <div className="text-600">Plan description</div>
                                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                                <div className="flex align-items-center">
                                    <span className="font-bold text-2xl text-900">$49</span>
                                    <span className="ml-2 font-medium text-600">per month</span>
                                </div>
                                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                                <ul className="list-none p-0 m-0 flex-grow-1">
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span className="text-900">Arcu vitae elementum</span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span className="text-900">Dui faucibus in ornare</span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span className="text-900">Morbi tincidunt augue</span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span className="text-900">Duis ultricies lacus sed</span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span className="text-900">Imperdiet proin</span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span className="text-900">Nisi scelerisque</span>
                                    </li>
                                </ul>
                                <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300" />
                                <Button label="Buy Now" className="p-3 w-full" outlined />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Landing