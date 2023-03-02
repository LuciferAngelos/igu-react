import React, { useEffect, useMemo, useRef } from 'react';
import { useTranslation } from "react-i18next";
import styles from './TopSection.module.scss';
import Card from "../Card/Card";
import Button from "../uikit/Button/Button";
import Timer from "../Timer/Timer";
import { BrowserView, isMobile, isTablet } from "react-device-detect";
import { useUpdateLinks } from '../../hooks/updateLinks';
import { baseUrl, langs } from '../../config';
import UseAnimationElement from '../../hooks/UseAnimationElement';

const TopSection = () => {
  const { t, i18n } = useTranslation();
  const { query } = useUpdateLinks();
  const ref = useRef<HTMLDivElement>(null);
  UseAnimationElement();

  const calculateWidthByCountry = useMemo(() => {

    if (isMobile) {
      switch (i18n.language) {
        case 'frCa':
          return ''
        case 'enCa':
          return '92%'
        case 'sk':
          return '80%'
        case 'en':
          return '77%'
        default:
          return '86%'
      }
    }
  }, [i18n.language, isMobile])

  const flipIn = () => {
    ref.current.classList.remove(styles.flipOutEnd, styles.flipInEnd);
    ref.current.classList.add(styles.flipInStart);
    setTimeout(() => {
      ref.current.classList.remove(styles.flipInStart);
      ref.current.classList.add(styles.flipInEnd, styles.gameCardLearnMore);
    }, 300);
  }

  const flipOut = () => {

    ref.current.classList.remove(styles.flipOutEnd, styles.flipInEnd);
    ref.current.classList.add(styles.flipOutStart);
    setTimeout(() => {
      ref.current.classList.remove(styles.flipOutStart);
      ref.current.classList.add(styles.flipOutEnd);
      ref.current.classList.remove(styles.gameCardLearnMore);
    }, 300);
  }

  // window.addEventListener('load', () => {
  //   let w = document.querySelector('#womanFull');
  //   if (w) {
  //     //@ts-ignore
  //     w.style.display = 'none';
  //   }
  // })

  return (
    <section className={`${styles.topSection} ${!isMobile || isTablet ? 'element-animation' : ''}`}>
      <div className={styles.blackout} />
      <div className={styles.blackout} />
      <div className={styles.blackout} />
      <div className={styles.blackout} />
      {
        !isMobile && (
          <div className={styles.woman}>
            {/* <div className={styles.womanFull} id="womanFull"></div> */}
            <div className={styles.womanBack1} />
            <div className={styles.womanBack2} />
            <div className={styles.womanBack3} />
            <div className={styles.womanHead} />
            <div className={styles.womanBody} />
            <div className={styles.womanHand} />
            <div className={styles.womanDog} />
          </div>
        )
      }
      {/* tablet */}
      {
        isTablet && (
          <div className={styles.woman}>
            {/* <div className={styles.womanFull} id="womanFull"></div> */}
            <div className={styles.womanBack1} />
            <div className={styles.womanBack2} />
            <div className={styles.womanBack3} />
            <div className={styles.womanHead} />
            <div className={styles.womanBody} />
            <div className={styles.womanHand} />
            <div className={styles.womanDog} />
          </div>
        )
      }
      <div className={`${styles.topSectionWrapper} wrapper`}>
        <Card height={!isMobile ? 463 : isTablet ? 236 : 333} className={`${styles.topLeftCard} ${styles.card}`}>
          <p className={styles.cardTitle}>{t('topSection.welcomeBonus')}</p>
          <p className={styles.cardText} style={{ width: calculateWidthByCountry }}>{t('topSection.upTo')}</p>
          <Button href={`${t('urls.bonusUrl')}${query}`} className={styles.cardButton} color="green" width={!isMobile ? 228 : 164}><span>{t('topSection.registerNow')}</span></Button>
        </Card>
        {
          !isMobile && (
            <Card height={!isMobile ? 463 : isTablet ? 236 : 333} className={`${styles.topRightCard} ${styles.card}`}>
              <p className={styles.cardTitle}>{t('topSection.easyDeposit')}</p>
              <p className={styles.cardText}>{t('topSection.successful')}</p>
              <Button href={`${t('urls.baseUrl')}${query}`} className={styles.cardButton} color="green" variant="outlined" width={!isTablet ? 322 : 166} isHoveredBackground={false}><span>{t('topSection.registerAndPlay')}</span></Button>
            </Card>
          )
        }
        {/* tablet */}
        {
          isTablet && (
            <Card height={!isMobile ? 463 : isTablet ? 236 : 333} className={`${styles.topRightCard} ${styles.card}`}>
              <p className={styles.cardTitle}>{t('topSection.easyDeposit')}</p>
              <p className={styles.cardText}>{t('topSection.successful')}</p>
              <Button href={`${t('urls.baseUrl')}${query}`} className={styles.cardButton} color="green" variant="outlined" width={!isTablet ? 322 : 166} isHoveredBackground={false}><span>{t('topSection.registerAndPlay')}</span></Button>
            </Card>
          )
        }
        <div ref={ref} className={styles.blWrapper}>
          <div className={styles.front}>
            <Card height={!isMobile ? 242 : isTablet ? 125 : 174} className={styles.bottomLeftCard}>
              <p className={styles.cardTitle2}>{t('topSection.specialBonuses')}</p>
              <Button
                onClick={flipIn}
                className={styles.openVipButton}
                component='div'
                variant="empty"
              >{t('topSection.openVip')}</Button>
            </Card>
          </div>
          <div className={styles.back}>
            <Card height={!isMobile ? 242 : isTablet ? 125 : 174} className={styles.bottomLeftCard}>
              <button
                className={styles.closeButton}
                onClick={flipOut}
              />
              {/* <p className={styles.learnMoreTitle}>{t("topSection.vipTitle")}</p> */}
              <p className={styles.learnMoreText}>{t("topSection.learnVipProgram")}</p>
              {/* <Button color="green" width={!isMobile ? 228 : 198}><span>{t("gameCardsSection.registerNow")}</span></Button> */}
            </Card>
          </div>
        </div>
        {
          !isMobile && (
            <Card height={242} className={styles.bottomRightCard}>
              <p className={styles.cardTitle3}>{t('topSection.tournamentStarts')}</p>
              <Timer />
            </Card>
          )
        }
        {/* tablet */}
        {
          isTablet && (
            <Card height={125} className={styles.bottomRightCard}>
              <p className={styles.cardTitle3}>{t('topSection.tournamentStarts')}</p>
              <Timer />
            </Card>
          )
        }
      </div>

    </section>
  )
};

export default TopSection;