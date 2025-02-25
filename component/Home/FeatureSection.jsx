import React from 'react';
import { Headset, Diamond, Award } from 'lucide-react';
import Image from 'next/image';

const FeatureCard = ({ icon, title, description }) => (
    <div className="bg-dark-500 backdrop-blur-sm p-8 rounded-lg text-center">
        <div className="flex justify-center mb-6">
            {icon}
        </div>
        <h3 className="text-white text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
);

const FeatureSection = () => {
    const features = [
        {
            icon: <Headset className="w-12 h-12 text-yellow-400" />,
            title: "24/7 Customer Support",
            description: "Always Here for You! Experience hassle-free gaming with our 24/7 Customer Support. Connect with us anytime, anywhere!"
        },
        {
            icon: <Diamond className="w-12 h-12 text-yellow-400" />,
            title: "Best Value & Fair Price",
            description: "Our marketplace offers unbeatable value for your money with exclusive deals on game keys, in-game currency, and more."
        },
        {
            icon: <Award className="w-12 h-12 text-yellow-400" />,
            title: "Moneyback Guarantee",
            description: "Shop with Confidence! Our Moneyback Guarantee ensures your satisfaction with every purchase."
        }
    ];

    return (
        <div className="bg-[#042534] relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute right-0 top-0 w-full h-full">
                <Image
                    src="/image/featureSection.jpg"
                    alt="game"
                    className="absolute top-0 left-0 h-full w-full object-cover"
                    width={100}
                    height={100}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
                {/* Hero Content */}
                <div className="text-center mb-16">
                    <p className="text-yellow-500 text-lg mb-4">
                        Probably the best gamer marketplace in the world
                    </p>
                    <h1 className="text-4xl md:text-4xl font-bold text-white mb-8 max-w-5xl mx-auto leading-10 ">
                        More than 500,000 gamers trust <span className="text-fuchsia-500 ">masterloot</span> as their ideal supplier for online video game needs
                    </h1>
                    <button className="  text-black px-20 py-2 text-sm font-semibold  bg-yellow-400 border border-yellow-400 ">
                        JOIN TODAY
                    </button>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;