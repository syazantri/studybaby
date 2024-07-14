import Button from '../Button/Button';

interface CardProps {
    image: string;
    title: string;
    description: string;
  }
  
  const Card: React.FC<CardProps> = ({ image, title, description }) => {
    return (
      <div className="course-card bg-white rounded-lg shadow-md overflow-hidden m-5">
        <div className="course-content p-5 flex flex-col items-center">
          <div className="course-image">
            <img src={image} alt={title} className="w-full h-auto rounded-t-lg" />
          </div>
          <div className="course-title text-2xl font-bold text-gray-800 mt-3">{title}</div>
          <div className="course-desc text-xs text-gray-600 mt-2">{description}</div>
          <div className="course-btn mt-auto flex justify-center pt-2">
          <Button label="Start Learning" />
        </div>
        </div>
      </div>
    );
  };
  
  export default Card;
  