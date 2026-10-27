import { useMemo, useState } from 'react'
import CofferDryerImg from '../../assets/products/coffee-dryer.png'
import KardiPedrottiMobileDryerImg from '../../assets/products/mobile-dryer.png'
import SagoDryerImg from '../../assets/products/sago-dryer.png'
import NylonSagoDryerImg from '../../assets/products/nylon.png'
import TrayDryerImg from '../../assets/products/trap.png'
import CardomomDryerImg from '../../assets/products/cardomam.png'
import BabyDryerImg from '../../assets/products/baby-dryer.png'
import ChilliDryerImg from '../../assets/products/chilli-dryer.png'
import GroundnutDryerImg from '../../assets/products/groundnut.png'
import FlashDryerImg from '../../assets/products/flash-dryers.jpg'
import CabinDryerImg from '../../assets/products/cabin-dryers.png'

type Category = 'Crop Dryers' | 'Mobile Dryers' | 'Industrial and Processing'

interface Product {
  Image: string
  title: string
  Type: string
  Category: Category
  Crops: string
  Capacity: string
  Dryingtime: string
  Fuel: string
  Installedin: string
}

const FILTERS: Array<'All Products' | Category> = [
  'All Products',
  'Crop Dryers',
  'Mobile Dryers',
  'Industrial and Processing'
]

// NOTE: only the Sago Dryer is your real product — the other two entries
// are clearly-marked placeholders so the filter behavior is actually visible
// while you finalize the rest of the lineup. Swap these for real data once
// it's ready; the shape (Category field, etc.) is already correct.
const ProdData: Product[] = [
  {
    Image: SagoDryerImg,
    title: 'Sago Dryers',
    Type: 'Conveyor-bed dryer for sago',
    Category: 'Industrial and Processing',
    Crops: 'Chilli, bell pepper, herbs and leaves.',
    Capacity: '500 kg to 1.8 t/hr',
    Dryingtime: ' Dries in 2.5 hrs against 8 hrs in the sun.',
    Fuel: 'Wood or biomass fuel',
    Installedin: 'Installed in Tamil Nadu'
  },
  {
    Image: CofferDryerImg,
    title: 'Coffee Dryer',
    Type: 'Flat-bed dryer for coffee cherry',
    Category: 'Crop Dryers',
    Crops: 'Parchment and pepper',
    Capacity: '2 to 4 t of parchment',
    Dryingtime: 'Dries in 8 to 14 hrs against 6 to 14 days in the sun',
    Fuel: 'Wood chips or biomass pellets.',
    Installedin: 'Installed in Karnataka'
  },

  {
    Image: KardiPedrottiMobileDryerImg,
    title: 'Kardi-Pedrotti Mobile Dryer',
    Type: 'Mobile batch dryer for paddy, maize and other grains',
    Category: 'Mobile Dryers',
    Crops: '2 to 70 t.',
    Capacity: '1 T – 70 T',
    Dryingtime: ' Dries in 30 min to 4 hrs against 24 to 48 hrs in the sun.',
    Fuel: 'Diesel or kerosene',
    Installedin: 'Installed in Tamil Nadu.'
  },
  {
    Image: NylonSagoDryerImg,
    title: 'Nylon Sago Dryer',
    Type: 'Multi Layered Conveyor Bed',
    Category: 'Industrial and Processing',
    Crops: 'Sago, Chilli, Bell Pepper, Herbs & Leaves',
    Capacity: '500 kg – 1.8 T/hr',
    Dryingtime: ' 2.5 hrs (Sun Dried: 8 hrs)',
    Fuel: ' Wood / Biomass.',
    Installedin: 'Tamil Nadu'
  },

  {
    Image: TrayDryerImg,
    title: 'Tray Dryer',
    Type: 'Tray dryer for herbs, leaves, fruit and vegetables',
    Category: 'Crop Dryers',
    Crops: 'Herbs, Leaves, Fruits & Vegetables',
    Capacity: '50 to 300 kg.',
    Dryingtime: ' Drying time set to your product.',
    Fuel: ' Wood or biomass fuel',
    Installedin: 'Installed in Nagaland and Sri Lanka.'
  },
  {
    Image: CardomomDryerImg,
    title: 'Cardamom Dryer',
    Type: 'Flat-bed dryer, mixer optional, for small and large cardamom and pepper.',
    Category: 'Crop Dryers',
    Crops: 'Small & Large Cardamom, Pepper',
    Capacity: ' 50 kg to 1.5 t.',
    Dryingtime: 'Custom',
    Fuel: ' Biomass, diesel or firewood',
    Installedin:
      'Installed in eight states, from Kerala to Arunachal Pradesh.'
  },
  {
    Image: BabyDryerImg,
    title: 'Baby Dryer',
    Type: 'Flat Bed',
    Category: 'Crop Dryers',
    Crops: 'Ginger, turmeric and meat.',
    Capacity: 'Compact 50 kg flat-bed dryer for large cardamom',
    Dryingtime: 'Custom',
    Fuel: ' Firewood fuel.',
    Installedin: ' Installed in the North-East'
  },
  {
    Image: ChilliDryerImg,
    title: 'Chilli Dryer',
    Type: 'Flat-bed dryer',
    Category: 'Crop Dryers',
    Crops: 'mixer optional, for red chilli',
    Capacity: '2 to 4 t',
    Dryingtime: 'Custom',
    Fuel: 'Firewood fuel',
    Installedin: 'Installed in Andhra Pradesh.'
  },
  {
    Image: GroundnutDryerImg,
    title: 'Groundnut Dryer',
    Type: 'Re-circulating dryer for groundnut.',
    Category: 'Industrial and Processing',
    Crops: 'Groundnut',
    Capacity: ' 7.5 t/hr',
    Dryingtime: 'Custom',
    Fuel: 'Fired by a firewood gasifier',
    Installedin: 'Installed in Virudhunagar, Tamil Nadu'
  },
  {
    Image: FlashDryerImg,
    title: 'Flash Dryer',
    Type: 'Flash',
    Category: 'Industrial and Processing',
    Crops: 'Flash dryer for starch and maize flour.',
    Capacity: '1,000 to 1,500 kg/hr.',
    Dryingtime: ' Very fast drying.',
    Fuel: ' Runs on thermic fluid, biomass, firewood, fuel oil or gas.',
    Installedin: 'India'
  },
  {
    Image: CabinDryerImg,
    title: 'Cabin Dryer',
    Type: 'Cabin (Dryer cum Building)',
    Category: 'Industrial and Processing',
    Crops: 'Cabin dryer built into its own building, for coffee, cocoa, tobacco, turmeric, rubber and herbs.',
    Capacity: 'Custom',
    Dryingtime: 'Custom',
    Fuel: ' Sized and fuelled to order',
    Installedin: 'India'
  }
]

const ProductDetails = () => {
  const [activeFilter, setActiveFilter] =
    useState<typeof FILTERS[number]>('All Products')

  const filteredProducts = useMemo(() => {
    if (activeFilter === 'All Products') return ProdData
    return ProdData.filter(p => p.Category === activeFilter)
  }, [activeFilter])

  return (
    <div className=' py-40 px-10'>
      <div className='md:grid md:grid-cols-[420px_1fr] gap-16  mx-auto'>
        {/* LEFT — sticky filter rail */}
        <div className='prod-left'>
          <div className='md:sticky md:top-24'>
            <p className='text-white text-xs uppercase tracking-[0.18em] font-medium mb-4'>
              Our range
            </p>
            <h5 className='text-4xl font-normal leading-tight mb-2 text-white'>
              Dryers for every crop, scale & fuel
            </h5>
            <div
              style={{ backgroundColor: '#A6824F' }}
              className='w-12 h-px my-6'
            />

            <ul className='flex flex-col gap-1'>
              {FILTERS.map(filter => {
                const isActive = activeFilter === filter
                return (
                  <li key={filter}>
                    <button
                      onClick={() => setActiveFilter(filter)}
                      aria-pressed={isActive}
                      style={{
                        color: isActive ? '#f1f1f1' : '#ffffff',
                        borderLeft: isActive
                          ? '2px solid #53823c'
                          : '2px solid transparent',
                        backgroundColor: isActive
                          ? 'rgba(166,130,79,0.08)'
                          : 'transparent'
                      }}
                      className='w-full text-left px-5 py-3 text-lg cursor-pointer tracking-wide transition-colors duration-300 hover:text-[#2B2B26]'
                    >
                      {filter}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* RIGHT — filtered product list */}
        <div className='prod-right mt-12 md:mt-0'>
          {filteredProducts.length === 0 ? (
            <div
              style={{ borderColor: '#D8D2C2' }}
              className='border border-dashed rounded-md py-24 text-center'
            >
              <p style={{ color: '#ffffff' }} className='text-sm'>
                No products in this category yet — check back soon, or browse
                another category.
              </p>
            </div>
          ) : (
            <div className='flex flex-col gap-10'>
              {filteredProducts.map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className='grid md:grid-cols-[260px_1fr] gap-8 pb-10'
                  style={{
                    borderBottom:
                      index !== filteredProducts.length - 1
                        ? '0.5px solid #D8D2C2'
                        : 'none'
                  }}
                >
                  <div
                    style={{ backgroundColor: '#EDE9DD' }}
                    className=' overflow-hidden  flex items-center justify-center'
                  >
                    <img
                      src={item.Image}
                      alt={item.title}
                      className='w-full h-full object-cover'
                    />
                  </div>

                  <div>
                    <h3 className='text-4xl font-normal mb-5 text-white'>
                      {item.title}
                    </h3>

                    <dl className='grid grid-cols-[110px_1fr] gap-y-3.5 text-base'>
                      <dt style={{ color: '#f1f1f1' }}>Type</dt>
                      <dd style={{ color: '#ffffff' }}>{item.Type}</dd>

                      <dt style={{ color: '#f1f1f1' }}>Crops</dt>
                      <dd style={{ color: '#ffffff' }}>{item.Crops}</dd>

                      <dt style={{ color: '#f1f1f1' }}>Capacity</dt>
                      <dd style={{ color: '#ffffff' }}>{item.Capacity}</dd>

                      <dt style={{ color: '#f1f1f1' }}>Drying time</dt>
                      <dd style={{ color: '#ffffff' }}>{item.Dryingtime}</dd>

                      <dt style={{ color: '#f1f1f1' }}>Fuel</dt>
                      <dd style={{ color: '#ffffff' }}>{item.Fuel}</dd>

                      <dt style={{ color: '#f1f1f1' }}>Installed In</dt>
                      <dd style={{ color: '#ffffff' }}>{item.Installedin}</dd>
                    </dl>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
