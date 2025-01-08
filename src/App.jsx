import React, { useState } from 'react';

    function App() {
      const [isMonthly, setIsMonthly] = useState(true);

      const plans = [
        {
          name: 'Cyber Basic',
          description: 'Perfect for sushi enthusiasts starting their cyberpunk journey.',
          monthlyPrice: '¥2,000',
          annualPrice: '¥20,000',
          features: [
            '10% off all regular menu items',
            'Priority seating',
            'Monthly exclusive menu preview',
            'Digital membership card',
          ],
        },
        {
          name: 'Neo Premium',
          description: 'The ideal package for regular cyber sushi lovers.',
          monthlyPrice: '¥5,000',
          annualPrice: '¥50,000',
          features: [
            '20% off all menu items',
            'Skip-the-line access',
            'Quarterly exclusive tasting events',
            'Digital membership card with holographic display',
            'Free delivery within Neo Tokyo',
            'Access to secret menu items',
          ],
        },
        {
          name: 'Quantum Elite',
          description: 'For the ultimate cyber gastronomy experience.',
          monthlyPrice: '¥10,000',
          annualPrice: '¥100,000',
          features: [
            '30% off all purchases',
            'Personal cyber-chef consultation',
            'Monthly private dining experience',
            'Holographic membership card with AR features',
            'Unlimited free delivery',
            'Access to all secret menu items',
            'Exclusive sake tasting sessions',
            'Private events access',
          ],
        },
      ];

      return (
        <div className="bg-primary text-text-primary min-h-screen flex flex-col items-center justify-center font-sans">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-4">Membership Plans</h1>
            <p className="text-text-secondary text-center mb-8">
              Join our exclusive membership program and unlock a world of cyber-culinary benefits.
            </p>

            <div className="flex justify-center mb-8">
              <span className="mr-2">Monthly</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  checked={!isMonthly}
                  onChange={() => setIsMonthly(!isMonthly)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent-light dark:peer-focus:ring-accent-light rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-accent transition-all"></div>
              </label>
              <span className="ml-2">Annual</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div key={index} className="bg-secondary rounded-lg p-6 shadow-lg flex flex-col transition-transform hover:scale-102 hover:shadow-2xl hover:shadow-accent-light">
                  <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
                  <p className="text-text-secondary mb-4">{plan.description}</p>
                  <div className="flex items-center mb-4">
                    <span className="text-3xl font-bold mr-2">
                      {isMonthly ? plan.monthlyPrice : plan.annualPrice}
                    </span>
                    <span className="text-text-secondary">/month</span>
                  </div>
                  <button className="bg-accent hover:bg-cyan text-white font-bold py-2 px-4 rounded mb-4 transition-colors duration-300">
                    Get started
                  </button>
                  <ul className="flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center mb-2">
                        <svg
                          className="w-4 h-4 mr-2 text-accent"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    export default App;
