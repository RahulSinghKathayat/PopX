import React from "react"
export function Appbar(){
    return <div className="shadow h-14 flex justify-between">
        <div className="flex flex-col justify-center h-full ml-4">
            Account Settings
        </div>
        <div className="flex">
            <div className="rounded-full h-9 w-9 bg-slate-400 flex justify-center mt-3 mr-2">
                <div className="flex flex-col justify-center h-full text-md">
                    you
                </div>
            </div>
        </div>
    </div>
}