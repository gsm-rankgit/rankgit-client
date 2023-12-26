'use client'
import Navigator from '@/components/navigator/page'
import './page.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Footer from '@/components/Footer/page'

export default function User({ params }) {
  const GitHubUrl = 'https://api.github.com'
  const id = params.id[0]
  const [userinfo, setUserinfo] = useState({
    ranking: 1,
    name: '',
    img: '',
    pr: 99,
    issue: 99,
    review: 99
  })
  const [commit, setCommit] = useState(9999)
  const GetCommits = async e => {
    await axios.get(`${GitHubUrl}/users/${id}/repos`,
      { headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS}` } })
      .then(async e => {
        const repos = e.data;
        let commits = 0;
        for (const repo of repos) {
          let page = 1;
          for (; ;) {
            let commit
            await axios.get(`${GitHubUrl}/repos/${repo.full_name}/commits?per_page=100&page=${page}`, { headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS}` } }).then(e => {
              commit = e.data
              commits += commit.length
            });
            if (commit.length < 100) {
              break;
            }
            page++
          }
        }
        console.log(commits)
        setCommit(commits);

      }).catch(e => {
        console.log(e)
      })
  }
  const Getinfo = async e => {
    await axios.get(`${GitHubUrl}/users/${id}`,
      { headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS}` } })
      .then(e => {
        console.log(e.data)
        const d = e.data
        setUserinfo(a => ({
          img: d.avatar_url,
          name: d.login,
          commit: a.commit,
          issue: a.issue,
          pr: a.pr,
          ranking: a.ranking,
          review: a.review
        }))
      }).catch(e => {
        console.log(e)
      })
  }
  useEffect(e => {
    Getinfo()
    // GetCommits()
  }, [])
  return <div className="UserPage">
    <Navigator />
    <main>
      <img src={userinfo.img} />
      <div className='user'>
        <span style={{ color: userinfo.ranking === 1 ? '#ECD60D' : userinfo.ranking === 2 ? '#C6C6C6' : userinfo.ranking === 3 ? '#D36500' : 'white' }}>#{userinfo.ranking}</span>
        <span>{userinfo.name}</span>
      </div>
      <p>
        <span>Commits </span>
        <span>{commit}</span>
      </p>
      <p>
        <span>PR </span>
        <span>{userinfo.pr}</span>
      </p>
      <p>
        <span>Issue </span>
        <span>{userinfo.issue}</span>
      </p>
      <p>
        <span>Review </span>
        <span>{userinfo.review}</span>
      </p>
      <button onClick={e => window.location.href = `https://github.com/${id}`}>
        <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default">
          <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
        </svg>
        <span>
          GitHub
        </span>
      </button>
    </main>
    <Footer />
  </div>
}