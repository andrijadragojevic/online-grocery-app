import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Slider from "./_components/Slider";
import GlobalApi from "./_utils/GlobalApi";

export default async function Home() {

  const sliderList = await GlobalApi.getSliderList()


  return (
    <div className="p-10 px-16">
      <Slider sliderList={sliderList} />
    </div>
  );
}
