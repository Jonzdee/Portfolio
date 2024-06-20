export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "GYM Workout to Explore",
    des: "Explore the wonders of Gym Workout with the most effective exercises",
    img: "/peakpulses.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/fm.svg"],
    link: "/https://peakpulse.netlify.app",
  },
  {
    id: 2,
    title: "YDS - YemTech Digital Surveillance",
    des: "We Are Surveiller In The World Of Security. Seamlessly connect with colleagues and friends.",
    img: "/yemtech.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/stream.svg", "/c.svg"],
    link: "https://yemtechdigitalsurveillance.netlify.app/",
  },
  {
    id: 3,
    title: "BlissChat - Chat Application",
    des: "A REAL Software-as-a-Service app with AI features using the latest tech stack.",
    img: "/chartapp.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "/https://blisschat.netlify.app",
  },
  {
    id: 4,
    title: "Professional Art Gallery",
    des: "designed to facilitate Users, Unique facade, Sustainable design elements, etc",
    img: "/gallery.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/gsap.svg"],
    link: "/https://joesmithart.netlify.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Johnson was an absolute pleasure. The vision and creativity brought to the Modern Art Gallery project were exceptional. The design perfectly complements our collections, and the attention to detail is evident in every corner of the gallery.",
    name: "Joseph Smith",
    title: "Director of JoeSmith Art ",
  },
  {
    quote:
      "Collaborating with Johnson was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Johnson's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Johnson is the ideal partner.",
    name: "John Martinez",
    title: "COO, Innovative Solutions LLC",
  },
  {
    quote:
      "From the initial concept to the final deployment, Johnson demonstrated exceptional skill and professionalism. The chat app is intuitive, reliable, and has received positive feedback from all our users. Johnson's ability to deliver on time and within budget was a huge plus for our project.",
    name: "Sarah Collins",
    title: "Product Manager, FutureTech Corp.",
  },
  {
    quote:
      "Working with Johnson on our chat app was a game-changer for our company. Johnson's innovative approach and technical expertise helped us create a seamless, user-friendly app that has greatly improved our internal communication and client interactions. We are extremely satisfied with the final product and the ongoing support provided.",
    name: "Alice Brown",
    title: "CEO, Tech Innovators Inc.",
  },
  {
    quote:
      "The chat app developed by Johnson has revolutionized the way we communicate within our team and with our clients. The integration of advanced features and a sleek design has exceeded our expectations. Johnson's dedication to understanding our needs and delivering a high-quality product is commendable.",
    name: "David Thompson",
    title: "CTO, NextGen Solutions",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - Nova Solution",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance ecommerce Project",
    desc: "Led the dev of a web app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
