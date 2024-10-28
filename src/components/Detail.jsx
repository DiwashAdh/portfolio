// DetailPage.jsx
import React, { useEffect } from 'react'; // Import useEffect
import { useParams, Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Detail = ({ blogPosts }) => {
  const { id } = useParams();
  const project = blogPosts.find((post) => post.id === parseInt(id));

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <>
      <div className=" m-18 mt-10 px-4 ">
        <div className="grid grid-cols-8 text-left mb-4">
          <Link to="/" className="transition duration-200 ease-in-out hover:text-green-800 mb-4 inline-flex items-center">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back
          </Link>
          <h1 className="text-4xl text-black col-span-8 font-bold mb-4">{project.title}</h1>
          <p className="text-gray-600 mb-4">{project.date}</p>
          <div className="space-x-4 col-span-7 mb-6">
            {project.categories.map((category, index) => (
              <span
                key={index}
                className={`${category.color} ${category.textColor} mx-3 px-3 py-1 rounded-full text-sm`}
              >
                {category.name}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          {project.projectImage && (
            <img
              src={project.projectImage}
              alt={project.title}
              className="rounded-3xl w-full"
            />
          )}
        </div>

        <div className="cols-span-8 grid grid-cols-2 gap-4">
          {project.details.map((detail, index) => (
            <React.Fragment key={index}>
              <div className="text-4xl text-black text-left font-bold mb-4 col-span-1">
                {parse(detail.headline)}
              </div>
              <div className="text-lg text-left text-gray-800 col-span-1">
                {parse(detail.description)}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Detail;
