import project1 from "../assets/our_projects/Our_project1.jpeg";
import project2 from "../assets/our_projects/Our_project2.jpeg";
import project3 from "../assets/our_projects/Our_project3.jpeg";
import project4 from "../assets/our_projects/Our_project4.jpeg";
import project5 from "../assets/our_projects/Our_project5.jpeg";
import project6 from "../assets/our_projects/Our_project6.jpeg";
import project7 from "../assets/our_projects/Our_project7.jpeg";
import project8 from "../assets/our_projects/Our_project8.jpeg";
import project9 from "../assets/our_projects/Our_project9.jpeg";
import project10 from "../assets/our_projects/Our_project10.jpeg";

export const completedProjects = [
  {
    id: "01",
    title: "Automatic Load Monitoring System (ALMS)",
    location: "Tamil Nadu",
    status: "Completed",
    description:
      "Successfully installed ALMS for continuous monitoring of freight wagon loading. The system detects load imbalance accurately without interrupting train movement, enhancing operational safety.",
    photo: project1,
    thumbs: [project3,project4,project5,project6] ,
  },
  {
    id: "02",
    title: "Wheel Impact Load Detection System",
    location: "Tamil Nadu",
    status: "Completed",
    description:
      "Installed WILD system for real-time detection of wheel impact loads and potential track deterioration. Helps in preventive maintenance and focus on safety of train operations.",
    photo: project2,
    thumbs: [project7,project8,project9,project10] ,
  },
];

export const impactStats = [
  { value: "2+", label: "Projects Completed", icon: "trophy" as const },
  { value: "100%", label: "Successful Installations", icon: "target" as const },
  { value: "Zero", label: "Operational Interruption", icon: "rail" as const },
  { value: "Railway", label: "Grade Equipment", icon: "shield" as const },
];

export const projectLocations = [
  { id: "01", title: "Tamil Nadu", subtitle: "ALMS Installation", status: "Completed" },
  { id: "02", title: "Tamil Nadu", subtitle: "WILD System Installation", status: "Completed" },
];

export const installationSteps = [
  { label: "Site Survey", icon: "clipboard" as const },
  { label: "Planning & Engineering", icon: "ruler" as const },
  { label: "Installation", icon: "wrench" as const },
  { label: "Testing & Calibration", icon: "gauge" as const },
  { label: "Commissioning", icon: "playcircle" as const },
  { label: "Support & Maintenance", icon: "headset" as const },
];

export const galleryFilters = ["All", "Installation", "Equipment", "Railway Track", "Commissioning"] as const;

export const galleryItems = [
  { photo: project3, withDevice: false, category: "Railway Track" },
  { photo: project4, withDevice: true, category: "Equipment" },
  { photo: project5, withDevice: false, category: "Railway Track" },
  { photo: project6, withDevice: false, category: "Installation" },
  { photo: project7, withDevice: true, category: "Commissioning" },
  { photo: project8, withDevice: false, category: "Railway Track" },
];
