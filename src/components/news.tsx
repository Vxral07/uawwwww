import * as React from "react";
import { NewsCard } from "./NewsCard";

const newsData = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/efc2cd1e18b64cb1917ba0d95e13dd7a6403861d6eeeac5ae5d902e064d56162?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104",
    title: "Nuqi Digital Wealth attains DFSA license",
    imageAlt: "Nuqi Digital Wealth DFSA license announcement",
    link: "https://gulfnews.com/business/corporate-news/nuqi-digital-wealth-attains-dfsa-license-1.1705932392422",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f877d4fa14b9776bb91ba2e76410ead82ac4d8f5f0a22e6d8dab98d4a8ec5b9c?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104",
    title: "Discover NUQI WEALTH",
    imageAlt: "NUQI WEALTH discovery presentation",
    link: "https://www.linkedin.com/posts/difc_nuqiwealth-wechosedifc-activity-7160164331937017857-U_1H/?utm_source=share&utm_medium=member_desktop",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5b367d6a828c05b3c006f81cd046ffeadd487811a9061ca0fc3f9d824f9615de?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104",
    title: "Nuqi Digital Wealth secures DFSA license",
    imageAlt: "Nuqi Digital Wealth DFSA license security announcement",
    link: "https://www.zawya.com/en/business/fintech/nuqi-digital-wealth-secures-dfsa-licence-spinmed8",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/be4457d7fbb826cadc89ca9b6a85977daabbe691adf0bfd88325245b34fcc843?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104",
    title: "Empowering Gen Z",
    imageAlt: "Generation Z empowerment initiative",
    link: "https://dailyguardian.ae/empowering-gen-z-nuqi-digital-wealths-approach-to-sustainable-investing-for-the-younger-generation/",
  },
];

export const News: React.FC = () => {
  return (
    <div className="flex flex-col mx-5 lg:mx-28 items-center justify-center mt-10">
      {/* Header */}
      <h2 className="text-3xl text-cyan-400 leading-6 tracking-wide mb-10 text-center lg:text-3xl">
        <span className="text-white">Nuqi</span> in the News
      </h2>

      {/* News Cards */}
      <div className="flex  justify-center gap-6 rounded-[60px]">
        {newsData.map((news, index) => (
          <NewsCard
            key={index}
            imageSrc={news.imageSrc}
            title={news.title}
            imageAlt={news.imageAlt}
            link={news.link}
          />
        ))}
      </div>
    </div>
  );
};

