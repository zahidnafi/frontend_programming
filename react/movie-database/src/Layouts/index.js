import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Container from "../components/Container/Container";

function Layout(props){
    return (
        <div>
            <Navbar></Navbar>
            <main>
                <Container>
                {props.children}
                </Container>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default Layout;