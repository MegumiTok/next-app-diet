import DIARIES from "@/lib/local/diaries.json";

// components-----------------------
import { Button } from "./Button";
const DiaryList = () => {
  return (
    <div>
      <p>日記</p>
      <div className=" grid grid-cols-4 gap-3">
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
    <div className="border-2 p-3 border-gray">
      <p>{diary.date}</p>
      <p>{diary.time}</p>
      <p>{diary.text}</p>
    </div>
  );
};

export default DiaryList;
