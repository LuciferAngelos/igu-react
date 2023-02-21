import React, { useState, useEffect } from 'react';
import styles from './CountrySelect.module.scss';
import Select from "../uikit/Select/Select";

import australiaFlag from '../../assets/icons/australiaFlag.png';
import englishFlag from '../../assets/icons/englishFlag.png';
import germanFlag from '../../assets/icons/germanFlag.png';
import canadianFlag from '../../assets/icons/canadianFlag.png';
import spanishFlag from '../../assets/icons/spanishFlag.png';
import frenchFlag from '../../assets/icons/frenchFlag.png';
import norwegianFlag from '../../assets/icons/norwegianFlag.png';
import portugueseFlag from '../../assets/icons/portugueseFlag.png';
import slovakianFlag from '../../assets/icons/slovakianFlag.png';
import { useTranslation } from "react-i18next";
import { langs } from '../../config';
import { resources } from '../../locales/i18n';

const CountrySelect = () => {
  const { i18n } = useTranslation();
  const [value, setValue] = useState(i18n.language);

  useEffect(() => {
    if (i18n.language && !langs.includes(i18n.language)) {
      i18n.changeLanguage('en')
      setValue('en')
    }
  }, [i18n?.language])

  const changeLanguage = (language: string) => {
    switch (language) {
      case 'en-au':
        i18n.changeLanguage('enAu')
        setValue('en-au')
        break;
      case 'en-ca':
        i18n.changeLanguage('enCa')
        setValue('en-ca')
        break;
      case 'fr-ca':
        i18n.changeLanguage('frCa')
        setValue('fr-ca')
        break;
      case 'pt-br':
        i18n.changeLanguage('ptBr')
        setValue('pt-br')
        break;
      default:
        i18n.changeLanguage(language)
        setValue(i18n.language)
        break;
    }
  }

  return <div className={styles.countrySelect}>
    <Select
      options={[
        { text: 'English', value: 'en', icon: englishFlag },
        { text: 'German', value: 'de', icon: germanFlag },
        { text: 'Australia', value: 'enAu', icon: australiaFlag },
        { text: 'Canada', value: 'enCa', icon: canadianFlag },
        { text: 'Spanish', value: 'es', icon: spanishFlag },
        { text: 'French', value: 'frCa', icon: frenchFlag },
        { text: 'Norwegian', value: 'no', icon: norwegianFlag },
        { text: 'Portuguese', value: 'ptBr', icon: portugueseFlag },
        { text: 'Slovakian', value: 'sk', icon: slovakianFlag },
      ]}
      value={value}
      onChange={changeLanguage}
      className={styles.select}
    />
  </div>
};

export default CountrySelect