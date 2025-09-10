import ContactForm from "../../components/contactForm";

export default function ContactPage() {
  return (
    <div className="container-custom py-8 md:py-12 px-4 md:px-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-eco-green-800 mb-2">
        Contact Us
      </h1>
      <p className="text-sm md:text-base text-eco-green-700 mb-6 md:mb-8 max-w-3xl">
        Have questions about our eco-friendly bags or want to discuss a custom
        order? We&apos;d love to hear from you. Fill out the form below or use
        our contact information.
      </p>

      <div className="grid md:grid-cols-3 gap-6 md:gap-12">
        <div className="md:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-5 md:p-8">
            <h2 className="text-lg md:text-xl font-semibold text-eco-green-800 mb-4 md:mb-6">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>
        </div>

        <div>
          <div className="bg-eco-green-50 rounded-xl p-5 md:p-8 mb-6 md:mb-8">
            <h2 className="text-lg md:text-xl font-semibold text-eco-green-800 mb-4 md:mb-6">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="text-eco-green-600 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-eco-green-700">
                    Address
                  </h4>
                  <p className="text-sm text-gray-600">
                    kolkata, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="text-eco-green-600 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-eco-green-700">
                    Email
                  </h4>
                  <p className="text-sm text-gray-600">
                   exports@indowoven.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="text-eco-green-600 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-eco-green-700">
                    Phone
                  </h4>
                  <p className="text-sm text-gray-600">+91 7682887844</p>
                  <p className="text-sm text-gray-600">+91 8102294842</p>
                  <p className="text-sm text-gray-600">+91 7070653591</p>
                  <p className="text-sm text-gray-600">+91 7003837949</p>
        
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="mt-8 md:mt-12">
        <h2 className="text-xl md:text-2xl font-semibold text-eco-green-800 mb-4 md:mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 md:space-y-6">
          {[
            {
              question: "What is the minimum order quantity?",
              answer:
                "Our minimum order quantity varies by product type, but typically starts at 100 units for custom designs. For standard products, smaller quantities are available.",
            },
            {
              question: "How long does production take?",
              answer:
                "Production time depends on the complexity of your design and order quantity. Typically, it takes 2-3 weeks for custom orders. Rush orders may be accommodated when possible.",
            },
            {
              question: "Do you offer samples before full production?",
              answer:
                "Yes, we offer sample production for custom designs. Sample fees are typically credited toward your full order upon approval.",
            },
            {
              question: "What sustainable materials do you use?",
              answer:
                "We use a variety of eco-friendly materials including organic cotton, recycled polyester, hemp, jute, and other sustainable fibers. All our materials are certified for their environmental standards.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-4 md:p-6"
            >
              <h3 className="text-base md:text-lg font-medium text-eco-green-800 mb-1 md:mb-2">
                {faq.question}
              </h3>
              <p className="text-eco-green-700 text-sm md:text-base">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
