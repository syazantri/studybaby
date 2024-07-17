import Head from 'next/head';
import React from 'react';
import CardList from '../components/Molecules/Card/CardList';
import HeaderCourse from '../components/Molecules/Navbar/HeaderCourse';
import FooterCourse from '../components/Molecules/Footer/FooterCourse';

export default function CoursePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>StudyBaby - Course</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <HeaderCourse />
      <div className='flex-grow gap-2 bg-background'>
        <CardList />
        <div className='h-96 bg-background'></div>
        <FooterCourse />
      </div>
    </div>
  );
}
