import { useCurrentUser } from "@/hooks/useCurrentUser";
import Logo from "@/components/Logo";
import AuthCard from "@/components/AuthCard";
import AuthForm from "@/components/AuthForm";
import * as S from "./styles";

type Props = {
  title: string;
  isRegister: boolean;
};

export default function AuthLayout({ title, isRegister }: Props) {
  const currentUser = useCurrentUser();
  return (
    <S.Container>
      <S.LogoWrapper>
        <Logo currentUser={currentUser} />
      </S.LogoWrapper>
      <S.MainWrapper>
        <AuthCard title={title}>
          <AuthForm isRegister={isRegister} />
        </AuthCard>
      </S.MainWrapper>
    </S.Container>
  );
}
