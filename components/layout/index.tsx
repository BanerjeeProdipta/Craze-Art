import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Navbar from '../ui/Navbar'

const LazyFooter = dynamic(() => import('../landing/Footer'), { ssr: false })

function Layout({ children }) {
  return (
    <Suspense fallback={(
      <div
        className="flex items-center justify-center h-screen"
      >
        <h1 className="text-3xl font-bold lg:text-5xl animate-pulse">
          Craze
          <span className="text-transparent bg-gradient-to-tr to-primaryLight via-primaryLight from-primaryDark bg-clip-text">Art</span>
        </h1>
      </div>
)}
    >
      <div
        className="min-h-screen selection:bg-primaryLight/10 selection:text-primaryDark prose-p:font-medium prose-p:text-xl text-white/50 prose-h2:leading-[3rem] prose-headings:text-white prose-h2:font-bold prose-h2:text-4xl prose-p:leading-relaxed"
        style={{
          background: 'linear-gradient(113.49deg, #984D38 -30.3%, #181E41 58.12%)',
        }}
      >

        <div className="lg:mx-auto">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="w-full max-w-7xl">
              <Navbar />
              <div className="px-4">
                {children}
                <LazyFooter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>

  )
}

export default Layout
