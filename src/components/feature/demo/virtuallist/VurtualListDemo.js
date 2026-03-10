import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getDummy } from "../../../../data/dummy";
import VirtualProductList from "./VirtualProductList";
import { useVirtualizer } from "@tanstack/react-virtual";

const ITEM_HEIGHT = 150;
const VIEWPORT_HEIGHT = 500;

const VurtualListDemo = () => {
  const [products, setProducts] = useState([]);
  const parentRef = useRef(null);

  const virtualizer = useVirtualizer({
    count: products.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => ITEM_HEIGHT,
    overscan: 5,
  });

  useEffect(() => {
    const initData = async () => {
      const result = await getDummy();
      if (result?.products) setProducts(result.products);
    };
    initData();
  }, []);

  const renderCount = virtualizer.getVirtualItems().length;

  return (
    <Container>
      <MonitorPanel>
        <Stat>
          <label>전체 데이터</label>
          <Value>{products.length.toLocaleString()}개</Value>
        </Stat>
        <Divider />
        <Stat color="#FF8A65">
          <label>실제 DOM 노드</label>
          <Value>{renderCount}개</Value>
        </Stat>
      </MonitorPanel>
      <Viewport ref={parentRef}>
        <VirtualProductList
          products={products}
          virtualItems={virtualizer.getVirtualItems()}
          totalSize={virtualizer.getTotalSize()}
        />
      </Viewport>
    </Container>
  );
};

export default VurtualListDemo;

const MonitorPanel = styled.div`
  background: #222;
  color: #fff;
  padding: 20px;
  border-radius: 12px 12px 0 0;
  display: flex;
  align-items: center;
  gap: 25px;
  font-family: monospace;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.color || "var(--color-success)"};
  label {
    font-size: 11px;
    opacity: 0.8;
    margin-bottom: 4px;
  }
`;

const Value = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const Divider = styled.div`
  width: 1px;
  height: 30px;
  background: rgba(255, 255, 255, 0.1);
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  align-self: flex-start;
`;

const Viewport = styled.div`
  height: 500px;
  overflow-y: auto;
  background: var(--color-bg-sub);
  border: 1px solid var(--color-border);
  border-top: none;
  position: relative;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--color-border);
    border-radius: 10px;
  }
`;
