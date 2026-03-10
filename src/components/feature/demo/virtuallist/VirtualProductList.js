import React from "react";
import styled from "styled-components";

const VirtualProductList = ({ products, virtualItems, totalSize }) => {
  return (
    <ScrollRunway style={{ height: `${totalSize}px` }}>
      {virtualItems.map(virtualRow => {
        const item = products[virtualRow.index];
        if (!item) return null;
        return (
          <VirtualItemWrapper
            key={virtualRow.key}
            style={{
              height: `${virtualRow.size}px`,
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            <ProductCard>
              <ImageArea>
                <img src={item.thumbnail} alt={item.title} loading="lazy" />
                {item.discountPercentage > 15 && <HotBadge>HOT</HotBadge>}
              </ImageArea>
              <ContentArea>
                <Brand>{item.brand}</Brand>
                <Title>{item.title}</Title>
                <PriceBox>
                  <Discount>{Math.round(item.discountPercentage)}%</Discount>
                  <Price>${item.price.toLocaleString()}</Price>
                </PriceBox>
              </ContentArea>
            </ProductCard>
          </VirtualItemWrapper>
        );
      })}
    </ScrollRunway>
  );
};

export default VirtualProductList;

const ScrollRunway = styled.div`
  width: 100%;
  position: relative;
`;

const VirtualItemWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 16px 16px;
  box-sizing: border-box;
`;

const ProductCard = styled.div`
  display: flex;
  background: white;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  &:hover {
    border-color: #333;
    transform: translateY(-5px);
  }
`;

const ImageArea = styled.div`
  position: relative;
  width: 120px;
  min-width: 120px;
  aspect-ratio: 1 / 1;
  background: var(--color-bg);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const HotBadge = styled.span`
  position: absolute;
  top: 8px;
  left: 8px;
  background: #ff4d4f;
  color: #fff;
  font-size: 9px;
  font-weight: 900;
  padding: 3px 6px;
  border-radius: 4px;
`;

const ContentArea = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Brand = styled.span`
  font-size: 10px;
  font-weight: 700;
  color: var(--color-accent-olive);
  text-transform: uppercase;
`;

const Title = styled.h4`
  font-size: 13px;
  font-weight: 500;
  color: var(--color-text);
  margin: 0;
  /* 말줄임 처리 */
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const PriceBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 5px;
`;

const Discount = styled.span`
  font-size: 14px;
  font-weight: 800;
  color: #ff4d4f;
`;

const Price = styled.span`
  font-size: 14px;
  font-weight: 800;
  color: var(--color-text);
`;
