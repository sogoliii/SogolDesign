import Navigation from "./components/Navigation";

function ThankYou() {
  return (
    <>
      <Navigation />
      <div className="thankyou">
        <h2>Thank You for Reaching Out!</h2>

        <p>
          Thank you for your interest in working with us! We appreciate you
          taking the time to contact us. Your message has been received, and our
          team will review it promptly.
          <br /> We strive to respond to all inquiries within 24-48 hours. In
          the meantime, feel free to explore our website further or follow us on
          our social media channels to stay updated with our latest news and
          offerings.
          <br />
          We look forward to the possibility of collaborating with you.
          <br />
          Best regards,
          <br />
          Sogol Mofrad
        </p>
      </div>
    </>
  );
}

export default ThankYou;
