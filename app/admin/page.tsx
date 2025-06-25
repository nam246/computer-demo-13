"use client"

import { useState } from "react";

import AdminHeader from "@/components/admin/AdminHeader";
import BarChart from "@/components/ui/charts/BarChart";
import LineChart from "@/components/ui/charts/LineChart";
import DoughnutChart from "@/components/ui/charts/DoughnutChart";

import TextEditor from "@/components/admin/tinymce"

export default function AdminDashboad() {

    const Data = [
        {
            id: 1,
            year: 2016,
            userGain: 80000,
            userLost: 823
        },
        {
            id: 2,
            year: 2017,
            userGain: 45677,
            userLost: 345
        },
        {
            id: 3,
            year: 2018,
            userGain: 78888,
            userLost: 555
        },
        {
            id: 4,
            year: 2019,
            userGain: 90000,
            userLost: 4555
        },
        {
            id: 5,
            year: 2020,
            userGain: 4300,
            userLost: 234
        }
    ];

    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.year),
        datasets: [
            {
                label: "Users Gained",
                data: Data.map((data) => data.userGain),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0"
                ],
                borderColor: "black",
                borderWidth: 2
            }
        ]
    });

    const [formData, setFormData] = useState({})

    return (
        <>
            <AdminHeader title="Dashboard" btn={{ isShow: false, url: '', btnValue: 'Add' }} />

            <TextEditor formData={formData} setFormData={setFormData} />

            <div className="" style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px"}}>
                <BarChart chartData={chartData} />
                <LineChart chartData={chartData} />
                <DoughnutChart chartData={chartData} />
            </div>
        </>
    )
}