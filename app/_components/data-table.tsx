"use client"

import {
 Table,
 TableBody,
 TableCaption,
 TableCell,
 TableFooter,
 TableHead,
 TableHeader,
 TableRow,
}from '@/app/_components/ui/table'
import { Button } from './ui/button';

const DataTable=() => {
    const invoices = [
        {
          invoice: "INV001",
          paymentStatus: "Paid",
          totalAmount: "$250.00",
          paymentMethod: "Credit Card",
        },
        {
          invoice: "INV002",
          paymentStatus: "Pending",
          totalAmount: "$150.00",
          paymentMethod: "PayPal",
        },
        {
          invoice: "INV003",
          paymentStatus: "Unpaid",
          totalAmount: "$350.00",
          paymentMethod: "Bank Transfer",
        },
        {
          invoice: "INV004",
          paymentStatus: "Paid",
          totalAmount: "$450.00",
          paymentMethod: "Credit Card",
        },
        {
          invoice: "INV005",
          paymentStatus: "Paid",
          totalAmount: "$550.00",
          paymentMethod: "PayPal",
        },
        {
          invoice: "INV006",
          paymentStatus: "Pending",
          totalAmount: "$200.00",
          paymentMethod: "Bank Transfer",
        },
        {
          invoice: "INV007",
          paymentStatus: "Unpaid",
          totalAmount: "$300.00",
          paymentMethod: "Credit Card",
        },
      ]
    return ( 
       <>
         <div className="rounded-md border">
         <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[100px]">Avatar</TableHead>
                <TableHead>Number Client</TableHead>
                <TableHead></TableHead>
                <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">
                    <img className="h-10 w-10"
                        src={`https://api.dicebear.com/7.x/lorelei/svg?seed=pity`}
                        alt="user image"
                        />
                    </TableCell>
                    <TableCell>{invoice.paymentStatus}</TableCell>
                    <TableCell>{invoice.paymentMethod}</TableCell>
                    <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
            </TableFooter>
            </Table>
         </div>
         <div className="flex items-center justify-end space-x-2 py-4">
             <Button
              variant="outline"
              size="sm"
              
            >
             Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
             
            >
             Next
            </Button>
         </div>
       </>
     );
}
 
export default DataTable;