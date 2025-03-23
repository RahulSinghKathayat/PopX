import React from "react";
import { Heading } from "../components/Heading";
import { Inputbox } from "../components/Inputboc";
import { Button } from "../components/Button";
import { Subheading } from "../components/Subheading";
import { Link, useNavigate } from "react-router-dom";

export function Welcome(){
    const navigate = useNavigate()
    return (
        <div className="h-full w-full flex">
        <div className="flex justify-center w-full h-full bg-[#F3F3F3] [--color:#E1E1E1] [background-image:linear-gradient(0deg,transparent_24%,var(--color)_25%,var(--color)_26%,transparent_27%,transparent_74%,var(--color)_75%,var(--color)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,var(--color)_25%,var(--color)_26%,transparent_27%,transparent_74%,var(--color)_75%,var(--color)_76%,transparent_77%,transparent)] [background-size:55px_55px]">
        
            <div className="justify-start overflow-y-auto items-end relative w-120 h-165 pt-75 pl-5 my-20 shadow-2xl bg-[#F7F8F9] rounded overflow-hidden flex flex-col items-left space-y-5">
                <div className="pr-60"><Heading label={"Welcome to PopX"}></Heading></div>
                <div className="pr-30 pb-8"><Subheading label={"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"}></Subheading></div>

            <div className="space-y-3 w-full pr-5">
                <Button
                label={"Create Account"} onClick={async() => {
                    navigate('/signup')
                }}></Button>
                <Button 
                label={"Already Registered? Login"} onClick={async() => {
                    navigate('/login')
                }}></Button>
                </div>
            </div>
            </div>
        </div>
    )
}