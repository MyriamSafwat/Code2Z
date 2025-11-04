import img1 from '../assets/img-1.jpg';
import img2 from '../assets/img-2.jpg';
import img3 from '../assets/img-3.jpg';
import img4 from '../assets/img-4.jpg';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Rayan Khalid",
    jobTitle: "Product Manager",
    image: img1,
    text: "Great experience from start to finish friendly team and outstanding results.",
    icon: FaInstagram,
  },
  {
    id: 2,
    name: "Lina Moustafa",
    jobTitle: "UX/UI Designer",
    image: img2,
    text: "Highly recommend this company for anyone looking for reliable and efficient service.",
    icon: FaTwitter,
  },
  {
    id: 3,
    name: "Omar Ali",
    jobTitle: "Security Engineer",
    image: img3,
    text: "They truly understand our needs and provided innovative solutions that helped our business.",
    icon: FaLinkedinIn,
  },
  {
    id: 4,
    name: "Mahmoud Musa",
    jobTitle: "Frontend Developer",
    image: img4,
    text: "The team delivered our project on time and exceeded our expectations in every aspect.",
    icon: FaFacebookF,
  },
];

export default testimonials;
