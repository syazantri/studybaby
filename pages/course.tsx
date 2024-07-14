import Head from 'next/head';
import CardList from '../components/Card/CardList';
import HeaderCourse from '../components/Navbar/HeaderCourse';
import FooterCourse from '../components/Footer/FooterCourse';

export default function CoursePage() {
  return (
    <div>
      <Head>
        <title>StudyBaby - Course</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <HeaderCourse />
      <div className='flex-grow gap-2 bg-background'>
        <CardList />
        <div className='h-96 bg-background'>
        </div>
        <FooterCourse />
      </div>
    </div>
  );
}
