import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import HeaderOther from '../../components/Molecules/Navbar/HeaderOther';
import Footer from '../../components/Molecules/Footer/Footer';
import Link from 'next/link';
import Button from '../../components/Atoms/Button/Button';

interface Topic {
  topicId: number;
  name: string;
  content: string;
}

interface Course {
  id: number;
  course: string;
  description: string;
  imgUrl: string;
  totalTopics: number;
  topics: Topic[];
  lecturers: string[];
}

const CourseDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [course, setCourse] = useState<Course | null>(null);
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

        const courseData = coursesData.find((course: Course) => course.id === Number(id));
        if (courseData) {
          setCourse(courseData);
        } else {
          throw new Error('Course not found');
        }
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    if (id) {
      fetchCourses();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!course) {
    return <div>Course tidak ada.</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderOther />
      <div className="topic-container gap-6 p-5">
      <div className="bg-invert gap-6 flex p-5">
      <div className="mt-4">
            <img src={course.imgUrl} alt={course.course} className="h-40 w-auto rounded-t-lg" />
            <Link href={`/course/${id}`}>
            <Button label="Start Learning" />
          </Link>
          </div>
        <div className="course-details bg-white p-5">

          <div className="text-3xl font-bold text-text mt-3">{course.course}</div>
          <div className="font-semibold text-sm text-secondary2 mt-2">Lecturers: {course.lecturers}</div>
          <div className="course-desc text-xs text-gray-600 mt-2">{course.description}</div>
          <div className="course-desc text-xs text-gray-600 mt-2">Duration: XXh YYmins</div>
          <div className="course-desc text-xs text-gray-600 mt-2">Ratings ⭐️: 4/5</div>
        </div>
        
          
          </div>
          <div className="course-topics mt-5 ml-8 mr-6 mb-16">
            <h3 className="text-xl font-bold text-text mt-16 mb-4">What you will learn (total <span className="text-secondary2">{course.totalTopics} </span> topics):</h3>
            <ul className="list-disc list-none flex gap-8">
              {course.topics.map((topic) => (
                <li key={topic.topicId} className="text-text hover:text-secondary2 hover:font-bold">
                  <h4 className="text-lg font-semibold text-text">✓ {topic.name}</h4>
                  <p className="text-sm text-gray-600">{topic.content}</p>
                </li>
              ))}
            </ul>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetails;
