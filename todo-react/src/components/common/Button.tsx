import React from "react";
import styled from "styled-components";
import SvgIcon from "./SvgIcon";
import { buttonTypes } from "../../types/button";

import { mdiPlus, mdiPencil, mdiDelete, mdiHome } from "@mdi/js";

type ButtonProps = {
  type: typeof buttonTypes[number];
  isCard?: boolean;
  on?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

type ButtonStyleDataType = {
  path: string;
  bgColor: string;
  pathColor: string;
  size: number;
};

type ButtonStyleDatasType = {
  [key in typeof buttonTypes[number]]: ButtonStyleDataType;
};

const buttonStyles: ButtonStyleDatasType = {
  home: {
    bgColor: "none",
    path: mdiHome,
    pathColor: "none",
    size: 30,
  },
  plus: {
    bgColor: "var(--color-red)",
    path: mdiPlus,
    pathColor: "var(--color-white)",
    size: 40,
  },
  edit: {
    bgColor: "var(--color-yellow)",
    path: mdiPencil,
    pathColor: "var(--color-gray)",
    size: 30,
  },
  delete: {
    bgColor: "var(--color-gray)",
    path: mdiDelete,
    pathColor: "var(--color-dim)",
    size: 30,
  },
};

const Button: React.FC<ButtonProps> = ({ type, isCard, on, onClick }) => {
  let styles = buttonStyles[type];

  return (
    <ButtonStyle
      bgColor={styles.bgColor}
      isCard={isCard}
      onClick={onClick}
      on={on}
    >
      <SvgIcon
        path={styles.path}
        color={on ? styles.pathColor : "var(--color-gray)"}
        size={styles.size}
      />
    </ButtonStyle>
  );
};

interface ButtonStyleType {
  bgColor: ButtonStyleDataType["bgColor"];
  isCard: ButtonProps["isCard"];
  on: ButtonProps["on"];
}
const ButtonStyle = styled.button<ButtonStyleType>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: ${(props) => (props.isCard ? "100px" : "50px")};
  border-radius: ${(props) =>
    props.isCard
      ? "0 var(--rounded-default) var(--rounded-default) 0"
      : "100%"};

  background: ${(props) => (props.on ? props.bgColor : "var(--color-dim)")};
  border: none;

  cursor: pointer;
`;

export default Button;
