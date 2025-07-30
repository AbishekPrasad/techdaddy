const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-12 h-12 border-2 border-white rounded-lg rotate-12"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Let's work together to bring your vision to life. Contact us today and get started on your digital transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="fade-in">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Office Address</h3>
                  <p className="text-gray-300">123 Tech Street, Innovation City, TC 12345</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-gray-300">+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-300">contact@techdaddy.com</p>
                  <p className="text-gray-300">support@techdaddy.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
                  <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Saturday: 9:00 AM - 2:00 PM</p>
                  <p className="text-gray-300">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="fade-in">
            <div className="bg-gradient-to-br from-primary-600 to-secondary-500 rounded-3xl p-8 md:p-12 text-center">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Register for Our Services
              </h3>
              
              <p className="text-white/90 mb-8 leading-relaxed">
                Ready to transform your business? Fill out our service registration form and let's discuss how we can help you achieve your goals.
              </p>
              
              <a
                href="https://forms.google.com/d/e/1FAIpQLSe_YOUR_FORM_ID/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-primary-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
              >
                Register Now
              </a>
              
              <div className="mt-6 text-white/80 text-sm">
                <p>✓ Free consultation</p>
                <p>✓ Custom quote within 24 hours</p>
                <p>✓ No obligation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center fade-in">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-4">
              Have Questions? Let's Talk!
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our team is here to help you make the right decisions for your business. 
              Schedule a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15551234567"
                className="btn-secondary bg-white/10 hover:bg-white/20 border border-white/20"
              >
                Call Now
              </a>
              <a
                href="mailto:contact@techdaddy.com"
                className="btn-secondary bg-white/10 hover:bg-white/20 border border-white/20"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;