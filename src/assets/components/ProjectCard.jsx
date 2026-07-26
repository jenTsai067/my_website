function ProjectCard({
  imgUrl,
  imgAlt,
  title,
  description,
  tags = [],
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="w-full max-w-[960px] bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row items-stretch border border-gray-100 shadow-sm cursor-none transition-all duration-300 hover:shadow-lg hover:scale-[1.1] hover:transition-all"
    >
      {/* Cover */}
      <div className="w-full md:w-[360px] lg:w-[400px] shrink-0 h-[220px] md:h-auto">
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

        {/* Tags */}
        <ul className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="px-4 py-1 border border-gray-300 rounded-full text-gray-600 text-xs md:text-sm"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
