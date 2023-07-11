import Image from 'next/image'
import { Roboto } from 'next/font/google'
import IVF from './IVF'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function Header() {
  return (


        <header className="flex  w-full pl-36 pt-2.5 pb-2.5 bg-white pr-36">
        <IVF/>

        <div className="w-full ml-96 grid gap-2 grid-cols-6 items-center text-black">
  <div className=" text-orange-500">HOME</div>
  <div className="">ABOUT ME</div>
  <div className="">OUR CLASES</div>
  <div  className="">LESSONS</div>
  <div className="">PROJECTS</div>
  <div className="">CONTACT US</div>

</div>


        </header>




  )
}
