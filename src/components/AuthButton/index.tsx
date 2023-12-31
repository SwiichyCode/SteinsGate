import Link from "next/link";
import styled from "styled-components";

type Props = {
  text?: string | null;
  backgroundcolor: string;
  color: string;
  icon?: string | JSX.Element | null;
  href: string;
  onClick?: () => void;
};

const Container = styled.button<{ backgroundcolor: string }, { color: string }>`
  width: auto;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  border: none;
  border-radius: 5px;
  color: ${({ color }) => color};
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  background-color: ${({ backgroundcolor }) => backgroundcolor};
  padding: 0 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 10px 42px -3px rgba(220, 20, 60, 0.7);
  }

  a {
    text-decoration: none;
    color: ${({ color }) => color};

    @media (max-width: 1180px) {
      height: 20px;
    }
  }
`;

export default function AuthButton({
  text,
  icon,
  backgroundcolor,
  color,
  href,
  onClick,
}: Props) {
  return (
    <Container
      backgroundcolor={backgroundcolor}
      color={color}
      onClick={onClick}
    >
      <Link href={href}>
        {text} {icon && icon}
      </Link>
    </Container>
  );
}
