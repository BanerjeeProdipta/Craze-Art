import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Navbar from '../ui/Navbar'

const LazyFooter = dynamic(() => import('../landing/Footer'), { ssr: false })

function LoadingScreen() {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-3xl font-bold animate-pulse lg:text-5xl">
        Craze
        <span className="text-transparent bg-gradient-to-tr from-primaryDark via-primaryLight to-primaryLight bg-clip-text">
          Art
        </span>
      </h1>
    </div>
  )
}

function Layout({ children }: any) {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <div
        className="min-h-screen text-white/50 selection:bg-primaryLight/10 selection:text-primaryDark prose-headings:text-white prose-h2:text-4xl prose-h2:font-bold prose-h2:leading-[3rem] prose-p:text-xl prose-p:font-medium prose-p:leading-relaxed"
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
