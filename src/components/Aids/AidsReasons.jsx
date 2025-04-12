function AidsReasons() {
  return (
    <div className="px-6 md:px-10 lg:px-16 py-8 ">
      <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold text-center text-[#0c3249] mb-6">
        Why Choose ICEM for Your AIDS Engineering Journey?
      </h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {[
          { icon: "🖥", title: "Industry-Integrated Curriculum", desc: "Learn trending tech like AI & Cloud computing!" },
          { icon: "🚀", title: "Live Projects & Internships", desc: "Gain hands-on experience with real-world projects!" },
          { icon: "🎓", title: "Expert Faculty & Industry Mentors", desc: "Learn from top professionals!" },
          { icon: "💼", title: "Top Placements", desc: "Get hired by leading tech giants & startups!" },
          { icon: "🌍", title: "Global Career Prospects", desc: "Opportunities in MNCs across the world!" },
          { icon: "🏆", title: "Hackathons & Coding Competitions", desc: "Compete, innovate & build solutions!" },
          { icon: "🏫", title: "State-of-the-Art Labs", desc: "High tech IT & Apple labs!" },
          { icon: "🎉", title: "Exciting Campus Life", desc: "Sports, events & tech fests to fuel your passion!" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-[0px_0px_20px_5px_rgba(12,50,73,0.4)] p-6 text-center rounded-lg transition-transform transform hover:scale-105 hover:shadow-[0px_0px_25px_7px_rgba(12,50,73,0.6)]"
          >
            <div className="text-4xl text-[#390161] mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-[#035450] mb-2">{item.title}</h3>
            <p className="text-sm md:text-base text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AidsReasons;
