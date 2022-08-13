import Image from "next/image";
import Title from "../components/Title";
import Link from "next/link";
import Progress from "../components/Progress";
import { AiFillGithub , AiOutlineTwitter, AiFillMail, AiOutlineInstagram} from 'react-icons/ai'

export default function Home() {
  const biodata = [
    {
      date: "2000",
      event: "Born in Gaya (Bihar), India.",
    },
    {
      date: "2019",
      event:
        "Completed my Secondary School Education from British English School, Gaya, Bihar.",
    },
    {
      date: "2020 to present",
      event:
        "Started the Bachlor's Program in the Electrical Engineering Department at Narional Institute of Technology, Patna.",
    },
  ];

  return (
    <div className="w-[100%] md:w-[48em] m-[auto]">
      <section className="flex flex-col items-center justify-center my-4">
        <p className="bg-orange-100  py-3 w-[100%] md:w-[34em] m-[auto] rounded-md my-5 text-center px-[2em] md:px-[1em]">
          Hello, I&apos;m a frontend developer based in India!
        </p>

        <div className="flex  justify-between  w-[100%] md:w-[34em] px-[2em] md:px-[1em] mt-2">
          <div>
            <h1 className="text-3xl font-semibold mt-2">Sudhanshu Ranjan</h1>
            <p>Digital Craftsman ( FrontEnd Developer / Designer )</p>
          </div>
          <div>
            <img
              src="https://www.craftz.dog/_next/image?url=%2Fimages%2Ftakuya.jpg&w=128&q=75"
              alt="profile"
              className="rounded-full h-[6.5rem] border-4 border-white border-b-indigo-500 border-t-indigo-500 "
            />
          </div>
        </div>
      </section>

      <section className="w-[100%] md:w-[34em] m-[auto] px-[2em] md:px-[1em] my-4">
        <Title title="About" />
        <p className="indent-5 py-3 text-justify">
          Takuya is a freelance and a full-stack developer based in Osaka with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his camera. Currently, he is living off of his own
          product called
          <a href="www.google.com" target="blank" className="text-blue-500">
            Inkdrop
          </a>
          . He publishes content for marketing his products and his YouTube
          channel called &quot;
          <a href="www.google.com" target="blank" className="text-blue-500">
            Dev as Life
          </a>
          &quot; has more than 100k subscribers.
        </p>
      </section>

      <section className="w-[100%] md:w-[34em] m-[auto] px-[2em] md:px-[1em] my-4">
        <Title title="Projects" />
        <p className="indent-5 py-3 text-justify">
          The best way to learn something is to build some awesome projects
          based on what you have learnt. I also follow the same and make some
          cool projects using the technologies I have learnt.
        </p>
        <div className="flex items-center justify-center">
          <Link href="/works">
            <button
              type="button"
              className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
            >
              Projects {" >"}
            </button>
          </Link>
          <a href="Sudhanshu_Resume.pdf" download>
            <button
              type="button"
              className="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 mr-2 mb-2"
            >
              Resume {" >"}
            </button>
          </a>
        </div>
      </section>

      {/* Bio Section*/}
      <section className="w-[100%] md:w-[34em] m-[auto] px-[2em] md:px-[1em] my-4">
        <Title title="Bio" />
        <table className="my-3">
          <tbody>
            {biodata.map((bio, index) => {
            return (
              <tr key={index}>
                <th className="align-top pr-2 text-justify">{bio.date}</th>
                <td className="align-top text-justify">{bio.event}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </section>

      {/* Hobbies */}
      <section  className="w-[100%] md:w-[34em] m-[auto] px-[2em] md:px-[1em] pb-4">
       <Title title="I ♥" />
       <p className="indent-5 py-3 text-justify">
        Anime, Documentry, Music, Books, Shows, Machine Learning.
       </p>
      </section>


      {/* Skills Section */}

      <section className="w-[100%] md:w-[34em] m-[auto] px-[2em] md:px-[1em] my-4">
        <Title title="Skills" />
        <div className="flex flex-wrap items-center justify-between   m-[auto] ">
          <Progress
            info="It is an important skill."
            percent="50%"
            skill="PhotoShop"
            skillLogo="Ps"
          />
          <Progress
            info="It is an important skill."
            percent="50%"
            skill="PhotoShop"
            skillLogo="Ps"
          />
          <Progress
            info="It is an important skill."
            percent="50%"
            skill="PhotoShop"
            skillLogo="Ps"
          />
          <Progress
            info="It is an important skill."
            percent="50%"
            skill="PhotoShop"
            skillLogo="Ps"
          />
          <Progress
            info="It is an important skill."
            percent="50%"
            skill="PhotoShop"
            skillLogo="Ps"
          />
          <Progress
            info="It is an important skill."
            percent="50%"
            skill="PhotoShop"
            skillLogo="Ps"
          />
        </div>
      </section>

      

      {/* Socials */}
      <section  className="w-[100%] md:w-[34em] m-[auto] px-[2em] md:px-[1em] pb-4">
       <Title title="On the web" />
      <ul className="pt-4">
        <li className="hover:bg-cyan-100 py-2 px-6 w-fit rounded-md "><a href="mailto:sudhanshur.ug20.ee@nitp.ac.in" className="flex items-center text-[#2C7A7B] font-medium"><AiFillMail className="mr-2" /><p className="hover:underline underline-offset-2 decoration-sky-400 decoration-3">sudhanshur.ug20.ee@nitp.ac.in</p></a></li>
        <li className="hover:bg-cyan-100 py-2 px-6 w-fit rounded-md "><a href="https://github.com/SudhansuuRanjan" className="flex items-center text-[#2C7A7B] font-medium"><AiFillGithub className="mr-2" /><p className="hover:underline underline-offset-2 decoration-sky-400 decoration-3">@SudhansuuRanjan</p></a></li>
        <li className="hover:bg-cyan-100 py-2 px-6 w-fit rounded-md "><a href="https://twitter.com/Sudhanss_u" className="flex items-center text-[#2C7A7B] font-medium"><AiOutlineTwitter className="mr-2" /><p className="hover:underline underline-offset-2 decoration-sky-400 decoration-3">@Sudhanss_u</p></a></li>
        <li className="hover:bg-cyan-100 py-2 px-6 w-fit rounded-md "><a href="https://twitter.com/sudhanss_uu" className="flex items-center text-[#2C7A7B] font-medium"><AiOutlineInstagram className="mr-2" /><p className="hover:underline underline-offset-2 decoration-sky-400 decoration-3">@sudhanss_uu</p></a></li>
      </ul>
      </section>


    </div>
  );
}
