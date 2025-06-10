"use client";
import { useState } from "react";
import { FaSquareXTwitter, FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
// import captcha from "./images/captcha.svg";
import Image from "next/image";

export default function page() {
    const [inputField, setInputField] = useState({
        name: '',
        lname: '',
        email: '',
        phone: '',
        captcha: false
    });

    const [error, setError] = useState({});
    // const [formSubmitted, setFormSubmitted] = useState(false);
    const [formError, setFormError] = useState(false);

    const ChangeValue = (e) => {
        const { name, value } = e.target;
        setInputField((prev) => ({
            ...prev,
            [name]: value,
        }));
        setError((prev) => ({
            ...prev,
            [name]: '',
        }));
        setFormError(false);
    };

    const doSubmit = (e) => {
        e.preventDefault();
        const fieldErrors = {};

        if (!inputField.name.trim()) fieldErrors.name = 'Name is required!';
        if (!inputField.lname.trim()) fieldErrors.lname = 'Last Name is required!';
        if (!inputField.email.trim()) fieldErrors.email = 'Email is required!';
        if (!inputField.phone.trim()) fieldErrors.phone = 'Phone Number is required!';
        if (!inputField.captcha) fieldErrors.captcha = 'captcha is required!';

        setError(fieldErrors);

        const hasErrors = Object.keys(fieldErrors).length > 0;

        if (hasErrors) {
            // setFormSubmitted(false);
            setFormError(true);
        } else {
            // setFormSubmitted(true);
            setFormError(false);
            setInputField({ name: '', lname: '', email: '', phone: '', captcha: false });
        }
    };

    return (
        <div>
            <div className="bg-[#FF4309] py-10 2xl:py-20">
                <div className="container text-center text-white">
                    <h1 className="text-[29px] leading-[36px] md:leading-[50px] lg:leading-[77px] md:text-[44px] lg:text-[68px]">Contact Us</h1>
                    <h2>Want to get in touch? Just leave us a message below.</h2>
                </div>
            </div>

            <div className="container">
                <div className="shadow-[0_0_10px_rgba(0,0,0,0.3)] rounded-xl my-20 py-4 px-2">
                    <div className="lg:flex justify-between">

                        <div className="lg:w-1/2">
                            <div className="bg-black rounded-xl lg:mr-1 text-white py-38 px-8">
                                <h2 className="py-4">How can we help?</h2>
                                <p>
                                    Fill out the form and our team will get back to you within 24 hours (except on weekends).
                                </p>
                                <div className="py-20">
                                    <ul>
                                        <li>56, Civil Line, Opposite Hotel Center Point, Dharamshala, HP 176215</li>
                                        <li>+91 98054 44044</li>
                                        <li>cmx@codexmattrix.com</li>
                                    </ul>
                                </div>
                                <div className="icons text-3xl flex list-none">
                                    <li className="mx-3 cursor-pointer hover:scale-125 transition-transform duration-400">
                                        <FaSquareXTwitter />
                                    </li>
                                    <li className="mx-3 cursor-pointer hover:scale-125 transition-transform duration-400">
                                        <FaInstagramSquare />
                                    </li>
                                    <li className="mx-3 cursor-pointer hover:scale-125 transition-transform duration-400">
                                        <FaFacebook />
                                    </li>
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-2 lg:ml-1 py-4">
                            <form onSubmit={doSubmit}>
                                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
                                    <div>
                                        <label htmlFor="name">First Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={inputField.name}
                                            onChange={ChangeValue}
                                            placeholder="Enter your First Name"
                                            className="border w-full border-black outline-0 px-4 py-2 rounded my-2"
                                        />
                                        {error.name && <i className="text-red-500">{error.name}</i>}
                                    </div>
                                    <div>
                                        <label htmlFor="lname">Last Name</label>
                                        <input
                                            type="text"
                                            id="lname"
                                            name="lname"
                                            value={inputField.lname}
                                            onChange={ChangeValue}
                                            placeholder="Enter your Last Name"
                                            className="border w-full border-black outline-0 px-4 py-2 rounded my-2"
                                        />
                                        {error.lname && <i className="text-red-500">{error.lname}</i>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={inputField.email}
                                            onChange={ChangeValue}
                                            placeholder="Enter your Email"
                                            className="border w-full border-black outline-0 px-4 py-2 rounded my-2"
                                        />
                                        {error.email && <i className="text-red-500">{error.email}</i>}
                                    </div>
                                    <div>
                                        <label htmlFor="phone">Phone</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={inputField.phone}
                                            onChange={ChangeValue}
                                            placeholder="Enter your Phone Number"
                                            className="border w-full border-black outline-0 px-4 py-2 rounded my-2"
                                        />
                                        {error.phone && <i className="text-red-500">{error.phone}</i>}
                                    </div>
                                </div>

                                <div className="mt-2">
                                    <h6 className="">What type of service do you need?</h6>
                                    <div className="lg:flex py-3 space-x-3">
                                        {['Web Development', 'Product Design', 'Marketing Design', 'Other'].map((service, idx) => (
                                            <div key={idx} className="ml-4 lg:ml-0">
                                                <input type="checkbox" id={service} />
                                                <label htmlFor={service} className="pl-2">{service}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-2">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        placeholder="Write your message"
                                        rows={10}
                                        className="placeholder-black w-full p-4 outline-0 border my-2 border-black rounded"
                                    ></textarea>
                                </div>

                                <div className="shadow-xl rounded p-3 max-w-50 flex justify-between my-1">
                                    <div>
                                        <input
                                            type="checkbox"
                                            name="captcha"
                                            id="captcha"
                                            className="mr-2"
                                            checked={inputField.captcha}
                                            onChange={(e) =>
                                                setInputField((prev) => ({ ...prev, captcha: e.target.checked }))
                                            }
                                        />

                                        <label htmlFor="captcha" className="check-box">I'm not a robot</label>
                                    </div>
                                    <Image src="/Images/captcha.svg" width={40} height={20} alt="Captcha" />
                                    {/* <i>{fieldErrors.captcha}</i> */}
                                </div>
                                {error.captcha && <i className="text-red-500">{error.captcha}</i>}

                                <div className="py-2">
                                    <button
                                        type="submit"
                                        className="bg-[#FF4309] hover:bg-[#e63b08] cursor-pointer w-full py-2 rounded text-white font-bold"
                                    >
                                        Submit
                                    </button>
                                </div>
                                {formError && (
                                    <div className="text-red-500 mt-2 font-semibold">
                                        <p><i className="shadow shadow-orange-100">Please make sure to fill out all required fields.</i></p>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
