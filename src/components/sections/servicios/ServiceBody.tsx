import FAQ from "../faq/FAQ"
import FinalCTA from "../landing/FinalCTA"

interface ServiceData {
  title: string
  p: string
}

interface Props {
  data: ServiceData[]
}

const ServiceBody = ({ data }: Props) => {
  const textBlock = (title: string, p: string) => {
    return (
      <div className="flex flex-col sm:gap-6 gap-4 font-poppins">
        <h2 className="sm:text-2xl text-xl font-semibold">{title}</h2>
        <h3 className="sm:text-xl text-lg">{p}</h3>
      </div>
    )
  }

  return (
    <>
      <div className="flex flex-col sm:gap-20 gap-16 main-padding">
        {data.map((object, index) => (
          <div key={index}>{textBlock(object.title, object.p)}</div>
        ))}
      </div>
      <FAQ />
      <FinalCTA></FinalCTA>
    </>
  )
}

export default ServiceBody
