import Header from "./Header";

function Layout({ children }: any) {
  return (
    <div>
      <div className="">
        <div className="bg-lime-100">
          <Header />
        </div>
        {children}
      </div>
    </div>
  );
}

export default Layout;
