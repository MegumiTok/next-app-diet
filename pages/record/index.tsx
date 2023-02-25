// components-----------------------------
import { Page } from "@/stories/Page";
import NavRecord from "@/stories/NavRecord";
import DiaryList from "@/stories/DiaryList";

const RecordPage = () => {
  return (
    <Page>
      <div className=" my-10 w-4/5  m-auto">
        <NavRecord />
        <DiaryList />
      </div>
    </Page>
  );
};

export default RecordPage;
