const SolutionSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Main Heading */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-8">
            We don't guess. We diagnose.
          </h2>
          <p className="text-xl md:text-2xl text-primary-700 max-w-4xl mx-auto leading-relaxed">
            We specialize in <strong>finding and fixing</strong> the one thing that matters most. 
            Here's how we do it:
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Step 1 */}
          <div className="fade-in bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary-900 mb-4 text-center">
              Root Cause Analysis
            </h3>
            <p className="text-primary-700 text-center leading-relaxed">
              We diagnose the real constraint or bottleneck, not just the symptoms. 
              (Think of it as business X-ray vision.)
            </p>
          </div>

          {/* Step 2 */}
          <div className="fade-in bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary-900 mb-4 text-center">
              Solution Engineering
            </h3>
            <p className="text-primary-700 text-center leading-relaxed">
              We design a custom solution aimed specifically at that constraint — 
              no fluff, no wasted energy.
            </p>
          </div>

          {/* Step 3 */}
          <div className="fade-in bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary-900 mb-4 text-center">
              Future-Proof Testing
            </h3>
            <p className="text-primary-700 text-center leading-relaxed">
              We use if-then logic trees to pressure-test the solution against possible risks, 
              ensuring it leads to sustainable success — not new problems.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center fade-in mb-16">
          <a
            href="https://forms.google.com/d/e/1FAIpQLSe_YOUR_FORM_ID/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg"
          >
            Book A Call
          </a>
        </div>

        {/* Results Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl fade-in">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Immediate And Sustainable Results
            </h3>
            <p className="text-xl md:text-2xl text-primary-700 font-semibold">
              You get a targeted, transformative solution built for both{' '}
              <span className="text-secondary-500">quick wins</span> and{' '}
              <span className="text-secondary-500">long-term growth.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-primary-900 mb-2">Speed</h4>
              <p className="text-primary-700 text-sm">Your projects finish faster with less stress.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-primary-900 mb-2">Quality</h4>
              <p className="text-primary-700 text-sm">Your delivery improves, leading to happier clients and teams.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h4 className="font-semibold text-primary-900 mb-2">Profitability</h4>
              <p className="text-primary-700 text-sm">Costs drop, efficiency rises, margins expand.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h4 className="font-semibold text-primary-900 mb-2">Valuation</h4>
              <p className="text-primary-700 text-sm">Your business becomes more attractive — to investors, buyers, and top talent.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-primary-900 mb-2">Engagement</h4>
              <p className="text-primary-700 text-sm">Your team feels the momentum and takes pride in their work.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-primary-900 mb-2">Growth</h4>
              <p className="text-primary-700 text-sm">Sustainable business growth that compounds over time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;