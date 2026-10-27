import { Link } from "react-router"

const BeforeFooter = () => {
  return (
    <>
      <div className='bg-[#ede7e1] md:px-10 px-5 py-10 md:flex justify-between items-center'>
        <div>
          <h4 className='text-4xl text-black'>
            <span className='text-black/50'>Transform</span> your parking areas
            into energy assets
          </h4>
        </div>
        <div className='md:mt-0 mt-10'>
          <Link to='/contact'>
            <button className='bg-[#125341] text-white py-5 cursor-pointer px-8 rounded-2xl'>
               Talk to Us
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default BeforeFooter
