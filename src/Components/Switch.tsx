"use client";
import React, { useState } from "react";
import Image from "next/image"; // ✅ You missed this import

const Switch = () => {
  const [selectedContent, setSelectedContent] = useState("Content for Ellipse 1");

  const handleImageClick = (content: string) => {
    setSelectedContent(content);
  };

  return (
    <div className="py-20 border-[#FF4309] border-b-[5px]">
      <div className="container">
        <h2 className="text-center text-[30px] 2xl:text-[38px]">
          Working with Consistency and Due Diligence for Startups and Businesses since 2015
        </h2>

        <div className="lg:flex justify-between items-center mt-10">
          <div className="mt-4">
            {selectedContent === "Content for Ellipse 1" && (
              <ContentBlock
                img="/Images/Ellipse-1.webp"
                text={[
                  `CodeXMattrix has been helping us at Mentors Guild with a refreshing new approach to marketing and sales.`,
                  `I think his unique approach (a tight combination of buyer psychology and ability to craft new offers) is more suited for rapid growth in revenues than anything else I have seen by Hawaii-based marketers.`,
                ]}
                name="Iqbal Ashraf"
                role="CEO, GUILD.im"
              />
            )}
            {selectedContent === "Content for Ellipse 2" && (
              <ContentBlock
                img="/Images/Ellipse-2.webp"
                text={[
                  `CodeXMattrix is very personable, persistent, and very good at communicating ideas. We enjoyed our time working with him and learned a lot. We hope to re-engage again in the future.`,
                ]}
                name="Nick Bolton"
                role="CEO, Symless"
              />
            )}
            {selectedContent === "Content for Ellipse 3" && (
              <ContentBlock
                img="/Images/Ellipse-3.webp"
                text={[
                  `CodeXMattrix did a great job with his ad funnel strategy. Really well thought out and custom to our campaign, it wasn't just a cookie-cutter solution. Great job at setting us up for success.`,
                ]}
                name="Nick Dennis"
                role="CEO, fitDEGREE"
              />
            )}
            {selectedContent === "Content for Ellipse 4" && (
              <ContentBlock
                img="/Images/Ellipse-4.webp"
                text={[
                  `CodeXMattrix is outstanding in every respect. He exceeded all expectations and communicated effectively throughout. He is creative, resourceful and thoughtful — a sincere pleasure to work with.`,
                ]}
                name="Larry Gilbert"
                role="CEO, Event Network"
              />
            )}
            {selectedContent === "Content for Ellipse 5" && (
              <ContentBlock
                img="/Images/Ellipse-5.webp"
                text={[`CodeXMattrix does excellent work! I will certainly be using him again in the future!`]}
                name="Terry Sweet"
                role="CEO, Background Information Group"
              />
            )}
          </div>

          {/* Image Selector */}
          <div className="flex flex-wrap flex-row justify-center items-center gap-6 bg-[#f8fbff] w-[150px] p-6 rounded-lg mt-10">
            {[1, 2, 3, 4, 5].map((num) => (
              <Image
                key={num}
                src={`/Images/Ellipse-${num}.webp`}
                alt={`Ellipse ${num}`}
                height={50}
                width={50}
                className={`cursor-pointer transition-opacity ${
                  selectedContent === `Content for Ellipse ${num}` ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => handleImageClick(`Content for Ellipse ${num}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ContentBlock = ({
  img,
  text,
  name,
  role,
}: {
  img: string;
  text: string[];
  name: string;
  role: string;
}) => (
  <div className="flex flex-col lg:flex-row items-center gap-6">
    <div className="flex justify-center">
      <Image src={img} alt={name} height={200} width={200} className="w-32" />
    </div>
    <div className="max-w-xl px-4">
      {text.map((t, i) => (
        <p key={i} className="text-[15px] 2xl:text-[18px] text-[#0a1c20] my-2">
          {t}
        </p>
      ))}
      <h3 className="font-semibold">{name}</h3>
      <span className="text-[#FF4309] text-[18px]">{role}</span>
    </div>
  </div>
);

export default Switch;
