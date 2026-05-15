import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

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
                  src='https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=1200&auto=format&fit=crop'
                  alt='Wind Energy'
                  className='w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110'
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>

                {/* Blur Bottom */}
                <div className='absolute bottom-0 left-0 w-full h-[180px] backdrop-blur-md bg-black/20'></div>

                {/* Content */}
                <div className='absolute bottom-10 left-8 z-10 text-white'>
                  {/* Top Label */}
                  <div className='flex items-center gap-3 mb-5'>
                    {/* Small Icon */}
                    <div className='flex flex-col gap-[5px]'>
                      <span className='w-5 h-[4px] bg-white rounded-full'></span>
                      <span className='w-3 h-[4px] bg-white rounded-full'></span>
                    </div>

                    <p className='text-2xl font-medium'>Wind</p>
                  </div>

                  {/* Title */}
                  <h2 className='text-3xl font-light leading-tight'>
                    Ollignies North
                  </h2>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className='md:basis-1/4'>
              <div className='w-[350px] rounded-lg overflow-hidden relative group cursor-pointer'>
                {/* Image */}
                <img
                  src='https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=1200&auto=format&fit=crop'
                  alt='Wind Energy'
                  className='w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110'
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>

                {/* Blur Bottom */}
                <div className='absolute bottom-0 left-0 w-full h-[180px] backdrop-blur-md bg-black/20'></div>

                {/* Content */}
                <div className='absolute bottom-10 left-8 z-10 text-white'>
                  {/* Top Label */}
                  <div className='flex items-center gap-3 mb-5'>
                    {/* Small Icon */}
                    <div className='flex flex-col gap-[5px]'>
                      <span className='w-5 h-[4px] bg-white rounded-full'></span>
                      <span className='w-3 h-[4px] bg-white rounded-full'></span>
                    </div>

                    <p className='text-2xl font-medium'>Wind</p>
                  </div>

                  {/* Title */}
                  <h2 className='text-5xl font-light leading-tight'>
                    Ollignies North
                  </h2>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className='md:basis-1/4'>
              <div className='w-[350px] rounded-lg overflow-hidden relative group cursor-pointer'>
                {/* Image */}
                <img
                  src='https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=1200&auto=format&fit=crop'
                  alt='Wind Energy'
                  className='w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110'
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>

                {/* Blur Bottom */}
                <div className='absolute bottom-0 left-0 w-full h-[180px] backdrop-blur-md bg-black/20'></div>

                {/* Content */}
                <div className='absolute bottom-10 left-8 z-10 text-white'>
                  {/* Top Label */}
                  <div className='flex items-center gap-3 mb-5'>
                    {/* Small Icon */}
                    <div className='flex flex-col gap-[5px]'>
                      <span className='w-5 h-[4px] bg-white rounded-full'></span>
                      <span className='w-3 h-[4px] bg-white rounded-full'></span>
                    </div>

                    <p className='text-2xl font-medium'>Wind</p>
                  </div>

                  {/* Title */}
                  <h2 className='text-5xl font-light leading-tight'>
                    Ollignies North
                  </h2>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className='md:basis-1/4'>
              <div className='w-[350px] rounded-lg overflow-hidden relative group cursor-pointer'>
                {/* Image */}
                <img
                  src='https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=1200&auto=format&fit=crop'
                  alt='Wind Energy'
                  className='w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110'
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>

                {/* Blur Bottom */}
                <div className='absolute bottom-0 left-0 w-full h-[180px] backdrop-blur-md bg-black/20'></div>

                {/* Content */}
                <div className='absolute bottom-10 left-8 z-10 text-white'>
                  {/* Top Label */}
                  <div className='flex items-center gap-3 mb-5'>
                    {/* Small Icon */}
                    <div className='flex flex-col gap-[5px]'>
                      <span className='w-5 h-[4px] bg-white rounded-full'></span>
                      <span className='w-3 h-[4px] bg-white rounded-full'></span>
                    </div>

                    <p className='text-2xl font-medium'>Wind</p>
                  </div>

                  {/* Title */}
                  <h2 className='text-5xl font-light leading-tight'>
                    Ollignies North
                  </h2>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className='md:basis-1/4'>
              <div className='w-[350px] rounded-lg overflow-hidden relative group cursor-pointer'>
                {/* Image */}
                <img
                  src='https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=1200&auto=format&fit=crop'
                  alt='Wind Energy'
                  className='w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110'
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>

                {/* Blur Bottom */}
                <div className='absolute bottom-0 left-0 w-full h-[180px] backdrop-blur-md bg-black/20'></div>

                {/* Content */}
                <div className='absolute bottom-10 left-8 z-10 text-white'>
                  {/* Top Label */}
                  <div className='flex items-center gap-3 mb-5'>
                    {/* Small Icon */}
                    <div className='flex flex-col gap-[5px]'>
                      <span className='w-5 h-[4px] bg-white rounded-full'></span>
                      <span className='w-3 h-[4px] bg-white rounded-full'></span>
                    </div>

                    <p className='text-2xl font-medium'>Wind</p>
                  </div>

                  {/* Title */}
                  <h2 className='text-5xl font-light leading-tight'>
                    Ollignies North
                  </h2>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className='md:basis-1/4'>
              <div className='w-[350px] rounded-lg overflow-hidden relative group cursor-pointer'>
                {/* Image */}
                <img
                  src='https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=1200&auto=format&fit=crop'
                  alt='Wind Energy'
                  className='w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110'
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>

                {/* Blur Bottom */}
                <div className='absolute bottom-0 left-0 w-full h-[180px] backdrop-blur-md bg-black/20'></div>

                {/* Content */}
                <div className='absolute bottom-10 left-8 z-10 text-white'>
                  {/* Top Label */}
                  <div className='flex items-center gap-3 mb-5'>
                    {/* Small Icon */}
                    <div className='flex flex-col gap-[5px]'>
                      <span className='w-5 h-[4px] bg-white rounded-full'></span>
                      <span className='w-3 h-[4px] bg-white rounded-full'></span>
                    </div>

                    <p className='text-2xl font-medium'>Wind</p>
                  </div>

                  {/* Title */}
                  <h2 className='text-5xl font-light leading-tight'>
                    Ollignies North
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
