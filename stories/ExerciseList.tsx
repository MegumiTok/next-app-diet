// local data-------------------------------
import DATA from "@/lib/local/exercise.json";
import { Marker } from "./Marker";

const today = "2021.05.21";
const anotherDay = "2021.05.26";

interface IList {
  _day: string;
}

const List: React.FC<IList> = ({ _day }) => {
  const DAY = DATA.filter((i) => i.date === _day);
  return (
    <div>
      <div className="text-xl py-3">
        <p>{_day}</p>
      </div>

      <div className="p-3 grid grid-cols-2 gap-8 ">
        {DAY.map((item, id) => {
          return (
            <div
              key={id}
              className="flex justify-between items-center px-5 border-b-2 border-gray_200"
            >
              <div className="flex flex-col">
                {item.action}
                <div className="text-blue_300">{item.cal}kcal</div>
              </div>

              <div className="text-blue_300"> {item.duration}min</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const ExerciseList = () => {
  return (
    <div className="my-10">
      <Marker text="My EXERCISE" />
      <div className="bg-white p-3 my-3" id="scroll">
        {/* 今日 ------------------*/}

        <List _day={today} />
        {/* 違う日 ------------------*/}

        <List _day={anotherDay} />
      </div>
    </div>
  );
};
