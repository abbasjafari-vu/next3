export const author = (lang: string) => {
  return lang === "fa"
    ? {
        hello: "سلام 👋",
        name: "عباس جعفری",
        label: "توسعه دهنده",
        miniDescription:
          "من عباس جعفری هستم، یک توسعه دهنده نرم افزار با تمرکز اصلی بر تکنولوژی های مدرن و جذاب از جمله React JS، Next JS، React Native، و Node JS. در زمینه توسعه نرم افزار و وب، توانسته‌ام مهارت‌های قوی در این زمینه‌ها را به دست آورم.",
        longDiscription: {
          p1: "در حوزه React JS و Next JS، من توانسته‌ام برنامه‌های تحت وب پویا و جذابی بسازم. این فریمورک‌ها به من امکان می‌دهند تا رابط‌های کاربری شگفت‌انگیز و بدون تاخیر بسازم و از ویژگی‌های پیشرفته مانند SSR (Server-Side Rendering) و SEO friendly استفاده کنم.",
          p2: "React Native همچنین یکی از علاقه‌مندی‌های من است. با استفاده از این فریمورک، توانسته‌ام برنامه‌های تلفن همراه چندسکویی و قابلیت‌های پیشرفته بسازم. این به من اجازه می‌دهد که برنامه‌های موبایل با تجربه کاربری عالی بسازم.",
          p3: "Node JS نیز یکی از تخصص‌های من است که من را قادر می‌سازد تا برنامه‌های سمت سرور را بسازم و به عملکرد بهینه و کارایی بالا دست پیدا کنم. من توانسته‌ام برنامه‌های تحت وب با سرعت و پایداری بالا را توسعه دهم.",
          p4: "من از چالش‌ها و پروژه‌های جدید همیشه لذت می‌برم و توانسته‌ام با تیم‌های متعددی در سرتاسر جهان همکاری کنم. به عنوان یک توسعه دهنده توانا و با تجربه، تمرکز من بر ارائه راه‌حل‌های نوآورانه و بهبود تجربه کاربری برای مشتریان و کارفرمایان است.",
          skills: {
            title: "خلاصه‌ای از مهارت‌های من:",
            list: [
              "React JS و Next JS",
              "React Native",
              "Node JS",
              "توسعه وب مدرن",
              "ایجاد رابط‌های کاربری جذاب و واکنش‌گرا",
              "توسعه برنامه‌های موبایل تحت React Native",
              "توسعه برنامه‌های سمت سرور با Node JS",
            ],
          },
          p5: "با انگیزه به دنبال فرصت‌های جدید در دنیای توسعه نرم‌افزار هستم و آماده همکاری با تیم‌های پویا و پروژه‌های جذاب هستم. من به دنیای فناوری اعتقاد دارم و مهمترین هدف من ایجاد راهکارهای نوآورانه و مفید برای جامعه است.",
        },
      }
    : {
        hello: "Hi 👋",
        name: "Abbas Jafari",
        label: "Developer",
        miniDescription:
          "I'm Abbas Jafari, a software developer with a primary focus on modern and exciting technologies, including React JS, Next JS, React Native, and Node JS. I have extensive experience in web and software development, and I've acquired strong skills in these areas.",
        longDiscription: {
          p1: "In the realm of React JS and Next JS, I've been able to create dynamic and engaging web applications. These frameworks allow me to build seamless and responsive user interfaces, utilizing advanced features like Server-Side Rendering (SSR) and ensuring SEO-friendliness.",
          p2: "React Native is another one of my passions. Using this framework, I've developed cross-platform mobile applications with advanced capabilities, providing an excellent user experience.",
          p3: "Node JS is also one of my specialties, enabling me to build server-side applications for optimal performance and efficiency. I've developed high-speed and stable web applications.",
          p4: "I enjoy challenges and new projects and have collaborated with various teams worldwide. As a skilled and experienced developer, my focus is on delivering innovative solutions and improving the user experience for clients and employers.",
          skills: {
            title: "A summary of my skills includes:",
            list: [
              "React JS و Next JS",
              "React Native",
              "Node JS",
              "Modern web development",
              "Creating engaging and responsive user interfaces",
              "Developing mobile applications with React Native",
              "Server-side application development with Node JS",
            ],
          },
          p5: "I'm motivated to explore new opportunities in the world of software development and am ready to work with dynamic teams on exciting projects. I believe in the power of technology, and my primary goal is to create innovative and valuable solutions for society.",
        },
      };
};

export const categories = [
  { title: "React", slug: "react" },
  { title: "React Native", slug: "react-native" },
  { title: "Node Js", slug: "node-js" },
  { title: "Next Js", slug: "next-js" },
  { title: "Expo", slug: "expo" },
  { title: "Sanity", slug: "sanity" },
];

export const posts = [
  { title: "post 1", slug: "post-1" },
  { title: "post 2", slug: "post-2" },
  { title: "post 3", slug: "post-3" },
  { title: "post 4", slug: "post-4" },
  { title: "post 5", slug: "post-5" },
  { title: "post 6", slug: "post-6" },
];
