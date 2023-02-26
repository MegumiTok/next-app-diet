// local data-------------------------------
import DATA from "@/lib/local/exercise.json";
import { Marker } from "./Marker";

const today = "2021.05.21";
const anotherDay = "2021.05.26";

const TODAY = DATA.filter((i) => i.date === today);
const ANOTHER_DAY = DATA.filter((i) => i.date === anotherDay);

export const ExerciseList = () => {
  return (
    <div className="my-10">
      <Marker text="My EXERCISE" />
      <div className="bg-white p-3">
        {/* 今日 ------------------*/}
        <div className="text-xl">
          <p>{today}</p>
        </div>

        <div className="p-3 grid grid-cols-2 gap-8 ">
          {TODAY.map((item, id) => {
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

        {/* 違う日 ------------------*/}
        <div className="text-xl">
          <p>{anotherDay}</p>
        </div>

        <div className="p-3 grid grid-cols-2 gap-8 ">
          {ANOTHER_DAY.map((item, id) => {
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
    </div>
  );
};
