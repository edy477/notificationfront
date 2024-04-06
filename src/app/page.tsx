"use client"
import Image from "next/image";
import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from "@/components/ui/resizable";
import {ProfileForm} from "@/app/Form/form";
import {LogTable} from "@/app/LogTable/LogTable";

export default function Home() {
  return (
    <main className="min-h-screen w-screen w-full" >
     <div className="main-content w-full w-screen ">
         <div className="flex flex-col  ">
             <div className="form-div  w-full">
                 <div></div>
<div  className="w-1/3  items-center pl-8 pt-1 mb-1"> <ProfileForm></ProfileForm></div>
                </div>
             <break/>
<div> <div className="log-table  pl-2 pt-2"><LogTable></LogTable></div></div>


         </div>
     </div>
    </main>
  );
}
// <ResizablePanelGroup direction="vertical" className="min-h-screen p-5">
//     <ResizablePanel defaultSize={30}>
//
//     </ResizablePanel >
//
//     <ResizableHandle />
//
//     <ResizablePanel  defaultSize={70}>
//         <div className="overflow-y-auto"><LogTable></LogTable></div>
//
//     </ResizablePanel>
// </ResizablePanelGroup>