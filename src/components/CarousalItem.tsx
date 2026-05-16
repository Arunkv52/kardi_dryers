import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

import ScrollImg1 from '../assets/Home/carousal/Dryers-1.jpg'
import ScrollImg2 from '../assets/Home/carousal/Dryers-image.jpg'
import ScrollImg3 from '../assets/Home/carousal/truck-dryers.jpg'


const CarousalItem = () => {
  return (
    <>
      <div className='px-10 py-10 cursor-grab'>
        <Carousel>
          <CarouselContent>
            <CarouselItem className='md:basis-1/4'>
              <div className='w-[350px] rounded-lg overflow-hidden relative group cursor-pointer'>
                {/* Image */}
                <img
                  src={ScrollImg1}
                  alt='Wind Energy'
                  className='w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110'
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>

                {/* Blur Bottom */}
                <div className='absolute bottom-0 left-0 w-full h-[80px] backdrop-blur-md bg-black/20'></div>

                {/* Content */}
                <div className='absolute bottom-5 left-5 z-10 text-white'>
                  {/* Top Label */}
                  {/* Title */}
                  <h2 className='text-2xl font-light leading-tight'>
                    Coffee Dryer
                  </h2>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className='md:basis-1/4'>
              <div className='w-[350px] rounded-lg overflow-hidden relative group cursor-pointer'>
                {/* Image */}
                <img
                  src={ScrollImg2}
                  alt='Wind Energy'
                  className='w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110'
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>

                {/* Blur Bottom */}
                <div className='absolute bottom-0 left-0 w-full h-[80px] backdrop-blur-md bg-black/20'></div>

                {/* Content */}
                <div className='absolute bottom-5 left-5 z-10 text-white'>
                  {/* Top Label */}
                  {/* Title */}
                  <h2 className='text-2xl font-light leading-tight'>
                    Paddy Dryer
                  </h2>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className='md:basis-1/4'>
              <div className='w-[350px] rounded-lg overflow-hidden relative group cursor-pointer'>
                {/* Image */}
                <img
                  src={ScrollImg3}
                  alt='Wind Energy'
                  className='w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110'
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>

                {/* Blur Bottom */}
                <div className='absolute bottom-0 left-0 w-full h-[80px] backdrop-blur-md bg-black/20'></div>

                {/* Content */}
                <div className='absolute bottom-5 left-5 z-10 text-white'>
                  {/* Top Label */}
                  {/* Title */}
                  <h2 className='text-2xl font-light leading-tight'>
                    Kardi-Pedrotti Mobile Dryer
                  </h2>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className='md:basis-1/4'>
              <div className='w-[350px] rounded-lg overflow-hidden relative group cursor-pointer'>
                {/* Image */}
                <img
                  src={ScrollImg1}
                  alt='Wind Energy'
                  className='w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110'
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>

                {/* Blur Bottom */}
                <div className='absolute bottom-0 left-0 w-full h-[80px] backdrop-blur-md bg-black/20'></div>

                {/* Content */}
                <div className='absolute bottom-5 left-5 z-10 text-white'>
                  {/* Top Label */}
                  {/* Title */}
                  <h2 className='text-2xl font-light leading-tight'>
                    Sago Dryer
                  </h2>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className='md:basis-1/4'>
              <div className='w-[350px] rounded-lg overflow-hidden relative group cursor-pointer'>
                {/* Image */}
                <img
                  src={ScrollImg1}
                  alt='Wind Energy'
                  className='w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110'
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>

                {/* Blur Bottom */}
                <div className='absolute bottom-0 left-0 w-full h-[80px] backdrop-blur-md bg-black/20'></div>

                {/* Content */}
                <div className='absolute bottom-5 left-5 z-10 text-white'>
                  {/* Top Label */}
                  {/* Title */}
                  <h2 className='text-2xl font-light leading-tight'>
                    Nylon Sago Dryer

                  </h2>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className='md:basis-1/4'>
              <div className='w-[350px] rounded-lg overflow-hidden relative group cursor-pointer'>
                {/* Image */}
                <img
                  src={ScrollImg1}
                  alt='Wind Energy'
                  className='w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110'
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>

                {/* Blur Bottom */}
                <div className='absolute bottom-0 left-0 w-full h-[80px] backdrop-blur-md bg-black/20'></div>

                {/* Content */}
                <div className='absolute bottom-5 left-5 z-10 text-white'>
                  {/* Top Label */}
                  {/* Title */}
                  <h2 className='text-2xl font-light leading-tight'>
                    Maize Seed Dryer
                  </h2>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className='md:basis-1/4'>
              <div className='w-[350px] rounded-lg overflow-hidden relative group cursor-pointer'>
                {/* Image */}
                <img
                  src={ScrollImg1}
                  alt='Wind Energy'
                  className='w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110'
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>

                {/* Blur Bottom */}
                <div className='absolute bottom-0 left-0 w-full h-[80px] backdrop-blur-md bg-black/20'></div>

                {/* Content */}
                <div className='absolute bottom-5 left-5 z-10 text-white'>
                  {/* Top Label */}
                  {/* Title */}
                  <h2 className='text-2xl font-light leading-tight'>
                    Tray Dryer

                  </h2>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className='md:basis-1/4'>
              <div className='w-[350px] rounded-lg overflow-hidden relative group cursor-pointer'>
                {/* Image */}
                <img
                  src={ScrollImg1}
                  alt='Wind Energy'
                  className='w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110'
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>

                {/* Blur Bottom */}
                <div className='absolute bottom-0 left-0 w-full h-[80px] backdrop-blur-md bg-black/20'></div>

                {/* Content */}
                <div className='absolute bottom-5 left-5 z-10 text-white'>
                  {/* Top Label */}
                  {/* Title */}
                  <h2 className='text-2xl font-light leading-tight'>
                    Cardamom Dryer
                  </h2>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className='md:basis-1/4'>
              <div className='w-[350px] rounded-lg overflow-hidden relative group cursor-pointer'>
                {/* Image */}
                <img
                  src={ScrollImg1}
                  alt='Wind Energy'
                  className='w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110'
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>

                {/* Blur Bottom */}
                <div className='absolute bottom-0 left-0 w-full h-[80px] backdrop-blur-md bg-black/20'></div>

                {/* Content */}
                <div className='absolute bottom-5 left-5 z-10 text-white'>
                  {/* Top Label */}
                  {/* Title */}
                  <h2 className='text-2xl font-light leading-tight'>
                    Baby Dryer
                  </h2>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className='md:basis-1/4'>
              <div className='w-[350px] rounded-lg overflow-hidden relative group cursor-pointer'>
                {/* Image */}
                <img
                  src={ScrollImg1}
                  alt='Wind Energy'
                  className='w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110'
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>

                {/* Blur Bottom */}
                <div className='absolute bottom-0 left-0 w-full h-[80px] backdrop-blur-md bg-black/20'></div>

                {/* Content */}
                <div className='absolute bottom-5 left-5 z-10 text-white'>
                  {/* Top Label */}
                  {/* Title */}
                  <h2 className='text-2xl font-light leading-tight'>
                    Chilli Dryer
                  </h2>
                </div>
              </div>
            </CarouselItem>
             <CarouselItem className='md:basis-1/4'>
              <div className='w-[350px] rounded-lg overflow-hidden relative group cursor-pointer'>
                {/* Image */}
                <img
                  src={ScrollImg1}
                  alt='Wind Energy'
                  className='w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110'
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>

                {/* Blur Bottom */}
                <div className='absolute bottom-0 left-0 w-full h-[80px] backdrop-blur-md bg-black/20'></div>

                {/* Content */}
                <div className='absolute bottom-5 left-5 z-10 text-white'>
                  {/* Top Label */}
                  {/* Title */}
                  <h2 className='text-2xl font-light leading-tight'>
                    Groundnut Dryer
                  </h2>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className='md:basis-1/4'>
              <div className='w-[350px] rounded-lg overflow-hidden relative group cursor-pointer'>
                {/* Image */}
                <img
                  src={ScrollImg1}
                  alt='Wind Energy'
                  className='w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110'
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>

                {/* Blur Bottom */}
                <div className='absolute bottom-0 left-0 w-full h-[80px] backdrop-blur-md bg-black/20'></div>

                {/* Content */}
                <div className='absolute bottom-5 left-5 z-10 text-white'>
                  {/* Top Label */}
                  {/* Title */}
                  <h2 className='text-2xl font-light leading-tight'>
                    Flash Dryer

                  </h2>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className='md:basis-1/4'>
              <div className='w-[350px] rounded-lg overflow-hidden relative group cursor-pointer'>
                {/* Image */}
                <img
                  src={ScrollImg1}
                  alt='Wind Energy'
                  className='w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110'
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>

                {/* Blur Bottom */}
                <div className='absolute bottom-0 left-0 w-full h-[80px] backdrop-blur-md bg-black/20'></div>

                {/* Content */}
                <div className='absolute bottom-5 left-5 z-10 text-white'>
                  {/* Top Label */}
                  {/* Title */}
                  <h2 className='text-2xl font-light leading-tight'>
                    Cabin Dryer
                  </h2>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className='absolute bottom-[-40px] right-10 carousal-item'>
            <CarouselPrevious className='bg-[#F28C28] prev-btn' />
            <CarouselNext className='bg-[#F28C28]' />
          </div>
        </Carousel>
      </div>
    </>
  )
}

export default CarousalItem
