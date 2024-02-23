import "chart.js/auto";
import { Line } from "react-chartjs-2";


export default function LineChart({ chartData }: { chartData: any }) {

    return (
        <div className="chart-container border">
            <h2 style={{ textAlign: "center" }}>Line Chart</h2>
            <Line
                data={chartData}

            />
        </div>
    )
}