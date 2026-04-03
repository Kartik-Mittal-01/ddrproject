import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* SAME position button (only styled) */}
      <div
        style={{
            position: "fixed",
            bottom: "60px",
            right: "20px",
            zIndex: 1050
        }}
        >
        <Button
            variant="danger"
            onClick={handleShow}
            style={{
            width: "55px",
            height: "55px",
            borderRadius: "50%",
            fontSize: "24px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            transition: "0.3s"
            }}
            onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
            onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
        >
            ?
        </Button>
    </div>

      {/* Styled Offcanvas */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        style={{ backgroundColor: "#1a1a1a", color: "#fff" }}
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title
            style={{ color: "#ff4d4d", fontWeight: "bold" }}
          >
            Plastic Management
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <div className="d-flex flex-column gap-3">

            {[
              { to: "/page1", text: "Understanding Plastics & Plastic Waste" },
              { to: "/page2", text: "Introduction to Plastic Waste" },
              { to: "/page3", text: "Plastic Waste Management Rules in India" },
              { to: "/page4", text: "Role of Government in Plastic Waste Management" },
              { to: "/page5", text: "Recent Advancements in Plastic Waste Management" },
              { to: "/page6", text: "Plastic Resource Recovery & Circular Economy" },
              { to: "/page7", text: "Plastics & Circular Economy: Integrated Perspective" }
            ].map((item, index) => (
              <Link
                key={index}
                to={item.to}
                onClick={handleClose}
                className="text-decoration-none"
                style={{
                  color: "#ccc",
                  padding: "10px",
                  borderRadius: "6px",
                  transition: "0.3s"
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#ff4d4d";
                  e.target.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "transparent";
                  e.target.style.color = "#ccc";
                }}
              >
                {item.text}
              </Link>
            ))}

          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;