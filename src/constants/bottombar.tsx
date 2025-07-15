import { AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import { FaRegPaperPlane } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { SiAboutdotme } from "react-icons/si";
import { CiChat1 } from "react-icons/ci";
import { BiSolidDashboard } from "react-icons/bi";
import { GrCertificate } from "react-icons/gr";
import { CiMusicNote1 } from "react-icons/ci";
import { FaBlog } from "react-icons/fa";

const ICON_SIZE: number = 22;

export const BOTTOMBAR_ITEMS = [
  { icon: <AiOutlineHome size={ICON_SIZE} />, pathname: "/" },
  { icon: <SiAboutdotme size={ICON_SIZE} />, pathname: "/about" },
  { icon: <AiOutlineProject size={ICON_SIZE} />, pathname: "/projects" },
  { icon: <BiSolidDashboard size={ICON_SIZE} />, pathname: "/dashboard" },
  { icon: <GrCertificate size={ICON_SIZE} />, pathname: "/certificate" },
];
