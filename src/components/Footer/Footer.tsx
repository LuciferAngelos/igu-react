import React, { useRef } from 'react';
import styles from './Footer.module.scss';
import { useTranslation } from "react-i18next";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import payment1 from '../../assets/icons/payment/bank transfer.png';
import payment2 from '../../assets/icons/payment/master card horizontal.png';
import payment3 from '../../assets/icons/payment/neteller.png';
import payment4 from '../../assets/icons/payment/neteller-1.png';
import payment5 from '../../assets/icons/payment/qiwi.png';
import payment6 from '../../assets/icons/payment/visa.png';
import payment7 from '../../assets/icons/payment/visa-1.png';
import payment8 from '../../assets/icons/payment/yandex.png';
import { isMobile } from "react-device-detect";
import Button from "../uikit/Button/Button";
import { baseUrl } from '../../config';
import { useUpdateLinks } from '../../hooks/updateLinks';
import UseAnimationElement from '../../hooks/UseAnimationElement';

const Footer = () => {
  const { t } = useTranslation();
  const { query } = useUpdateLinks()
  const ref = useRef();
  UseAnimationElement();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 2,
    }
  };

  return (
    <footer className={`${styles.footer} ${isMobile ? 'wrapper element-animation' : ''}`}>
      <div className={styles.carousel}>
        <button onClick={() => {
          ref.current?.previous();
        }} className={`${styles.arrowButton} ${styles.arrowButtonLeft}`} />
        <button onClick={() => {
          ref.current?.next();
        }} className={`${styles.arrowButton} ${styles.arrowButtonRight}`} />
        <Carousel
          ref={ref}
          swipeable={false}
          draggable={false}
          showDots={false}
          arrows={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          transitionDuration={500}
        >
          <div
            style={{
              backgroundImage: `url(${payment1})`,
              width: '120px',
              height: '21px'
            }}
          />
          <div
            style={{
              backgroundImage: `url(${payment2})`,
              width: '120px',
              height: '21px'
            }}
          />
          <div
            style={{
              backgroundImage: `url(${payment3})`,
              width: '120px',
              height: '21px'
            }}
          />
          <div
            style={{
              backgroundImage: `url(${payment4})`,
              width: '120px',
              height: '21px'
            }}
          />
          <div
            style={{
              backgroundImage: `url(${payment5})`,
              width: '120px',
              height: '21px'
            }}
          />
          <div
            style={{
              backgroundImage: `url(${payment6})`,
              width: '120px',
              height: '21px'
            }}
          />
          <div
            style={{
              backgroundImage: `url(${payment7})`,
              width: '120px',
              height: '21px'
            }}
          />
          <div
            style={{
              backgroundImage: `url(${payment8})`,
              width: '120px',
              height: '21px'
            }}
          />
        </Carousel>
      </div>
      <div className={styles.mobileLogos}>
        <div className={styles.logo18} />
        <div className={styles.logoGaming} />
        <div className={styles.curacac} />
      </div>
      <div className={styles.bottomBlockWrapper}>
        <p className={styles.copyright}>{t('footer.copyright')}</p>
        <div className={styles.logos}>
          <div className={styles.logo18} />
          <div className={styles.logoGaming} />
          <div className={styles.logoJftf} />
        </div>
      </div>
      {
        isMobile && (
          <Button href={`${baseUrl}${query}`} width={238} className={styles.playNow}>{t('common.playNow')}</Button>
        )
      }
    </footer>
  );
};

export default Footer;