import { LucideNavigation2 } from "lucide-react";
import CardBoard, { CardContent } from "../../_components/card-board";
import PageTitle from "../../_components/page-title";
import { Description } from "@radix-ui/react-toast";
import BarChart from "../../_components/bar-chart";
import SpendingCard from "../../_components/spending-card";


export default function Home() {
  const cardProps =[
    {
    id:'1',
    nome:'Total Revenue',
    icon:LucideNavigation2,
    amount:'$4000,49',
    description:'Total Reward',
    label:'Total Payable'
   },
   {
    id:'2',
    nome:'Total Payable',
    icon:LucideNavigation2,
    amount:'$250,39',
    description:'Total Reward',
    label:'Total Payable'
   },
   {
    id:'4',
    nome:'Total Payable',
    icon:LucideNavigation2,
    amount:'$33,00',
    description:'Total Reward',
    label:'Total Payable'
   },
   {
    id:'3',
    nome:'Total Paysdfsfsdfable',
    icon:LucideNavigation2,
    amount:'$300,00',
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
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="DashBoard"/>
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardProps.map(item => (
          <CardBoard 
          key={item.id}
          amount={item.amount}
          description={item.description}
          icon={item.icon}
          label={item.label}
          />
        ))}
        
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent className="justfy-between">
          <p className="p-4 font-semibold">Overview</p>
          <BarChart/>
        </CardContent>

        <CardContent className="flex justfy-between gap-4">
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
         

        </CardContent>


      </section>
   </div>
  );
}
