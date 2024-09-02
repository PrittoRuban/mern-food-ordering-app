import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      className="border-b-2 border-b-orange-500 py-6"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            to="/"
            className="text-3xl font-bold tracking-tight text-orange-500"
          >
            ReserveNow
          </Link>
        </motion.div>
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
