import React from 'react';
import style from './Header.module.scss';
import logo from '../../assets/images/logo.png';
import Button from "../uikit/Button/Button";
import { useTranslation } from "react-i18next";
import { BrowserView, isMobile } from "react-device-detect";
import { useUpdateLinks } from '../../hooks/updateLinks';
import { baseUrl } from '../../config';

const Header = () => {
  const { t } = useTranslation();
  const { query } = useUpdateLinks();

  return <header className={`${style.header} wrapper`}>
    <a href={`${baseUrl}${query}`}>
      <img src={logo} alt="lgu casino" className={style.logo} />
    </a>
    {
      !isMobile
        ? (
          <div className="d-flex">
            <div className={style.registerWrapper}>
              <Button
                hasCorner
                className={style.register}
                uppercase={false}
                width={211}
                isHovered={false}
                component="div"
              >{t('header.registration')}</Button>
            </div>
            <Button href={`${baseUrl}${query}`} color="red" width={211} isHoveredBackground={false}>
              <span>{t('header.signUp')}</span>
            </Button>
          </div>
        )
        : (
          <Button
            href={`${baseUrl}${query}`}
            color="green"
            width={135}
            disableAnimation
          ><span>{t('common.playNow')}</span></Button>
        )
    }

  </header>
}

export default Header;