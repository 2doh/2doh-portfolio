import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// 라우터로 페이지 이동 시 스크롤 위치가 그대로 유지되는 경우 대비
// 모든 페이지 이동 시 최상단 시작
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default ScrollToTop;
