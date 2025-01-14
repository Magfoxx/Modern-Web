import Header from "../components/Layout/Header/Header";
import HomeContent from "../components/Content/HomeContent";
import Footer from "../components/Layout/Footer/Footer";

function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <HomeContent />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
