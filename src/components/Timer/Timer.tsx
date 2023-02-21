import React, { useEffect, useState } from 'react';
import styles from './Timer.module.scss'
import { useTranslation } from "react-i18next";
import moment from 'moment';
import { timerTimeLeft } from "../../config";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { isMobile } from 'react-device-detect';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(timerTimeLeft);
  const { t } = useTranslation();

  // const getTime = (part: string) => {
  //   const duration = moment.duration(timeLeft * 1000);
  //   const utc = moment.utc(timeLeft * 1000);

  //   let value = 0;
  //   if (part === 'day') {
  //     value = Math.floor(duration.asDays());
  //   } else if (part === 'hour') {
  //     value = utc.hour();
  //   } else if (part === 'min') {
  //     value = utc.minute();
  //   } else if (part === 'sec') {
  //     value = utc.second();
  //   }

  //   const valueString = String(value);
  //   return valueString.length > 1 ? valueString : `0${valueString}`
  // }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTimeLeft((state) => state - 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(timer);
  //   }
  // }, []);

  return (
    <FlipClockCountdown
      className='flip-clock'
      to={new Date().getTime() + timerTimeLeft * 1000}
      labels={[t('timer.day'), t('timer.hour'), t('timer.min'), t(t('timer.sec'))]}
      labelStyle={!isMobile
        ? { fontSize: 15, fontWeight: 400 }
        : { fontSize: 10, fontWeight: 400, bottom: -5 }}
      digitBlockStyle={!isMobile
        ? { width: 40, height: 60, fontSize: 32 }
        : { width: 32, height: 40, fontSize: 18 }}
      dividerStyle={{ color: 'white', height: 0 }}
      separatorStyle={{ color: 'white', size: '5px' }}
      duration={0.5}
      renderMap={[true, true, true, true]}
    />
  )



  // <div className={styles.timer}>
  //    <div className={styles.timerSection}>
  //      <span className={styles.timerValue}>{getTime('day')}</span>
  //      <span className={styles.timerLabel}>{t('timer.day')}</span>
  //    </div>
  //   <span className={styles.colon}>:</span>
  //   <div className={styles.timerSection}>
  //     <span className={styles.timerValue}>{getTime('hour')}</span>
  //     <span className={styles.timerLabel}>{t('timer.hour')}</span>
  //   </div>
  //   <span className={styles.colon}>:</span>
  //   <div className={styles.timerSection}>
  //     <span className={styles.timerValue}>{getTime('min')}</span>
  //     <span className={styles.timerLabel}>{t('timer.min')}</span>
  //   </div>
  //   <span className={styles.colon}>:</span>
  //   <div className={styles.timerSection}>
  //     <span className={styles.timerValue}>{getTime('sec')}</span>
  //     <span className={styles.timerLabel}>{t('timer.sec')}</span>
  //   </div>
  // </div>
};

export default Timer;