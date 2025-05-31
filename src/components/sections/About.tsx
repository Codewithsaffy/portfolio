import Image from "next/image";
import Button from "../ui/Button";

const About = () => {
  return (
    <section id="about" className="min-h-screen w-full mx-auto px-6 md:px-12 lg:px-20 py-16 z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full mb-12">
        {/* Left Section */}
        <div className="col-span-1 bg-gradient-to-br from-[#0A0C1D] to-[#1A1C31] relative lg:col-span-7 w-full h-full md:h-96 lg:h-[500px] rounded-3xl shadow-xl p-10 flex flex-col gap-6 transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:from-[#1A1C31] hover:to-[#0A0C1D]">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white z-10 leading-tight">
            About <span className="text-[#A78BFA]">Me</span>
          </h2>
          <p className="md:text-lg text-gray-300 leading-relaxed tracking-wide">
            I am <span className="text-white font-semibold">Muhammad Yousuf</span>, a passionate and highly motivated Full-Stack Developer with expertise in <span className="font-semibold">Next.js, React.js, TypeScript</span>, and modern web technologies. I specialize in building scalable, performance-driven applications with a strong focus on <b>user experience, accessibility, and responsiveness</b>.
            <br /><br />
            My commitment to <b>clean code, efficient problem-solving, and staying updated with the latest industry trends</b> ensures that I deliver high-quality solutions. Whether it’s crafting seamless UI/UX, optimizing web performance, or integrating powerful back-end functionalities, I bring a <b>solution-oriented mindset</b> to every project.
          </p>
        </div>

        {/* Right Section */}
        <div className="col-span-1 lg:col-span-5 flex flex-col gap-8">
          <div className="h-60 lg:h-[230px] rounded-3xl bg-gradient-to-br from-[#0A0C1D] to-[#1A1C31] shadow-xl p-8 flex flex-col justify-between relative transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:from-[#1A1C31] hover:to-[#0A0C1D]">
            <h2 className="text-2xl font-bold text-white leading-tight">
              I am highly adaptable & open to collaboration
            </h2>
            <Image
              className="absolute w-full bottom-0 z-0 opacity-60"
              alt="world-map"
              src="/about-effects/world.png"
              width={400}
              height={160}
            />
          </div>

          {/* Tech Stack Section */}
          <div className="h-60 lg:h-[230px] z-10 rounded-3xl bg-gradient-to-br from-[#0A0C1D] to-[#1A1C31] shadow-xl p-8 flex flex-col sm:flex-row justify-between items-center gap-6 transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:from-[#1A1C31] hover:to-[#0A0C1D]">
            <div className="w-full text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Tech Stack</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button text="Next.js" />
              <Button text="React.js" />
              <Button text="TypeScript" />
              <Button text="Tailwind CSS" />
              <Button text="MongoDB" />
              <Button text="Shadcn UI" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
