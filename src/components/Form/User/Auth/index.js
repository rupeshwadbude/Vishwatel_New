import loadable from "@loadable/component";

export const LoginForm = loadable(() => import("./Login/index.form"));
export const SignUpForm = loadable(() => import("./SignUp/index.form"));
