const reviews = [
    {
      user: 'Syazantri Salsabila - Student at SMA 68 Jakarta',
      desc: `"I really love StudyBaby!! You won't just study here; there are a lot more activities besides studying, 
             which makes the study process more fun! Just give it a try already, you won't regret it!🤩"`,
    },
    {
      user: 'Cordova Wanggai - Student at Universitas Indonesia',
      desc: `"StudyBaby is amazing! It's not just about hitting the books here; they offer so many engaging activities 
             that make learning a blast!"`,
    },
    {
      user: 'Himala Mixie - Student at SMAN 990 Jakarta',
      desc: `"I'm so glad I found StudyBaby! This platform goes beyond studying with tons of fun activities that make 
             learning enjoyable and exciting. You should definitely give it a shot. You won't regret it for a second! 🌟"`,
    },
  ];
  
  const ReviewSection = () => {
    return (
      <div>
        <h2 id="review-title" className="text-secondary2 font-bold ml-24 text-5xl mb-8 mt">What Our Students Say</h2>
        <div className="review-section flex justify-center mb-24">
          {reviews.map((review, index) => (
            <div key={index} className="card-review bg-tertiary rounded-lg shadow-md p-6 mr-4 flex-1 max-w-sm">
              <div className="review-content text-left">
                <p className="review-user font-bold text-secondary2 mb-2">{review.user}</p>
                <p className="review-desc text-text leading-6">{review.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ReviewSection;
  