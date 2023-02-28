import React, { useRef, useState, useMemo, useCallback } from 'react';
import styles from './HotGamesSection.module.scss';
import Card from "../Card/Card";
import { useTranslation } from "react-i18next";
import Button from "../uikit/Button/Button";
import colors from '../../styles/colors.module.scss'
import UseAnimationElement from "../../hooks/UseAnimationElement";
import { isMobile } from "react-device-detect";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ReactSlider from 'react-slider';
import { baseUrl } from '../../config';
import { useUpdateLinks } from '../../hooks/updateLinks';
//en
import card1Image from '../../assets/images/hotGames/card1.png'
import card2Image from '../../assets/images/hotGames/card2.png'
import card3Image from '../../assets/images/hotGames/card3.png'
import card4Image from '../../assets/images/hotGames/card4.png'
import card5Image from '../../assets/images/hotGames/card5.png'
import card6Image from '../../assets/images/hotGames/card6.png'
import card7Image from '../../assets/images/hotGames/card7.png'
import card8Image from '../../assets/images/hotGames/card8.png'
//de
import card9Image from '../../assets/images/hotGames/card9.png'
import card10Image from '../../assets/images/hotGames/card10.png'
import card11Image from '../../assets/images/hotGames/card11.png'
import card12Image from '../../assets/images/hotGames/card12.png'
import card13Image from '../../assets/images/hotGames/card13.png'
import card14Image from '../../assets/images/hotGames/card14.png'
import card15Image from '../../assets/images/hotGames/card15.png'
import card16Image from '../../assets/images/hotGames/card16.png'
//no
import card17Image from '../../assets/images/hotGames/card17.png'
import card18Image from '../../assets/images/hotGames/card18.png'
import card19Image from '../../assets/images/hotGames/card19.png'
import card20Image from '../../assets/images/hotGames/card20.png'
import card21Image from '../../assets/images/hotGames/card21.png'
import card22Image from '../../assets/images/hotGames/card22.png'
import card23Image from '../../assets/images/hotGames/card23.png'
import card24Image from '../../assets/images/hotGames/card24.png'
//es
import card25Image from '../../assets/images/hotGames/card25.png'
import card26Image from '../../assets/images/hotGames/card26.png'
import card27Image from '../../assets/images/hotGames/card27.png'
import card28Image from '../../assets/images/hotGames/card28.png'
import card29Image from '../../assets/images/hotGames/card29.png'
import card30Image from '../../assets/images/hotGames/card30.png'
import card31Image from '../../assets/images/hotGames/card31.png'
import card32Image from '../../assets/images/hotGames/card32.png'
//sk
import card33Image from '../../assets/images/hotGames/card33.png'
import card34Image from '../../assets/images/hotGames/card34.png'
import card35Image from '../../assets/images/hotGames/card35.png'
import card36Image from '../../assets/images/hotGames/card36.png'
import card37Image from '../../assets/images/hotGames/card37.png'
import card38Image from '../../assets/images/hotGames/card38.png'
import card39Image from '../../assets/images/hotGames/card39.png'
import card40Image from '../../assets/images/hotGames/card40.png'
//pt-br
import card41Image from '../../assets/images/hotGames/card41.png'
import card42Image from '../../assets/images/hotGames/card42.png'
import card43Image from '../../assets/images/hotGames/card43.png'
import card44Image from '../../assets/images/hotGames/card44.png'
import card45Image from '../../assets/images/hotGames/card45.png'
import card46Image from '../../assets/images/hotGames/card46.png'
import card47Image from '../../assets/images/hotGames/card47.png'
import card48Image from '../../assets/images/hotGames/card48.png'
//fr-ca
import card49Image from '../../assets/images/hotGames/card49.png'
import card50Image from '../../assets/images/hotGames/card50.png'
import card51Image from '../../assets/images/hotGames/card51.png'
import card52Image from '../../assets/images/hotGames/card52.png'
import card53Image from '../../assets/images/hotGames/card53.png'
import card54Image from '../../assets/images/hotGames/card54.png'
import card55Image from '../../assets/images/hotGames/card55.png'
import card56Image from '../../assets/images/hotGames/card56.png'
//en-au
import card57Image from '../../assets/images/hotGames/card57.png'
import card58Image from '../../assets/images/hotGames/card58.png'
import card59Image from '../../assets/images/hotGames/card59.png'
import card60Image from '../../assets/images/hotGames/card60.png'
import card61Image from '../../assets/images/hotGames/card61.png'
import card62Image from '../../assets/images/hotGames/card62.png'
import card63Image from '../../assets/images/hotGames/card63.png'
import card64Image from '../../assets/images/hotGames/card64.png'
//en-ca
import card65Image from '../../assets/images/hotGames/card65.png'
import card66Image from '../../assets/images/hotGames/card66.png'
import card67Image from '../../assets/images/hotGames/card67.png'
import card68Image from '../../assets/images/hotGames/card68.png'
import card69Image from '../../assets/images/hotGames/card69.png'
import card70Image from '../../assets/images/hotGames/card70.png'
import card71Image from '../../assets/images/hotGames/card71.png'
import card72Image from '../../assets/images/hotGames/card72.png'

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
  const [isHovered, setIsHovered] = useState(false);

  const imageLink = useCallback((name: string) => {
    switch (name) {
      //en
      case 'card1Image':
        return card1Image
      case 'card2Image':
        return card2Image
      case 'card3Image':
        return card3Image
      case 'card4Image':
        return card4Image
      case 'card5Image':
        return card5Image
      case 'card6Image':
        return card6Image
      case 'card7Image':
        return card7Image
      case 'card8Image':
        return card8Image
      //de
      case 'card9Image':
        return card9Image
      case 'card10Image':
        return card10Image
      case 'card11Image':
        return card11Image
      case 'card12Image':
        return card12Image
      case 'card13Image':
        return card13Image
      case 'card14Image':
        return card14Image
      case 'card15Image':
        return card15Image
      case 'card16Image':
        return card16Image
      //no
      case 'card17Image':
        return card17Image
      case 'card18Image':
        return card18Image
      case 'card19Image':
        return card19Image
      case 'card20Image':
        return card20Image
      case 'card21Image':
        return card21Image
      case 'card22Image':
        return card22Image
      case 'card23Image':
        return card23Image
      case 'card24Image':
        return card24Image
      //es
      case 'card25Image':
        return card25Image
      case 'card26Image':
        return card26Image
      case 'card27Image':
        return card27Image
      case 'card28Image':
        return card28Image
      case 'card29Image':
        return card29Image
      case 'card30Image':
        return card30Image
      case 'card31Image':
        return card31Image
      case 'card32Image':
        return card32Image
      //sk
      case 'card33Image':
        return card33Image
      case 'card34Image':
        return card34Image
      case 'card35Image':
        return card35Image
      case 'card36Image':
        return card36Image
      case 'card37Image':
        return card37Image
      case 'card38Image':
        return card38Image
      case 'card39Image':
        return card39Image
      case 'card40Image':
        return card40Image
      //pt-br
      case 'card41Image':
        return card41Image
      case 'card42Image':
        return card42Image
      case 'card43Image':
        return card43Image
      case 'card44Image':
        return card44Image
      case 'card45Image':
        return card45Image
      case 'card46Image':
        return card46Image
      case 'card47Image':
        return card47Image
      case 'card48Image':
        return card48Image
      //fr-ca
      case 'card49Image':
        return card49Image
      case 'card50Image':
        return card50Image
      case 'card51Image':
        return card51Image
      case 'card52Image':
        return card52Image
      case 'card53Image':
        return card53Image
      case 'card54Image':
        return card54Image
      case 'card55Image':
        return card55Image
      case 'card56Image':
        return card56Image
      //en-au
      case 'card57Image':
        return card57Image
      case 'card58Image':
        return card58Image
      case 'card59Image':
        return card59Image
      case 'card60Image':
        return card60Image
      case 'card61Image':
        return card61Image
      case 'card62Image':
        return card62Image
      case 'card63Image':
        return card63Image
      case 'card64Image':
        return card64Image
      //en-ca
      case 'card65Image':
        return card65Image
      case 'card66Image':
        return card66Image
      case 'card67Image':
        return card67Image
      case 'card68Image':
        return card68Image
      case 'card69Image':
        return card69Image
      case 'card70Image':
        return card70Image
      case 'card71Image':
        return card71Image
      case 'card72Image':
        return card72Image

      default:
        break;
    }
  }, [t])

  UseAnimationElement();

  const handleSwiperProgress = (progress: any) => {
    setSwiperProgress(progress)
    setIndex(Math.ceil(progress * 8) - 1)
  }

  const mobSlotsUrls = useMemo(() => {
    let tempArr = [
      t('hotGamesSection.slotsPool.slotUrl1'),
      t('hotGamesSection.slotsPool.slotUrl2'),
      t('hotGamesSection.slotsPool.slotUrl3'),
      t('hotGamesSection.slotsPool.slotUrl4'),
      t('hotGamesSection.slotsPool.slotUrl5'),
      t('hotGamesSection.slotsPool.slotUrl6'),
      t('hotGamesSection.slotsPool.slotUrl7'),
      t('hotGamesSection.slotsPool.slotUrl8'),
    ]
    return tempArr
  }, [t])
  console.log(mobSlotsUrls);

  const slotQuery = useMemo(() => {
    if (query) {
      let parsedQuery = query.split('');
      parsedQuery.splice(0, 1, '?');
      return parsedQuery.join('');
    } else {
      return ''
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
                <div className={`${styles.swiperSlide} ${styles.swiperSlide1}`} style={{
                  backgroundImage: `url(${imageLink(t('hotGamesSection.slotsPool.slotImg1'))})`
                }} />
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.swiperSlide} ${styles.swiperSlide2}`} style={{
                  backgroundImage: `url(${imageLink(t('hotGamesSection.slotsPool.slotImg2'))})`
                }} />
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.swiperSlide} ${styles.swiperSlide3}`} style={{
                  backgroundImage: `url(${imageLink(t('hotGamesSection.slotsPool.slotImg3'))})`
                }} />
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.swiperSlide} ${styles.swiperSlide4}`} style={{
                  backgroundImage: `url(${imageLink(t('hotGamesSection.slotsPool.slotImg4'))})`
                }} />
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.swiperSlide} ${styles.swiperSlide5}`} style={{
                  backgroundImage: `url(${imageLink(t('hotGamesSection.slotsPool.slotImg5'))})`
                }} />
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.swiperSlide} ${styles.swiperSlide6}`} style={{
                  backgroundImage: `url(${imageLink(t('hotGamesSection.slotsPool.slotImg6'))})`
                }} />
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.swiperSlide} ${styles.swiperSlide7}`} style={{
                  backgroundImage: `url(${imageLink(t('hotGamesSection.slotsPool.slotImg7'))})`
                }} />
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.swiperSlide} ${styles.swiperSlide8}`} style={{
                  backgroundImage: `url(${imageLink(t('hotGamesSection.slotsPool.slotImg8'))})`
                }} />
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
                ? `${mobSlotsUrls[index === -1
                  ? 0
                  : index === 8 ? 7
                    : index]}${slotQuery}`
                : `${t('urls.baseUrl')}${query}`}
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
                    img={imageLink(t('hotGamesSection.slotsPool.slotImg1'))}
                    borderColor={colors.blue1}
                    zIndex={5}
                    size={{ width: 409, height: 395 }}
                    rotation={-4}
                    position={{ top: 120, left: 70 }}
                    text={t('hotGamesSection.card1Text')}
                    inRotation={true}
                    href={`${t('hotGamesSection.slotsPool.slotUrl1')}${slotQuery}`}
                  />
                  <HotGameCard
                    id={'card2'}
                    img={imageLink(t('hotGamesSection.slotsPool.slotImg2'))}
                    borderColor={colors.red4}
                    zIndex={1}
                    size={{ width: 20, height: 20 }}
                    rotation={-3.48}
                    position={{ top: 120, left: 335 }}
                    text={t('hotGamesSection.card2Text')}
                    inRotation={isHovered && true}
                    href={`${t('hotGamesSection.slotsPool.slotUrl2')}${slotQuery}`}
                  />
                  <HotGameCard
                    id={'card3'}
                    img={imageLink(t('hotGamesSection.slotsPool.slotImg3'))}
                    borderColor={colors.blue1}
                    zIndex={2}
                    size={{ width: 282, height: 282 }}
                    rotation={-4}
                    position={{ top: 62, left: 245 }}
                    text={t('hotGamesSection.card3Text')}
                    inRotation={true}
                    href={`${t('hotGamesSection.slotsPool.slotUrl3')}${slotQuery}`}
                  />
                  <HotGameCard
                    id={'card4'}
                    img={imageLink(t('hotGamesSection.slotsPool.slotImg4'))}
                    borderColor={colors.red4}
                    zIndex={3}
                    size={{ width: 308, height: 308 }}
                    rotation={-3.48}
                    position={{ top: 120, left: -263 }}
                    text={t('hotGamesSection.card4Text')}
                    inRotation={true}
                    href={`${t('hotGamesSection.slotsPool.slotUrl4')}${slotQuery}`}
                  />
                </div>
                <div className={styles.cardsTitleWrapper}>
                  <div className={styles.cardsTitle}>{t('hotGamesSection.chooseGame')}</div>
                </div>
                <div className={styles.hotGamesRow} style={{ height: 0 }}>
                  <HotGameCard
                    id={'card5'}
                    img={imageLink(t('hotGamesSection.slotsPool.slotImg5'))}
                    borderColor={colors.blue2}
                    zIndex={1}
                    size={{ width: 20, height: 20 }}
                    rotation={-2.76}
                    position={{ top: -200, left: 220 }}
                    text={t('hotGamesSection.card5Text')}
                    inRotation={isHovered && true}
                    href={`${t('hotGamesSection.slotsPool.slotUrl5')}${slotQuery}`}
                  />
                  <HotGameCard
                    id={'card6'}
                    img={imageLink(t('hotGamesSection.slotsPool.slotImg6'))}
                    borderColor={colors.gray5}
                    zIndex={4}
                    size={{ width: 343, height: 352 }}
                    rotation={-3.2}
                    position={{ top: -475, left: 265 }}
                    text={t('hotGamesSection.card6Text')}
                    inRotation={true}
                    href={`${t('hotGamesSection.slotsPool.slotUrl6')}${slotQuery}`}
                  />
                  <HotGameCard
                    id={'card7'}
                    img={imageLink(t('hotGamesSection.slotsPool.slotImg7'))}
                    borderColor={colors.blue2}
                    zIndex={1}
                    size={{ width: 20, height: 20 }}
                    rotation={-2.76}
                    position={{ top: 0, left: 0 }}
                    text={t('hotGamesSection.card7Text')}
                    inRotation={isHovered && true}
                    href={`${t('hotGamesSection.slotsPool.slotUrl7')}${slotQuery}`}
                  />
                  <HotGameCard
                    id={'card8'}
                    img={imageLink(t('hotGamesSection.slotsPool.slotImg8'))}
                    borderColor={colors.gray5}
                    zIndex={1}
                    size={{ width: 20, height: 20 }}
                    rotation={-3.2}
                    position={{ top: -200, left: 0 }}
                    text={t('hotGamesSection.card8Text')}
                    inRotation={isHovered && true}
                    href={`${t('hotGamesSection.slotsPool.slotUrl8')}${slotQuery}`}
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