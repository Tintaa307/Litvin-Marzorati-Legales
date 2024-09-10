export default function InstagramFeed() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16 text-center space-y-6">
      <h2 className={`sm:text-[42px] text-[2rem] font-dmSerif font-normal`}>
        Conéctate con Nosotros
      </h2>
      <p className="text-center mb-12 max-w-2xl mx-auto">
        Descubre nuestras últimas publicaciones, logros y eventos. Mantente
        informado.
      </p>
      <div className="grid grid-cols-3 place-items-center gap-y-8 gap-x-24">
        <div className="size-64 rounded-md bg-black"></div>
        <div className="size-64 rounded-md bg-black"></div>
        <div className="size-64 rounded-md bg-black"></div>
        <div className="size-64 rounded-md bg-black"></div>
        <div className="size-64 rounded-md bg-black"></div>
        <div className="size-64 rounded-md bg-black"></div>
      </div>
      <button className="bg-gradient-to-r from-accent-brown from-[-39.43%] to-accent-orange to-162% text-black text-sm w-max px-6 py-4 font-medium rounded-md">
        Ver más publicaciones
      </button>
    </section>
  )
}
