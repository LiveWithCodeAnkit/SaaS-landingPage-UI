import { Trophy, Sprout, Sun } from "lucide-react";

export default function Component() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          We help your business grow faster.
        </h1>
        <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
          Why kept very ever home mrs. Considered sympathize ten uncommonly
          occasional assistance sufficient.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Trophy className="w-12 h-12 text-[#f97366] mb-4" />,
              title: "Offending belonging",
              description:
                "Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.",
            },
            {
              icon: <Sprout className="w-12 h-12 text-[#f97366] mb-4" />,
              title: "Promotion & provision",
              description:
                "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
            },
            {
              icon: <Sun className="w-12 h-12 text-[#f97366] mb-4" />,
              title: "Blessing application",
              description:
                "Ham windows sixteen who inquiry fortune demands. Is be upon sang fond must shew. Really boy law county she unable her sister.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg">
              <div className="flex justify-center">{item.icon}</div>
              <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <a
                href="#"
                className="text-[#f97366] hover:underline inline-flex items-center"
              >
                Read More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
