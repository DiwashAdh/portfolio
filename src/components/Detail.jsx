// DetailPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';

const Detail = ({ blogPosts }) => {
  const { id } = useParams();
  const project = blogPosts.find((post) => post.id === parseInt(id));

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <>
    <div className="container mx-auto mt-20 px-4 lg:px-0">
      <div className=" grid grid-cols-8 text-left mb-4">
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
