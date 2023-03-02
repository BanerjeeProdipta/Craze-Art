import Link from 'next/link'
import { useContext, useEffect, useRef, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiOutlineSend } from 'react-icons/ai'
import { TransactionContext } from '../../context/TransactionContext'

function Navbar() {
  const ref = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const navItems = [
    {
      name: 'Collections',
      href: '#collections',
    },
    {
      name: 'Feature',
      href: '#featured-arts',
    },
    {
      name: 'FAQ',
      href: '#faq',
    },
  ]

  // close menu on clicking anywhere on screen
  useEffect(() => {
    const handleScreenClick = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', handleScreenClick)
    return () => {
      document.removeEventListener('click', handleScreenClick)
    }
  }, [setIsOpen])

  const handleLinkOnClick = () => setIsOpen(false)

  const { connectWallet, currentAccount, disconnectWallet } = useContext(TransactionContext)

  const connectWalletButton = () => (
    <div>
      {currentAccount ? (
        <>
          {/* <button
            type="button"
            className="p-1 text-white transition duration-500 ease-in-out border border-transparent border-white rounded cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          >
            {`${currentAccount.slice(0, 2)}...${currentAccount.slice(-4)}`}
          </button>
          {/* show menu  */}

          {/* <div
            className={`absolute right-0 mt-2 w-64 rounded-md bg-gray-900 shadow-lg ${
              showMenu ? 'block' : 'hidden'
            }`}
          >
            <Link
              onClick={() => {
                handleLinkOnClick()
              }}
              href={'/profile'}
              className="block p-2 font-semibold transition-all duration-300 rounded-md hover:bg-primaryLight hover:text-white hover:opacity-75"
            >
              Profile
            </Link>
            <Link
              onClick={() => {
                handleLinkOnClick()
              }}
              href={'/create-nft'}
              className="block p-2 font-semibold transition-all duration-300 rounded-md hover:bg-primaryLight hover:text-white hover:opacity-75"
            >
              Create NFT
            </Link>
            <Link
              onClick={() => {
                disconnectWallet()
                handleLinkOnClick()
              }}
              href={'/'}
              className="block p-2 font-semibold transition-all duration-300 rounded-md hover:bg-primaryLight hover:text-white hover:opacity-75"
            >
              Disconnect Wallet
            </Link>
          </div> */}

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="m-1 btn">
              Click
            </label>
            <ul
              tabIndex={0}
              className="p-2 shadow dropdown-content menu bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <button
          type="button"
          className="px-4 py-1 font-medium text-white transition duration-1000 rounded hover:text-primaryLight lg:px-4"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </div>
  )

  return (
    <nav className="sticky top-0 z-50 w-full px-2 py-3 backdrop-blur-sm">
      <div
        ref={ref}
        className="relative overflow-hidden transition-all delay-150 duration-500 ease-in-out md:static md:min-h-[80px]"
        style={{ maxHeight: isOpen && ref.current ? 800 : 50 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" onClick={() => window.scrollTo(0, 0)}>
              <h1 className="text-2xl font-bold">
                Craze
                <span className="text-transparent bg-gradient-to-tr from-primaryDark via-primaryLight to-primaryLight bg-clip-text">
                  Art
                </span>
              </h1>
            </Link>
          </div>

          <button type="button" className="relative flex-1 hidden mx-8 md:flex">
            <div className="absolute top-2.5 left-3">
              <AiOutlineSearch size={22} />
            </div>
            <input
              type="text"
              className="flex flex-1 p-2 pl-10 text-xl text-white rounded-md flex-0 bg-white/10 ring-primaryLight focus:border-transparent focus:outline-none focus:ring-2 md:w-4 xl:w-full"
              placeholder="Search items and collections"
            />
          </button>

          {/* Medium screen links STARTS */}
          <div className="justify-end hidden md:flex md:items-center md:text-lg lg:text-xl">
            <div className="flex space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-1 font-medium text-white transition duration-1000 rounded hover:text-primaryLight lg:px-4"
                >
                  {item.name}
                </Link>
              ))}
              {connectWalletButton()}
            </div>
          </div>
          {/* Medium screen links ENDS */}

          <div className="flex justify-end flex-1 md:hidden">
            <button
              type="button"
              className="p-1 text-white transition duration-500 ease-in-out border border-transparent border-white rounded cursor-pointer md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
        </div>

        {/* small screen links STARTS */}
        {isOpen && (
          <div className="p-2 my-4 space-y-2 rounded-lg bg-bgRight md:hidden">
            <button type="button" className="relative w-full p-1 ">
              <div className="absolute top-3 left-3">
                <AiOutlineSearch size={22} />
              </div>
              <input
                type="text"
                className="flex w-full p-2 pl-10 text-white rounded-md flex-0 w bg-white/10 ring-primaryLight focus:border-transparent focus:outline-none focus:ring-2 "
                placeholder="Search"
              />

              <button
                type="button"
                className="absolute top-3.5 right-3"
                onClick={() => setIsOpen(!isOpen)}
              >
                <AiOutlineSend />
              </button>
            </button>
            {navItems.map((item) => (
              <Link
                key={item.name}
                onClick={handleLinkOnClick}
                href={item.href}
                className="block p-2 font-semibold transition-all duration-300 rounded-md hover:bg-primaryLight hover:text-white hover:opacity-75"
              >
                {item.name}
              </Link>
            ))}

            {currentAccount && (
              <>
                <Link
                  onClick={handleLinkOnClick}
                  href={'/profile'}
                  className="block p-2 font-semibold transition-all duration-300 rounded-md hover:bg-primaryLight hover:text-white hover:opacity-75"
                >
                  Profile
                </Link>
                <Link
                  onClick={() => {
                    disconnectWallet()
                    handleLinkOnClick()
                  }}
                  href={'/'}
                  className="block p-2 font-semibold transition-all duration-300 rounded-md hover:bg-primaryLight hover:text-white hover:opacity-75"
                >
                  Disconnect Wallet
                </Link>
              </>
            )}
          </div>
        )}
        {/* small screen links ENDS */}
      </div>
    </nav>
  )
}

export default Navbar
