"use client";
import Script from "next/script";
import { useEffect, useState } from "react";
import useSnark from "@stores/snarkjs";

const Providers = () => {
  const [mounted, setMounted] = useState(false);
  const { setSnark } = useSnark();
  useEffect(() => {
    if (mounted) {
      setSnark(snarkjs);
    }
  }, [mounted, setSnark]);

  return (
    <>
      <Script src="/snarkjs.min.js" onLoad={() => setMounted(true)} />
    </>
  );
};

export default Providers;
