import Customise1 from "@/components/Customise1"
import Customise2 from "@/components/Customise2"
import Data from "@/components/Data"
import Footer from "@/components/Footer"
import FreeTrial from "@/components/FreeTrial"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import Pricing from "@/components/Pricing"
import SlackTechnology from "@/components/SlackTechnology"
import Sponser from "@/components/Sponser"
import Testimonial from "@/components/Testimonial"
import WorkMangement from "@/components/WorkMangement"
import YourWork from "@/components/YourWork"

export default function Home() {
 return(
  <div>
    <Header/>
    <HeroSection/>
    <WorkMangement/>
    <Customise1/>
    <Customise2/>
    <Pricing/>
    <YourWork/>
    <Data/>
    <Sponser/>
    <SlackTechnology/>
    <Testimonial/>
    <FreeTrial/>
    <Footer/>
  </div>
 ) 
}