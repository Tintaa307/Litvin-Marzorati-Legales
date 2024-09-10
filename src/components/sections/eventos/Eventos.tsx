import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Eventos() {
  const events = [
    {
      id: 1,
      image: "/media/media1.png",
      date: "22 MAYO",
      name: "Nombre del evento",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis lectus.",
    },
    {
      id: 2,
      image: "/media/media1.png",
      date: "23 MAYO",
      name: "Nombre del evento",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis lectus.",
    },
  ]

  return (
    <section className="max-w-3xl mx-auto px-4 py-16 text-center space-y-4">
      <h2 className={`sm:text-[42px] text-[2rem] font-dmSerif font-normal`}>
        Eventos
      </h2>
      <p className="text-center mb-12 max-w-2xl mx-auto">
        Participamos activamente en conferencias y seminarios clave,
        compartiendo nuestro conocimiento y fortaleciendo nuestra red.
      </p>
      <div className="flex items-center justify-center">
        <Carousel className="flex-1 justify-center items-center">
          <CarouselContent>
            {events.map((event) => (
              <CarouselItem
                key={event.id}
                className="flex items-center justify-center"
              >
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.name}
                    width={400}
                    height={400}
                    className=""
                  />
                  <main className="flex-1 flex justify-start items-start text-start flex-col space-y-3">
                    <small className="text-xs mt-3">
                      <span className="text-accent-brown font-poppins">
                        Tipo de evento
                      </span>{" "}
                      / Tema del evento
                    </small>
                    <h4 className="text-black font-medium text-xl">
                      Nombre del evento
                    </h4>
                    <p className="text-sm font-thin">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cum, doloribus! Consequuntur quae corporis accusamus, non
                      veniam id harum blanditiis nisi?
                    </p>
                    <button className="bg-gradient-to-r from-accent-brown from-[-39.43%] to-accent-orange to-162% text-black text-sm w-36 h-10 rounded-md">
                      Ver más
                    </button>
                  </main>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
