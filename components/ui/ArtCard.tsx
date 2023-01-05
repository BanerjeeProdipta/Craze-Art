import { motion } from 'framer-motion'
import { useContext } from 'react'
import { TransactionContext } from '../../context/TransactionContext'
import { item } from '../../utils/animation'
import ImageContainer from './ImageContainer'
import PrimaryButton from './PrimaryButton'

interface props{
  img:string;
  author:string;
  price:number;
  name:string;
}

function ArtCard({
  img, author, price, name,
}:props) {
  const { sendTransaction } = useContext(TransactionContext)

  return (
    <motion.li
      transition={{ duration: 0.1, ease: 'easeInOut' }}
      variants={item}
      className="transition duration-300 group"
      whileTap={{ scale: 0.90 }}
    >
      <div className="p-4 space-y-4 transition rounded-lg shadow-lg bg-white/10 group-hover:bg-black/10">
        <div className="w-full overflow-hidden rounded-2xl">
          <ImageContainer
            src={img}
            alt={img}
            className="duration-300 rounded-lg group-hover:scale-110"
          />
        </div>

        <div className="flex flex-wrap justify-between">
          <div className="space-y-2">
            <p>
              @
              {author}
            </p>
            <h4 className="text-xl font-semibold">{name}</h4>
          </div>
          <div className="text-right not-prose">
            <p className="text-sm font-normal">
              Current Bid
            </p>
            <h4 className="text-xl font-semibold text-white">
              {price}
              {' '}
              ETH
            </h4>
          </div>
        </div>
        <PrimaryButton
          onClick={() => {
            const data = {
              addressTo: '0x20F7b32Ee2E8BD9Ae802e9fa27350a7006F464F8',
              amount: price,
              keyword: img,
              message: `Buy ${name} for ${price} ETH`,

            }
            sendTransaction(data)
          }}
          text="Buy"
          className="w-full border border-transparent group-hover:border-primaryDark group-hover:bg-none group-hover:text-primaryDark"
        />
      </div>
    </motion.li>
  )
}

export default ArtCard
