import "./home.css";
import { Brand } from "../../components/brand/Brand";
import { Cta } from "../../components/cta/Cta";
import { Blog } from "../../containers/blog/Blog";
import { Features } from "../../containers/features/Features";
import { Footer } from "../../containers/footer/Footer";
import { Possibility } from "../../containers/possibility/Possibility";
import { WhatGPT3 } from "../../containers/whatGPT3/WhatGPT3";
import { Header } from "../../containers/header/Header";

export const Home = () => {
  return (
    <div className="Home">
      <div className="gradient__bg">
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};
