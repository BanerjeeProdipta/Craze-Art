import { useState } from 'react'

interface props {
  src: string
  alt: string
  className: string
}

function ImageContainer({ src, alt, className }: props) {
  const [loading, setLoading] = useState(true)

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} transition duration-300 ease-in-out ${
        loading ? 'animate-pulse rounded-md bg-gray-600/40' : 'opacity-100'
      }`}
      onLoad={() => setLoading(false)}
    />
  )
}

export default ImageContainer
