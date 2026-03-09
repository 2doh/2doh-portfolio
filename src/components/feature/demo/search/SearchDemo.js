import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { getDummy } from "../../../../data/dummy";
import ProductList from "./ProductList";
import { debounce } from "../../../../util/debounce";

const PAGE_SIZE = 12;

const SearchDemo = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [inputValue, setInputValue] = useState("");
  const observer = useRef();

  const lastCardRef = useCallback(
    node => {
      if (!node) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && visibleCount < products.length) {
          loadMoreItems();
        }
      });
      observer.current.observe(node);
    },
    [products.length],
  );

  const loadMoreItems = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount(prev => Math.min(prev + PAGE_SIZE, products.length));
      setIsLoading(false);
    }, 800);
  };

  const normalizeFunc = data =>
    data
      ?.trim()
      .replace(/[^a-zA-Z0-9가-힣]/g, "")
      .replace(/\s+/g, "")
      .toLocaleLowerCase("ko")
      .normalize("NFC") || "";

  const filteredProducts = useMemo(() => {
    const query = normalizeFunc(keyword);
    if (!query) return products;

    return products.filter(item =>
      normalizeFunc(item.title + item.brand).includes(query),
    );
  }, [keyword, products]);

  const debouncedSetKeyword = useMemo(
    () =>
      debounce(value => {
        setKeyword(value);
        setVisibleCount(12);
      }, 500),
    [],
  );

  const handleCange = e => {
    const { value } = e.target;
    setInputValue(value);
    debouncedSetKeyword(value);
  };

  useEffect(() => {
    const initData = async () => {
      try {
        setIsLoading(true);
        const result = await getDummy();
        if (result?.products) {
          setProducts(result.products);
        }
      } catch (error) {
        console.log("초기 로딩 실패");
      } finally {
        setIsLoading(false);
      }
    };
    initData();
  }, []);

  useEffect(() => {
    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, []);

  return (
    <Container>
      <SearchBox>
        <input
          type="text"
          placeholder="검색어를 입력하세요 (예: iPhone, Samsung)"
          value={inputValue}
          onChange={e => handleCange(e)}
        />
      </SearchBox>
      <ProductList
        products={filteredProducts}
        lastCardRef={lastCardRef}
        visibleCount={visibleCount}
      />
      {isLoading && <LoadingSpinner>Loading...</LoadingSpinner>}

      {!isLoading && visibleCount >= products.length && products.length > 0 && (
        <EndOfList>모든 상품을 불러왔습니다.</EndOfList>
      )}
    </Container>
  );
};

export default SearchDemo;

const Container = styled.div`
  width: 100%;
  align-self: flex-start;
`;

const SearchBox = styled.div`
  margin-bottom: 30px;
  input {
    width: 100%;
    padding: 15px;
    border-radius: 10px;
    border: 1px solid var(--color-border);
    font-size: 1rem;
    &:focus {
      border-color: var(--color-accent-olive);
      outline: none;
    }
  }
`;

const LoadingSpinner = styled.div`
  text-align: center;
  padding: 30px;
  font-weight: 600;
  color: var(--color-accent-olive);
`;

const EndOfList = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 14px;
  color: #ccc;
`;
