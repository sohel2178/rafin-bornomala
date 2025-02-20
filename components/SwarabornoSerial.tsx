'use client';
import React, { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

const swarabarna = [
  'শুরু',
  'অ',
  'আ',
  'ই',
  'ঈ',
  'উ',
  'ঊ',
  'ঋ',
  'এ',
  'ঐ',
  'ও',
  'ঔ',
  'শেষ',
];

function SwarabornoSerial() {
  const [items, setItems] = useState([...swarabarna].reverse());

  const handleClick = () => {
    setItems((prevItems) => prevItems.slice(0, -1));

    // setLetterIndex((letterIndex + 1) % swarabarna.length);
    // setItems([...items.slice(1)]);
  };

  const onClickAgain = () => {
    setItems([...swarabarna].reverse());
  };
  return (
    <div className="flex w-full h-[100vh] justify-center items-center">
      <div className="w-1/2 h-1/2 flex justify-center items-center font-bold text-9xl  bg-blue-400 relative">
        <AnimatePresence>
          {items.map((x) => (
            <motion.div
              initial={{ opacity: 0, x: '-100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: '-50%' }}
              //   exit={{ opacity: 0, x: '50%' }}
              transition={{ duration: 0.5, ease: 'circInOut' }}
              key={x}
              onClick={handleClick}
              className="w-full cursor-pointer h-full flex justify-center items-center  absolute top-0 left-0 right-0 bottom-0 bg-gray-300"
            >
              {x}
            </motion.div>
          ))}
        </AnimatePresence>

        <div
          className="cursor-pointer font-bold text-5xl"
          onClick={onClickAgain}
        >
          আবার
        </div>
      </div>
    </div>
  );
}

export default SwarabornoSerial;
