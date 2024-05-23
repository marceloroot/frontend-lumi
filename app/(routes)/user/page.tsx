'use client'
import DataTable from "@/app/_components/data-table";
import PageTitle from "@/app/_components/page-title";
import { Payment } from "@/app/types";
import { ColumnDef } from "@tanstack/react-table";


const UsersPage = () => {
    const dataExemple: Payment[]  =[
        {
            lasOrder:"order-1",
            email:"marcelo@gmail.com",
            method:"post",
            name:"Marcelo"
        },
        {
            lasOrder:"order-2",
            email:"marcelo2@gmail.com",
            method:"post",
            name:"Marcelo"
        },
    ]
     const columns: ColumnDef<Payment>[] = [
        {
          accessorKey: "name",
          header:"Name",
          cell: ({ row }) => {
            return <div className="flex gap-2 items-center">
                <img className="h-10 w-10"
                  src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue("name")}`}
                  alt="user image"
                />
                <p>{row.getValue("name")}</p>
            </div>
          },
        },
        {
            accessorKey:"email",
            header:"Email",
        },
        {
            accessorKey:"lastOrder",
            header:"Last Order",
        },
        {
            accessorKey:"method",
            header:"Method",
        },
      ]
    return ( 
        <div className="flex flex-col gap-5 w-full">
        <PageTitle title="Users"/>
        <DataTable columns={columns} data={dataExemple} />
        </div>
     );
}
 
export default UsersPage;