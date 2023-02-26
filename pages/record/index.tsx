// components-----------------------------
import { Page } from "@/stories/Page";
import NavRecord from "@/stories/NavRecord";
import DiaryList from "@/stories/DiaryList";
import LineChart from "@/stories/chart/LineChart";
import { ExerciseList } from "@/stories/ExerciseList";

const RecordPage = () => {
  return (
    <Page>
      <div className=" my-10 w-4/5  m-auto">
        <NavRecord />
        <LineChart />
        <ExerciseList />
        <DiaryList />
      </div>
    </Page>
  );
};

export default RecordPage;
