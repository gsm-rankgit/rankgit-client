import { atom } from 'recoil'

export const UserProfileImg = atom({
  key: 'UserProfileImg',
  default: {
    name: '',
    commits: 0,
    pullRequests: 0,
    reviews: 0,
    img: '',
    githubURL: 'https://www.github.com'
  }
})