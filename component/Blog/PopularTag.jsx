// components/PopularTags.tsx
const tags = [
    "Accounts",
    "Boosting",
    "Game Coins",
    "Power Leveling",
    "Items",
    "Gift Cards",
    "Boosting",
    "Game Coins",
    "Power Leveling",
    "Items",
  ];
  
  export default function PopularTags() {
    return (
      <div className="bg-[#042534] text-white p-6 rounded-lg w-full max-w-lg mx-auto">
        <h2 className="text-xl font-bold mb-4">Popular Tags</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <button
              key={index}
              className="bg-[#1a2b36] text-cyan-400 hover:bg-cyan-700  px-4 py-2 rounded-md text-sm font-medium transition"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    );
  }
  