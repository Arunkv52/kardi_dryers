import Image1 from '../../assets/Home/Grain Dryers.jpg'
import Image2 from '../../assets/Home/spices-dryers.jpg'
import Image3 from '../../assets/Home/coffee-dryers.jpg'
import Image4 from '../../assets/Home/sago-dryers.jpg'



const StickySection = () => {
  const stickcards = [
    {
      image: Image1,
      title: 'Grain Dryers',
      description:
        'Our Grain Dryers are engineered to deliver uniform and efficient drying for rice, maize, pulses, oilseeds, and other agricultural commodities. Designed to reduce moisture content while preserving grain quality, these systems help prevent storage losses, mold growth, and quality deterioration. With energy-efficient operation and reliable performance, Kardi Grain Dryers support farmers, millers, and processors in achieving safe storage and higher market value for their produce.'
    },
    {
      image: Image2,
      title: 'Spices Dryers',
      description:
        'Kardi Spices Dryers are specially designed to maintain the natural color, aroma, flavor, and quality of valuable spices such as cardamom, pepper, turmeric, ginger, and chilli. Using controlled low-temperature drying technology, our systems ensure consistent moisture removal without compromising essential oils and product characteristics. The result is premium-quality dried spices suitable for domestic and export markets.'
    },
    {
      image: Image3,
      title: 'Coffee Dryers',
      description:
        'Our Coffee Dryers provide precise and gentle drying for coffee beans, ensuring optimal moisture levels for storage, roasting, and processing. The advanced airflow and temperature control systems help preserve bean integrity, flavor profile, and overall quality. Whether for small plantations or large-scale processing facilities, Kardi Coffee Dryers deliver dependable performance and improved product consistency.'
    },
    {
      image: Image4,
      title: 'Sago Dryers',
      description:
        'Kardi Sago Dryers are developed to provide efficient and hygienic drying solutions for sago starch and related products. By maintaining controlled drying conditions, these systems help achieve uniform moisture reduction, improved product quality, and extended shelf life. Built for continuous industrial operation, our sago drying technology enhances productivity while minimizing energy consumption and operational costs.'
    }
  ]

  return (
    <section className='bg-[#f3f3f3] md:py-10 py-10 md:px-10 px-5'>
      <div className='md:flex justify-between items-start gap-10 pb-20'>
        <div className='md:w-1/2 w-full'>
          <h1 className='md:text-4xl text-4xl leading-none font-medium'>
            <span className='text-black/50'>Strategic </span>
            Product Range
          </h1>
        </div>
        <div className='md:w-1/2 w-full'>
          <p className='py-3'>
            Our strategic product range is designed to meet the diverse drying
            requirements of modern agriculture, from spices and coffee to grains
            and seeds. With customized, energy-efficient solutions, we help
            farmers and processors achieve consistent quality, reduced losses,
            and improved productivity.
          </p>
        </div>
      </div>
      <div>
        {stickcards.map(item => (
          <>
            <div className='md:flex justify-between sticky top-5 bg-white'>
              <div className='md:w-1/2 w-full'>
                <img src={item.image} alt='' className='' />
              </div>
              <div className='md:w-1/2 w-full'>
                <div className='md:p-10 p-5 border-t border-black/50'>
                  <h2 className='md:text-2xl text-3xl font-semibold'>{item.title}</h2>
                  <p className='py-5 text-base tracking-tight'>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  )
}

export default StickySection
