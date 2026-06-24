import { useMemo, useState } from 'react'
import CofferDryerImg from '../../assets/products/coffee-dryer.png'
import PaddyDryerImg from '../../assets/products/paddy-dryers.jpg'
import KardiPedrottiMobileDryerImg from '../../assets/products/mobile-dryer.png'
import SagoDryerImg from '../../assets/products/sago-dryer.png'
import NylonSagoDryerImg from '../../assets/products/nylon.png'
import MaizeSeedDryerImg from '../../assets/products/maize.jpg'
import TrayDryerImg from '../../assets/products/trap.png'
import CardomomDryerImg from '../../assets/products/cardomam.png'
import BabyDryerImg from '../../assets/products/baby-dryer.png'
import ChilliDryerImg from '../../assets/products/chilli-dryer.png'
import GroundnutDryerImg from '../../assets/products/groundnut.png'
import FlashDryerImg from '../../assets/products/flash-dryers.jpg'
import CabinDryerImg from '../../assets/products/cabin-dryers.png'



type Category = 'Crop Dryers' | 'Mobile Dryers' | 'Industrial & Processing'

interface Product {
  Image: string
  title: string
  Type: string
  Category: Category
  Crops: string
  Capacity: string
  Dryingtime: string
  Fuel: string
  Locations: string
}

const FILTERS: Array<'All Products' | Category> = [
  'All Products',
  'Crop Dryers',
  'Mobile Dryers',
  'Industrial & Processing'
]

// NOTE: only the Sago Dryer is your real product — the other two entries
// are clearly-marked placeholders so the filter behavior is actually visible
// while you finalize the rest of the lineup. Swap these for real data once
// it's ready; the shape (Category field, etc.) is already correct.
const ProdData: Product[] = [
  {
    Image: SagoDryerImg,
    title: 'Sago Dryers',
    Type: 'Conveyor Bed',
    Category: 'Industrial & Processing',
    Crops: 'Sago, Chilli, Bell Pepper, Herbs & Leaves',
    Capacity: '500 kg – 1.8 T/hr',
    Dryingtime: '2.5 hrs (Sun Dried: 8 hrs)',
    Fuel: 'Wood / Biomass',
    Locations: 'Tamil Nadu'
  },
  {
    Image: CofferDryerImg,
    title: 'Coffee Dryer',
    Type: 'Flat Bed',
    Category: 'Crop Dryers',
    Crops: 'Coffee (Cherry & Parchment), Pepper',
    Capacity: '2 T – 4 T (Parchment)',
    Dryingtime: '8–14 hrs (Sun Dried: 6–14 Days)',
    Fuel: 'Wood Chips / Biomass Pellets',
    Locations: 'Karnataka'
  },
  {
    Image: PaddyDryerImg,
    title: 'Paddy Dryer',
    Type: 'Flat Bed Batch (Mobile & Stationary)',
    Category: 'Crop Dryers',
    Crops: 'Paddy, Maize & Other Grains',
    Capacity: '5 T',
    Dryingtime: '3–4 hrs (Sun Dried: 24–48 hrs)',
    Fuel: 'Diesel / Kerosene',
    Locations: 'Andhra Pradesh'
  },
  {
    Image: KardiPedrottiMobileDryerImg,
    title: 'Kardi-Pedrotti Mobile Dryer',
    Type: 'Batch Type – Mobile',
    Category: 'Mobile Dryers',
    Crops: 'Paddy, Maize & Other Grains',
    Capacity: '2 T – 70 T',
    Dryingtime: '30 min – 4 hrs (Sun Dried: 24–48 hrs)',
    Fuel: 'Diesel / Kerosene',
    Locations: 'Tamil Nadu'
  },
  {
    Image: NylonSagoDryerImg,
    title: 'Nylon Sago Dryer',
    Type: 'Conveyor Bed',
    Category: 'Industrial & Processing',
    Crops: 'Sago, Chilli, Bell Pepper, Herbs & Leaves',
    Capacity: '500 kg – 1.8 T/hr',
    Dryingtime: '2.5 hrs (Sun Dried: 8 hrs)',
    Fuel: 'Wood / Biomass',
    Locations: 'Tamil Nadu'
  },
  {
    Image: MaizeSeedDryerImg,
    title: 'Maize Seed Dryer',
    Type: 'Flat Bed',
    Category: 'Crop Dryers',
    Crops: 'Maize Seeds (Germination Drying)',
    Capacity: '3 T',
    Dryingtime: '77 hrs (For Seed Germination)',
    Fuel: 'Wood / Biomass',
    Locations: 'Tamil Nadu'
  },
  {
    Image: TrayDryerImg,
    title: 'Tray Dryer',
    Type: 'Tray',
    Category: 'Crop Dryers',
    Crops: 'Herbs, Leaves, Fruits & Vegetables',
    Capacity: '50 kg – 300 kg',
    Dryingtime: 'Custom',
    Fuel: 'Wood / Biomass',
    Locations: 'Nagaland, Sri Lanka'
  },
  {
    Image: CardomomDryerImg,
    title: 'Cardamom Dryer',
    Type: 'Flat Bed (Optional Mixer)',
    Category: 'Crop Dryers',
    Crops: 'Small & Large Cardamom, Pepper',
    Capacity: '50 kg – 1.5 T',
    Dryingtime: 'Custom',
    Fuel: 'Biomass, Diesel, Firewood',
    Locations:
      'Kerala, Tamil Nadu, Karnataka, Assam, Sikkim, Nagaland, Andhra Pradesh, Arunachal Pradesh'
  },
  {
    Image: BabyDryerImg,
    title: 'Baby Dryer',
    Type: 'Flat Bed',
    Category: 'Crop Dryers',
    Crops: 'Large Cardamom, Ginger, Turmeric & Meat',
    Capacity: '50 kg',
    Dryingtime: 'Custom',
    Fuel: 'Firewood',
    Locations: 'Nagaland, Assam, Sikkim, Arunachal Pradesh'
  },
  {
    Image: ChilliDryerImg,
    title: 'Chilli Dryer',
    Type: 'Flat Bed (Optional Mixer)',
    Category: 'Crop Dryers',
    Crops: 'Red Chilli',
    Capacity: '2 T – 4 T',
    Dryingtime: 'Custom',
    Fuel: 'Firewood',
    Locations: 'Andhra Pradesh'
  },
  {
    Image: GroundnutDryerImg,
    title: 'Groundnut Dryer',
    Type: 'Re-Circulating',
    Category: 'Industrial & Processing',
    Crops: 'Groundnut',
    Capacity: '7.5 T/hr',
    Dryingtime: 'Custom',
    Fuel: 'Firewood in Gasifier',
    Locations: 'Virudhunagar, Tamil Nadu'
  },
  {
    Image: FlashDryerImg,
    title: 'Flash Dryer',
    Type: 'Flash',
    Category: 'Industrial & Processing',
    Crops: 'Starch / Maize Flour',
    Capacity: '1,000 – 1,500 kg/hr',
    Dryingtime: 'High-Speed Flash Drying',
    Fuel: 'Thermic Fluid / Biomass / Firewood / Fuel Oil / Gas',
    Locations: 'India'
  },
  {
    Image: CabinDryerImg,
    title: 'Cabin Dryer',
    Type: 'Cabin (Dryer cum Building)',
    Category: 'Industrial & Processing',
    Crops: 'Coffee, Cocoa, Tobacco, Turmeric, Rubber, Herbs & Leaves',
    Capacity: 'Custom',
    Dryingtime: 'Custom',
    Fuel: 'Multiple Fuel Options',
    Locations: 'India'
  }

]

const ProductDetails = () => {
  const [activeFilter, setActiveFilter] = useState<(typeof FILTERS)[number]>('All Products')

  const filteredProducts = useMemo(() => {
    if (activeFilter === 'All Products') return ProdData
    return ProdData.filter(p => p.Category === activeFilter)
  }, [activeFilter])

  return (
    <div className="bg-[#F4F1EA] py-40 px-10">
      <div className="md:grid md:grid-cols-[420px_1fr] gap-16  mx-auto">

        {/* LEFT — sticky filter rail */}
        <div className="prod-left">
          <div className="md:sticky md:top-24">
            <p

              className="text-[#53823c] text-xs uppercase tracking-[0.18em] font-medium mb-4"
            >
              Our range
            </p>
            <h5
              className="text-4xl font-normal leading-tight mb-2 text-[#2B2B26]"
            >
              Dryers for every crop, scale & fuel
            </h5>
            <div style={{ backgroundColor: '#A6824F' }} className="w-12 h-px my-6" />

            <ul className="flex flex-col gap-1">
              {FILTERS.map(filter => {
                const isActive = activeFilter === filter
                return (
                  <li key={filter}>
                    <button
                      onClick={() => setActiveFilter(filter)}
                      aria-pressed={isActive}
                      style={{
                        color: isActive ? '#2B2B26' : '#8C8678',
                        borderLeft: isActive ? '2px solid #53823c' : '2px solid transparent',
                        backgroundColor: isActive ? 'rgba(166,130,79,0.08)' : 'transparent'
                      }}
                      className="w-full text-left px-5 py-3 text-lg cursor-pointer tracking-wide transition-colors duration-300 hover:text-[#2B2B26]"
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
        <div className="prod-right mt-12 md:mt-0">
          {filteredProducts.length === 0 ? (
            <div
              style={{ borderColor: '#D8D2C2' }}
              className="border border-dashed rounded-md py-24 text-center"
            >
              <p style={{ color: '#8C8678' }} className="text-sm">
                No products in this category yet — check back soon, or browse
                another category.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-10">
              {filteredProducts.map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className="grid md:grid-cols-[260px_1fr] gap-8 pb-10"
                  style={{
                    borderBottom:
                      index !== filteredProducts.length - 1 ? '0.5px solid #D8D2C2' : 'none'
                  }}
                >
                  <div
                    style={{ backgroundColor: '#EDE9DD' }}
                    className=" overflow-hidden  flex items-center justify-center"
                  >
                    <img
                      src={item.Image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <p
                      className="text-black/50 text-[11px] uppercase tracking-[0.1em] mb-2"
                    >
                      {item.Category}
                    </p>
                    <h3
                      
                      className="text-4xl font-normal mb-5"
                    >
                      {item.title}
                    </h3>

                    <dl className="grid grid-cols-[110px_1fr] gap-y-3.5 text-base">
                      <dt style={{ color: '#8C8678' }}>Type</dt>
                      <dd style={{ color: '#5B564B' }}>{item.Type}</dd>

                      <dt style={{ color: '#8C8678' }}>Crops</dt>
                      <dd style={{ color: '#5B564B' }}>{item.Crops}</dd>

                      <dt style={{ color: '#8C8678' }}>Capacity</dt>
                      <dd style={{ color: '#5B564B' }}>{item.Capacity}</dd>

                      <dt style={{ color: '#8C8678' }}>Drying time</dt>
                      <dd style={{ color: '#5B564B' }}>{item.Dryingtime}</dd>

                      <dt style={{ color: '#8C8678' }}>Fuel</dt>
                      <dd style={{ color: '#5B564B' }}>{item.Fuel}</dd>

                      <dt style={{ color: '#8C8678' }}>Locations</dt>
                      <dd style={{ color: '#5B564B' }}>{item.Locations}</dd>
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