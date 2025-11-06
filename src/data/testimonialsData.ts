import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import testimonial1 from '../assets/testimonials/img-1.jpg';
import testimonial2 from '../assets/testimonials/img-2.jpg';
import testimonial3 from '../assets/testimonials/img-3.jpg';
import testimonial4 from '../assets/testimonials/img-4.jpg';


// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Rayan Khalid",
    jobTitle: "Product Manager",
    image: testimonial1,
    text: "Great experience from start to finish friendly team and outstanding results.",
    icon: FaInstagram,
  },
  {
    id: 2,
    name: "Lina Moustafa",
    jobTitle: "UX/UI Designer",
    image: testimonial2,
    text: "Highly recommend this company for anyone looking for reliable and efficient service.",
    icon: FaTwitter,
  },
  {
    id: 3,
    name: "Omar Ali",
    jobTitle: "Security Engineer",
    image: testimonial3,
    text: "They truly understand our needs and provided innovative solutions that helped our business.",
    icon: FaLinkedinIn,
  },
  {
    id: 4,
    name: "Mahmoud Musa",
    jobTitle: "Frontend Developer",
    image: testimonial4,
    text: "The team delivered our project on time and exceeded our expectations in every aspect.",
    icon: FaFacebookF,
  },
];

export default testimonials;
