import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Button from "./components/common/Button";

const GlobalStyle = createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html,body,#root{
  width:100%;
  height:100%;

}

#root{
  // colors
  --color-dark:#0D0C09;
  --color-gray:#363636;
  --color-dim:#C4C4C4;
  --color-white:#ffffff;
  --color-yellow:#FFDE00;
  --color-red:#DD0042;

  // border radius
  --rounded-default:20px;
  --rounded-small:5px;
}



`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <AppStyled>
        <ContainerStyled>
          <ListBoxStyled></ListBoxStyled>
          <ButtonBoxStyled>
            <Button label="Edit" />
            <Button label="Plus/Home" />
            <Button label="Remove" />
          </ButtonBoxStyled>
        </ContainerStyled>
      </AppStyled>
    </React.Fragment>
  );
}

const AppStyled = styled.main`
  display: flex;
  justify-content: center;
  justify-items: center;

  width: 100%;
  height: 100%;
  padding: 100px 0;

  background: var(--color-dark);
`;

const ContainerStyled = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;

  width: 360px;
  height: 100%;
  padding: 10px;
  border-radius: var(--rounded-default);

  background: var(--color-white);
`;

const ListBoxStyled = styled.ul`
  display: block;

  width: 100%;
  height: 100%;
  border-radius: var(--rounded-default);

  background: var(--color-dark);
`;

const ButtonBoxStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  width: 100%;
`;

export default App;
