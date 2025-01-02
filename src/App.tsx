import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section
          id="home"
          className="h-screen flex items-center justify-center bg-blue-100"
        >
          <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
        </section>
        <section
          id="about"
          className="h-screen flex items-center justify-center bg-green-100"
        >
          <h1 className="text-4xl font-bold">About Me</h1>
        </section>
        <section
          id="projects"
          className="h-screen flex items-center justify-center bg-yellow-100"
        >
          <h1 className="text-4xl font-bold">Projects</h1>
        </section>
        <section
          id="contact"
          className="h-screen flex items-center justify-center bg-red-100"
        >
          <h1 className="text-4xl font-bold">Contact</h1>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
