"use client";
import DataTable from "@/app/_components/data-table";
import PageTitle from "@/app/_components/page-title";

const UsersPage = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <PageTitle title="Users" />
      <DataTable />
    </div>
  );
};

export default UsersPage;
