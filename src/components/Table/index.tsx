"use client"
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

type TableProps = {};

export function Table(props: TableProps) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [totalRows, setTotalRows] = useState<number>(0);
    const [perPage, setPerPage] = useState<number>(10);
    
    const fetchTransactions = async () => {
        try {
            const response = await fetch("http://localhost:3003/api/transactions/ABC001", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6InBhc3N3b3JkIn0sImlhdCI6MTcxNTQyODUxMCwiZXhwIjoxNzE1NDMyMTEwfQ.HmD3MM5GZ5jmkmNH5nmP7yq7os5oyh2u1znz5nYtoFg",
                    "Content-Type": "application/json",
                },
            });
            const responseData = await response.json();
            if (response.ok) {
                setData(responseData.data);
            } else {
                console.error("Failed to fetch transactions:", responseData.message);
            }
        } catch (error) {
            console.error("Error fetching transactions:", error);
        }
    };

    useEffect(() => {
        fetchTransactions();
    }, []);
    
    const columns = [
        {
            name: 'Transaction Description',
            selector: (row: any) => row.transactionDescription,
        },
        {
            name: 'Amount',
            selector: (row: any) => row.amount,
        },
        {
            name: 'Payment Type',
            selector: (row: any) => row.paymentType,
        },
        {
            name: 'Date Time',
            selector: (row: any) => row.dateTime,
        },
    ];
    
    return (
        <DataTable
            columns={columns}
            data={data}
            title="Transaction History"
            pagination
            progressPending={loading}
            progressComponent={<div>Loading...</div>}
        />
    );
}

// "use client"
// import { useState, useEffect } from "react";

// export default function DataTable(props: any) {
    // const [data, setData] = useState([]);
    // const [loading, setLoading] = useState<boolean>(false);
    // const [totalRows, setTotalRows] = useState<number>(0);
    // const [perPage, setPerPage] = useState<number>(10);

    // const fetchTransactions = async () => {
    //     setLoading(true);
    //     try {
    //         const response = await fetch("http://localhost:3003/api/transactions/ABC001");
    //         const responseData = await response.json();
    //         setData(responseData.data);
    //     } catch (error) {
    //         console.error("Error fetching transactions:", error);
    //     }
    //     setLoading(false);
    // };

    // useEffect(() => {
    //     fetchTransactions();
    // }, []);

//     const columns = [
//         {
//             name: 'Title',
//             selector: (row: { title: any; }) => row.title,
//             sortable: true,
//         },
//         {
//             name: 'Director',
//             selector: (row: { director: any; }) => row.director,
//             sortable: true,
//         },
//         {
//             name: 'Year',
//             selector: (row: { year: any; }) => row.year,
//             sortable: true,
//         },
//     ];

//     return <DataTable title="Movie List" columns={columns} data={data} pagination />;
// }