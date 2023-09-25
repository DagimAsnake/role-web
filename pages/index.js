import HomeOne from "../components/Home/HomeOne"
import HomeTwo from "../components/Home/HomeTwo"
import HomeThree from "../components/Home/HomeThree"
import HomeFour from '../components/Home/HomeFour'
import HomeTwoAndThree from "../components/Home/HomeTwoAndThree"
import WhatWeDo from "@/components/Home/WhatWeDo"

export default function Home() {
  return (
    <>
      <HomeOne />
      <WhatWeDo />
      <HomeTwo />
      <HomeTwoAndThree />
      <HomeThree />
      <HomeFour />
    </>
  )
}