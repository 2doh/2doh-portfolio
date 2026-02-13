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
    category: "개인",
    title: "포트폴리오 웹사이트",
    description: "React와 Styled-components를 활용한 개인 포트폴리오입니다.",
    stack: ["React", "StyledComponents", "Javascript"],
    siteUrl: "https://example.com",
    githubUrl: "https://github.com/2doh/portfolio",
    features: ["반응형 디자인", "카테고리 필터링 기능", "다크모드 지원 예정"],
  },
  {
    id: 2,
    category: "개인",
    title: "포트폴리오 웹사이트",
    description: "React와 Styled-components를 활용한 개인 포트폴리오입니다.",
    stack: ["React", "StyledComponents", "Javascript"],
    siteUrl: "https://example.com",
    githubUrl: "https://github.com/2doh/portfolio",
    features: ["반응형 디자인", "카테고리 필터링 기능", "다크모드 지원 예정"],
  },
];
