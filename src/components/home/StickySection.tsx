import Image1 from '../../assets/Home/carousal/Dryers-1.jpg'
import Image2 from '../../assets/Home/carousal/Dryers-image.jpg'
import Image3 from '../../assets/Home/carousal/truck-dryers.jpg'

const StickySection = () => {
  const cards = [
    {
      title: 'Coffee Dryer',
      desc: 'Advanced drying systems for premium coffee processing.',
      img: Image1
    },
    {
      title: 'Paddy Dryer',
      desc: 'High-capacity paddy drying solutions.',
      img: Image2
    },
    {
      title: 'Mobile Dryer',
      desc: 'Flexible field drying systems.',
      img: Image3
    },
    {
      title: 'Sago Dryer',
      desc: 'Industrial starch drying technology.',
      img: Image1
    }
  ]

  return (
    <section className='relative bg-[#f3f3f3] md:py-0 py-20'>
      <div className='grid lg:grid-cols-[40%_60%]'>
        {/* LEFT SIDE */}
        <div className='md:h-screen md:sticky top-0 flex items-start md:mt-20 px-10 border-r border-black/10'>
          <div>
            <h1 className='md:text-4xl text-4xl leading-none font-medium'>
              <span className='text-black/50'>Strategic </span>
              Product Range
            </h1>
            <p className='py-3'>
              Our strategic product range is designed to meet the diverse drying
              requirements of modern agriculture, from spices and coffee to
              grains and seeds. With customized, energy-efficient solutions, we
              help farmers and processors achieve consistent quality, reduced
              losses, and improved productivity.
            </p>

            <div className='mt-5 flex flex-col gap-4'>
              {cards.map((item, index) => (
                <button
                  key={index}
                  className='bg-[#dedede] hover:bg-[#ff5938] hover:text-white transition-all duration-300 rounded-full px-6 py-4 text-left w-fit'
                >
                  {item.title}
                </button>
              ))}
            </div>
            <button className='bg-black text-white py-5 cursor-pointer px-8 rounded-2xl mt-20'>See all Products</button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className='px-6 py-10 flex flex-col gap-6'>
          {cards.map((card, index) => (
            <div
              key={index}
              className='min-h-[500px] rounded-[30px] overflow-hidden bg-white p-10 flex flex-col justify-between'
            >
              <div>
                <h2 className='text-3xl mb-2'>{card.title}</h2>

                <p className='text-base text-black/70 max-w-[500px]'>
                  {card.desc}
                </p>
              </div>

              <img
                src={card.img}
                alt={card.title}
                className='w-full h-[300px] object-cover rounded-[20px] mt-10'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StickySection
