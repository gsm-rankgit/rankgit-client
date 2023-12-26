import './page.scss'

export default function UserInfo({ img, name, commit, pr, issue, review, ranking }) {
  return <div className="userinfo">
    <main>
      <img src={img} />
      <a href={`https://github.com/${name}`} target='_blank' className="name">
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