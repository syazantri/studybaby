const UsersSection = () => {
    return (
      <div className="users-section flex ml-24 h-96">
        <div className="users-image">
          <img src="/images/unicorn-cool.png" alt="Unicorn Cool Img" className="w-80 h-80" />
        </div>
        <div className="users-content">
          <div id="users-count" className="number text-secondary2 text-5xl font-bold pl-5">5000++</div>
          <p id="users-desc" className="text-text text-lg pl-5 pr-12 pb-8">
            More than 5000<span className="highlight text-secondary font-bold"> students </span>
            have trusted StudyBaby as their learning platform.
          </p>
          <div id="schools-count" className="number text-secondary2 text-5xl font-bold pl-5">100++</div>
          <p id="users-desc" className="text-text text-lg pl-5 pr-12 pb-8">
            More than 100 <span className="highlight text-secondary font-bold">schools in Indonesia</span> 
            trusted StudyBaby as their support learning platform.
          </p>
        </div>
      </div>
    );
  };
  
export default UsersSection;
  