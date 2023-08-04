import { useEffect } from "react";
import { ModalProps } from "../interfaces/general-interfaces";
import "./NavPage.css";
import { animate, motion, stagger } from "framer-motion";
import SocialMedia from "../SocialMedia";

const hrefs = [
  { name: "Home", href: "#heading" },
  { name: "About Me", href: "#about" },
  { name: "Portfolio", href: "#projects" },
  { name: "Resume", href: "#resume" }
];

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
}

const item = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0 }
}

const NavPage: React.FC<ModalProps> = ({ toggleModal }) => {

  const links = hrefs.map(page =>
    <motion.a
      className="nav-link"
      href={page.href}
      onClick={toggleModal}
      variants={item}
      whileHover={{scale: 1.1}}
      >
      {page.name}
    </motion.a>
  )


  return (
    <motion.nav className="nav-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <motion.div className="nav-links" initial="hidden" animate="show" variants={variants}>
        {links}
      </motion.div>
    </motion.nav>
  );

}
export default NavPage;