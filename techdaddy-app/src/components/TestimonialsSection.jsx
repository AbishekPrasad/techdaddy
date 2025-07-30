const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Einstein Quote */}
        <div className="text-center mb-20 fade-in">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-primary-700 italic leading-relaxed mb-8">
              "We can not solve our problems with the same level of thinking that created them."
            </blockquote>
            <cite className="text-lg text-primary-600 font-medium">— Albert Einstein</cite>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-8">
            We're Not Just Consultants.<br />
            We're Your <span className="text-secondary-500">Profit Partners.</span>
          </h2>
          <p className="text-xl md:text-2xl text-primary-700 max-w-4xl mx-auto leading-relaxed mb-12">
            We help you unlock trapped potential and turn it into real, lasting growth. 
            Here's our promise to you:
          </p>
          
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4 text-lg text-primary-700 text-left">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary-500 rounded-full mt-3 flex-shrink-0"></div>
                <span>We focus only on what will create measurable results</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary-500 rounded-full mt-3 flex-shrink-0"></div>
                <span>We build a strategy tailored to your unique situation</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary-500 rounded-full mt-3 flex-shrink-0"></div>
                <span>We engineer solutions built to last</span>
              </li>
            </ul>
          </div>
          
          <p className="text-lg text-primary-700 mt-8 font-semibold">
            You deserve consulting that drives real change — not endless "initiatives" with no results.
          </p>
        </div>

        {/* Client Testimonial */}
        <div className="bg-gradient-to-r from-primary-900 to-primary-800 rounded-3xl p-8 md:p-12 text-white fade-in mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>
            <blockquote className="text-xl md:text-2xl font-light leading-relaxed mb-6 italic">
              "We had a project that was running behind schedule, and for months I had tried to get the team to communicate better. After only three days communication had greatly improved. Combined with a renewed focus we were able to accomplish in only two weeks what otherwise would have taken three months."
            </blockquote>
            <cite className="text-lg font-medium text-secondary-400">
              — Ajit, CTO
            </cite>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center fade-in">
          <h3 className="text-3xl md:text-4xl font-bold text-primary-900 mb-8">
            Find the One Change That Will Transform Everything
          </h3>
          <p className="text-xl text-primary-700 mb-8">
            Ready to stop guessing and start growing?
          </p>
          <a
            href="https://forms.google.com/d/e/1FAIpQLSe_YOUR_FORM_ID/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-lg mr-4"
          >
            Book a Free Strategy Call
          </a>
        </div>

        {/* Proven Success Badge */}
        <div className="mt-16 text-center fade-in">
          <div className="inline-flex items-center space-x-4 bg-secondary-50 rounded-full px-8 py-4">
            <div className="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-left">
              <h4 className="font-bold text-primary-900">Proven Success</h4>
              <p className="text-primary-700 text-sm">Our clients experience enhanced efficiency, faster project delivery, and significant growth.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;