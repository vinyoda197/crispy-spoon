import Image from 'next/image'

export default function Home() {
  return (
    <>
    <section className="w-full bg-white">
      <div className="flex justify-between py-8 px-4 mx-auto lg:py-16 lg:px-6">
       <Image className="rotate-180" src="/static/Ic_chevron_right_48px.svg" alt="me" width="200" height="64" />
       <Image src="/static/Ic_chevron_right_48px.svg" alt="me" width="200" height="64" />
      </div>
    </section>
    <section className="w-full bg-stone-300">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-center text-4xl tracking-tight font-bold text-gray-900">What we do</h2>
              <p className="mb-4 font-dark text-gray-900 text-center">TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum</p>
          </div>
      </div>
    </section>
    </>
  )
}
