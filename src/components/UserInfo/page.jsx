import './page.scss'
import Image from "next/image";

export default function UserInfo({ img, name, github, commit, pr, issue, review, ranking }) {
  return <div className="userinfo">
    <main>
      <Image src={img} />
      <a href={github} target='_blank' className="name">
        {name}
      </a>
      <div className='achievements'>
        <span>{commit}</span>
        <span>{pr}</span>
        <span>{issue}</span>
        <span>{review}</span>
      </div>
    </main>
    <div className="ranking" style={{ color: ranking === 1 ? '#ECD60D' : ranking === 2 ? '#C6C6C6' : ranking === 3 ? '#D36500' : 'black' }}>
      #{ranking}
    </div>
  </div>
}