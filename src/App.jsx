import React, { useState } from "react";
import "./App.css";
import { Button, Card, Modal } from "./components";

export default function App() {
  const [open, setOpen] = useState(false);

  // toggle states
  const [isFullWidth, setIsFullWidth] = useState(false);
  const [isDangerSm, setIsDangerSm] = useState(false);
  const [isOutline, setIsOutline] = useState(false);

  return (
    <div className="page">
      <h1>React Components Library – Demo</h1>

      <section className="row">
        <Card
          title="Buttons"
          subtitle="Reusable with variants & sizes"
          footer="Try clicking them!"
        >
          <div className="stack">
            <Button onClick={() => alert("Clicked")} variant="primary">
              Primary
            </Button>

            {/* Outline toggle */}
            <Button
              variant={isOutline ? "outline" : "primary"}
              onClick={() => setIsOutline(!isOutline)}
            >
              Outline {isOutline ? "On" : "Off"}
            </Button>

            {/* Danger(sm) toggle */}
            <Button
              variant="danger"
              size={isDangerSm ? "sm" : "md"}
              onClick={() => setIsDangerSm(!isDangerSm)}
            >
              Danger {isDangerSm ? "(sm)" : "(md)"}
            </Button>

            {/* Full width toggle */}
            <Button
              size="lg"
              fullWidth={isFullWidth} // yeh prop tumhare Button component mein honi chahiye
              onClick={() => setIsFullWidth(!isFullWidth)}
            >
              Full-Width {isFullWidth ? "On" : "Off"}
            </Button>

            <Button disabled>Disabled</Button>
          </div>
        </Card>

        <Card
          title="Modal"
          subtitle="Accessible & ESC to close"
          footer={<Button onClick={() => setOpen(true)}>Open Modal</Button>}
        >
          <p>Click “Open Modal” in the footer.</p>
        </Card>
      </section>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Hello from Modal"
      >
        <p>This modal component supports overlay click & ESC to close.</p>
        <div style={{ marginTop: 12 }}>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </div>
      </Modal>
    </div>
  );
}
