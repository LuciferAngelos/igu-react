import React from 'react';
import style from './Header.module.scss';
import logo from '../../assets/images/logo.png';
import Button from "../uikit/Button/Button";
import { useTranslation } from "react-i18next";
import { BrowserView, isMobile, isTablet } from "react-device-detect";
import { useUpdateLinks } from '../../hooks/updateLinks';
import { baseUrl } from '../../config';
import UseAnimationElement from '../../hooks/UseAnimationElement';

const Header = () => {
  const { t } = useTranslation();
  const { query } = useUpdateLinks();

  UseAnimationElement();

  return <header className={`${style.header} wrapper ${!isMobile ? 'element-animation' : ''}`}>
    <a href={`${t('urls.baseUrl')}${query}`}>
      <img src={logo} alt="lgu casino" className={style.logo} />
    </a>
    {
      !isMobile || isTablet
        ? (
          <div className="d-flex items-start">
            <div className={style.registerWrapper}>
              <Button
                hasCorner
                className={style.register}
                uppercase={false}
                width={!isTablet ? 211 : 109}
                isHovered={false}
                component="div"
              >{t('header.registration')}</Button>
            </div>
            <Button href={`${t('urls.baseUrl')}${query}`} color="red" width={!isTablet ? 211 : 109} isHoveredBackground={false}>
              <span>{t('header.signUp')}</span>
            </Button>
          </div>
        )
        : (
          <Button
            href={`${t('urls.baseUrl')}${query}`}
            color="green"
            width={135}
            disableAnimation
          ><span>{t('common.playNow')}</span></Button>
        )
    }

  </header >
}

export default Header;