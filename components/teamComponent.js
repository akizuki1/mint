import t1 from "../assets/landing/team/Lego pfp.png";
import t2 from "../assets/landing/team/Fangel pfp.png";
import t3 from "../assets/landing/team/Poly pfp.png";
import t4 from "../assets/landing/team/Ragga pfp.png";
import t5 from "../assets/landing/team/Seraph_pfp.png";
import t6 from "../assets/landing/team/Zeneca pfp.png";
import t7 from "../assets/landing/team/KfnC.png";
import Image from "next/image";
import Link from "next/link";

const team1 = [
  {
    name: "Erik Levin",
    role: "Co-Owner",
    nick: "Lego2build",
    imageUrl: t1,
    linkUrl: "",
    linkedinUrl: "#",
  },
  {
    name: "Luke Lindsay",
    nick: "RaggaPrince",
    role: "Co-Owner",
    imageUrl: t4,
    linkUrl: "",
    linkedinUrl: "#",
  },
  {
    name: "Esther Chu",
    role: "Graphic Designer & Illustrator",
    nick: "Fighting Polygon",
    imageUrl: t3,
    linkUrl: "",
    linkedinUrl: "#",
  },

  // More people...
];

const team2 = [
  {
    name: "David Girshner II",
    role: "Creative Design",
    nick: "SeraphofAsh",
    imageUrl: t5,
    linkUrl: "",
    linkedinUrl: "#",
  },
  {
    name: "Toby Frimoth	",
    role: "Community Outreach",
    nick: "Fangel",
    imageUrl: t2,
    linkUrl: "",
    linkedinUrl: "#",
  },
  {
    name: "Zeneca",
    role: "Project Advisor",
    nick: "",
    imageUrl: t6,
    linkUrl: "https://zeneca.xyz/",
    linkedinUrl: "#",
  },
  {
    name: "Kfish n Chips",
    role: "Developer Team",
    nick: "",
    imageUrl: t7,
    linkUrl: "https://www.kfishnchips.com/",
    linkedinUrl: "#",
  },

  // More people...
];

export default function TeamComponent() {
  return (
    <div id="team" className="mx-auto max-w-7xl py-12 px-4 lg:py-24">
      <div className="space-y-12">
        <div className="space-y-5 sm:space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-white  sm:text-6xl lg:mt-6 xl:text-6xl">
            <span className="block">MEET THE TEAM</span>
          </h1>
        </div>
        <div className="max-w-4xl mx-auto">
          <ul className=" -ml-5 content-between list-none grid sm:grid-cols-2 md:grid-cols-3  gap-3  ">
            {team1.map((person) => (
              <li
                key={person.name}
                className=" bg-panel-boxes rounded-sm py-10 text-center  "
              >
                <div className="space-y-6 xl:space-y-10 ">
                  <Image
                    className="mx-auto h-40 w-40 rounded-full "
                    src={person.imageUrl}
                    alt=""
                  />
                  <div className=" mx-auto items-center justify-between">
                    <div className=" mx-auto  text-md font-medium ">
                      <h3 className="text-lg text-white">{person.name}</h3>
                      <h5 className="text-sm mt-4  text-white">
                        {person.nick}
                      </h5>
                      <p className="text-team-titles">{person.role}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <ul className=" -ml-5 content-between list-none grid sm:grid-cols-2 md:grid-cols-4  gap-3  ">
          {team2.map((person) => (
            <li
              key={person.name}
              className=" bg-panel-boxes py-10 rounded-sm text-center  "
            >
              <div className="space-y-6 xl:space-y-10 ">
                <Image
                  className="mx-auto h-40 w-40 rounded-full "
                  src={person.imageUrl}
                  alt=""
                />
                <div className="space-y-2 xl:flex  mx-auto xl:items-center xl:justify-between">
                  <div className="mx-auto text-md font-medium ">
                    <h3 className="text-lg text-white">{person.name}</h3>
                    <h5 className="text-sm mt-4  text-white">{person.nick}</h5>
                    <p className="text-team-titles">{person.role}</p>
                    {person.linkUrl !== "" ? (
                      <Link
                        href={person.linkUrl}
                        className="text-white cursor-pointer"
                        target={"_blank"}
                        referrerPolicy="no-referrer"
                      >
                        Learn more
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
