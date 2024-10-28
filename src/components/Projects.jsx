import { Link } from 'react-router-dom';

export default function Projects({ title, date, categories, description, projectImage, id, onRouteChange }) {
  
  const handleClick = () => {
    console.log("Card clicked:", id); // Debugging log
    onRouteChange(`/projects/${id}`);
  };

  return (
    <Link
      to={`/projects/${id}`}
      onClick={handleClick} // Call the transition function here
      className="bg-white shadow-md rounded-xl overflow-hidden transition duration-300 ease-in-out hover:shadow-xl"
    >
      <img
        className="w-full h-52 object-cover p-2 rounded-2xl"
        src={projectImage}
        alt={title}
      />
      <div className="p-6 flex max-w-xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs mb-2">
          <div className="text-gray-500">{date}</div>
          {categories.map((cat, index) => (
            <div
              key={index}
              className={`relative z-10 rounded-full ${cat.color} px-4 py-1.5 font-medium ${cat.textColor}`}
            >
              {cat.name}
            </div>
          ))}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-4 line-clamp-3 text-sm text-left leading-relaxed text-gray-600 mb-4">{description}</p>
      </div>
    </Link>
  );
}
