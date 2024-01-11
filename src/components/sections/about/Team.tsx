import TeamCard from "@/components/cards/TeamCard";
import Heading from "@/components/text/Heading";
import teamData from "@/utils/team-data";

const Team = () => {
    return (
        <div className="sm:mt-48 mt-40 sm:mb-48 mb-40 flex flex-col gap-10 items-center justify-start main-padding">
            <Heading title="Nuestro equipo" subtitle="Forjamos un camino conjunto hacia metas compartidas, donde cada integrante juega un papel esencial."></Heading>
            <div className="flex flex-wrap justify-center items-center gap-5">
                {teamData.map((obj, index) => (
                    <TeamCard 
                        key={index}
                        name={obj.name}
                        position={obj.position}
                        image={obj.image}
                        linkedIn={obj.linkedIn}
                    />
                ))
                
                }
            </div>
        </div>
    );
};

export default Team;