import React from 'react';
import { Phone, MapPin, Truck } from 'lucide-react';

interface Office {
  city: string;
  address: string;
  contacts: string[];
  gstin?: string;
  mapsUrl: string;
}

const offices: Office[] = [
  {
    city: "Delhi (Head Office)",
    address: "47 Khanna Market, Tis Hazari, Delhi - 110054",
    contacts: ["7357291529", "9929001529"],
    gstin: "07BBCPB8367D1ZV",
    mapsUrl: "https://www.google.com/maps?q=28.6640796661377,77.2171096801758"
  },
  {
    city: "Libaspur (Branch Office)",
    address: "66 Feet Road, Bharat Property Ke Pass, Libaspur",
    contacts: ["9811931290", "8178203560"],
    mapsUrl: "https://www.google.com/maps/place/66+Feet+Road,+Bharat+Property+Ke+Pass,+Libaspur"
  },
  {
    city: "Jodhpur",
    address: "Bhut Oil Mill, 3 Heavy Industrial Area, Opp. Marwar Tent, Near Kunkundeep Garden, Jodhpur - 342001 (Raj.)",
    contacts: ["9509227337", "7690015042", "9829328620", "8302830697"],
    gstin: "08BBCPB8367D1ZT",
    mapsUrl: "https://www.google.com/maps?q=26.2557029724121,73.0075149536133"
  },
  {
    city: "Ahmedabad",
    address: "A/2 Bansidhar Estate Opp. Patel Metals, O/s. Dariyapur Gate, Bardolpura, Ahmedabad",
    contacts: ["9929041529", "9329251419", "9327096031", "9904771701"],
    gstin: "08BBCPB8367D1ZT",
    mapsUrl: "https://www.google.com/maps/place/A/2+Bansidhar+Estate+Opp.+Patel+Metals,+O/s.+Dariyapur+Gate,+Bardolpura,+Ahmedabad"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center">
            <Truck className="h-8 w-8 text-red-600 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              <span className="text-red-600">MOHAN</span>{" "}
              <span className="text-blue-600">MALANI</span>{" "}
              <span className="text-gray-800">FREIGHT CARRIER</span>
            </h1>
          </div>
          <p className="text-center text-gray-600 mt-2 text-lg">
            Professional Freight & Logistics Services Across India
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Company Header with Key Contacts */}
<div className="text-center mb-8">
  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
    MOHAN MALANI FREIGHT CARRIER
  </h1>
  <div className="space-y-4 text-xl md:text-2xl font-bold text-gray-800">
    <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-8">
      <span>
        Delhi - <span className="text-2xl">+91 73572 91529</span>
      </span>
      <span className="text-2xl text-red-600 mt-2 md:mt-0">
        GSTNO - 07BBCPB8367D1ZV
      </span>
    </div>
    <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-8">
      <span>
        Jodhpur - <span className="text-2xl">+91 95092 27337</span>
      </span>
      <span className="text-2xl text-red-600 mt-2 md:mt-0">
        GSTNO - 08BBCPB8367D1ZT
      </span>
    </div>
  </div>
</div>

        {/* Introduction */}
        <div className="text-center mb-12">
          <div className="mb-8">
            <img 
              src="/WhatsApp Image 2025-08-31 at 15.58.15_78a17b59.jpg" 
              alt="Mohan Malani Freight Carrier Truck" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Reliable Transportation Solutions
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Mohan Malani Freight Carrier provides comprehensive freight and logistics services 
            with strategic office locations across major Indian cities. Contact any of our offices 
            below for your transportation needs.
          </p>
        </div>

        {/* Office Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 transform hover:-translate-y-1"
            >
              <div className="p-6">
                {/* Office Header */}
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-gray-900">{office.city}</h3>
                </div>

                {/* Address */}
                <div className="mb-4">
                  <div className="flex items-start justify-between">
                    <p className="text-gray-700 leading-relaxed flex-1 mr-3">{office.address}</p>
                    <a
                      href={office.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-2 bg-green-100 hover:bg-green-200 text-green-800 rounded-lg transition-colors duration-200 text-sm font-medium flex-shrink-0"
                      title="View Location"
                    >
                      <MapPin className="h-4 w-4 mr-1" />
                      View Location
                    </a>
                  </div>
                  {office.gstin && (
                    <p className="text-sm text-red-600 font-medium mt-2">
                      GSTIN: {office.gstin}
                    </p>
                  )}
                </div>

                {/* Contact Numbers */}
                <div className="space-y-2">
                  <div className="flex items-center mb-2">
                    <Phone className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-semibold text-gray-900">Contact Numbers:</span>
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {office.contacts.map((contact, contactIndex) => (
                      <a
                        key={contactIndex}
                        href={`tel:${contact}`}
                        className="inline-flex items-center px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-800 rounded-lg transition-colors duration-200 font-medium"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        {contact}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Freight Transportation</h3>
              <p className="text-gray-600">Reliable goods transportation across major Indian cities</p>
            </div>
            <div className="p-4">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Multi-City Network</h3>
              <p className="text-gray-600">Strategic offices in Delhi, Jodhpur, Libaspur, Ahmedabad & Rajkot</p>
            </div>
            <div className="p-4">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer service and tracking</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-red-600 to-blue-600 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Ship Your Cargo?</h2>
            <p className="text-lg mb-6 opacity-90">
              Contact any of our offices for immediate assistance with your freight requirements
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="font-semibold">Delhi Head Office</p>
                <p className="text-sm opacity-90">73572 91529</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="font-semibold">Jodhpur Office</p>
                <p className="text-sm opacity-90">9509227337</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="font-semibold">Ahmedabad Office</p>
                <p className="text-sm opacity-90">9929041529</p>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Content */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <div className="prose max-w-none">
            <h2 className="text-xl font-bold text-gray-900 mb-4">About Mohan Malani Freight Carrier</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mohan Malani Freight Carrier, popularly known as Malani Transport, is a trusted name in the Indian transport and logistics sector. For decades, we have specialized in providing reliable freight and logistics services in India, connecting major cities such as Delhi, Jodhpur, Ahmedabad, Rajkot, and Libaspur. Our mission is simple — to deliver goods safely, on time, and with complete professionalism.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              As one of the most recognized names in the industry, Mohan Malani Freight Carrier has built a reputation for excellence and customer satisfaction. Many customers also search for us as Mohan Malani Transport, and we are proud to be associated with reliability, speed, and transparent service. Whether you are a small business owner, a manufacturer, or a distributor, our strong transport network ensures smooth cargo movement across northern and western India.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our headquarters in Delhi serves as a central hub, making transport from Delhi to Jodhpur, Ahmedabad, and Rajkot highly efficient. With dedicated fleets, trained drivers, and 24/7 customer support, we ensure that every delivery is handled with care. From small consignments to full truckloads, Malani Transport is equipped to handle it all.            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We believe logistics is not just about moving goods — it’s about building trust. Over the years, Mohan Malani Freight Carrier has become the first choice for businesses seeking dependable freight and logistics services in India. Our long-standing clients trust us for consistency, affordable rates, and a customer-first approach.            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              So, whether you are searching for Malani Transport Delhi, Mohan Malani Jodhpur services, or reliable freight carriers in Ahmedabad and Rajkot, we are here to serve you. At Mohan Malani Freight Carrier, your business is our responsibility, and your success is our destination            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-semibold mb-2">Mohan Malani Freight Carrier</h3>
          <p className="text-gray-400 mb-4">Your Trusted Partner in Freight Transportation</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span>Delhi • Jodhpur • Libaspur • Ahmedabad</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;