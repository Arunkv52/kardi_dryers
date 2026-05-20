import Button from '../myui/Button'

const Brochure = () => {
  return (
    <>
      <section className='py-20 md:px-40 px-10'>
        <div className='down-brochure md:flex justify-around items-center gap-5'>
          <div className='md:w-1/2 w-full'>
            <h4 className='text-5xl pb-5'>
              Discover Our
              <span className='text-black/50'>
                <strong> Drying Solutions </strong>
              </span>{' '}
            </h4>
            <p className='pb-10'>
              Get detailed insights into Kardi Dryers’ advanced agro drying
              technology, including product features, applications, and
              technical specifications. Find the right drying solution tailored
              to your crop, climate, and operational needs.
            </p>
            <Button text='Download Brochure' />
          </div>
          <div className='md:w-1/2 w-full md:py-0 py-10'>
            <img src={Download} alt='' className='h-[500px]' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Brochure
