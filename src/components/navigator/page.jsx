import './page.scss'
import Image from 'next/image'

export default function Navigator({ img }) {
  return <div className="Navigator">
    <span>rank-git</span>
    {img ? <Image alt='user' className='img' src={img}></Image> : <div className='img' />}
  </div>
}
