import React from "react";
import { Heading } from "../components/Heading";
import { Inputbox } from "../components/Inputboc";
import { Button } from "../components/Button";
import { Subheading } from "../components/Subheading";
import { Link } from "react-router-dom";

export function Login(){
    return (
        <div className="h-screen flex justify-center">
        <div className="flex justify-center w-full h-full bg-[#F3F3F3] [--color:#E1E1E1] [background-image:linear-gradient(0deg,transparent_24%,var(--color)_25%,var(--color)_26%,transparent_27%,transparent_74%,var(--color)_75%,var(--color)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,var(--color)_25%,var(--color)_26%,transparent_27%,transparent_74%,var(--color)_75%,var(--color)_76%,transparent_77%,transparent)] [background-size:55px_55px]">
        
            <div className="relative w-120 h-150 pt-5 pl-5 my-20 shadow-2xl bg-[#F7F8F9] rounded overflow-hidden flex flex-col items-left space-y-2">
                <div className="pr-60"><Heading label={"Signin to your PopX account"}></Heading></div>
                <div className="pr-30"><Subheading label={"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"}></Subheading></div>
            <div className="text-white relative space-y-5 py-8">
                <Inputbox label={"Username"} placeholder={"Username"}></Inputbox>
                <Inputbox label={"Password"} placeholder={"Password"}></Inputbox>
                
            <div className="w-full flex justify-center">
                <Button label={"Login"} onClick={async() => {
                    Navigate('/Dashboard')
                }}></Button></div>

            <div className="flex justify-center text-black">
                <span>Don't have an account?</span>
                <Link className="relative underline pl-1 cursor-pointer text-black hover:text-blue-800 hover:font-bold items-center" to={'/Signup'}>Signup</Link>
            </div>
            
            </div>
            </div>
        </div>
        </div>
    )
}