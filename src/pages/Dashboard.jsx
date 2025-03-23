import React from "react";
import { Heading } from "../components/Heading";
import { Subheading } from "../components/Subheading";
import { Appbar } from "../components/Appbar";
import girl from "../assets/Ellipse 114/Ellipse 114@2x.png"
import edit from "../assets/Group 1585.svg"

export function Dashboard(){
    return ( 
        <div className="h-screen flex justify-center">
        <div className="flex justify-center w-full h-full bg-[#F3F3F3] [--color:#E1E1E1] [background-image:linear-gradient(0deg,transparent_24%,var(--color)_25%,var(--color)_26%,transparent_27%,transparent_74%,var(--color)_75%,var(--color)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,var(--color)_25%,var(--color)_26%,transparent_27%,transparent_74%,var(--color)_75%,var(--color)_76%,transparent_77%,transparent)] [background-size:55px_55px]">
        
        <div className="relative w-120 h-150 pt-5 pl-5 pr-5 my-20 shadow-2xl bg-[#F7F8F9] rounded overflow-hidden flex flex-col items-left space-y-2">
            <div className="w-full"><Appbar /></div>
            <div className="relative inline-block">
                <img src={girl} alt="girlImage"
                className="w-20 h-20 object-cover"  />
                
                <img src={edit} alt="editProfile"
                className= "w-5 h-5 absolute bottom-17 right-92 translate-x-1/2 translate-y-1/2" />
            <div className="text-[15px] pt-2 text-[#1D2226] font-bold">Marry Doe</div>
            <div className="text-[14px] text-[#1D2226]">Marry@Gmail.Com</div>
            </div>
            <div className="text-md pr-8 font-12"><Subheading label={"Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam"}></Subheading></div>
        </div>
    </div>
    </div>
)}