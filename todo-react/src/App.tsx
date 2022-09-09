import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Button from "./components/common/Button";
import { buttonTypes } from "./types/button";

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
  type StatusType = { [key in typeof buttonTypes[number]]?: boolean };
  const [status, setStatus] = useState<StatusType>({
    edit: false,
    plus: true,
    delete: false,
  });

  const changeStatus = (target: typeof buttonTypes[number]) => {
    let setAllFalse: StatusType = {
      delete: false,
      edit: false,
      plus: false,
    };

    setAllFalse[target] = true;

    setStatus(setAllFalse);
  };

  return (
    <React.Fragment>
      <GlobalStyle />
      <AppStyled>
        <ContainerStyled>
          <ListBoxStyled></ListBoxStyled>
          <ButtonBoxStyled>
            <Button
              type="edit"
              on={status.edit}
              onClick={() => changeStatus("edit")}
            />
            <Button
              type={status.plus ? "plus" : "home"}
              on={status.plus}
              onClick={() => changeStatus("plus")}
            />
            <Button
              type="delete"
              on={status.delete}
              onClick={() => changeStatus("delete")}
            />
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
  gap: 10px;

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
  grid-template-columns: repeat(3, auto);
  justify-content: center;

  width: 100%;
  gap: 45px;
`;

export default App;
