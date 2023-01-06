import featuredArts from '../../utils/data/featuredArts'
import ArtCard from '../ui/ArtCard'
import MotionContainer from '../ui/MotionContainer'
import SectionHeader from '../ui/SectionHeader'

function FeaturedArts() {
  return (
    <div id="featured-arts" className="space-y-4">
      <SectionHeader
        title="Featured Artworks"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <MotionContainer className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {featuredArts.map((art) => (
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

export default FeaturedArts
