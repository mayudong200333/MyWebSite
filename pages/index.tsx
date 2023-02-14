import HomeBody from "@/components/home/homeBody";
import HomeHeader from "@/components/home/homeHeader";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <HomeHeader/>
      <HomeBody />
    </Fragment>
  )
}