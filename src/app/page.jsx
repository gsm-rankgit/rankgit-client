import Navigator from "@/components/navigator/page";
import './page.scss'
import Footer from "@/components/Footer/page";
import UserInfo from "@/components/UserInfo/page";

export default function Home() {
  return <div className='Home'>
    <Navigator />
    <div className="properties">
      <span>Commit</span>
      <span>PR</span>
      <span>Issue</span>
      <span>Review</span>
    </div>
    <div className="users">
      <UserInfo img={''} name={'esperar'} github={'https://github.com/esperar'} commit={9999} pr={99} issue={99} review={99} ranking={1} />
      <UserInfo img={''} name={'esperar'} github={'https://github.com/esperar'} commit={9999} pr={99} issue={99} review={99} ranking={2} />
      <UserInfo img={''} name={'esperar'} github={'https://github.com/esperar'} commit={9999} pr={99} issue={99} review={99} ranking={3} />
      <UserInfo img={''} name={'esperar'} github={'https://github.com/esperar'} commit={9999} pr={99} issue={99} review={99} ranking={4} />
      <UserInfo img={''} name={'esperar'} github={'https://github.com/esperar'} commit={9999} pr={99} issue={99} review={99} ranking={5} />
      <UserInfo img={''} name={'esperar'} github={'https://github.com/esperar'} commit={9999} pr={99} issue={99} review={99} ranking={6} />
      <UserInfo img={''} name={'esperar'} github={'https://github.com/esperar'} commit={9999} pr={99} issue={99} review={99} ranking={7} />
      <UserInfo img={''} name={'esperar'} github={'https://github.com/esperar'} commit={9999} pr={99} issue={99} review={99} ranking={8} />
      <UserInfo img={''} name={'esperar'} github={'https://github.com/esperar'} commit={9999} pr={99} issue={99} review={99} ranking={9} />
      <UserInfo img={''} name={'esperar'} github={'https://github.com/esperar'} commit={9999} pr={99} issue={99} review={99} ranking={10} />
      <UserInfo img={''} name={'esperar'} github={'https://github.com/esperar'} commit={9999} pr={99} issue={99} review={99} ranking={11} />
      <UserInfo img={''} name={'esperar'} github={'https://github.com/esperar'} commit={9999} pr={99} issue={99} review={99} ranking={12} />
      <UserInfo img={''} name={'esperar'} github={'https://github.com/esperar'} commit={9999} pr={99} issue={99} review={99} ranking={13} />
      <UserInfo img={''} name={'esperar'} github={'https://github.com/esperar'} commit={9999} pr={99} issue={99} review={99} ranking={14} />
    </div>
    <Footer />
  </div>
}
