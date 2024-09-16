import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="text-light py-5 text-center">
        <Container>
          <h1 className="display-4">Stay Ahead with Red Alert</h1>
          <p className="lead">
            Timely notifications on critical news affecting your stock
            portfolio. Let us streamline the information so you can focus on
            what matters.
          </p>
          <Button variant="primary" size="lg">
            <Link to="/signup" className="text-white text-decoration-none">
              Get Started
            </Link>
          </Button>
        </Container>
      </div>

      {/* Features Section */}
      <Container className="py-5">
        <h2 className="text-center mb-4 text-white" id="features">
          Key Features
        </h2>
        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Personalized Notifications</Card.Title>
                <Card.Text>
                  Receive alerts tailored to your specific stock portfolio to
                  ensure you never miss out on important updates.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>AI/ML Integration</Card.Title>
                <Card.Text>
                  Our AI algorithms identify and prioritize news based on its
                  potential impact on your investments.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Efficient Information Delivery</Card.Title>
                <Card.Text>
                  Focus only on critical news, reducing information overload and
                  allowing you to act quickly.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* How It Works Section */}
      <Container className="bg-light py-5">
        <h2 className="text-center mb-4" id="how-it-works">
          How It Works
        </h2>
        <Row>
          <Col md={6}>
            <h4>User Profile Setup</h4>
            <p>
              Create a profile and input your stock portfolio details. Our
              system will monitor relevant news sources in real time.
            </p>
          </Col>
          <Col md={6}>
            <h4>AI Analysis</h4>
            <p>
              Red Alert's advanced AI analyzes news articles to determine which
              are relevant to your portfolio and their potential impact.
            </p>
          </Col>
          <Col md={6}>
            <h4>Notification Delivery</h4>
            <p>
              Receive notifications directly to your device whenever significant
              news is detected, ensuring you stay informed.
            </p>
          </Col>
          <Col md={6}>
            <h4>Actionable Insights</h4>
            <p>
              Each alert provides you with a priority level and key points so
              you can make informed decisions without delay.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Benefits Section */}
      <Container className="py-5 ">
        <h2 className="text-center mb-4 text-white" id="benefits">
          Benefits
        </h2>
        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Stay Ahead in the Game</Card.Title>
                <Card.Text>
                  Be among the first to know about critical events affecting
                  your stock portfolio.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Time-Saving</Card.Title>
                <Card.Text>
                  Save time by avoiding irrelevant news and focusing on what
                  truly matters to your investments.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Better Decision-Making</Card.Title>
                <Card.Text>
                  Receive priority-level notifications without manipulation,
                  giving you the power to decide on your investments.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Call to Action */}
      <div className="bg-dark text-light py-5 text-center">
        <Container>
          <h2>Ready to Stay Informed?</h2>
          <p>
            Sign up for Red Alert and start receiving personalized stock
            notifications today.
          </p>
          <Button variant="primary" size="lg">
            <Link to="/signup" className="text-white text-decoration-none">
              Sign Up Now
            </Link>
          </Button>
        </Container>
      </div>
    </>
  );
};

export default HomePage;
