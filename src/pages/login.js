import React from "react";
import { signIn, useSession } from "next-auth/react";
import Breadcrumbs from "../../components/Breadcrumbs";

const Login = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  const handleLogin = async () => {
    await signIn("google", { callbackUrl: "/" });
  };

  const breadCrumbs = [
    { name: "Home", url: "/" },
    { name: "Login", url: "" },
  ];

  return (
    <div className="container">
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <div className="account-details">
        <div className="login-form">
          <h2 className="login">Login</h2>
            <p>Click below to login with Google.</p>
          <div className="login-footer">
            <button
              className="primary-btn order-submit"
              onClick={handleLogin}
              disabled={loading}
            >
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
