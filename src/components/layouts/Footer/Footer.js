import { Layout, Row, Col } from "antd";

function Footer() {
  const { Footer: AntFooter } = Layout;
  return (
    <AntFooter style={{ background: "#fafafa" }}>
      <Row>
        <Col>
        <div className="copyright">
            © 2022, made with by
            <a href="#pablo" className="font-weight-bold" target="_blank">
              PU Company Software
            </a>
          </div>
        </Col>
      </Row>
    </AntFooter>
  );
}

export default Footer;
