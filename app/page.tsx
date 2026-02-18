import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50">
      {/* JSON-LD Structured Data for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ChildCare",
            name: "ASID - Aunty Saunta's Intellectual Development",
            description:
              "Premium early learning facility providing advanced intellectual development for children aged 2.5 to 6 years",
            url: "https://www.asid-earlylearning.com.au",
            telephone: "+61-X-XXXX-XXXX",
            email: "info@asid-earlylearning.com.au",
            address: {
              "@type": "PostalAddress",
              streetAddress: "[Street Address]",
              addressLocality: "Wollongong",
              addressRegion: "NSW",
              postalCode: "25XX",
              addressCountry: "AU",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: -34.4278,
              longitude: 150.8931,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "07:00",
                closes: "18:00",
              },
            ],
            priceRange: "$$",
            servesCuisine: null,
            areaServed: [
              "Wollongong",
              "Thirroul",
              "Corrimal",
              "Figtree",
              "Fairy Meadow",
              "Bulli",
              "Keiraville",
            ],
          }),
        }}
      />

      {/* Header / Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-purple-600">
            ASID <span className="text-orange-500">Early Learning</span>
          </div>
          <ul className="flex gap-6 text-gray-700">
            <li>
              <a href="#about" className="hover:text-purple-600 transition">
                About
              </a>
            </li>
            <li>
              <a href="#programs" className="hover:text-purple-600 transition">
                Programs
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-purple-600 transition">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-purple-700 mb-6 animate-fade-in">
          Welcome to{" "}
          <span className="text-orange-500">
            Aunty Saunta&apos;s Intellectual Development
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Empowering young minds aged 2.5 to 6 with advanced learning,
          exceptional care, and a foundation for lifelong success.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#contact"
            className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition shadow-lg"
          >
            Enrol Now
          </a>
          <a
            href="#programs"
            className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition shadow-lg"
          >
            Our Programs
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-purple-700 mb-12">
            Why Choose ASID?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-8 rounded-2xl shadow-lg">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-purple-700 mb-3">
                Advanced Curriculum
              </h3>
              <p className="text-gray-700">
                Far exceeding standard national curriculum with focus on
                intellectual development and critical thinking skills.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-8 rounded-2xl shadow-lg">
              <div className="text-5xl mb-4">🏃</div>
              <h3 className="text-2xl font-bold text-orange-600 mb-3">
                Motor Skills Development
              </h3>
              <p className="text-gray-700">
                Comprehensive physical activities designed to enhance fine and
                gross motor skills through engaging play.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-8 rounded-2xl shadow-lg">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-pink-600 mb-3">
                Problem-Solving Focus
              </h3>
              <p className="text-gray-700">
                High-level problem-solving activities that prepare children for
                future academic excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-r from-purple-50 to-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-purple-700 mb-8">
            Meet Aunty Saunta
          </h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              With over 25 years of hands-on experience raising seven successful,
              well-adjusted adults, Aunty Saunta brings an unparalleled wealth
              of knowledge and love to early childhood education.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Her professional credentials and tertiary experience, combined
              with her natural gift for nurturing young minds, create the
              perfect environment for your child to thrive.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Still in her early 50s, Aunty Saunta is channeling her ambition
              and entrepreneurial spirit into building a world-class early
              learning facility that gives children the best possible start in
              life.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-purple-700 mb-12">
            Our Programs
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="border-4 border-purple-300 p-8 rounded-2xl hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold text-purple-700 mb-4">
                Toddler Explorers (2.5-3.5 years)
              </h3>
              <p className="text-gray-700 mb-4">
                Gentle introduction to structured learning through play,
                focusing on language development, social skills, and basic motor
                coordination.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Interactive storytelling</li>
                <li>Sensory play activities</li>
                <li>Early numeracy and literacy</li>
                <li>Music and movement</li>
              </ul>
            </div>
            <div className="border-4 border-orange-300 p-8 rounded-2xl hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">
                Pre-School Achievers (4-6 years)
              </h3>
              <p className="text-gray-700 mb-4">
                Advanced curriculum preparing children for primary school with
                emphasis on critical thinking, creativity, and independence.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Advanced problem-solving</li>
                <li>STEM activities</li>
                <li>Creative arts</li>
                <li>School readiness program</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-pink-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-purple-700 mb-8">
            Proudly Serving the Wollongong Region
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {[
              "Wollongong",
              "Thirroul",
              "Corrimal",
              "Figtree",
              "Fairy Meadow",
              "Keiraville",
              "Bulli",
              "Austinmer",
              "Mount Keira",
            ].map((suburb) => (
              <span
                key={suburb}
                className="bg-purple-600 text-white px-6 py-2 rounded-full text-lg font-semibold shadow-md"
              >
                {suburb}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-purple-700 mb-12">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-purple-50 to-orange-50 p-8 rounded-2xl shadow-xl">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl">📞</span>
                <div>
                  <h3 className="font-bold text-lg text-purple-700">Phone</h3>
                  <p className="text-gray-700">+61 X XXXX XXXX</p>
                  <p className="text-sm text-gray-500">
                    (Business hours: Mon-Fri 7am-6pm)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">✉️</span>
                <div>
                  <h3 className="font-bold text-lg text-purple-700">Email</h3>
                  <p className="text-gray-700">info@asid-earlylearning.com.au</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">📍</span>
                <div>
                  <h3 className="font-bold text-lg text-purple-700">Address</h3>
                  <p className="text-gray-700">[Street Address]</p>
                  <p className="text-gray-700">Wollongong, NSW 25XX</p>
                  <p className="text-gray-700">Australia</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">⏰</span>
                <div>
                  <h3 className="font-bold text-lg text-purple-700">
                    Operating Hours
                  </h3>
                  <p className="text-gray-700">Monday - Friday: 7:00 AM - 6:00 PM</p>
                  <p className="text-gray-700">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <a
                href="mailto:info@asid-earlylearning.com.au"
                className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition shadow-lg inline-block"
              >
                Send us an Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-2">
            &copy; 2026 ASID - Aunty Saunta&apos;s Intellectual Development
          </p>
          <p className="text-purple-300">
            Empowering young minds in Wollongong and surrounding areas
          </p>
        </div>
      </footer>
    </div>
  );
}
