import React, { useEffect, useRef, useState } from 'react';
import styles from './GameCard.module.scss';
import { useTranslation } from "react-i18next";
import Button from "../uikit/Button/Button";
import { isMobile } from "react-device-detect";
import { useUpdateLinks } from '../../hooks/updateLinks';
import { baseUrl } from '../../config';

interface GameCardProps {
  label: string;
  title: string;
  image: any;
  background: any;
  learnMoreText: string;
  gradientMode?: boolean;
  index: number;
  isActive: boolean;
  handleActiveCard: (arg: number) => void;
  isClicked: boolean
}

const GameCard: React.FC<GameCardProps> = (props) => {
  const { label, title, image, background, gradientMode, learnMoreText, index, isActive, handleActiveCard, isClicked } = props;
  const ref = useRef<HTMLDivElement>();
  const { t } = useTranslation();
  const { query } = useUpdateLinks()

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

  useEffect(() => {
    if (!isActive && isClicked) {
      flipOut()
    } if (isActive && isClicked) {
      flipIn()
    }
  }, [isActive, isClicked])

  return (
    <div ref={ref} className={`${styles.gameCard} ${gradientMode ? styles.gameCardGradient : ''} ${isMobile ? 'element-animation' : ''}`}>
      <div className={styles.front}>
        <div className={styles.background} style={{ backgroundImage: `url(${background})` }}>
          <div className={styles.cardImage} style={{ backgroundImage: `url(${image})` }} />
          <div className={styles.labelWrapper}>
            <div className={styles.label}>
              <div className={styles.labelText}>
                {label}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.title}>{title}</p>
          <div className={styles.buttonGroup}>
            <Button href={`${baseUrl}${query}`} color="red" width={!isMobile ? 197 : 138} className={styles.playNow}><span>{t("common.playNow")}</span></Button>
            <Button variant="empty" component="button" onClick={() => handleActiveCard(index)}>{t("gameCardsSection.learnMore")}</Button>
          </div>
        </div>
      </div>
      <div className={styles.back}>
        <button
          className={styles.closeButton}
          onClick={() => handleActiveCard(index)}
        />
        <p className={styles.learnMoreTitle}>{t("gameCardsSection.learnMore")}</p>
        <p className={styles.learnMoreText}>{learnMoreText}</p>
        <Button href={`${baseUrl}${query}`} color="green" width={!isMobile ? 228 : 198}><span>{t("gameCardsSection.registerNow")}</span></Button>
      </div>
    </div>
  );
};

export default GameCard;