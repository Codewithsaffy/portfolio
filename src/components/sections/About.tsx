import Image from "next/image";
import Button from "../ui/Button";
import CopyEmail from "../CopyEmail";


const About = () => {
 

  return (
    <section id="about" className="min-h-screen w-full mx-auto px-4 md:px-8 lg:px-16 py-12 z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full mb-12">
        <div className="col-span-1 bg-gradient-to-r from-[#0C0E23] to-[#1A1C31] relative lg:col-span-7 w-full h-full md:h-96 lg:h-[480px] rounded-2xl shadow-lg p-8 flex flex-col gap-6 transition-all duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-[#1A1C31] hover:to-[#0C0E23]">
          <h2 className="text-2xl md:text-4xl font-bold text-white z-10">
            About <span className="text-[#CBACF9]">Us</span>
          </h2>
          <p className="md:text-lg z-10 text-gray-400 leading-relaxed text-[12px] lg:tracking-wide">
            I am Muhammad Yousuf, a passionate and motivated Next.js developer with a growing
            expertise in building dynamic and responsive web applications. As a beginner, I bring
            fresh ideas and a strong foundation in Next.js, React, and Tailwind CSS, with a keen
            focus on delivering user-friendly, performance-optimized solutions. I am constantly
            improving my skills, staying up-to-date with the latest web technologies, and eager to
            collaborate on exciting projects. If you’re looking for a developer who is driven, quick
            to learn, and committed to creating impactful digital experiences, I’d love to work with
            you!
          </p>
        </div>

        <div className="col-span-1 lg:col-span-5 flex flex-col gap-8">
          <div className="h-56 lg:h-[225px] rounded-2xl bg-gradient-to-r from-[#0C0E23] to-[#1A1C31] shadow-lg p-8 flex flex-col justify-between relative transition-all duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-[#1A1C31] hover:to-[#0C0E23]">
            <h2 className="text-2xl font-bold text-white">
              I am very flexible with time zone communications
            </h2>
            <Image
              className="absolute w-full bottom-0 z-0 opacity-60"
              alt="world"
              src={"/about-effects/world.png"}
              width={400}
              height={150}
            />
          </div>

          <div className="h-56 lg:h-[225px] rounded-2xl bg-gradient-to-r from-[#0C0E23] to-[#1A1C31] shadow-lg p-8 flex sm:flex-row flex-col justify-between z-10 items-center gap-6 transition-all duration-500 hover:scale-105 hover:bg-gradient-to-r  hover:from-[#1A1C31] hover:to-[#0C0E23]">
            <div className="w-full text-center">
              <p className="text-[#CBACF9] text-sm">Always aiming to improve</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">My Tech Stack</h2>
            </div>
            <div className="flex justify-center flex-col sm:flex-row items-center gap-4">
              <div className="flex flex-row sm:flex-col gap-4">
                <Button text="Next.js" />
                <Button text="React.js" />
                <Button text="TypeScript" />
              </div>
              <div className="flex flex-row sm:flex-col gap-4">
                <Button text="Tailwind CSS" />
                <Button text="MongoDB" />
                <Button text="Shadcn UI" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-8">
          <div className="h-48 lg:h-[150px] rounded-2xl bg-gradient-to-r from-[#0C0E23] to-[#1A1C31] shadow-lg p-8 relative transition-all duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-[#1A1C31] hover:to-[#0C0E23]">
            <h2 className="text-xl font-bold text-white">
              Driven Next.js Developer crafting impactful web solutions
            </h2>
            <Image
              className="absolute bottom-0 -right-5 opacity-80"
              alt="developer"
              src={"/about-effects/aboutsec.png"}
              width={200}
              height={150}
            />
          </div>

       <CopyEmail/>
        </div>

        <div className="col-span-1 lg:col-span-8 flex flex-col justify-center overflow-hidden h-[200px] md:h-[334px] rounded-2xl bg-gradient-to-r from-[#0C0E23] to-[#1A1C31] shadow-lg relative transition-all duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-[#1A1C31] hover:to-[#0C0E23]">
          <div className="flex flex-col gap-1 p-8 w-full lg:w-1/2">
            <p className="text-[#CBACF9] text-sm">The Inside Scoop</p>
            <h2 className="text-2xl font-bold text-white">Currently Learning Generative AI</h2>
          </div>
          <Image
            className="absolute top-0 right-0 bottom-0 opacity-30 sm:opacity-70"
            alt="code"
            src={"/about-effects/code.png"}
            width={500}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
