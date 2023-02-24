interface ICenter {
  msg: string;
}
const Center: React.FC<ICenter> = ({ msg }) => {
  return (
    <div
      className="h-screen flex flex-col 
      items-center justify-center"
    >
      <p className="text-xl">{msg}</p>
    </div>
  );
};

export default Center;
