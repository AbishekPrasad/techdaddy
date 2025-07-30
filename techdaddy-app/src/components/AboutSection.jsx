const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              EXCITING TECHNOLOGY TRENDS
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We stay at the forefront of technology to deliver innovative solutions that drive your business forward. 
              Our team combines creativity with technical expertise to create exceptional digital experiences.
            </p>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                  <p className="text-gray-600">We ensure every project meets the highest standards of quality and performance.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                  <p className="text-gray-600">We deliver projects on time without compromising on quality or functionality.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
                  <p className="text-gray-600">Our dedicated support team is available around the clock to assist you.</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="https://forms.google.com/d/e/1FAIpQLSe_YOUR_FORM_ID/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Start Your Project
              </a>
            </div>
          </div>

          {/* Visual Element */}
          <div className="fade-in">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-gradient-to-br from-primary-600 to-secondary-500 rounded-3xl p-8 text-white transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Mobile Responsive</h3>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Cross Platform</h3>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Modern Design</h3>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-pink-400 rounded-lg animate-float" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 fade-in">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">100+</div>
                <div className="text-gray-600 font-medium">Projects</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-600 font-medium">Clients</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">5+</div>
                <div className="text-gray-600 font-medium">Years</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">99%</div>
                <div className="text-gray-600 font-medium">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;