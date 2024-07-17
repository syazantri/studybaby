import Head from 'next/head';
import Header from '../components/Molecules/Navbar/Header';
import HeroSection from '../components/Organisms/HeroSection';
import UsersSection from '../components/Organisms/UsersSection';
import ReviewSection from '../components/Organisms/ReviewSection';
import Footer from '../components/Molecules/Footer/Footer';

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
