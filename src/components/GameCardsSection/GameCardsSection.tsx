import React, { useState } from 'react';
import styles from './GameCardsSection.module.scss';
import GameCard from "../GameCard/GameCard";
import { useTranslation } from "react-i18next";
import card1Image from '../../assets/images/gameCards/JourneytotheWealth_Monkey.png';
import card1Background from '../../assets/images/gameCards/card1-background.png';
import card2Image from '../../assets/images/gameCards/jackpot.png';
import card2Background from '../../assets/images/gameCards/card2-background.png';
import card3Image from '../../assets/images/gameCards/NinjavsSamurai_Samurai.png';
import card3Background from '../../assets/images/gameCards/card3-background.png';
import { isMobile } from "react-device-detect";
import Timer from "../Timer/Timer";
import Card from "../Card/Card";

type activeCards = {
  id: number;
  isActive: boolean;
  isClicked: boolean
}

const GameCardsSection = () => {
  const { t } = useTranslation();



  const [firstLoaded, setFirstLoaded] = useState(false)
  const [activeCards, setActiveCard] = useState<activeCards[]>([
    {
      id: 0,
      isActive: false,
      isClicked: false
    },
    {
      id: 1,
      isActive: false,
      isClicked: false
    },
    {
      id: 2,
      isActive: false,
      isClicked: false
    },
  ])

  const handleActiveCard = (number: number) => {
    setActiveCard(activeCards => activeCards.map((o, i) => (
      i === number
        ? { ...o, isActive: !o.isActive, isClicked: true }
        : { ...o, isActive: false }
    )
    ))
  }

  return <section className={`${styles.gameCardSection} wrapper ${!isMobile ? 'element-animation' : ''}`}>
    <GameCard
      label={t("gameCardsSection.liveCasino")}
      title={t("gameCardsSection.roulette")}
      learnMoreText={t("gameCardsSection.card1LearnMore")}
      image={card1Image}
      background={card1Background}
      index={0}
      isActive={activeCards[0].isActive}
      handleActiveCard={handleActiveCard}
      isClicked={activeCards[0].isClicked}
    />
    <GameCard
      label={t("gameCardsSection.casino")}
      title={t("gameCardsSection.slots")}
      learnMoreText={t("gameCardsSection.card2LearnMore")}
      image={card2Image}
      background={card2Background}
      gradientMode
      index={1}
      isActive={activeCards[1].isActive}
      handleActiveCard={handleActiveCard}
      isClicked={activeCards[1].isClicked}
    />
    {
      isMobile && (
        <Card height={174} className={styles.timer}>
          <p className={styles.timerTitle}>{t('topSection.tournamentStarts')}</p>
          <Timer />
        </Card>
      )
    }
    <GameCard
      label={t("gameCardsSection.tournaments")}
      title={t("gameCardsSection.newTournaments")}
      learnMoreText={t("gameCardsSection.card3LearnMore")}
      image={card3Image}
      background={card3Background}
      index={2}
      isActive={activeCards[2].isActive}
      handleActiveCard={handleActiveCard}
      isClicked={activeCards[2].isClicked}
    />
  </section>
};

export default GameCardsSection;