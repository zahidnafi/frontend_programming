// Import Navbar, Hero, Movies, Footer Component
import Movies from "../components/Movies/Movies";
import Hero from "../components/Hero/Hero";
/**
 * Membuat Component Main.
 * Menampung Hero dan Movies
 */
function Main() {
  
  return (
    <main>
      <Hero />
      <Movies/>.
    </main>
  );
}

/**
 * Membuat Component Home.
 * Menampilkan Halaman Home.
 * Menampung Navbar, Main, dan Footer Component
 */
function Home() {
  return (
    <>
      
      <Main/>
 
    </>
  );
}

export default Home;
