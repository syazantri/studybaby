const FooterCourse = () => {
    return (
      <div className="footer flex items-center bg-invert border-t border-secondary2 p-6 mt-96 my-64">
        <div className="company-name flex-1 text-secondary2 font-bold ml-24 text-3xl">
          StudyBaby Academy
        </div>
        <div className="contact-section flex-1 mb-8">
          <div className="contact-title text-text font-medium ml-24 text-xl mb-2">
            Contact Us
          </div>
          <div className="contact-content flex items-center my-2">
            <img src="/images/instagram.png" className="w-5 h-5" />
            <p className="contact-desc pl-4 text-text text-base">@studybaby</p>
          </div>
          <div className="contact-content flex items-center my-2">
            <img src="/images/phone-call.png" className="w-5 h-5" />
            <p className="contact-desc pl-4 text-text text-base">+628121999912</p>
          </div>
          <div className="contact-content flex items-center my-2">
            <img src="/images/mail.png" className="w-5 h-5" />
            <p className="contact-desc pl-4 text-text text-base">studybaby@gmail.com</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default FooterCourse;
  