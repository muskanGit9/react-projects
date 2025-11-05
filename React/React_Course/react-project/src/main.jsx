import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

// eslint-disable-next-line react-refresh/only-export-components
function HomePage() {
  return (
    <>
      <Header />
      <h1>Hello World</h1>
      <Footer />
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
function Footer() {
  return (
    <>
      <p>muskan is here</p>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
function Header() {
  return (
    <>
      <h1>Welcome to the react</h1>
    </>
  );
}

root.render(
  <div>
    <HomePage />
    <Footer />
    <Header />
  </div>
);
