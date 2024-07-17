import React, { useEffect, useState } from 'react';
import Card from './Card';

interface Course {
  id: number;
  course: string;
  description: string;
  imgUrl: string;
  totalTopics: number;
  topics: { topicId: number; name: string; content: string }[];
  lecturers: string[];
}

const CardList: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://sistech-server.vercel.app/api/data');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const { data: coursesData } = data; 

        if (Array.isArray(coursesData)) {
          setCourses(coursesData);
        } else {
          throw new Error('Data format is not valid');
        }

        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="course-section flex flex-wrap justify-center">
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          image={course.imgUrl}
          title={course.course}
          description={course.description}
        />
      ))}
    </div>
  );
};

export default CardList;
