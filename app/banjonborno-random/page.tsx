import SwarabornoSerial from '@/components/SwarabornoSerial';
import React from 'react';

const banjonborno = [
  'ক',
  'খ',
  'গ',
  'ঘ',
  'ঙ', // ক-গ বর্গ
  'চ',
  'ছ',
  'জ',
  'ঝ',
  'ঞ', // চ-জ বর্গ
  'ট',
  'ঠ',
  'ড',
  'ঢ',
  'ণ', // ট-ড বর্গ
  'ত',
  'থ',
  'দ',
  'ধ',
  'ন', // ত-দ বর্গ
  'প',
  'ফ',
  'ব',
  'ভ',
  'ম', // প-ব বর্গ
  'য',
  'র',
  'ল',
  'শ',
  'ষ',
  'স',
  'হ', // অর্ধ স্বরবর্ণ
  'ড়',
  'ঢ়',
  'য়',
  'ৎ', // সংযুক্ত ব্যঞ্জনবর্ণ
  'ং',
  'ঃ',
  '৺', // বিশেষ চিহ্ন
];

const shuffledArray = banjonborno.sort(() => Math.random() - 0.5);

const start = 'শুরু';
const end = 'শেষ';

shuffledArray.unshift(start);
shuffledArray.push(end);
function BanjonbornoRandom() {
  return <SwarabornoSerial data={shuffledArray} />;
}

export default BanjonbornoRandom;
