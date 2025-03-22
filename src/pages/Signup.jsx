import React from "react";
import { Heading } from "../components/Heading";
import { Inputbox } from "../components/Inputboc";
import { Button } from "../components/Button";
// import { Subheading } from "../components/Subheading";
import { Link, useNavigate } from "react-router-dom";
import { Checkbox } from "../components/Checkbox";

export function Signup(){
    const navigate = useNavigate()
    return (
        <div className="h-full flex justify-center">
        <div className="flex justify-center w-full h-full overflow-y-auto bg-[#F3F3F3] [--color:#E1E1E1] [background-image:linear-gradient(0deg,transparent_24%,var(--color)_25%,var(--color)_26%,transparent_27%,transparent_74%,var(--color)_75%,var(--color)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,var(--color)_25%,var(--color)_26%,transparent_27%,transparent_74%,var(--color)_75%,var(--color)_76%,transparent_77%,transparent)] [background-size:55px_55px]">
        
            <div className="w-120 h-full pt-5 pl-5 pb-10 my-15 shadow-2xl bg-[#F7F8F9] rounded overflow-hidden flex flex-col items-left space-y-2">
                <div className="pr-60"><Heading label={"Create your PopX account"}></Heading></div>
            <div className="relative space-y-5 py-8 pr-10">
                <Inputbox label={"Full Name*"} placeholder={"Username"}></Inputbox>
                <Inputbox label={"Phone number*"} placeholder={"Phone number"}></Inputbox>
                <Inputbox label={"Email address*"} placeholder={"Email address"}></Inputbox>
                <Inputbox label={"Password *"} placeholder={"Password"}></Inputbox>
                <Inputbox label={"Company name *"} placeholder={"Company name"}></Inputbox>

                <div>
                    <span>Are you an Agency?*</span>
                <div className="flex gap-8">
                    <Checkbox label={"yes"}></Checkbox>
                    <Checkbox label={"No"}></Checkbox>
                    </div>
                </div>
                
            <div className="w-full flex justify-center pt-25">
                <Button label={"Create Account"} onClick={async() => {
                    navigate('/login')
                }}></Button></div>
            <div className="flex justify-center">
                <span>Already have an account?</span>
                <Link className="relative underline pl-1 cursor-pointer text-black hover:text-blue-800 hover:font-bold items-center" to={'/login'}>LogIn</Link>
            </div>

            </div>
            </div>
        </div>
        </div>
    )
}