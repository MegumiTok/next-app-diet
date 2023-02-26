import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["達成", "未達成"],
  datasets: [
    {
      label: "# of Votes",
      data: [80, 20],
      backgroundColor: ["#8FE9D0", "#fafafa"],
      borderColor: ["#3F51B5", "#fafafa"],
      borderWidth: 1,
    },
  ],
};

const ProgressChart = () => {
  return (
    <div className="my-10 pt-5 flex justify-center h-4/5">
      <Doughnut
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: true,
        }}
      />
    </div>
  );
};

export default ProgressChart;
