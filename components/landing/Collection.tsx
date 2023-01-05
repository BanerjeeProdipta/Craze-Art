import { useState } from 'react'
import { arts, tabItems } from '../../utils/data/collectionData'
import ArtCard from '../ui/ArtCard'
import MotionContainer from '../ui/MotionContainer'
import SectionHeader from '../ui/SectionHeader'

function Collection() {
  const [selected, setSelected] = useState('Sport')

  return (
    <div id="collections" className="space-y-4">
      <SectionHeader
        title="Collection"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />

      <div className="justify-between text-white sm:flex">
        {tabItems.map((singleItem) => (

          <button
            key={singleItem}
            type="button"
            onClick={() => setSelected(singleItem)}
            className={`${
              selected === singleItem
                ? 'bg-primaryLight'
                : 'bg-white/20'
            } w-full m-2 px-4 py-2 font-medium transition duration-1000 rounded-md lg:px-4 whitespace-nowrap hover:bg-gradient-to-tr`}
          >
            {singleItem}
          </button>

        ))}
      </div>
      <MotionContainer
        className="grid grid-cols-1 gap-4 lg:grid-cols-3"
      >
        {arts.map((art) => (
          <ArtCard
            key={art.img}
            img={`image/collection/${art.img}`}
            author={art.author}
            price={art.price}
            name={art.name}
          />
        ))}
      </MotionContainer>
    </div>
  )
}

export default Collection
