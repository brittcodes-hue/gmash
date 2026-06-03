import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="prose prose-sm md:prose-base max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Gmash Real Estate Investment • Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            This Privacy Policy describes how Gmash ("we," "us," or "our") collects, uses, and protects the information you provide when you use our website at gmash.co or otherwise communicate with us. By submitting your information through our website, you agree to the practices described in this policy.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Information We Collect
            </h2>
            <p className="text-gray-700 mb-4">
              When you submit a form on our website, we may collect the following information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Your name</li>
              <li>Your phone number</li>
              <li>Your email address</li>
              <li>Your property address and details about your situation</li>
              <li>Any other information you choose to provide to us</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-4">
              We use the information you provide to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Contact you about selling your home and about foreclosure assistance services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send you marketing and informational communications, including text messages, where you have consented</li>
              <li>Provide, maintain, and improve our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              SMS / Text Messaging
            </h2>
            <p className="text-gray-700 mb-4">
              If you opt in to receive text messages from Gmash, we use your phone number to send you marketing and informational messages related to selling your home and foreclosure assistance. Message frequency varies. Message and data rates may apply. You can opt out at any time by replying STOP, or reply HELP for assistance.
            </p>
            <p className="text-gray-700">
              Mobile information and messaging consent will not be shared with third parties or affiliates for marketing or promotional purposes. No mobile opt-in data is sold, rented, or shared with third parties or affiliates for their marketing or promotional purposes. This includes text messaging originator opt-in data and consent, which will not be shared with any third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              How We Share Your Information
            </h2>
            <p className="text-gray-700">
              We do not sell your personal information. We may share information with trusted service providers who help us operate our business (such as messaging platform providers), but only to the extent necessary to provide our services to you, and subject to confidentiality obligations. As stated above, mobile information and messaging consent are never shared with third parties or affiliates for marketing or promotional purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Data Security
            </h2>
            <p className="text-gray-700">
              We take reasonable measures to protect the information you provide from loss, theft, misuse, and unauthorized access. However, no method of transmission or storage is completely secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Your Choices
            </h2>
            <p className="text-gray-700">
              You may opt out of text messages at any time by replying STOP. You may also contact us to request access to, correction of, or deletion of the personal information we hold about you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this Privacy Policy or our data practices, contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 font-semibold mb-3">Gmash</p>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> <a href="mailto:skyler@gmash.co" className="text-blue-600 hover:underline">skyler@gmash.co</a>
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> <a href="tel:720-663-7346" className="text-blue-600 hover:underline">720.663.7346</a>
              </p>
              <p className="text-gray-700">
                <strong>Website:</strong> <a href="https://gmash.co" className="text-blue-600 hover:underline">gmash.co</a>
              </p>
            </div>
          </section>

          <section className="mt-12 pt-8 border-t border-gray-300">
            <p className="text-gray-600 text-sm">
              By using our website, you consent to our Privacy Policy. This policy is effective and applies to all information collected through our website and services. Please also review our <a href="/terms-and-conditions" className="text-blue-600 hover:underline">Terms and Conditions</a> for additional information about the use of our website and services.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
