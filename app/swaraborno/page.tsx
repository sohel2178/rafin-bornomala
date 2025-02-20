import SwarabornoSerial from '@/components/SwarabornoSerial';
import React from 'react';

const swarabarna = ['অ', 'আ', 'ই', 'ঈ', 'উ', 'ঊ', 'ঋ', 'এ', 'ঐ', 'ও', 'ঔ'];

const start = 'শুরু';
const end = 'শেষ';

swarabarna.unshift(start);
swarabarna.push(end);

function SwaraBorno() {
  return <SwarabornoSerial data={swarabarna} />;
}

export default SwaraBorno;
