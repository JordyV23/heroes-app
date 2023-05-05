import { ComicsLogo } from "../../ui/";
import { HeroList } from "../components";

export const MarvelPage = () => {
  return (
    <>
      <ComicsLogo source={"/assets/logos/Marvel_Logo.svg"} altText={"Logo de Marvel Comics"}/>

      <HeroList publisher={"Marvel Comics"} />
    </>
  );
};
