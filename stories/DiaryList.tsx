import DIARIES from "@/lib/local/diaries.json";

// components-----------------------
import { Button } from "./Button";
import { Marker } from "./Marker";

const DiaryList = () => {
  return (
    <div className="my-10">
      <Marker text="日記" size={3} />

      <div className="grid grid-cols-4 gap-3">
        {DIARIES.map((diary, id) => {
          return <Diary key={id} diary={diary} />;
        })}
      </div>
      <div className="flex justify-center my-10">
        <Button label="日記をもっと見る" size="large" />
      </div>
    </div>
  );
};

interface IDiary {
  date: string;
  time: string;
  text: string;
}

interface Type {
  diary: IDiary;
}
const Diary: React.FC<Type> = ({ diary }) => {
  return (
    <div className="p-3 bg-white rounded-md ">
      <p>{diary.date}</p>
      <p>{diary.time}</p>
      <p>{diary.text}</p>
    </div>
  );
};

export default DiaryList;
