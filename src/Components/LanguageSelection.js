import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import {
  Button,
  Dropdown,
  DropdownButton
} from 'react-bootstrap';

const languageMap = {
  en: { label: 'English', dir: 'ltr', active: true },
  ar: { label: 'العربية', dir: 'rtl', active: false },
  fr: { label: 'Français', dir: 'ltr', active: false }
};
const LanguageSelect = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('');
  const handleLangChange = evt => {
    const lang = evt.target.value;
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };
  return (
    <select onChange={handleLangChange} value={language}>
      <option value="en">English</option>
      <option value="ar">العربية'</option>
    </select>
  );
};

export default LanguageSelect;
