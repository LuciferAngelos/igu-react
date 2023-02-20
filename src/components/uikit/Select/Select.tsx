import React, { useMemo, useRef, useState } from 'react';
import styles from './Select.module.scss';

interface Select {
  options: { text: string; value: string; icon: any }[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const Select: React.FC<Select> = (props) => {
  const { options, value, onChange, className } = props;
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const activeOption = useMemo(() => options.find(option => option.value === value), [value]);

  const restOptions = useMemo(() => options.filter(option => option.value !== value), [value]);

  const closeOpenMenus = (e: any) => {
    if (ref.current && isOpen && !ref.current.contains(e.target)) {
      setIsOpen(false)
    }
  }

  document.addEventListener('click', closeOpenMenus)

  return (
    <div
      ref={ref}
      className={`${styles.select} ${isOpen ? styles.opened : ''} ${className || ''}`}
      onClick={() => setIsOpen((state) => !state)}
    >
      <div className={styles.icon} style={{ backgroundImage: `url(${activeOption?.icon})` }} />
      <div className={styles.value}>{activeOption?.text}</div>
      <div className={styles.arrow} />
      {
        isOpen && (
          <div className={styles.options}>
            {
              restOptions.map((option) => (
                <div
                  className={styles.option}
                  onClick={() => onChange(option.value)}
                >
                  <div className={styles.icon} style={{ backgroundImage: `url(${option.icon})` }} />
                  <div className={styles.value}>{option.text}</div>
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  )
};

export default Select;