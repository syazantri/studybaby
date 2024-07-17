const HeroSection = () => {
    return (
      <div className="hero-section h-96 mb-24 mt-24">
        <div className="hero-content">
          <h1 id="hero-title" className="text-secondary2 text-6xl pl-24 font-bold mb-4">StudyBaby</h1>
          <p id="hero-desc" className="text-text text-xl pl-24">
            Number #1 cutest learning platform, grow your pet as you grow your knowledge 🤍
          </p>
          <button id="start-btn" className="bg-secondary text-invert mt-4 ml-24 w-56 text-md">
            Start Learning Now!
          </button>
        </div>
        <div className="hero-image">
          <img src="/images/unicorn-hahah.png" alt="Unicorn Hahah Img" className="w-80 h-80" />
        </div>
      </div>
    );
  };
  
export default HeroSection;
  