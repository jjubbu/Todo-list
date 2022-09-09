import styled from "styled-components";

type SvgIconProps = {
  path: string;
  color: string;
  size: number;
};

const SvgIcon: React.FC<SvgIconProps> = ({ path, color, size }) => {
  return (
    <SvgStyled
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <PathStyled pathColor={color} d={path} />
    </SvgStyled>
  );
};

const SvgStyled = styled.svg``;

interface PathProps {
  readonly pathColor: string;
}

const PathStyled = styled.path<PathProps>`
  fill: ${(props) => props.pathColor};
`;

export default SvgIcon;
