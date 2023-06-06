/**
 * Import CSS Module Footer.
 * Disimpan di object styles.
 */

import StyledFooter from "./Footer.styled";
function Footer() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <StyledFooter>
    <div>
      <footer>
        <h2>Movie App</h2>
        <p>Created by Zahid Nafi</p>
      </footer>
    </div>
    </StyledFooter>   
  );
}

export default Footer;
