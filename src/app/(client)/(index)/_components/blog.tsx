'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const CardBlog = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['1 0', '1 0.5'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const tag = (tagName: string) => {
    return (
      <span className="bg-colorprimary font-semibold text-base md:text-xl px-4 py-3 rounded-xl">
        {tagName}
      </span>
    );
  };

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="card-1 relative bg-black grid gap-10 col-span-1 row-span-2 p-5 2xl:p-10 rounded-xl"
    >
      <div className="flex flex-wrap gap-[10px]">
        {tag('Creative Insights')}
        {tag('Exploration')}
        {tag('Education')}
      </div>
      <div className="grid gap-5">
        <h3 className="font-semibold text-colorprimary text-2xl md:text-[40px] leading-normal">
          Unlocking Creativity Chronicles: Inspiring Tales from the Symposium
        </h3>
        <p className="p-base text-white">
          by <u className="text-colorprimary">Sarah Reynolds</u> - 05 March ,
          2024
        </p>
        <p className="p-base text-white">
          Dive into the rich tapestry of creativity with our blog,
          &quot;Unlocking Creativity Chronicles.&quot; Explore insightful
          articles, behind-the-scenes stories, and captivating tales from the
          symposium.
        </p>
      </div>
      <div className="w-full flex items-center justify-between">
        <span className="font-semibold text-white text-2xl md:text-[40px] leading-normal">
          Blog
        </span>
        <svg
          className="w-10 h-10 md:w-20 md:h-20"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M47.9781 28.0251L24.8792 28.0251C23.9364 28.0251 23.1606 27.701 22.5517 27.0528C21.9428 26.4046 21.6383 25.6091 21.6383 24.6663C21.6776 23.7628 22.0017 22.987 22.6106 22.3388C23.2195 21.6906 23.9954 21.3665 24.9382 21.3665L56.0509 21.3665C56.5223 21.3665 56.9446 21.4549 57.3178 21.6317C57.691 21.8084 58.0347 22.054 58.349 22.3682C58.6632 22.6825 58.9087 23.0262 59.0855 23.3994C59.2623 23.7726 59.3507 24.1949 59.3507 24.6663L59.3507 55.779C59.3507 56.6433 59.0266 57.3995 58.3784 58.0477C57.7302 58.6959 56.9544 59.0396 56.0509 59.0789C55.1081 59.0789 54.3126 58.7548 53.6644 58.1066C53.0162 57.4584 52.6921 56.6629 52.6921 55.7201L52.6921 32.7391L26.3524 59.0789C25.6845 59.7467 24.8989 60.0806 23.9953 60.0806C23.0918 60.0806 22.3062 59.7467 21.6383 59.0789C20.9705 58.411 20.6366 57.6254 20.6366 56.7218C20.6366 55.8183 20.9705 55.0326 21.6383 54.3648L47.9781 28.0251Z"
            fill="white"
          />
        </svg>
      </div>
    </motion.div>
  );
};
