import React, { useEffect } from 'react';
import { isMobile } from "react-device-detect";

function UseAnimationElement(dependency = [], condition = true) {
  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      } else if (change.intersectionRect.top !== 0 || change.intersectionRect.top === 0) {
        change.target.classList.remove('element-show');
      }
    });
  }

  useEffect(() => {
    if (condition) {
      const options = { threshold: [!isMobile ? .2 : 1] };
      const observer = new IntersectionObserver(onEntry, options);
      const elements = document.querySelectorAll('.element-animation');
      for (const elm of elements) {
        observer.observe(elm);
      }
    }
  }, dependency);
}

export default UseAnimationElement;