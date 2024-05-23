import DataTableUser from "@/app/_components/data-table-user";
import PageTitle from "@/app/_components/page-title";

const UsersPage = () => {
    return ( 
        <div className="flex flex-col gap-5 w-full">
        <PageTitle title="Users"/>
        <DataTableUser />
        </div>
     );
}
 
export default UsersPage;