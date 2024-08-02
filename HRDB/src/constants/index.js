import { GoGoal } from "react-icons/go";
import { GrPlan } from "react-icons/gr";
import {
  IoIosStats,
  IoIosSettings,
  IoIosPerson,
  IoIosPersonAdd,
  IoIosEyeOff,
  IoIosLogIn,
  IoIosLogOut,
} from "react-icons/io";
import {
  FaChartBar,
  FaCalendarAlt,
  FaFacebookMessenger,
  FaUsersCog,
  FaListAlt,
} from "react-icons/fa";

import user01 from "../assets/user01.png";
import user02 from "../assets/user02.png";
import user03 from "../assets/user03.png";

import adilbhai from "../Images/adilbhai.jpg";
import asadbhai from "../Images/asadbhai.jpg";
import salman from "../Images/salman.jpg";
import arslaan from "../Images/arslaan.jpg";

export const links = [
  {
    href: "#",
    icon: FaChartBar,
    text: "Dashboard",
  },
  {
    href: "#",
    icon: FaCalendarAlt,
    text: "Employee",
    badge: {
      text: " ",
      color: "bg-gray-100 text-gray-800",
      darkColor: "dark:bg-gray-700 dark:text-gray-300",
    },
  },
  {
    href: "#",
    icon: FaFacebookMessenger,
    text: "PayRoll",
    badge: {
      text: "Pending",
      color: "bg-blue-100 text-blue-800",
      darkColor: "dark:bg-blue-900 dark:text-blue-300",
    },
  },
  {
    href: "#",
    icon: FaUsersCog,
    text: "Leave Management",
  },
  {
    href: "#",
    icon: FaListAlt,
    text: "Equipments",
  },
  {
    href: "#",
    icon: IoIosLogIn,
    text: "Log In",
  },
  {
    href: "#",
    icon: IoIosLogIn,
    text: "Sign Up",
  },
];

export const empolyeesData = [
  {
    title: "Total Empolyees",
    icon: IoIosPerson,
    count: 200,
    bgColor: "bg-gray-100",
  },
  {
    title: "On Leave",
    icon: IoIosEyeOff,
    count: 15,
    bgColor: "bg-blue-100",
  },
  {
    title: "New Joinee",
    icon: IoIosPersonAdd,
    count: 25,
    bgColor: "bg-yellow-100",
  },
];

export const shortcutLink = [
  {
    title: "Target",
    icon: GoGoal,
  },
  {
    title: "Plan",
    icon: GrPlan,
  },
  {
    title: "Performance",
    icon: IoIosStats,
  },
  {
    title: "Setting",
    icon: IoIosSettings,
  },
];

export const users = [
  {
    name: "Shereyar SM Adil",
    country: "India",
    role: "Manager",
    image: adilbhai, // Corrected: Use direct reference to the image
    bgColor: "bg-yellow-100",
  },
  {
    name: "Asad Khan",
    country: "Jamalpur",
    role: "Backend Developer",
    image: asadbhai, // Corrected: Use direct reference to the image
    bgColor: "bg-blue-100",
  },
  {
    name: "Md Salman",
    country: "Ali Nager",
    role: "Web Developer",
    image: salman, // Corrected: Use direct reference to the image
    bgColor: "bg-gray-100",
  },
  {
    name: "Arslaan Ahmad",
    country: "Iqra Colony",
    role: "Web Developer",
    image: arslaan, // Corrected: Use direct reference to the image
    bgColor: "bg-slate-100",
  },
];

export const events = [
  {
    date: "08 Aug",
    title: "Upcoming Event",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    date: "15 Sept",
    title: "Annual Conference",
    description: "Join us for our annual conference.",
  },
  {
    date: "20 Sept",
    title: "Networking Meetup",
    description: "Connect with professionals in your field.",
  },
  {
    date: "25 Sept",
    title: "Developers Meetup",
    description: "Connect with professionals in your field.",
  },
];

// ------- ==
// chart data, later we will use this!!!

// const options = {
//   series: [44, 55, 41],
//   options: {
//     chart: {
//       type: "donut",
//       height: 350,
//     },
//     labels: ["Desktop", "Tablet", "Mobile"],
//     colors: ["#FF5733", "#33FF57", "#3357FF"],
//     legend: {
//       position: "bottom",
//       labels: {
//         colors: darkMode ? "#dddddd" : "#000000",
//       },
//     },
//     dataLabels: {
//       style: {
//         colors: ["#dddddd"],
//       },
//     },
//     responsive: [
//       {
//         breakpoint: 480,
//         options: {
//           chart: {
//             width: 200,
//           },
//           legend: {
//             position: "bottom",
//           },
//         },
//       },
//     ],
//   },
// };

// ..........
// const chartConfig = {
//   series: [
//     {
//       name: "Sales",
//       data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
//     },
//   ],
//   options: {
//     chart: {
//       type: "bar",
//       height: 240,
//       toolbar: {
//         show: false,
//       },
//     },
//     title: {
//       show: false,
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     colors: ["#020617"],
//     plotOptions: {
//       bar: {
//         columnWidth: "40%",
//         borderRadius: 2,
//       },
//     },
//     xaxis: {
//       axisTicks: {
//         show: false,
//       },
//       axisBorder: {
//         show: false,
//       },
//       labels: {
//         style: {
//           colors: darkMode ? "#dddddd" : "#616161",
//           fontSize: "12px",
//           fontFamily: "inherit",
//           fontWeight: 400,
//         },
//       },
//       categories: [
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//         "Oct",
//         "Nov",
//         "Dec",
//       ],
//     },
//     yaxis: {
//       labels: {
//         style: {
//           colors: darkMode ? "#dddddd" : "#616161",
//           fontSize: "12px",
//           fontFamily: "inherit",
//           fontWeight: 400,
//         },
//       },
//     },
//     grid: {
//       show: true,
//       borderColor: "#a0a0a0",
//       strokeDashArray: 5,
//       xaxis: {
//         lines: {
//           show: true,
//         },
//       },
//       padding: {
//         top: 5,
//         right: 20,
//       },
//     },
//     fill: {
//       opacity: 0.8,
//     },
//     tooltip: {
//       theme: "dark",
//     },
//   },
// };
