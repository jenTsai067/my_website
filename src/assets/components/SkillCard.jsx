function SkillCard({ imgUrl, imgAlt, descriptionC, descriptionE }) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <img src={imgUrl} alt={imgAlt} className="w-24 h-24 mb-4 object-center" />
      <p className="font-[24px] font-semibold ">
        {descriptionC}
        <div className="w-[75px] h-[10px] bg-main-blue opacity-40 relative top-[-10px] left-[-5px] text-center"></div>
      </p>
      <p className="text-[16px] font-mono opacity-50">{descriptionE}</p>
    </div>
  );
}

export default SkillCard;
