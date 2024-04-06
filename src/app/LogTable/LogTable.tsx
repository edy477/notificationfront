
import {
    Table,
    TableBody,
    TableCaption,
    TableCell, TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {useEffect, useState} from "react";

export function LogTable() {

    const [data, setData ] =  useState([]);


    const getData  = async() => {
        const res = await fetch('http://localhost:8000/api/notifications')
        const data =await res.json();
        data.sort((a, b) => {
            const dateA = new Date(a.timestamp);
            const dateB = new Date(b.timestamp);
            return dateB - dateA;
        });

            setData(data);

    }




    useEffect(() => {
        getData();



    },[data]);



    // @ts-ignore
    return (
        <Table >
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Message Category</TableHead>
                    <TableHead>Id</TableHead>
                    <TableHead>Notificaiton Type</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Users</TableHead>
                    <TableHead >Created</TableHead>
                    <TableHead >Created</TableHead>

                </TableRow>
            </TableHeader>
            <TableBody >
                {data.map((item)=> (
                <TableRow key={item.id}>
                    <TableCell>{item.category}</TableCell>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.message}</TableCell>
                    <TableCell>{item.message}</TableCell>
                    <TableCell>{item.user_name}</TableCell>
                    <TableCell>{item.timestamp}</TableCell>
                </TableRow>
                ))}

            </TableBody>

        </Table>
    )
}

// {invoices.map((invoice) => (
//     <TableRow key={invoice.invoice}>
//         <TableCell className="font-medium">{invoice.invoice}</TableCell>
//         <TableCell>{invoice.paymentStatus}</TableCell>
//         <TableCell>{invoice.paymentMethod}</TableCell>
//         <TableCell className="text-right">{invoice.totalAmount}</TableCell>
//     </TableRow>
// ))}