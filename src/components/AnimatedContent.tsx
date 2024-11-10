'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Separator } from "@/components/ui/separator";
import { Work } from "@/data/works";

interface AnimatedContentProps {
  work: Work;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({ work }) => {
  return (
    <motion.div 
      className="container mx-auto max-w-[820px] mt-5 mb-20 px-4 md:px-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold text-center mb-8">{work.title}</h1>

      <div className="text-center overflow-x-hidden md:overflow-x-visible">
        <motion.div 
          className="space-y-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.2 }}
        >
          {work.images.map((image, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Image
                src={image.src}
                alt={image.alt || `${work.title} 画像${index + 1}`}
                width={820}
                height={506}
                className="w-full md:w-[820px] h-auto md:h-[506px] object-contain md:object-cover object-top mx-auto rounded-lg shadow-lg"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Separator className="my-5" />

      <motion.div 
        className="mx-1 md:mx-5"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p className="text-sm mb-4">{work.details.summary}</p>
        <p className="text-sm whitespace-pre-line">
          {work.details.responsibilities.map((item) => `・${item}\n`).join('')}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedContent;