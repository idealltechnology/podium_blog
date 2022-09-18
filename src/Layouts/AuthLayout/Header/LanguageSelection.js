import React, { useState, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import FlagIcon from '../../../Components/FlagIcon';
import './LanguageSelection.css';

const languageMap = {
  en: {
    label: 'English',
    dir: 'ltr',
    key: 1,
    active: true,
    countryCode: 'us'
  },
  ar: {
    label: 'العربية',
    dir: 'rtl',
    key: 2,
    active: false,
    countryCode: 'sa'
  }
};

const LanguageSelection = (props) => {
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('English');
  const handleLangChange = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };
  const renderLanguage = (item) => {
    return (
      <a
        key={languageMap[item].key}
        href="#"
        className="flagIconTag"
        onClick={() => handleLangChange(item)}
      >
        <FlagIcon
          code={languageMap[item].countryCode}
          key={languageMap[item].key}
        />{' '}
        {languageMap[item].label}
      </a>
    );
  };

  return (
    <div className="currentLanguageSelection">
      {/* This is the current language selection */}
      <div
        className="currentLanguage"
        onClick={() => setIsOpen((state) => !state)}
      >
        {language}
      </div>

      {/* Here we should the "dropdown" with all the languages */}
      <div
        className={`LanguageSelection ${
          isOpen
            ? 'currentLanguageOpen'
            : 'LanguageSelection'
        }`}
      >
        {Object.keys(languageMap).map((item) =>
          renderLanguage(item)
        )}
      </div>
    </div>
  );
};

export default LanguageSelection;
