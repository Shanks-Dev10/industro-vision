import NCL from "../assets/our_projects/ncl/ncl1.jpeg";
import WCR from "../assets/our_projects/wcr/wcr1.jpeg";
import Ncl1 from "../assets/our_projects/ncl/ncl2.jpeg";
import Ncl2 from "../assets/our_projects/ncl/ncl3.jpeg";
import Ncl3 from "../assets/our_projects/ncl/ncl4.jpeg";
import Ncl4 from "../assets/our_projects/ncl/ncl5.jpeg";
import Ncl5 from "../assets/our_projects/ncl/ncl6.jpeg";
import Ncl6 from "../assets/our_projects/ncl/ncl7.jpeg";
import Ncl7 from "../assets/our_projects/ncl/ncl8.jpeg";
import Ncl8 from "../assets/our_projects/ncl/ncl9.jpeg";
import Ncl9 from "../assets/our_projects/ncl/ncl10.jpeg";
import Ncl10 from "../assets/our_projects/ncl/ncl11.jpeg";
import Ncl11 from "../assets/our_projects/ncl/ncl12.jpeg";
import Ncl12 from "../assets/our_projects/ncl/ncl13.jpeg";
import Ncl13 from "../assets/our_projects/ncl/ncl14.jpeg";
import Ncl14 from "../assets/our_projects/ncl/ncl15.jpeg";
import Ncl15 from "../assets/our_projects/ncl/ncl16.jpeg";
import Ncl16 from "../assets/our_projects/ncl/ncl17.jpeg";
import Ncl17 from "../assets/our_projects/ncl/ncl18.jpeg";
import Ncl18 from "../assets/our_projects/ncl/ncl19.jpeg";
import Ncl19 from "../assets/our_projects/ncl/ncl20.jpeg";
import wcr1 from "../assets/our_projects/wcr/wcr2.jpeg";
import wcr2 from "../assets/our_projects/wcr/wcr3.jpeg";
import wcr3 from "../assets/our_projects/wcr/wcr4.jpeg";
import wcr4 from "../assets/our_projects/wcr/wcr5.jpeg";
import wcr5 from "../assets/our_projects/wcr/wcr6.jpeg";
import wcr6 from "../assets/our_projects/wcr/wcr7.jpeg";
import wcr7 from "../assets/our_projects/wcr/wcr8.jpeg";
import wcr8 from "../assets/our_projects/wcr/wcr9.jpeg";
import wcr9 from "../assets/our_projects/wcr/wcr10.jpeg";
import wcr10 from "../assets/our_projects/wcr/wcr11.jpeg";
import wcr11 from "../assets/our_projects/wcr/wcr12.jpeg";
import wcr12 from "../assets/our_projects/wcr/wcr13.jpeg";
import wcr13 from "../assets/our_projects/wcr/wcr14.jpeg";
import wcr14 from "../assets/our_projects/wcr/wcr15.jpeg";
import wcr15 from "../assets/our_projects/wcr/wcr16.jpeg";
import wcr16 from "../assets/our_projects/wcr/wcr17.jpeg";
import wcr17 from "../assets/our_projects/wcr/wcr18.jpeg";
import wcr18 from "../assets/our_projects/wcr/wcr19.jpeg";
import wcr19 from "../assets/our_projects/wcr/wcr20.jpeg";

export const completedProjects = [
  {
    id: "01",
    title: "Asymmetric Load Measuring System (ALMS)",
    location: "WCR, Gosalpur, Madhya Pradesh",
    status: "Successfully Completed",
    description:
      "Railmet Technologies Pvt. Ltd. successfully installed an Asymmetric Load Measuring System (ALMS) at WCR Gosalpur. The system provides accurate monitoring of wagon load distribution, helping detect uneven loading, improve freight safety, reduce maintenance costs, and enhance overall railway operational efficiency.",
    photo: WCR,
    thumbs: [Ncl1, Ncl2, Ncl3, Ncl4],
    link:'#gallery'
  },
  {
    id: "02",
    title: "Asymmetric Load Measuring System (ALMS)",
    location: "NCL, Singrauli, Madhya Pradesh",
    status: "Successfully Completed",
    description:
      "Railmet Technologies Pvt. Ltd. successfully installed an Asymmetric Load Measuring System (ALMS) at NCL Singrauli. The system enables accurate monitoring of wagon load distribution, helping detect uneven loading, improve freight safety, optimize loading efficiency, and support reliable railway operations.",
    photo: NCL,
    thumbs: [wcr1, wcr2, wcr3, wcr4],
    link:'#gallery'
  },
  {
    id: "03",
    title: "Asymmetric Load Measuring System (ALMS)",
    location: "Manikgarh, Maharashtra",
    status: "Successfully Completed",
    description:
      "Railmet Technologies Pvt. Ltd. successfully installed the Asymmetric Load Measuring System (ALMS) at Manikgarh, Maharashtra. The system enables accurate wagon load monitoring and helps detect uneven load distribution for safer and more efficient railway operations.",
    photo: NCL,
    thumbs: [wcr1, wcr2, wcr3, wcr4],
    link:'#gallery'
  },
];

export const impactStats = [
  { value: "2+", label: "Projects Completed", icon: "trophy" as const },
  { value: "100%", label: "Successful Installations", icon: "target" as const },
  { value: "Zero", label: "Operational Interruption", icon: "rail" as const },
  { value: "Railway", label: "Grade Equipment", icon: "shield" as const },
];

export const projectLocations = [
  {
    id: "01",
    title: "WCR, Gosalpur, Madhya Pradesh",
    subtitle: "Asymmetric Load Measuring System (ALMS)",
    status: "Successfully Completed",
  },
  {
    id: "02",
    title: "NCL, Singrauli, Madhya Pradesh",
    subtitle: "Asymmetric Load Measuring System (ALMS)",
    status: "Successfully Completed",
  },
];

export const installationSteps = [
  { label: "Site Survey", icon: "clipboard" as const },
  { label: "Planning & Engineering", icon: "ruler" as const },
  { label: "Installation", icon: "wrench" as const },
  { label: "Testing & Calibration", icon: "gauge" as const },
  { label: "Support & Maintenance", icon: "headset" as const },
];

export const galleryFilters = ["All", "WCR", "NCL"] as const;

export const galleryItems = [
  { photo: Ncl1, category: "NCL" },
  { photo: Ncl2, category: "NCL" },
  { photo: Ncl3, category: "NCL" },
  // { photo: Ncl4, category: "NCL" },
  // { photo: Ncl5, category: "NCL" },
  { photo: Ncl6, category: "NCL" },
  { photo: Ncl7, category: "NCL" },
  // { photo: Ncl8, category: "NCL" },
  { photo: Ncl9, category: "NCL" },
  // { photo: Ncl10, category: "NCL" },
  { photo: Ncl11, category: "NCL" },
  { photo: Ncl12, category: "NCL" },
  { photo: Ncl13, category: "NCL" },
  { photo: Ncl14, category: "NCL" },
  { photo: Ncl15, category: "NCL" },
  { photo: Ncl16, category: "NCL" },
  { photo: Ncl17, category: "NCL" },
  { photo: Ncl18, category: "NCL" },
  { photo: Ncl19, category: "NCL" },
  { photo: Ncl1, category: "WCR" },
  { photo: wcr2, category: "WCR" },
  { photo: wcr3, category: "WCR" },
  { photo: wcr4, category: "WCR" },
  { photo: wcr5, category: "WCR" },
  { photo: wcr6, category: "WCR" },
  { photo: wcr7, category: "WCR" },
  { photo: wcr8, category: "WCR" },
  { photo: wcr9, category: "WCR" },
  { photo: wcr10, category: "WCR" },
  { photo: wcr11, category: "WCR" },
  { photo: wcr12, category: "WCR" },
  { photo: wcr13, category: "WCR" },
  { photo: wcr14, category: "WCR" },
  { photo: wcr15, category: "WCR" },
  { photo: wcr16, category: "WCR" },
  { photo: wcr17, category: "WCR" },
  { photo: wcr18, category: "WCR" },
  { photo: wcr19, category: "WCR" },
];
