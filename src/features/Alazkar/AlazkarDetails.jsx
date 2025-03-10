import { useLoaderData, useParams } from 'react-router-dom';

function AlazkarDetails() {
  const data = useLoaderData();

  const { category } = useParams();
  const dataForRoute = data[category];
  return (
    <div>
      {dataForRoute.map((el, index) => (
        <div className="w-full rounded-lg p-6 shadow-lg" key={index}>
          {/* Header */}
          <h1 className="mb-4 text-center text-2xl font-bold text-blue-600">
            {el.category}
          </h1>

          {/* Content */}
          <div className="text-lg leading-relaxed">
            <p className="mb-4 text-center font-medium">{el.content}</p>
          </div>

          {/* Description */}
          <div className="text-center text-base italic opacity-50">
            <p>{el.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AlazkarDetails;
