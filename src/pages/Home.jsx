import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import StatsSection from "../components/StatsSection";
import TrendingApps from "../components/TrendingApps";
import Loader from "../components/Loader";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Banner />
          <StatsSection />
          <TrendingApps />
        </>
      )}
    </>
  );
};

export default Home;
