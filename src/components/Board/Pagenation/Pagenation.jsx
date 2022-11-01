import styled from "styled-components";

export const Pagination = ({ total, size, page, setPage }) => {

  const pageNum = Math.ceil(total / size);
  console.log(pageNum)

  return (
    <Nav>
      <PageBtn>&lt;</PageBtn>
      {
        Array(pageNum)
          .fill()
          .map((_, i) => (
            <PageBtn
              key={ i + 1 }
              onClick={() => setPage(i + 1)}
              aria-current={ page === i + 1 ? "page" : null }
            >{ i + 1 }
            </PageBtn>
          ))
      }
      <PageBtn>&gt;</PageBtn>
    </Nav>
  )
};

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`

export const PageBtn = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: transparent;
  color: white;
  font-size: 1rem;
  font-family: 'Neo둥근모 Code';
  transition: all 0.3s;
  &:hover {
    background: ${(props) => props.theme.GREY};
    color: ${(props) => props.theme.BLACK};
    cursor: pointer;
    transform: translateY(-2px);
  }
  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }
  &[aria-current] {
    background: ${(props) => props.theme.GREY};
    color: ${(props) => props.theme.BLACK};
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`