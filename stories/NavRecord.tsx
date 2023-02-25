import Image from "next/image";
import styles from "./NavRecord.module.css";

const NavRecord = () => {
  return (
    <div className="flex justify-center">
      <NavCard
        title="BODY RECORD"
        subTitle="自分のカラダの記録"
        image="/img_1.jpg"
      />
      <NavCard
        title="My EXERCISE"
        subTitle="自分の運動の記録"
        image="/img_2.jpg"
      />
      <NavCard title="MY DIARY" subTitle="自分の日記" image="/img_3.jpg" />
    </div>
  );
};

interface INavCard {
  title: string;
  subTitle: string;
  image: string;
}
const NavCard: React.FC<INavCard> = ({ title, subTitle, image }) => {
  return (
    <div className="m-5 border-8 border-blue_300 relative ">
      <Image
        alt=""
        src={image}
        width={400}
        height={400}
        className="grayscale  w-80 object-cover"
      />
      <div className={styles.center}>
        <p className="text-blue_500 font-bold text-xl">{title}</p>
        <p className="bg-blue_300 text-white p-1"> {subTitle}</p>
      </div>
    </div>
  );
};

export default NavRecord;
