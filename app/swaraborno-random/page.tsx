import SwarabornoSerial from '@/components/SwarabornoSerial';
import React from 'react';

const swarabarna = ['অ', 'আ', 'ই', 'ঈ', 'উ', 'ঊ', 'ঋ', 'এ', 'ঐ', 'ও', 'ঔ'];

const shuffledArray = swarabarna.sort(() => Math.random() - 0.5);

const start = 'শুরু';
const end = 'শেষ';

shuffledArray.unshift(start);
shuffledArray.push(end);

function SwaraBornoRandom() {
  return <SwarabornoSerial data={shuffledArray} />;
}

export default SwaraBornoRandom;
