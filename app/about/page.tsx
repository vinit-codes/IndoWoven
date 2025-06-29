import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container-custom py-8 md:py-12 px-4 md:px-6">
      {/* Hero Section */}
      <div className="mb-8 md:mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-eco-green-800 mb-4">
          About Wild & Woven
        </h1>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-sm md:text-base lg:text-lg text-eco-green-700">
            <p className="mb-4 md:mb-6">
              🌿{" "}
              <strong>
                IndoWoven: Sustainable Gifting that Speaks for Your Brand
              </strong>
              <br />
              In today&#39;s conscious marketplace, every brand, institution, and
              event organizer is under pressure to do more than just deliver —
              they must inspire, align with values, and lead by example. At{" "}
              <strong>IndoWoven</strong>, we help you elevate your brand
              presence with premium, eco-conscious gifting solutions that
              reflect your commitment to sustainability and thoughtful impact.
            </p>

            <p className="mb-4 md:mb-6">
              Whether you&#39;re hosting a high-stakes corporate meeting, onboarding
              new employees, organizing a university event, or creating a
              high-end client gifting experience — our biodegradable jute bags,
              bamboo-wrapped bottles, and eco-friendly stationery kits don’t
              just look premium —{" "}
              <strong>
                they speak volumes about who you are as a company.
              </strong>
              <br />
              We understand that your reputation is built on consistency,
              quality, and detail. That’s why our products are not only
              sustainably sourced and ethically made — they are{" "}
              <em>
                designed to impress, built to last, and delivered on time.
              </em>
            </p>

            <p className="mb-2">
              💼 <strong>Your Brand. Our Craft. One Shared Mission.</strong>
              <br />
              Partnering with IndoWoven allows you to:
            </p>

            <ul className="list-disc ml-6 mb-4">
              <li>
                ✔ Enhance your ESG credibility with clients, employees, and
                stakeholders
              </li>
              <li>
                ✔ Make your events, awards, and gifting memorable and meaningful
              </li>
              <li>
                ✔ Replace generic, forgettable plastic giveaways with branded
                sustainability
              </li>
              <li>
                ✔ Reduce procurement hassle with reliable design, supply &
                delivery support
              </li>
            </ul>

            <p>
              <strong>
                This is more than a product. It’s an extension of your values.
              </strong>
              <br />
              <em>IndoWoven — Carry your impact.</em>
            </p>
          </div>

          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md mt-6 md:mt-0">
            <Image
              src="/images/back3.png"
              alt="EcoBags team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="mb-8 md:mb-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-eco-green-800 mb-6 md:mb-8 text-center">
          Our Values
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-eco-green-50 p-6 md:p-8 rounded-xl text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-eco-green-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-8 md:w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-eco-green-800">
              Sustainability
            </h3>
            <p className="text-sm md:text-base text-eco-green-700">
              We carefully select materials and manufacturing processes that
              minimize environmental impact. From recycled polyester to organic
              cotton, we prioritize sustainability at every step.
            </p>
          </div>

          <div className="bg-eco-brown-50 p-6 md:p-8 rounded-xl text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-eco-brown-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-8 md:w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-eco-brown-800">
              Community
            </h3>
            <p className="text-sm md:text-base text-eco-brown-700">
              We partner with local communities and ethical factories to ensure
              fair labor practices. We believe that sustainability includes
              treating people fairly throughout our supply chain.
            </p>
          </div>

          <div className="bg-eco-blue-50 p-6 md:p-8 rounded-xl text-center sm:col-span-2 md:col-span-1">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-eco-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-8 md:w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-eco-blue-800">
              Innovation
            </h3>
            <p className="text-sm md:text-base text-eco-blue-700">
              We continuously research and develop new sustainable materials and
              designs. We stay at the forefront of eco-friendly bag technology
              to provide the best options for our clients.
            </p>
          </div>
        </div>
      </div>

      {/* Our Process */}
      <div className="mb-8 md:mb-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-eco-green-800 mb-6 md:mb-8 text-center">
          Our Process
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              title: "Consultation",
              description:
                "We work with you to understand your brand, needs, and sustainability goals.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              ),
            },
            {
              title: "Design",
              description:
                "Our designers create custom bag designs that perfectly represent your brand.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              ),
            },
            {
              title: "Production",
              description:
                "We manufacture your bags using sustainable materials and ethical processes.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              ),
            },
            {
              title: "Delivery",
              description:
                "We deliver your custom bags with carbon-neutral shipping methods.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                  />
                </svg>
              ),
            },
          ].map((step, index) => (
            <div key={index} className="relative">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-eco-green-500 rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto">
                {step.icon}
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-2 md:mb-3 text-eco-green-800 text-center">
                {step.title}
              </h3>
              <p className="text-xs md:text-sm lg:text-base text-eco-green-700 text-center">
                {step.description}
              </p>

              {index < 3 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-eco-green-200 -z-10 transform -translate-x-8"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-eco-green-700 text-white rounded-xl p-6 md:p-8 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          Ready to Go Green with Your Business?
        </h2>
        <p className="text-sm md:text-base mb-6 max-w-2xl mx-auto">
          Make an Impact. Make It Branded. Make It Sustainable.
        </p>
        <Link
          href="/contact"
          className="bg-white text-eco-green-800 px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-eco-green-100 transition-colors duration-300 inline-block text-sm md:text-base"
        >
          Contact Us Today
        </Link>
      </div>
    </div>
  );
}
