import Button from './myui/Button'
import Navbar from './Navbar'


const Header = () => {
  return (
    <>
      <header>
        <Navbar />
        <div className='px-5 md:w-1/2 w-full absolute md:bottom-20 bottom-10'>
          <p className='bg-[#ff5938] rounded-xl w-fit text-sm px-3 mb-5'>
            We Serve
          </p>
          <h1 className='text-white md:text-6xl text-4xl'>
            Advanced Industrial <br /> Drying Solutions
          </h1>
          <p className='text-white pt-5'>
            Engineered for performance, efficiency, and sustainability, Kardi
            Dryers delivers innovative drying systems for spices, grains,
            vegetables, plantation crops, and industrial applications across
            India and beyond.
          </p>
          <div className='mt-4'>
            <Button text="Get's Started" variant='orange' className=''/>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
