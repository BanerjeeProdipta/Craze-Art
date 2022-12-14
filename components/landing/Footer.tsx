import Link from 'next/link'

function Footer() {
  return (
    <div className="mt-8 prose-p:text-sm prose-h4:font-bold prose-h4:text-xl prose-h4:text-white">
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-5">
        <div className="col-span-2">
          <h1 className="mb-2 text-xl font-bold text-white">
            Craze
            <span className="text-primaryLight">Art</span>
          </h1>
          <p className="max-w-xs">
            The best NFT marketplace
            website in the world and feel your experience in selling or buy our work
          </p>
        </div>
        <div className="space-y-3">
          <h4>About</h4>
          <Link href="/product" className="block">
            <p>Product</p>
          </Link>
          <Link href="/resource" className="block">
            <p>Resource</p>
          </Link>
          <Link href="/term-&-condition" className="block">
            <p>Term & Condition</p>
          </Link>
          <Link href="/faq" className="block">
            <p>FAQ</p>
          </Link>
        </div>
        <div className="space-y-3">
          <h4>Company</h4>
          <Link href="/" className="block">
            <p>Our Team</p>
          </Link>
          <Link href="/" className="block">
            <p>Partner With Us</p>
          </Link>
          <Link href="/" className="block">
            <p>Privacy & Policy</p>
          </Link>
          <Link href="/" className="block">
            <p>Features</p>
          </Link>
        </div>
        <div className="space-y-3">
          <h4>Contact</h4>
          <p />
          <div>
            <a
              href="tel: +01234567895"
            >
              <p>
                +012 3456789
              </p>
            </a>
          </div>
          <div>
            <a
              href="mailto:saquib@universalmachine.io"
            >
              <p>
                saquib@universalmachine.io
              </p>
            </a>
          </div>
          <div className="flex space-x-6">
            <Link href="/" className="block">
              <img src="/image/footer/youtube.png" alt="youtube" />
            </Link>
            <Link href="/" className="block">
              <img src="/image/footer/discord.png" alt="discord" />
            </Link>
            <Link href="/" className="block">
              <img src="/image/footer/instagram.png" alt="instagram" />
            </Link>
          </div>
        </div>
      </div>
      <p className="py-24 text-center">
        Tero Labs | All Right Reserved!
      </p>
    </div>
  )
}

export default Footer
