import Head from 'next/head';
import Header from '../components/Navbar/Header';
import HeroSection from '../components/HeroSection';
import UsersSection from '../components/UsersSection';
import ReviewSection from '../components/ReviewSection';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>StudyBaby - Welcome</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <main>
        <HeroSection />
        <UsersSection />
        <ReviewSection />
      </main>
      <Footer />
    </div>
  );
}
