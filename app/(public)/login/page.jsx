import LoginForm from "@/app/_components/LoginForm";

export const metadata = {
  title: "Login Page",
  description: "Sign in to your account",

  robots: { index: false },
};

function LoginPage() {
  return <LoginForm />;
}

export default LoginPage;
