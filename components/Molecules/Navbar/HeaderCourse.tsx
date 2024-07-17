import Link from 'next/link';

const HeaderCourse = () => {
  return (
    <header className="header-course">
      <div className="header-course-left">
        <h1 className="text-secondary2 text-2xl ml-5 font-bold">StudyBaby</h1>
      </div>
      <nav className="header-course-right">
        <div className="search-bar flex items-center mr-4">
            <input id="search-input" type="text" placeholder="Search..." className="h-8 border rounded-l-md mr-4 mt-2" />
            <button type="submit" className="text-sm font-semibold bg-secondary text-white rounded-r-md place-content-center">Search</button>
        </div>
        <Link href="/" legacyBehavior><a className="navigation">Homepage</a></Link>
        <Link href="/course" legacyBehavior><a className="navigation">Courses</a></Link>
        <Link href="/mypet" legacyBehavior><a className="navigation">MyPet</a></Link>
        <Link href="/minigames" legacyBehavior><a className="navigation">Mini Games</a></Link>
        <Link href="/login" legacyBehavior><a className="navigation">Login</a></Link>
      </nav>
    </header>
  );
};

export default HeaderCourse;