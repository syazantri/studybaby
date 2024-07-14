import Card from './Card';

const courses = [
  {
    image: '/images/course-bio-1.jpg',
    title: 'Intro to Biology',
    description: 'Lorem ipsum dolor sit amet desc course 12 blubub 54 tes, test.',
  },
  {
    image: '/images/course-bio-2.avif',
    title: 'Biologi Kelas 11',
    description: 'Lorem ipsum dolor sit amet desc course 12 blubub 54 tes, test.',
  },
  {
    image: '/images/course-bio.jpeg',
    title: 'Biologi: Taksonomi Hewan',
    description: 'Lorem ipsum dolor sit amet desc course 12 blubub 54 tes, test.',
  },
  {
    image: '/images/course-bio-3.webp',
    title: 'Mengenal Vertebrata',
    description: 'Lorem ipsum dolor sit amet desc course 12 blubub 54 tes, test.',
  },
  {
    image: '/images/course-bio-4.webp',
    title: 'Mengenal Vertebrata 2',
    description: 'Lorem ipsum dolor sit amet desc course 12 blubub 54 tes, test.',
  },
  {
    image: '/images/course-chem.jpg',
    title: 'Laju Reaksi',
    description: 'Lorem ipsum dolor sit amet desc course 12 blubub 54 tes, test.',
  },
  {
    image: '/images/course-chem-1.avif',
    title: 'Intro to Chemistry',
    description: 'Lorem ipsum dolor sit amet desc course 12 blubub 54 tes, test.',
  },
  {
    image: '/images/course-math.jpeg',
    title: 'Aljabar Linear',
    description: 'Lorem ipsum dolor sit amet desc course 12 blubub 54 tes, test.',
  },
  {
    image: '/images/course-math-1.jpg',
    title: 'Intro to Calculus',
    description: 'Lorem ipsum dolor sit amet desc course 12 blubub 54 tes, test.',
  },
  {
    image: '/images/course-webdev.webp',
    title: 'Website Development Complete Package',
    description: 'Lorem ipsum dolor sit amet desc course 12 blubub 54 tes, test.',
  },
];

const CardList = () => {
  return (
    <div className="course-section flex flex-wrap h-screen">
      {courses.map((course, index) => (
        <Card key={index} image={course.image} title={course.title} description={course.description} />
      ))}
    </div>
  );
};

export default CardList;
