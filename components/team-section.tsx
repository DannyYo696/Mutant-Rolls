import Image from "next/image"

export default function TeamSection() {
  // Team members data
  const teamMembers = [
    {
      name: "A.",
      surname: "Mutantnerd",
      role: "Project Lead",
      image: "https://raw.githubusercontent.com/DannyYo696/svillage/main/team2.jpeg?raw=true",
    },
    {
      name: "Cogmage",
      surname: "",
      role: "Game Mechanics Advisor",
      image: "https://raw.githubusercontent.com/DannyYo696/svillage/main/team3.jpeg?raw=true",
    },
    {
      name: "Pixie",
      surname: "",
      role: "Lead Game Artist",
      image: "https://raw.githubusercontent.com/DannyYo696/svillage/main/team4.jpg?raw=true",
    },
    {
      name: "Web Designer",
      surname: "",
      role: "Web Design",
      image: "https://raw.githubusercontent.com/DannyYo696/svillage/main/team4.jpg?raw=true",
    },
    {
      name: "0x0psDev",
      surname: "",
      role: "Web3 & Blockchain",
      image: "https://raw.githubusercontent.com/DannyYo696/svillage/main/oxops.jpg?raw=true",
    },
  ]

  return (
    <section id="team" className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://raw.githubusercontent.com/DannyYo696/svillage/main/teams.jpeg?raw=true"
          alt="Post-apocalyptic landscape with sunset"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col items-center">
        {/* Section title - centered */}
        <div className="w-full text-center mb-16">
          <h2 className="font-pixel text-yellow-300 text-2xl md:text-4xl inline-block mx-auto animate-glow pixel-text-highlight">
            Meet our team
          </h2>
        </div>

        {/* Team grid - first row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 max-w-4xl mx-auto">
          {teamMembers.slice(0, 3).map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Member image with pixel border - fixed size */}
              <div className="relative mb-4 border-4 border-yellow-600 p-1 bg-gray-800 w-48 h-48">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={`${member.name} ${member.surname}`}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Member name */}
              <h3 className="font-pixel text-white text-xl md:text-2xl text-center">
                {member.name}
                {member.surname && (
                  <>
                    <br />
                    {member.surname}
                  </>
                )}
              </h3>

              {/* Member role */}
              <p className="font-pixel text-white text-sm md:text-base text-center mt-1">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Team grid - second row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
          {teamMembers.slice(3, 5).map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Member image with pixel border - fixed size */}
              <div className="relative mb-4 border-4 border-yellow-600 p-1 bg-gray-800 w-48 h-48">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={`${member.name} ${member.surname}`}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Member name */}
              <h3 className="font-pixel text-white text-xl md:text-2xl text-center">
                {member.name}
                {member.surname && (
                  <>
                    <br />
                    {member.surname}
                  </>
                )}
              </h3>

              {/* Member role */}
              {member.role && (
                <p className="font-pixel text-white text-sm md:text-base text-center mt-1">{member.role}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
