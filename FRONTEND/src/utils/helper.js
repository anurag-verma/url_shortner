

export function checkAuth() {
  const user = localStorage.getItem("user");
  if (!user) {
    // Not logged in, redirect to login
    throw new Response("Unauthorized", {
      status: 302,
      headers: { Location: "/login" },
    });
  }
  return null;
}

export function redirectIfAuth() {
  const user = localStorage.getItem("user");
  if (user) {
    // Already logged in, redirect to dashboard
    throw new Response("Already logged in", {
      status: 302,
      headers: { Location: "/dashboard" },
    });
  }
  return null;
}