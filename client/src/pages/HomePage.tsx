import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  // Staggered entrance animation for child elements
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const scaleUp = {
    hidden: { scale: 0.9, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="flex flex-col gap-12"
      initial="hidden"
      animate="show"
      variants={staggerContainer}
    >
      {/* Hero Section */}
      <motion.div
        className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16"
        variants={fadeInUp}
      >
        <motion.h1
          className="text-5xl font-bold tracking-tight text-orange-600"
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        >
          Tuck into a takeaway today
        </motion.h1>
        <motion.span className="text-xl" variants={fadeInUp}>
          Food is just a click away!
        </motion.span>
        <motion.div variants={fadeInUp}>
          <SearchBar
            placeHolder="Search by City or Town"
            onSubmit={handleSearchSubmit}
          />
        </motion.div>
      </motion.div>

      {/* Image and App Section */}
      <motion.div
        className="grid md:grid-cols-2 gap-5"
        variants={staggerContainer}
      >
        <motion.img
          src={landingImage}
          variants={scaleUp}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        />
        <motion.div
          className="flex flex-col items-center justify-center gap-4 text-center"
          variants={fadeInUp}
        >
          <motion.span
            className="font-bold text-3xl tracking-tighter"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            Order takeaway even faster!
          </motion.span>
          <motion.span variants={fadeInUp}>
            Download the ReserveNow App for faster ordering and personalised
            recommendations
          </motion.span>
          <motion.img
            src={appDownloadImage}
            variants={scaleUp}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          />
          <motion.span variants={fadeInUp}>
            For Queries and Support, contact us at{" "}
            <a href="mailto:sample@gmail.com" target="_blank" className="text-blue-500">
              sample@gmail.com
            </a>
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
