import Image from "next/image";
import DATA from "@/lib/local/diet.json";
const DietList = () => {
  return (
    <div className="flex justify-center">
      <div className=" grid grid-cols-4 gap-4 ">
        {DATA.map((post, id) => {
          return <Post key={id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default DietList;

interface IPost {
  date: string;
  time: string;
  image: string;
}

interface Type {
  post: IPost;
}

const Post: React.FC<Type> = ({ post }) => {
  return (
    <div className="relative">
      <Image
        alt="post"
        src={post.image}
        width={330}
        height={330}
        className="object-cover h-80 w-80"
      />
      <div className="bg-primary_300 text-white px-3 pt-3 pr-10 left-0 bottom-0 absolute">
        {post.date}
        {post.time}
      </div>
    </div>
  );
};
