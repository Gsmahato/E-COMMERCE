import React from "react";
import { signOut, useSession } from "next-auth/react";
import Breadcrumbs from "../../components/Breadcrumbs";

const Logout = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  const handleLogout = async () => {
    await signOut();
    window.location.href = "/";
  };

  const breadCrumbs = [
    { name: "Home", url: "/" },
    { name: "Logout", url: "" },
  ];

  return (
    <div className="container">
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <div className="account-details">
        <div className="login-form">
          <h2 className="login">Logout</h2>
          {session && (
            <p>Welcome, {session.user.name || session.user.email}!</p>
          )}
          <div className="login-footer">
            <button
              className="primary-btn order-submit"
              onClick={handleLogout}
              disabled={loading}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
