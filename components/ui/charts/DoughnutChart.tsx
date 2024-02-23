import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

export default function DoughnutChart({ chartData }: { chartData: any }) {

    return (
        <div className="chart-container border">
            <h2 style={{ textAlign: "center" }}>Doughnut Chart</h2>
            <Doughnut data={chartData} />
        </div>
    )
}