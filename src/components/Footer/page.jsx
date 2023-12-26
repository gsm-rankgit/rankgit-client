import Link from 'next/link'
import './page.scss'

export default function Footer() {
  return <div className="Footer">
    <p>GitHub Ranking 서비스 rank-git입니다. 버그, 이슈 제보는&nbsp;
      <Link href='/'>여기</Link>로 부탁 드립니다.</p>
  </div>
}