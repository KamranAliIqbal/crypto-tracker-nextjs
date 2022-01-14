import Header from "./Header";

function Layout({ children }) {
  return (
    <div>
      <div className="">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Layout;
