'use client'
import { UserProfileImg } from '@/app/recoilStates'
import './page.scss'
import Image from 'next/image'
import { RecoilRoot, useRecoilState } from 'recoil'

export default function Navigator() {
  return <RecoilRoot>
    <InnerComponent />
  </RecoilRoot>
}

function InnerComponent() {
  const [userimg, setUserimg] = useRecoilState(UserProfileImg)
  return <div className="Navigator">
    <span>rank-git</span>
    <Image alt='user' src={userimg.img}></Image>
  </div>
}