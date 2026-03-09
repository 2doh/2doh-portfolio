import React from "react";
import styled from "styled-components";

const ProductList = ({ products, lastCardRef, visibleCount }) => {
  return (
    <ProductGrid>
      {products.slice(0, visibleCount).map((item, idx, arr) => {
        const isLast = idx === arr.length - 1;

        return (
          <ProductCard key={item.id} ref={isLast ? lastCardRef : undefined}>
            <ImageArea>
              <img src={item.thumbnail} alt={item.title} />
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
        );
      })}
    </ProductGrid>
  );
};

export default ProductList;

const ProductGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 15px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid transparent;

  &:hover {
    border-color: var(--color-border);
    transform: translateY(-5px);
  }
`;

const ImageArea = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  background: #f9f9f9;

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
  color: var(--color-text-primary);
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
  color: var(--color-text-primary);
`;
