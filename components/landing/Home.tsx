import { motion } from 'framer-motion'
import { container, item } from '../../utils/animation'
import homeData from '../../utils/data/homeData'
import ImageContainer from '../ui/ImageContainer'
import PrimaryButton from '../ui/PrimaryButton'

function Home() {
  return (
    <div id="home" className="items-center justify-between w-full space-y-6 lg:flex lg:space-y-0">
      <div className="space-y-4 lg:py-8 lg:pr-12">
        <h1 className="text-4xl font-bold leading-[3rem] tracking-wide lg:text-5xl lg:leading-[3.5rem]">
          Create, Sell &
          <br />
          Collect Your Own Creative NFT
        </h1>
        <p className="max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.
        </p>
        <div className="flex flex-wrap items-center py-4 space-x-2 xs:space-x-4">
          <PrimaryButton text="Explore Now" />
          <button
            type="button"
            className="px-4 py-2 text-white transition delay-200 rounded-lg whitespace-nowrap bg-white/10 hover:bg-white hover:text-primaryLight"
          >
            Sell NFT
          </button>
        </div>
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={container}
          className="flex flex-wrap items-center justify-between max-w-xl list-none"
        >
          {homeData.map((data) => (
            <motion.li
              key={data.title}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              variants={item}
              className="px-2 mb-2 text-center"
            >
              <h3 className="text-2xl font-bold lg:text-3xl">{data.count}</h3>
              <p>{data.title}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <div className="flex flex-row items-center justify-center w-full space-x-4 space-y-0 lg:justify-end">
        <div className="flex flex-col justify-center space-y-4">
          <ImageContainer
            src="/image/home/1.png"
            className="rounded-xl filter hover:brightness-125"
            alt="art 1"
          />
          <ImageContainer
            src="/image/home/2.png"
            className="rounded-xl filter hover:brightness-125"
            alt="art 2"
          />
          <ImageContainer
            src="/image/home/3.png"
            className="rounded-xl filter hover:brightness-125"
            alt="art 3"
          />
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <ImageContainer
            src="/image/home/4.png"
            className="rounded-xl filter hover:brightness-125"
            alt="art 4"
          />
          <ImageContainer
            src="/image/home/5.png"
            className="rounded-xl filter hover:brightness-125"
            alt="art 5"
          />
          <ImageContainer
            src="/image/home/6.png"
            className="rounded-xl filter hover:brightness-125"
            alt="art 6"
          />
        </div>
        <div className="flex flex-col justify-center">
          <ImageContainer
            src="/image/home/7.png"
            className="rounded-xl filter hover:brightness-125"
            alt="art 7"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
