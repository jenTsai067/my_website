function VerticleProjectCard({ imgUrl, imgAlt, title, description }) {
  return (
    <div className="w-full max-w-240 bg-white rounded-3xl overflow-hidden flex flex-col items-stretch border border-gray-100 shadow-sm cursor-none transition-all duration-300 hover:shadow-lg hover:scale-[1.1] hover:transition-all">
      {/* Cover */}
      <div className="w-full md:w-90 lg:w-100 shrink-0 h-55 md:h-auto">
        <img
          src={imgUrl}
          alt={imgAlt || title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="p-6 md:p-8 flex flex-col justify-between gap-4 flex-1">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800">
            {title}
          </h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VerticleProjectCard;
