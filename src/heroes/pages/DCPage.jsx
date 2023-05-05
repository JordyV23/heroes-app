import { HeroList } from "../components";
import { ComicsLogo } from "../../ui/";


export const DCPage = () => {
  return (
    <>
    <ComicsLogo source={'/assets/logos/DC_Comics_logo.svg'} altText={"Logo de DC Comics"}/>

      <HeroList publisher={"DC Comics"} />
    </>
  );
};
