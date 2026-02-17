export const profileData = {
  name: "이도현",
  role: "Frontend Developer",
  email: "ldh0973@naver.com",
  github: "https://github.com/2doh",
  introduction:
    "팀원들과의 협업을 통해 더 나은 결과를 만들어가는 과정과, 복잡한 문제를 해결해 나가는 순간에 성취감과 즐거움을 느낍니다. 다양한 환경 속에서 도전을 이어가며 트렌드에 맞춰 꾸준히 배우고 성장하는 개발자로 나아가고자 합니다.",
  education: [
    {
      id: 1,
      title: "영남이공대학교 (로봇·메카트로닉스 전공)",
      period: "2017.03 - 2019.02",
    },
    {
      id: 2,
      title: "영남대학교 (기계 시스템 전공)",
      period: "2019.03 - 2023.02",
    },
    {
      id: 3,
      title: "대구그린컴퓨터아트학원",
      period: "2024.03 - 2024.09",
      desc: "(KDT) React 개발자(Spring Back End 연동) 양성 과정 수료",
    },
  ],
  skills: [
    { name: "React", level: 90, color: "var(--color-accent-mint)" },
    { name: "Javascript", level: 85, color: "var(--color-accent-amber)" },
    {
      name: "Styled Components",
      level: 70,
      color: "var(--color-accent-coral)",
    },
    {
      name: "Axios",
      level: 80,
      color: "var(--color-soft-blue)",
    },
    {
      name: "Typescript",
      level: 50,
      color: "var(--color-vivid-orange)",
    },
    {
      name: "Zustand",
      level: 80,
      color: "var(--color-soft-green)",
    },
  ],
};

export const projectData = [
  {
    id: 1,
    category: "협업",
    title: "Haesol",
    description:
      "영단어 학습과 성적 열람을 통한 초등학생 성적 관리 시스템입니다.",
    content:
      " 서버와의 통신, 사용자 역할별 기능 구분, 소셜 로그인 등 실제 웹 서비스 배포를 경험하기 위해 진행한 협업 프로젝트입니다.",
    stack: ["React", "Sass", "Web-Speech-API"],
    githubUrl: "https://github.com/2doh/haesol",
    img: "/assets/images/haesolmain.webp",
  },
  {
    id: 2,
    category: "클론",
    title: "카카오같이가치 클론",
    description:
      "퍼블리싱 스터디 및 협업을 위한 부가요소(깃허브 포크 등)를 학습하기 위해 진행한 클론 코딩입니다.",
    content: "",
    stack: ["Javascript", "CSS", "HTML"],
    siteUrl: "https://tkko.vercel.app/",
    githubUrl: "https://github.com/2doh/tkko",
    img: "/assets/images/togetherkakaoclone.webp",
  },
  {
    id: 3,
    category: "클론",
    title: "카카오 브레인 블로그 클론",
    description:
      "리액트와 컴포넌트 구조를 학습하기 위해 진행한 클론코딩 입니다.",
    stack: ["React", "Swiper", "Javascript"],
    siteUrl: "https://blog-kakaobrain-2doh.vercel.app/",
    githubUrl: "https://github.com/2doh/blog-kakaobrain-2doh",
    img: "/assets/images/kakaobrainclone.webp",
  },
  {
    id: 4,
    category: "개인",
    title: "GV",
    description: "Canvas API를 활용한 화이트 보드 웹앱 입니다.",
    stack: ["React", "Zustand", "Canvas API"],
    siteUrl: "https://gatherverse-baf07.web.app/",
    githubUrl: "https://github.com/2doh/GV",
    img: "/assets/images/gvtest.webp",
  },
  {
    id: 5,
    category: "협업",
    title: "Alot",
    description:
      "백엔드 서버와의 협업을 학습하기 위한 여행일정 관리 웹앱 입니다.",
    stack: ["React", "Axios", "Styled-Component"],
    githubUrl: "https://github.com/2doh/project-for-travel",
    img: "/assets/images/alotmain.webp",
  },
];
