const ServicesSection = () => {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Mobile Responsive Website",
      description: "We create beautiful mobile responsive websites. Highly customizable from simple corporate websites to complicated E-Commerce and Booking websites.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Mobile App Development",
      description: "We create beautiful mobile apps to give your business the edge over your competitors. Mobile apps have the edge in terms of Loyalty points, Coupons, GPS enabled location and push notifications.",
      features: ["iOS & Android", "Cross Platform", "Push Notifications", "Offline Support"]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Software Development",
      description: "If you need to automate your business process or even connect all your departments, a customized software is the solution. From simple inventory system to complex Enterprise Resource Planning Software.",
      features: ["Custom Solutions", "API Integration", "Cloud Deployment", "Scalable Architecture"]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Digital Marketing",
      description: "Having a website or mobile app is useless unless you are able to market your business through various Digital Marketing platforms. We can help you with your Social Media Marketing and Search Engine Optimization.",
      features: ["SEO Services", "Social Media", "Content Marketing", "Analytics & Reports"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What We Do
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive technology solutions to help your business grow and succeed in the digital world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-2xl text-white mb-6 mx-auto">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 text-center leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-8 text-center">
                <a
                  href="https://forms.google.com/d/e/1FAIpQLSe_YOUR_FORM_ID/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20 fade-in">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Our Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Planning",
                description: "Requirements analysis including client goals, target audience and chosen platform. We prepare the project charter and contracts that define roles, scope and costs."
              },
              {
                step: "2",
                title: "Design",
                description: "Creating a visual representation of the requirements outlined in the planning step. This usually involves wireframe design, mock-ups and review cycles."
              },
              {
                step: "3",
                title: "Development",
                description: "The bulk of programming work, as well as loading content. Common tools involve the use of Content management systems, various frameworks and databases."
              },
              {
                step: "4",
                title: "Launch",
                description: "Preparing the website or app for public viewing. This requires polishing of all design elements and testing of the interface."
              },
              {
                step: "5",
                title: "Post-Launch",
                description: "Turn-over of the project to the client, user training on how to update and use the CMS, turn-over of passwords and other documents."
              },
              {
                step: "6",
                title: "Support",
                description: "Technical support, periodic server backup, training, updating/patching CMS. Yearly domain and cloud hosting renewal."
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;