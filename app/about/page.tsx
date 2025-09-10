import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const TEAM = [
    {
      name: "Dr. Md. Ehtesham Hasan",
      role: "Management, Marketing & Product Development",
      desc: "Ph.D. in Mechanical Engineering from IIT (ISM) Dhanbad and M.Tech from NIT Durgapur. Currently Assistant Professor at KIIT with expertise in power hydraulics, dynamic modelling, and hydrostatic transmission systems. Published extensively in SCI journals and experienced in teaching Strength of Materials, Machine Design, and Advanced Mechanics of Solids.",
      img: "/images/ethe.jpg",
    },
    {
      name: "Shahid Nezam",
      role: "Head of Finance, Business Analytics & Strategic Planning",
      desc: "Detail-oriented accounts professional with 10+ years of experience across finance and billing roles in the GCC. Skilled in invoicing, reconciliation, payroll, purchase orders, VAT/tax compliance, and ERP systems (Tally, Ramco, Navision). Holds an M.Com in Marketing & Finance.",
      img: "/images/Shahid Nezam.jpg",
    },
    {
      name: "Vineeth Kundu",
      role: "Marketting, Product Development & Export Operations",
      desc: "Leads marketing strategies, branding, and digital presence while also developing and maintaining the company’s social platforms to ensure a strong market identity and seamless online experience. 2nd-year B.Tech Computer Science student at Silicon University, Bhubaneswar.",
      img: "/images/Vineeth Kundu.webp",
    },
    {
      name: "Md Arquam Sayeed",
      role: "Management, Sales & Export Operations",
      desc: "Oversees client engagement and supply chain coordination — liaising with manufacturers, managing sales, and strengthening client relationships. 2nd-year B.Tech in Electronics & Instrumentation Engineering at Silicon University.",
      img: "/images/team/partner4.jpg",
    },
  ];
  
  return (
    <div className="container-custom py-10 px-4 md:px-8 text-eco-green-800">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Not Just Bags.{" "}
          <span className="text-eco-green-600">Brand Statements.</span>
        </h1>
        <p className="text-lg md:text-xl text-eco-green-700 max-w-3xl mx-auto">
          IndoWoven creates premium eco-solutions that turn first impressions
          into lasting brand love. Because plastic giveaways? That’s a branding
          crime in 2025.
        </p>
        <div className="mt-8 relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/images/back3.png"
            alt="IndoWoven Impact"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Brand Manifesto */}
      <section className="mb-20 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          🌿 Welcome to the Future of Gifting.
        </h2>
        <p className="text-md md:text-lg leading-relaxed text-eco-green-700">
          You’re not here for boring. Neither are we. IndoWoven was built for
          brands that give a damn — about impact, aesthetics, and the planet.
          We’re the artisans of your brand’s first impression. Our products
          aren’t just eco-friendly — they’re conversation starters.
        </p>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
          Meet the People Behind IndoWoven
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {TEAM.map(({ name, role, desc, img }, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center p-6"
            >
              <div className="w-28 h-28 mx-auto relative mb-4">
                <Image
                  src={img}
                  alt={name}
                  fill
                  className="object-cover rounded-full border-4 border-eco-green-200"
                />
              </div>
              <h3 className="text-lg font-bold text-eco-green-800">{name}</h3>
              <p className="text-sm text-eco-green-600 font-medium mb-2">
                {role}
              </p>
              <p className="text-sm text-eco-green-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="mb-20 grid md:grid-cols-3 gap-6 text-center">
        {[
          {
            title: "♻ Zero-Guilt Materials",
            desc: "Jute, canvas, bamboo, and biodegradable elements. No plastic. No fluff. No BS.",
          },
          {
            title: "💼 Boardroom Ready",
            desc: "Our products are made to impress CEOs, deans, and decision-makers. Subtle luxury meets green ethics.",
          },
          {
            title: "🎨 Custom Built",
            desc: "Every detail — from weave to font — can be personalized to match your brand DNA.",
          },
        ].map(({ title, desc }, i) => (
          <div
            key={i}
            className="bg-eco-green-50 p-6 rounded-lg shadow hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-eco-green-700 text-sm">{desc}</p>
          </div>
        ))}
      </section>

      {/* Mission Statement */}
      <section className="mb-20 bg-eco-green-100 p-8 rounded-2xl shadow-lg text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          This Is Bigger Than Us.
        </h2>
        <p className="text-md md:text-lg max-w-3xl mx-auto text-eco-green-800">
          We exist to replace generic plastic junk with beautiful, sustainable,
          and purposeful products. Because every time someone receives an
          IndoWoven gift, they should feel:
          <br />
          <strong className="text-eco-green-700">
            “Damn. This brand gets it.”
          </strong>
        </p>
      </section>

      {/* Process Timeline */}
      <section className="mb-20">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
          How It Works
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            ["👂 Discovery", "We get to know your vibe, audience, and goals."],
            [
              "✍ Design",
              "Our designers whip up concepts tailored to your brand.",
            ],
            ["🛠 Production", "Ethically made, eco-first, and quality checked."],
            ["🚚 Delivery", "Delivered on time with zero carbon guilt."],
          ].map(([title, desc], i) => (
            <div
              key={i}
              className="bg-white border border-eco-green-200 rounded-lg p-6 shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm text-eco-green-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center bg-eco-green-700 text-white py-12 px-6 rounded-xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Your Values. Our Craft. One Future.
        </h2>
        <p className="text-md md:text-lg mb-6 max-w-xl mx-auto">
          Your next event or campaign doesn’t need another cheap pen. It needs
          purpose.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-eco-green-700 font-medium px-6 py-3 rounded-md hover:bg-eco-green-100 transition"
        >
          Lets Talk Impact →
        </Link>
      </section>
    </div>
  );
}
