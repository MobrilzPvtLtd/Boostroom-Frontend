import React from 'react';
import { Headset, Diamond, Award } from 'lucide-react';
import Image from 'next/image';

const FeatureCard = ({ imageSrc, title, description }) => (
    <div className="bg-dark-500 backdrop-blur-sm p-8 rounded text-center">
        <Image
            src={imageSrc}
            alt={title}
            width={60}
            height={60}
            className="text-cyan-400 flex justify-center mx-auto pb-4"
        />
        <h3 className="text-slate-100 text-xl font-bold mb-4">{title}</h3>
        <p className="text-slate-400 text-base leading-normal ">{description}</p>
    </div>
);

const FeatureSection = () => {
    const features = [
        {
            imageSrc: "/image/headset.png",
            title: "24/7 Customer Support",
            description: "Always Here for You! Experience hassle-free gaming with our 24/7 Customer Support. Connect with us anytime, anywhere!"
        },
        {
            imageSrc: "/image/diamond.png",
            title: "Best Value & Fair Price",
            description: "Our marketplace offers unbeatable value for your money with exclusive deals on game keys, in-game currency, and more."
        },
        {
            imageSrc: "/image/award.png",
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

            <div className="max-w-7xl mx-auto flex flex-col items-center py-16 relative z-10">
                {/* Hero Content */}
                <div className=" max-w-2xl text-center ">
                    <p className="text-yellow-500 text-sm font-semibold mb-4">
                        Probably the best gamer marketplace in the world
                    </p>
                    <h1 className="text-3xl md:text-2xl font-bold tracking-wide text-white mb-10 max-w-5xl mx-auto leading-10 ">
                        More than 500,000 gamers trust <span className="text-fuchsia-500 ">masterloot</span> as their ideal supplier for online video game needs
                    </h1>
                    <button className="  text-black rounded px-20 py-2 text-xs font-bold  bg-yellow-400 border border-yellow-400 ">
                        JOIN TODAY
                    </button>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 px-4">
                    {features.map((feature, index) => (
                        <FeatureCard
                        key={index}
                        imageSrc={feature.imageSrc} // Use imageSrc instead of icon
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