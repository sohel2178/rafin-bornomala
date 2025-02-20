'use client';
import React, { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import Link from 'next/link';
import { Card, CardContent } from './ui/card';

interface Props {
  data: string[];
}

function SwarabornoSerial({ data }: Props) {
  const [items, setItems] = useState([...data].reverse());

  const handleClick = () => {
    setItems((prevItems) => prevItems.slice(0, -1));
  };

  const onClickAgain = () => {
    setItems([...data].reverse());
  };
  return (
    <div className="flex w-full h-[100vh] flex-col gap-10 justify-center items-center">
      <Link href="/">
        <Button variant="outline">Back</Button>
      </Link>
      <div className="flex w-2/3 h-2/3 justify-center items-center font-bold text-9xl  relative md:w-1/2 md:h-1/2 rounded-md">
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
              className="absolute top-0 left-0 right-0 bottom-0"
            >
              <Card className="w-full h-full flex justify-center items-center cursor-pointer">
                <CardContent>{x}</CardContent>
              </Card>
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
