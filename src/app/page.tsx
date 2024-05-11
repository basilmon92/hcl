import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import BasicCard from "@/components/widget/page";
import { Chart } from "@/components/Chart";


export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="w-full">
        <nav className="header-bg">
  <div className="mx-auto  px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
          
          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
         
          <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
        <a href="/" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">MyBank</a>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Shopping</a>
            <a href="#" className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Loan</a>
            <a href="#" className="text-white text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Add Transition</a>
          </div>
        </div>
      </div>
     
    </div>
  </div>

  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
      <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
    </div>
  </div>
</nav>

      
        <div className="dashboard_body_container mx-10">
            {/* dashbord amount details */}
            <div className="dashboard_payment_details_holder w-full flex items-center justify-center mt-12 mb-5">
              <div className="dashboard_payment_detail w-1/4 ">
                  <p className="text-lg font-semibold">Current Balance : 20530/-</p>
              </div>
              <div className="dashboard_payment_detail  w-1/4 ">
                  <p className="font-semibold text-lg">Spend Amount : 15000/-</p>
              </div>
          </div>

          {/* payment navigation  card */}
          <BasicCard />
          {/* <div className="dashboard_paymentnavigation_cards_holder w-full flex items-center justify-between my-10">
               
              <div className="w-1/4 text-center">
              <Link href={'/'}>
               <div className="payment_navCards py-10 px-6">
                    <p className="font-semibold text-lg">Credit Card Payment</p>
               </div>
               </Link>
              </div>
               <div className="w-1/4 text-center">
               <Link href={'/'}>
               <div className="payment_navCards py-10 px-6">
                    <p className="font-semibold text-lg">Loan Payment</p>
               </div>
               </Link>
               </div>
               <div className="w-1/4 text-center">
               <Link href={'/'}>
               <div className="payment_navCards py-10 px-6">
                    <p className="font-semibold text-lg">Shopping Payment</p>
               </div>
               </Link>
               </div>
          </div> */}

        {/* Graph compoonet */}
          {/* <div className="dashboard_graph_holder w-full ">
           <h1 className="font-semibold text-lg"> Dash Board Graph Place here </h1>
          </div> */}
        
        {/* table compoonet */}
        </div>
        </div>
        <Chart />

    </main>
  );
}
