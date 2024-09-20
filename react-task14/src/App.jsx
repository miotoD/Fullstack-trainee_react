import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div
        className="h-screen w-screen bg-black"
        style={{
          backgroundImage: `url('/bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <Main />
      </div>
    </>
  );
}

export default App;
