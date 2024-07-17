import Link from 'next/link';

const HeaderOther = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="text-secondary2 text-2xl ml-5 font-bold">StudyBaby</h1>
      </div>
      <nav className="header-right">
        <Link href="/" legacyBehavior><a className="navigation">Homepage</a></Link>
        <Link href="/course" legacyBehavior><a className="navigation">Courses</a></Link>
        <Link href="/mypet" legacyBehavior><a className="navigation">MyPet</a></Link>
        <Link href="/minigames" legacyBehavior><a className="navigation">Mini Games</a></Link>
        <Link href="/profile" legacyBehavior><a className="navigation">Profile</a></Link>
      </nav>
    </header>
  );
};

export default HeaderOther;
