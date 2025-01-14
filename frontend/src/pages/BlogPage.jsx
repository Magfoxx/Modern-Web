import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";

// import styles from "./Blog.module.scss";

function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <section className="fs-1 b1">
          <h1>Page contenant le Blog</h1>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default BlogPage;
