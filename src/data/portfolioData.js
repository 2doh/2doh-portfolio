export const profileData = {
  name: "김개발",
  role: "Frontend Developer",
  introduction:
    "사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다. React 생태계에 깊은 관심을 가지고 있습니다.",
  skills: ["React", "JavaScript(ES6+)", "Styled-Components", "TypeScript"],
};

export const projectData = [
  {
    id: 1,
    title: "개인 블로그 플랫폼",
    period: "2023.10 ~ 2023.11 (4주)",
    stack: ["React", "Next.js", "Emotion"],
    description: "마크다운을 지원하는 정적 블로그 생성 프로젝트입니다.",
    features: [
      "SEO 최적화를 위한 SSR 구현",
      "다크모드/라이트모드 테마 스위칭",
      "카테고리별 포스트 필터링 기능",
    ],
  },
  {
    id: 2,
    title: "투두 리스트 대시보드",
    period: "2023.12 (2주)",
    stack: ["React", "Redux Toolkit", "Firebase"],
    description: "드래그 앤 드롭을 지원하는 일정 관리 웹 앱입니다.",
    features: [
      "React DND를 이용한 드래그 앤 드롭",
      "Firebase Auth를 이용한 소셜 로그인",
      "실시간 데이터 동기화",
    ],
  },
];
