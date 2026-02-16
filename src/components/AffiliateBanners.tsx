import { useEffect, useRef, useState } from "react";

interface LazyIframeProps {
  src: string;
  width: string;
  height: string;
  className?: string;
}

const LazyIframe = ({ src, width, height, className = "" }: LazyIframeProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} style={{ minHeight: height }}>
      {loaded && (
        <iframe
          scrolling="no"
          frameBorder="0"
          style={{ padding: 0, margin: 0, border: 0 }}
          width={width}
          height={height}
          src={src}
          loading="lazy"
          title="Promotional banner"
        />
      )}
    </div>
  );
};

export const TopBanner = () => (
  <div className="w-full my-0">
    <LazyIframe
      src="https://refbanners.com/I?tag=d_5260822m_151748c_&site=5260822&ad=151748"
      width="100%"
      height="50"
    />
  </div>
);

export const SidebarBanner = () => (
  <LazyIframe
    src="https://refbanners.com/I?tag=d_5260822m_151587c_&site=5260822&ad=151587"
    width="100%"
    height="600"
    className="w-full"
  />
);

export const BottomBanner = () => (
  <div className="w-full my-0">
    <LazyIframe
      src="https://refbanners.com/I?tag=d_5260822m_151748c_&site=5260822&ad=151748"
      width="100%"
      height="50"
    />
  </div>
);

export const CenterBanner = () => (
  <div className="w-full max-w-4xl mx-auto px-4 my-8">
    <LazyIframe
      src="https://refbanners.com/I?tag=d_5260822m_151645c_&site=5260822&ad=151645"
      width="100%"
      height="250"
      className="rounded-xl overflow-hidden"
    />
  </div>
);
