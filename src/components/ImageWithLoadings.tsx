import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

// TODO: add cleanup
const loadImage = ({ src }: { src: string }) =>
  new Promise((res, rej) => {
    const img = new Image();
    img.addEventListener("load", () => res(src));
    img.addEventListener("error", (e) => rej({ message: e.message }));
    img.src = src;
  });

export { loadImage };

const ImageWithLoading = ({
  className,
  url,
}: {
  className?: string;
  url: string;
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        await loadImage({ src: url });
        setLoading(false);
      } catch (e) {}
    };

    load();

    return () => {};
  }, [url]);

  const shouldRenderImageSkeleton = loading;

  return (
    <div className={cn(" ", className)}>
      <div className="relative  h-full overflow-hidden">
        <motion.div
          className="absolute inset-0 h-full w-full "
          initial={{ opacity: 1 }}
          animate={{ opacity: shouldRenderImageSkeleton ? 1 : 0 }}
          transition={{ ease: "easeInOut", delay: 0.5 }}
        >
          <div className="bg-white-bark h-full w-full animate-pulse select-none"></div>
        </motion.div>

        <img src={url} className="h-full w-full select-none" alt="" />
      </div>
    </div>
  );
};

export { ImageWithLoading };
