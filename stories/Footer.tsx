interface IFooter {
  bgColor?: string;
  size?: number;
}

export const Footer: React.FC<IFooter> = ({
  bgColor = "#008feb", //blue_400
  size = 1.5,
}) => {
  return (
    <div
      className=" text-white py-10 flex right-0 left-0 min-w-[1048px] bottom-0 fixed"
      style={{ backgroundColor: bgColor, fontSize: `${size}em` }}
    >
      <div className="flex mx-20">
        <p className="px-5">会員登録</p>
        <p className="px-5">運営会社</p>
        <p className="px-5">利用規約</p>
        <p className="px-5">個人情報の取り扱いについて</p>
        <p className="px-5">特定取引法に基づく表記</p>
        <p className="px-5">お問い合わせ</p>
      </div>
    </div>
  );
};
