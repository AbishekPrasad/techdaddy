const ProblemSection = () => {
  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 fade-in text-glow">
            One Powerful Shift
          </h2>

          {/* Problem Statement */}
          <div className="mb-12 fade-in">
            <p className="text-xl md:text-2xl text-white mb-6 leading-relaxed">
              <strong>Most businesses don't fail because of a lack of ideas.</strong><br />
              <strong>They fail because they don't fix the right problem.</strong>
            </p>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              At any given time, there's <strong>one key constraint</strong> — one invisible obstacle — 
              silently holding your business back.
            </p>
            
            <p className="text-xl md:text-2xl font-semibold text-primary-400">
              Solve it, and everything changes.
            </p>
          </div>

          {/* CTA Button */}
          <div className="fade-in mb-16">
            <a
              href="https://forms.google.com/d/e/1FAIpQLSe_YOUR_FORM_ID/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg"
            >
              Book A Free Strategy Call
            </a>
          </div>
        </div>

        {/* Problems List Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-20">
          {/* Left Column - Problems */}
          <div className="fade-in">
            <h3 className="text-3xl md:text-4xl font-bold text-primary-900 mb-8">
              Things Are Getting Tough
            </h3>
            
            <div className="space-y-6 mb-8">
              <p className="text-lg text-primary-700 leading-relaxed">
                You're busy.<br />
                Your team is busy.<br />
                You're pushing harder — but you're not seeing the exponential growth you know is possible.
              </p>
              
              <p className="text-lg text-primary-700 font-semibold">
                Maybe you're facing:
              </p>
              
              <ul className="space-y-3 text-primary-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-lg">Shrinking profit margins</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-lg">Business growth that's flatlining</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-lg">Project overruns</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-lg">A team that feels stretched or disengaged</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-lg">Slower delivery times</span>
                </li>
              </ul>
            </div>
            
            <p className="text-lg text-primary-700 leading-relaxed">
              <strong>You've tried the obvious fixes:</strong> more meetings, new tools, better goals…
            </p>
            
            <p className="text-lg text-primary-700 leading-relaxed mt-4">
              But the real problem is deeper — and harder to spot.
            </p>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="fade-in">
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-12 text-center">
              <div className="w-24 h-24 bg-primary-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-primary-900 mb-4">
                Stressed Business Owner
              </h4>
              <p className="text-primary-700">
                Feeling overwhelmed with endless problems and no clear solution in sight.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;