import React, { useEffect, useRef } from "react";
import { mount as marketingMount } from "marketing/MarketingApp";

const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    marketingMount(ref.current);
  });

  return <div ref={ref} />;
};

export default MarketingApp;
