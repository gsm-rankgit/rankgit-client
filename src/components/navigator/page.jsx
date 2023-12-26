'use client'
import Link from 'next/link'
import './page.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Navigator() {
  const [userid, setUserid] = useState('')
  const [img, setImg] = useState('');
  const GitHubUrl = 'https://api.github.com'
  const Getinfo = async e => {
    await axios.get(`${GitHubUrl}/users/${localStorage?.getItem('userid')}`,
      { headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS}` } })
      .then(e => {
        console.log(e.data);
        setImg(e.data.avatar_url)
      }).catch(e => {
        console.log(e);
      })
  }
  useEffect(e => {
    setUserid(localStorage?.getItem('userid'))
    Getinfo()
  }, [])
  return <div className="Navigator">
    <span>rank-git</span>
    <Link href={`/user/${userid}`}>
      {img ? <img alt='user' className='img' src={img}></img> : <div className='img' />}
    </Link>
  </div >
}
