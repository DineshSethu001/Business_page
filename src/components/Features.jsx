export default function Features() {
  const features = [
    {
      icon: "🔍",
      title: "Find out what you need",
      description: "We present you a proposal and discuss nitty-gritty like",
    },
    {
      icon: "⚙️",
      title: "Work out the details",
      description: "Communication protocols apart from engagement models",
    },
    {
      icon: "🚀",
      title: "We get to work fast",
      description: "Protocols apart from engage models, pricing billing",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* heading text */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          How can we help your Business?
        </h2>
        <p className="text-gray-600">
          When you resell the Product, you build trust and increase
        </p>
      </div>

      {/* features grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            className="flex flex-col items-center text-center p-6"
            key={index}
          >
            <div
              className="w-24 h-24 rounded-full mb-6 flex items-center justify-center"
              style={{
                backgroundColor:
                  index === 0 ? "#F1EFFD" : index === 1 ? "#FEE7E7" : "#FFF3E4",
              }}
            >
              <div className="text-3xl">{feature.icon}</div>
            </div>
            <h3 className="text-2xl font-medium mb-3">{feature.title}</h3>
            <p className="text-gray-500 text-center">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* centered glowing button */}
      <div className="mt-10 flex justify-center relative">
        <button className="relative bg-blue-600 text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-transform duration-300 hover:scale-105">
          Become a partner
          {/* glowing blur background */}
          <div className="absolute inset-0 -z-10 rounded-full bg-blue-600/40 blur-2xl"></div>
        </button>
      </div>
    </section>
  );
}
