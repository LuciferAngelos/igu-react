import React from 'react';
import Header from "../../components/Header/Header";
import TopSection from "../../components/TopSection/TopSection";
import GameCardsSection from "../../components/GameCardsSection/GameCardsSection";
import HotGamesSection from "../../components/HotGamesSection/HotGamesSection";
import Footer from "../../components/Footer/Footer";
import CountrySelect from "../../components/CountrySelect/CountrySelect";


const MainPage = () => {

  return (
    <>
      <Header />
      <TopSection />
      <GameCardsSection />
      <HotGamesSection />
      <CountrySelect />
      <Footer />
    </>
  )
};

export default MainPage;