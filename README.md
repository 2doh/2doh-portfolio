**본 프로젝트는 프론트엔드 개발자로서의 기술적 역량을 증명하기 위한 포트폴리오 프로젝트입니다.**

## 목차

1. [프로젝트 실행 방법](#프로젝트-실행-방법)
2. [주요 기능](#주요-기능)
3. [폴더, 컴포넌트 구조](#폴더-컴포넌트-구조)

# 프로젝트 실행 방법

배포 링크 : [포트폴리오](https://2doh-portfolio-8443.vercel.app/)

1. 터미널을 열고 아래 명령어를 입력하여 레포지토리를 클론합니다.
   `git clone https://github.com/2doh/2doh-portfolio`
2. 프로젝트 폴더로 이동한 뒤 `npm i` 명령어를 입력하여 필요한 패키지를 설치합니다.
3. 설치가 완료되면 `npm run dev` 명령어를 입력하여 프로젝트를 실행합니다.
4. 브라우저에서 로컬 호스트 주소에 접속하여 정상 작동을 확인합니다.

# 주요 기능

| 카테고리             | 상세 설명                                            |
| :------------------- | :--------------------------------------------------- |
| **다크/라이트 모드** | ThemeProvider 기반 테마 전환 및 전역 스타일 적용     |
| **화이트보드**       | Canvas API를 활용한 자유 드로잉 및 초기화 인터렉션   |
| **영어 스피킹**      | Web Speech API(STT) 및 Audio API(TTS) 기반 학습 도구 |
| **실시간 검색**      | 대량의 데이터 세트 내 효율적인 키워드 필터링         |
| **컨페티 캐논**      | canvas-confetti를 활용한 드래그/이벤트 시각 피드백   |
| **버추얼 스크롤**    | TanStack Virtual을 이용한 대용량 목록 렌더링 최적화  |

# 폴더, 컴포넌트 구조

```text
src
┣ layout      # 공통 레이아웃 (common, home)
┣ pages       # 기능별 페이지 (home, whiteboard, speech...)
┣ store       # Zustand 상태 저장소 및 persist 설정
┣ components  # 페이지별 컴포넌트 정리
┣ data        # Mock 데이터 및 상수 모음
┣ util        # 각종 유틸리티 함수
┗ styles      # GlobalStyle 및 Theme 정의 (CSS Variables)
```
