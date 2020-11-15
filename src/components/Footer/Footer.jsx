import { Footer, Link } from "arwes";
import "./Footer.scss";
function ClientZone() {
  return (
    <div className="footer">
      <Footer animate>
        <div className="footerContainer">
          <div className="footerLogo">
            <h4>GEEKFLIX</h4>
          </div>
          <div className="footerContent">
            
            <span>
              A masterpice brought to you by:{" "}
              <Link target="_blank" href="https://github.com/Agredas">
                {" "}
                Andrea Ágredas{" "}
              </Link>
              ,{" "}
              <Link target="_blank" href="https://github.com/robergeekhub">
                {" "}
                Roberto González{" "}
              </Link>
              ,{" "}
              <Link target="_blank" href="https://github.com/RafaLinaresMolina">
                {" "}
                Rafa Linares{" "}
              </Link>
            </span>
          </div>
        </div>
      </Footer>
    </div>
  );
}

export default ClientZone;
