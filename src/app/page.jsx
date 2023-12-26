import Navigator from "@/components/navigator/page";
import './page.scss'
import Footer from "@/components/Footer/page";

export default function Home() {
  return <div className='Home'>
    <Navigator />
    <div className="properties">
      <span>Commit</span>
      <span>PR</span>
      <span>Issue</span>
      <span>Review</span>
    </div>
    <Footer />
  </div>
}
