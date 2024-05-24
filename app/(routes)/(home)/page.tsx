
import PageTitle from "../../_components/page-title";
import HomeBoard from "@/app/(routes)/(home)/_component/home-board";


export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="DashBoard"/>
      <HomeBoard/>
    
   </div>
  );
}
