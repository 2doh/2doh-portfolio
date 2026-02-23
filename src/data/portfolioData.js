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
      level: 65,
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
      "서버와 API 통신으로 Axios 기반 비동기 처리 구조와 로그인/회원가입/소셜 로그인 및 쿠키 기반 인증 흐름을 구현했습니다. Web-Speech-API를 활용해 영단어 음성 학습 기능을 구현하여 성적관리의 기반을 마련하였습니다.",
    stack: [
      "React",
      "Sass",
      "Web-Speech-API",
      "Recoil",
      "Axios",
      "Web-Audio-API",
      "Cookie",
      "Nivo-Chart",
    ],
    githubUrl: "https://github.com/2doh/haesol",
    img: "/assets/images/haesolmain.webp",
  },
  {
    id: 2,
    category: "클론",
    title: "카카오같이가치 클론",
    description: "바닐라 스크립트로 만든 카카오같이가치 클론입니다.",
    content:
      "2명의 프론트엔드 개발자가 협업하여 Git 브랜치를 적용해 충돌을 최소화하며 진행하였습니다.",
    stack: ["Javascript", "Styled-ComponentS", "Swiper"],
    siteUrl: "https://tkko.vercel.app/",
    githubUrl: "https://github.com/2doh/tkko",
    img: "/assets/images/togetherkakaoclone.webp",
  },
  {
    id: 3,
    category: "클론",
    title: "카카오 브레인 블로그 클론",
    description: "React를 사용한 클론 코딩입니다.",
    content:
      "React의 컴포넌트 기반 아키텍처를 이해하기 위해 진행한 프로젝트입니다.",
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
    content:
      "Canvas API를 활용하여 드로잉 기능을 구현하고, 마우스 좌표 데이터를 Firebase에 저장하여 실시간 스케치가 가능하도록 설계했습니다. Zustand를 사용해 전역 상태를 관리했으며, React Hook Form을 활용해 인증 폼을 구성했습니다.",
    stack: ["React", "Zustand", "Canvas API", "Firebase", "React-Hook-Form"],
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
    content:
      "백엔드 API와의 연동을 중심으로 여행 일정 CRUD 기능을 구현했습니다. Axios를 활용한 비동기 요청 처리와 Styled Components 기반 UI 설계를 경험하며 실제 협업 환경을 고려한 구조를 학습했습니다.",
    stack: ["React", "Axios", "Styled-Component"],
    githubUrl: "https://github.com/2doh/project-for-travel",
    img: "/assets/images/alotmain.webp",
  },
];

export const featureData = [
  {
    id: 1,
    title: "Dark Mode System",
    tag: "Context API",
    desc: "사용자 설정 및 OS 테마를 감지하여 부드럽게 전환되는 테마 시스템",
    color: "#E0F2F1",
    logic: "localStorage & Media Query",
  },
  {
    id: 2,
    title: "Canvas Whiteboard",
    tag: "Canvas API",
    desc: "저지연 드로잉 및 이미지 저장 기능을 갖춘 실시간 화이트보드",
    color: "#F3E5F5",
    logic: "Coordinate Transformation",
  },
  {
    id: 3,
    title: "English Speaking Test",
    tag: "Web Speech API",
    desc: "사용자의 음성을 인식하여 텍스트로 변환하고 정확도를 측정하는 기능",
    color: "#E8F5E9",
    logic: "STT (Speech-to-Text)",
  },
  {
    id: 4,
    title: "Drag & Drop Kanban",
    tag: "Dnd-kit",
    desc: "프로젝트 관리 효율을 높이는 리스트 간 아이템 드래그 앤 드롭 구현",
    color: "#FFF3E0",
    logic: "Optimistic UI Update",
  },
  {
    id: 5,
    title: "Scroll Spy Header",
    tag: "Intersection Observer",
    desc: "현재 보고 있는 섹션을 자동으로 감지하여 활성화되는 내비게이션",
    color: "#E1F5FE",
    logic: "Observer Pattern",
  },
  {
    id: 6,
    title: "Infinite Scroll Grid",
    tag: "Custom Hook",
    desc: "대량의 데이터를 효율적으로 렌더링하기 위한 무한 스크롤 및 스켈레톤 UI",
    color: "#F9FBE7",
    logic: "Windowing & Caching",
  },
];
