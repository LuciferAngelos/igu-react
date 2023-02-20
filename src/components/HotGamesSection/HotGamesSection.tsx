import React, { useRef, useState, useMemo } from 'react';
import styles from './HotGamesSection.module.scss';
import Card from "../Card/Card";
import { useTranslation } from "react-i18next";
import Button from "../uikit/Button/Button";
import colors from '../../styles/colors.module.scss'

import card1Image from '../../assets/images/hotGames/card1.png'
import card2Image from '../../assets/images/hotGames/card2.png'
import card3Image from '../../assets/images/hotGames/card3.png'
import card4Image from '../../assets/images/hotGames/card4.png'
import card5Image from '../../assets/images/hotGames/card5.png'
import card6Image from '../../assets/images/hotGames/card6.png'
import card7Image from '../../assets/images/hotGames/card7.png'
import card8Image from '../../assets/images/hotGames/card8.png'
import UseAnimationElement from "../../hooks/UseAnimationElement";
import { isMobile } from "react-device-detect";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ReactSlider from 'react-slider';
import { baseUrl, slotsLinks } from '../../config';
import { useUpdateLinks } from '../../hooks/updateLinks';

interface HotGameCardProps {
  id: string
  img: any;
  text: string;
  borderColor: string;
  zIndex: number;
  size: { width: number; height: number; };
  rotation: number;
  position: { top: number; left: number; };
  inRotation?: boolean
  href: string
}

const HotGameCard: React.FC<HotGameCardProps> = (props) => {
  const { img, borderColor, zIndex, size, rotation, position, text, inRotation, href, id } = props;
  const { t } = useTranslation();

  return (
    <div
      className={`${styles.hotGameCard} ${styles[id]}`}
      style={{
        backgroundImage: `url(${img})`,
        zIndex,
        borderColor,
        width: `${size.width}px`,
        height: `${size.height}px`,
        transform: `rotate(${rotation}deg)`,
        top: position.top,
        left: position.left,
        visibility: inRotation ? 'visible' : 'hidden'
      }}
    >
      <div className={styles.hotGameCardBackground}>
        <div className={styles.hotGameCardContent}>
          <div className={styles.hotGameCardText}>{text}</div>
          <Button width={192} color="red" href={href}><span>{t('common.playNow')}</span></Button>
        </div>
      </div>
    </div>
  )
}

const HotGamesSection = () => {
  const { t } = useTranslation();
  const [swiperProgress, setSwiperProgress] = useState(0);
  const [index, setIndex] = useState(0);
  const { query } = useUpdateLinks()
  const swiperRef = useRef();
  const [isHovered, setIsHovered] = useState(false)

  UseAnimationElement();

  const handleSwiperProgress = (progress: any) => {
    setSwiperProgress(progress)
    setIndex(Math.ceil(progress * 8) - 1)
  }

  const slotLinks = useMemo(() => {
    if (query) {
      let parsedQuery = query.split('');
      parsedQuery.splice(0, 1, '?');
      return parsedQuery.join('');
    }
  }, [query])

  return (
    <section className={`${styles.hotGamesSection} ${!isMobile ? 'element-animation' : ''}`}>
      {
        isMobile && (
          <div className={styles.swiperWrapper}>
            <Swiper
              ref={swiperRef}
              slidesPerView={3}
              centeredSlides={true}
              spaceBetween={20}
              onProgress={((swiper, progress) => handleSwiperProgress(progress))}
              className={styles.swiper}
            >
              <SwiperSlide>
                <div className={`${styles.swiperSlide} ${styles.swiperSlide1}`} />
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.swiperSlide} ${styles.swiperSlide2}`} />
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.swiperSlide} ${styles.swiperSlide3}`} />
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.swiperSlide} ${styles.swiperSlide4}`} />
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.swiperSlide} ${styles.swiperSlide5}`} />
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.swiperSlide} ${styles.swiperSlide6}`} />
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.swiperSlide} ${styles.swiperSlide7}`} />
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.swiperSlide} ${styles.swiperSlide8}`} />
              </SwiperSlide>
            </Swiper>
          </div>
        )
      }
      <div className={`wrapper ${isMobile ? '' : "d-flex position-relative"}`}>
        <Card height={!isMobile ? 570 : 410} color="red" className="position-relative">
          <div className={styles.hotGameIcon} />
          <p className={styles.hotGameTitle}>{t('hotGamesSection.title')}</p>
          <div className={styles.hotGameButtonWrapper}>
            <Button
              color="red"
              width={!isMobile ? 192 : 238}
              href={isMobile
                ? `${slotsLinks[index === -1
                  ? 0
                  : index === 8 ? 7
                    : index]}/${slotLinks}`
                : `${baseUrl}${query}`}
            ><span>{t('common.playNow')}</span></Button>
          </div>
          {
            isMobile && (
              <>
                <div className={styles.iconArrows} />
                <div className={styles.iconHand} />
              </>
            )
          }
        </Card>
        {
          isMobile && (
            <ReactSlider
              max={100}
              onChange={(value) => swiperRef.current.swiper.setProgress(value / 100)}
              onAfterChange={() => swiperRef.current.swiper.slideTo(Math.ceil(swiperProgress * 8) - 1)}
              value={swiperProgress * 100}
            />
          )
        }
        {
          !isMobile && (
            <div className={styles.hotGamesCards}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className={styles.hotGameWrapper}>
                <div className={styles.hotGamesRow}>
                  <HotGameCard
                    id={'card1'}
                    img={card1Image}
                    borderColor={colors.blue1}
                    zIndex={5}
                    size={{ width: 409, height: 395 }}
                    rotation={-4}
                    position={{ top: 120, left: 70 }}
                    text={t('hotGamesSection.card1Text')}
                    inRotation={true}
                    href={'https://www.igucasino.com/game/elvis-frog-in-vegas/' + slotLinks}
                  />
                  <HotGameCard
                    id={'card2'}
                    img={card2Image}
                    borderColor={colors.red4}
                    zIndex={1}
                    size={{ width: 20, height: 20 }}
                    rotation={-3.48}
                    position={{ top: 120, left: 335 }}
                    text={t('hotGamesSection.card2Text')}
                    inRotation={isHovered && true}
                    href={'https://www.igucasino.com/game/gates-of-olympus/' + slotLinks}
                  />
                  <HotGameCard
                    id={'card3'}
                    img={card3Image}
                    borderColor={colors.blue1}
                    zIndex={2}
                    size={{ width: 282, height: 282 }}
                    rotation={-4}
                    position={{ top: 62, left: 245 }}
                    text={t('hotGamesSection.card3Text')}
                    inRotation={true}
                    href={'https://www.igucasino.com/game/big-bass-bonanza/' + slotLinks}
                  />
                  <HotGameCard
                    id={'card4'}
                    img={card4Image}
                    borderColor={colors.red4}
                    zIndex={3}
                    size={{ width: 308, height: 308 }}
                    rotation={-3.48}
                    position={{ top: 120, left: -263 }}
                    text={t('hotGamesSection.card4Text')}
                    inRotation={true}
                    href={'https://www.igucasino.com/game/wolf-gold/' + slotLinks}
                  />
                </div>
                <div className={styles.cardsTitleWrapper}>
                  <div className={styles.cardsTitle}>{t('hotGamesSection.chooseGame')}</div>
                </div>
                <div className={styles.hotGamesRow} style={{ height: 0 }}>
                  <HotGameCard
                    id={'card5'}
                    img={card5Image}
                    borderColor={colors.blue2}
                    zIndex={1}
                    size={{ width: 20, height: 20 }}
                    rotation={-2.76}
                    position={{ top: -200, left: 220 }}
                    text={t('hotGamesSection.card5Text')}
                    inRotation={isHovered && true}
                    href={'https://www.igucasino.com/game/wild-spin/' + slotLinks}
                  />
                  <HotGameCard
                    id={'card6'}
                    img={card6Image}
                    borderColor={colors.gray5}
                    zIndex={4}
                    size={{ width: 343, height: 352 }}
                    rotation={-3.2}
                    position={{ top: -475, left: 265 }}
                    text={t('hotGamesSection.card6Text')}
                    inRotation={true}
                    href={'https://www.igucasino.com/game/sun-of-egypt-3/' + slotLinks}
                  />
                  <HotGameCard
                    id={'card7'}
                    img={card7Image}
                    borderColor={colors.blue2}
                    zIndex={1}
                    size={{ width: 20, height: 20 }}
                    rotation={-2.76}
                    position={{ top: 0, left: 0 }}
                    text={t('hotGamesSection.card7Text')}
                    inRotation={isHovered && true}
                    href={'https://www.igucasino.com/game/hell-hot-100/' + slotLinks}
                  />
                  <HotGameCard
                    id={'card8'}
                    img={card8Image}
                    borderColor={colors.gray5}
                    zIndex={1}
                    size={{ width: 20, height: 20 }}
                    rotation={-3.2}
                    position={{ top: -200, left: 0 }}
                    text={t('hotGamesSection.card8Text')}
                    inRotation={isHovered && true}
                    href={'https://www.igucasino.com/game/sugar-rush/' + slotLinks}
                  />
                </div>
              </div>
            </div>
          )
        }

      </div >
    </section >
  );
};

export default HotGamesSection;