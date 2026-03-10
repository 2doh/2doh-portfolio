import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getDummy } from "../../../../data/dummy";
import VirtualProductList from "./VirtualProductList";

const ITEM_HEIGHT = 80;
const VIEWPORT_HEIGHT = 500;
const BUFFER = 3;

const VurtualListDemo = () => {
  const [products, setProducts] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [scrollTop, setScrollTop] = useState(0);
  const viewportRef = useRef(null);

  const handleScroll = e => {
    const currentScrollTop = e.currentTarget.scrollTop;
    setScrollTop(currentScrollTop);
    const startIndex = Math.floor(currentScrollTop / ITEM_HEIGHT);
    const visibleCount = Math.ceil(VIEWPORT_HEIGHT / ITEM_HEIGHT);
    const start = Math.max(0, startIndex - BUFFER);
    const end = startIndex + visibleCount + BUFFER;
    setVisibleItems(products.slice(start, start + end + BUFFER));
  };

  useEffect(() => {
    const initData = async () => {
      const result = await getDummy();
      setProducts(result.products);
    };
    initData();
  }, []);

  return (
    <Container>
      <Viewport ref={viewportRef} onScroll={handleScroll}>
        <VirtualProductList products={products} />
      </Viewport>
    </Container>
  );
};

export default VurtualListDemo;

const Container = styled.div`
  width: 100%;
  align-self: flex-start;
`;

const Viewport = styled.div`
  height: ${VIEWPORT_HEIGHT}px;
  overflow-y: auto;
  background: #fff;
  border: 2px solid #333;
  position: relative;
`;
