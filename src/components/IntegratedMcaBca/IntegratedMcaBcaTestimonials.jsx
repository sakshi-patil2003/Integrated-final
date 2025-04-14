// import ankitImage from "../../assets/images/bca/Ankit_Jain.avif";
// import misbahImage from "../../assets/images/bca/Misbah_Aryan.avif";
// import akankshaImage from "../../assets/images/bca/Akanksha_Jain.avif";
// import tanishaImage from "../../assets/images/bca/Tanisha_B.avif";
// import salilImage from "../../assets/images/bca/Salil_Deshpande.avif";
// import krishnaImage from "../../assets/images/bca/Krishna-prajapat.avif";
// import giteshImage from "../../assets/images/bca/Gitesh-Agarwal.avif";
 
// const testimonials = [
//   {
//     name: "Ankit Jain - Associate, JP Morgan Chase",
//     text: `"Indira is a fantastic college that offers excellent faculty and a wide range of extracurricular activities throughout your academic journey. The teaching-learning structure is well-balanced, combining theoretical and practical learning, which builds a strong foundation for personal and professional growth."`,
//     image: ankitImage,
//   },
//   {
//     name: "Misbah Afshari - CEO, DOT",
//     text: `"I had countless memorable moments at Indira. The college gave me some of the best experiences, not only on campus but also through classroom sessions and real-world exposure. Indira helped me stand out in this competitive world. Even as a foreign student, I never felt like an outsider. The faculty and students were incredibly supportive and taught me valuable lessons. I sincerely thank all the faculty members for treating us like their own children."`,
//     image: misbahImage,
//   },
//   {
//     name: "Akanksha Jain - Founder & CEO, Central Convoy",
//     text: `"Indira helped me realize my true potential and prepared me to seize new opportunities. During my time there, I was entrusted with various responsibilities that shaped my personality and enhanced my leadership skills. The teachers at Indira are dedicated and truly focus on the holistic development of students."`,
//     image: akankshaImage,
//   },
//   {
//     name: "Tanisha Barnwal - Hedge Fund Analyst, Northern Trust",
//     text: `"My enriching three-year journey at Indira BBA helped me improve my skills, gain confidence, and focus on self-development. Through presentations, academic activities, college fests, cultural events, and industrial visits, I gained both immense knowledge and unforgettable experiences."`,
//     image: tanishaImage,
//   },
//   {
//     name: "Salil Deshpande - Senior Analyst, Deutsche Bank",
//     text: `"Indira nurtured my passion for learning and gave me a platform to grow both personally and professionally. Everyone needs an opportunity to enhance their personality, and Indira provided that space for me."`,
//     image: salilImage,
//   },
//   {
//     name: "Krishna Prajapat - Vice President, Anand Rathi Wealth Limited",
//     text: `"Indira provides excellent career guidance and campus placement support, helping students build successful careers and stay ahead in the competitive job market. The college offers numerous placement opportunities, backed by highly qualified and experienced faculty members."`,
//     image: krishnaImage,
//   },
//   {
//     name: "Gitesh Agarwal - CEO & Founder, Vennplay",
//     text: `"Indira boasts a vast and beautiful campus with outstanding infrastructure. There are dedicated buildings for BBA, BBA IB, BBA CA, and B.Sc. programs. The faculty members are highly knowledgeable, and the quality of teaching is exceptional. They provide a well-rounded perspective on every subject."`,
//     image: giteshImage,
//   },
// ];
 
// export default function AlumniInfiniteScroll() {
//   const extended = [...testimonials, ...testimonials]; // For infinite scroll
 
//   return (
//     <div className="bg-[#F5F0EB] py-10 overflow-hidden">
//       <h2 className="text-3xl font-bold text-center mb-8 text-[#555555]">
//         What Our <span className="text-[#f37021]">Alumni</span> Say
//       </h2>
 
//       <div className="relative w-full overflow-hidden">
//         <div className="flex animate-scroll-track w-max">
//           {extended.map((t, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 px-4"
//               style={{
//                 width: "27.2222vw", // 3 cards visible always
//                 maxWidth: "27.2222vw",
//               }}
//             >
//               <div className="bg-white border border-[#f37021] rounded-2xl shadow-md p-6 h-full flex flex-col items-center text-center">
//                 <img
//                   src={t.image}
//                   alt={t.name}
//                   className="w-20 h-20 rounded-full object-cover mb-4"
//                 />
//                 <p className="text-[#f37021] font-semibold text-sm">
//                   {t.name}
//                 </p>
//                 <p className="text-xs text-gray-600 mb-4">{t.designation}</p>
//                 <p className="text-sm text-gray-800">{t.text}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
 
//       <style>{`
//         @keyframes scroll {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
 
//         .animate-scroll-track {
//           animation: scroll 30s linear infinite;
//         }
 
//         .animate-scroll-track:hover {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </div>
//   );
// }

import ankitImage from "../../assets/images/bca/Ankit_Jain.avif";
import misbahImage from "../../assets/images/bca/Misbah_Aryan.avif";
import akankshaImage from "../../assets/images/bca/Akanksha_Jain.avif";
import tanishaImage from "../../assets/images/bca/Tanisha_B.avif";
import salilImage from "../../assets/images/bca/Salil_Deshpande.avif";
import krishnaImage from "../../assets/images/bca/Krishna-prajapat.avif";
import giteshImage from "../../assets/images/bca/Gitesh-Agarwal.avif";

const testimonials = [
  {
    name: "Ankit Jain - Associate, JP Morgan Chase",
    text: `"Indira is a fantastic college that offers excellent faculty and a wide range of extracurricular activities throughout your academic journey. The teaching-learning structure is well-balanced, combining theoretical and practical learning, which builds a strong foundation for personal and professional growth."`,
    image: ankitImage,
  },
  // {
  //   name: "Misbah Afshari - CEO, DOT",
  //   text: `"I had countless memorable moments at Indira. The college gave me some of the best experiences, not only on campus but also through classroom sessions and real-world exposure. Indira helped me stand out in this competitive world. Even as a foreign student, I never felt like an outsider. The faculty and students were incredibly supportive and taught me valuable lessons. I sincerely thank all the faculty members for treating us like their own children."`,
  //   image: misbahImage,
  // },
  {
    name: "Akanksha Jain - Founder & CEO, Central Convoy",
    text: `"Indira helped me realize my true potential and prepared me to seize new opportunities. During my time there, I was entrusted with various responsibilities that shaped my personality and enhanced my leadership skills. The teachers at Indira are dedicated and truly focus on the holistic development of students."`,
    image: akankshaImage,
  },
  {
    name: "Tanisha Barnwal - Hedge Fund Analyst, Northern Trust",
    text: `"My enriching three-year journey at Indira BBA helped me improve my skills, gain confidence, and focus on self-development. Through presentations, academic activities, college fests, cultural events, and industrial visits, I gained both immense knowledge and unforgettable experiences."`,
    image: tanishaImage,
  },
  {
    name: "Salil Deshpande - Senior Analyst, Deutsche Bank",
    text: `"Indira nurtured my passion for learning and gave me a platform to grow both personally and professionally. Everyone needs an opportunity to enhance their personality, and Indira provided that space for me."`,
    image: salilImage,
  },
  {
    name: "Krishna Prajapat - Vice President, Anand Rathi Wealth Limited",
    text: `"Indira provides excellent career guidance and campus placement support, helping students build successful careers and stay ahead in the competitive job market. The college offers numerous placement opportunities, backed by highly qualified and experienced faculty members."`,
    image: krishnaImage,
  },
  {
    name: "Gitesh Agarwal - CEO & Founder, Vennplay",
    text: `"Indira boasts a vast and beautiful campus with outstanding infrastructure. There are dedicated buildings for BBA, BBA IB, BBA CA, and B.Sc. programs. The faculty members are highly knowledgeable, and the quality of teaching is exceptional. They provide a well-rounded perspective on every subject."`,
    image: giteshImage,
  },
];

export default function AlumniInfiniteScroll() {
  const extended = [...testimonials, ...testimonials]; // For infinite scroll

  return (
    <div className="bg-[#F5F0EB] py-10 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#555555]">
        What Our <span className="text-[#f37021]">Alumni</span> Say
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll-track w-max">
          {extended.map((t, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-2 md:px-4"
              style={{
                width: "80vw", // mobile view - 1 card
                maxWidth: "80vw",
              }}
            >
              <div className="bg-white border border-[#f37021] rounded-2xl shadow-md p-6 h-full flex flex-col items-center text-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <p className="text-[#f37021] font-semibold text-sm">
                  {t.name}
                </p>
                <p className="text-sm text-gray-800">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .animate-scroll-track > div {
            width: 27.2222vw !important;
            max-width: 27.2222vw !important;
          }
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll-track {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
