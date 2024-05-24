"use client"
import { LucideAArrowUp, LucideCuboid } from "lucide-react";
import CardBoard from "../../../_components/card-board";

import BarChart from "@/app/_components/bar-chart";
import SpendingCard from "@/app/_components/spending-card";
import CardContentStyle from "@/app/_components/cad-content";
import { GET } from "@/app/api/dashboard/routes";
import { useQuery } from "@tanstack/react-query";


const HomeBoard = () => {


  const {data,isPending,isError,error} = useQuery({
    queryKey:['invoicesboard'],
    queryFn:() => GET(),
    
  })


  if (isPending) {
    return <div className="flex items-center justify-center mt-5">Loading...</div>
  }

  if (isError) {
    return <div className="flex items-center justify-center">Error: {error.message}</div>
  }

    const cardProps =[
        {
        id:'1',
        nome:'Total Revenue',
        amount:'$4000,49',
        icon:LucideCuboid,
        description:'Total Reward',
        label:'Total Payable'
       },
       {
        id:'2',
        nome:'Total Payable',
        amount:'$250,39',
        icon:LucideAArrowUp,
        description:'Total Reward',
        label:'Total Payable'
       },
       {
        id:'4',
        nome:'Total Payable',
        amount:'$33,00',
        icon:LucideAArrowUp,
        description:'Total Reward',
        label:'Total Payable'
       },
       {
        id:'3',
        nome:'Total Paysdfsfsdfable',
        amount:'$300,00',
        icon:LucideAArrowUp,
        description:'$',
        label:'Total Payable'
       },
    ]
    const  dataSpeending = [
        {
          numberClient:'32423',
          name:'Scooter',
          numberInstalation: '1234',
          spendingAmount:'240,87'
        },
        {
          numberClient:'45456',
          name:"Samantha",
          numberInstalation: '1234',
          spendingAmount:'240,87'
        },
       
    ]
    return (  
      <>
        <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardProps.map(item => (
          <CardBoard 
          key={item.id}
          amount={item.amount}
          icon={item.icon}
          description={item.description}
          label={item.label}
          />
        ))}
        
      </section>
      
      
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContentStyle className="justfy-between">
          <p className="p-4 font-semibold">Overview</p>
          <BarChart/>
        </CardContentStyle>

        <CardContentStyle className="flex justfy-between gap-4">
          <p className="p-4 font-semibold">Spending Recents</p>
          {dataSpeending.map(speeding =>(
             <SpendingCard 
                key={speeding.numberClient}
                name={speeding.name}
                numberClient={speeding.numberClient}
                numberInstalation={speeding.numberInstalation}
                spendingAmount={speeding.spendingAmount} 
             />
          ))}
         

        </CardContentStyle>


      </section>
      </>
      
    );
}
 
export default HomeBoard;