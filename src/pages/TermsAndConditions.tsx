import { useEffect } from "react";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="prose prose-sm md:prose-base max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900">
            Terms & Conditions
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Gmash Real Estate Investment • Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            These Terms & Conditions ("Terms") govern your use of the Gmash website at gmash.co and the services we provide. By using our website or submitting your information, you agree to these Terms.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Our Services
            </h2>
            <p className="text-gray-700">
              Gmash helps people sell their homes and provides assistance navigating the foreclosure process. Information provided through our website is for general purposes and does not constitute legal or financial advice. We encourage you to consult a qualified professional regarding your specific situation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Submitting Your Information
            </h2>
            <p className="text-gray-700">
              When you submit a form on our website, you authorize Gmash to contact you using the information you provide, including by phone, email, and text message where you have consented. The information you submit must be accurate and belong to you or be submitted with proper authorization.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              SMS Terms & Conditions
            </h2>
            <p className="text-gray-700 mb-4">
              By opting in to receive text messages from Gmash, you agree to the following:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Program description:</h3>
                <p className="text-gray-700">Gmash sends marketing and informational text messages related to selling your home and foreclosure assistance to the phone number you provide.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Consent:</h3>
                <p className="text-gray-700">Your consent to receive text messages is given directly to Gmash and is not a condition of any purchase or service.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Message frequency:</h3>
                <p className="text-gray-700">Message frequency varies.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Cost:</h3>
                <p className="text-gray-700">Message and data rates may apply, depending on your mobile carrier plan.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Opt out:</h3>
                <p className="text-gray-700">You can cancel at any time by replying STOP. After you send STOP, we will send a confirmation message and then stop sending messages. To opt back in, sign up again.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Help:</h3>
                <p className="text-gray-700">For help, reply HELP or contact us using the details below.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Carriers:</h3>
                <p className="text-gray-700">Carriers are not liable for delayed or undelivered messages.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Privacy:</h3>
                <p className="text-gray-700">No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Mobile information and messaging consent will not be shared with third parties or affiliates for marketing or promotional purposes. All consent and data collected are used solely by Gmash to communicate with you. See our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a> for full details.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Acceptable Use
            </h2>
            <p className="text-gray-700">
              You agree to use our website and services only for lawful purposes and not to submit false, misleading, or fraudulent information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Disclaimers
            </h2>
            <p className="text-gray-700">
              Our services are provided "as is" without warranties of any kind. Gmash does not guarantee any particular outcome regarding the sale of your home or the foreclosure process. Real estate and foreclosure matters are subject to applicable state and federal laws, and outcomes depend on individual circumstances.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Limitation of Liability
            </h2>
            <p className="text-gray-700">
              To the fullest extent permitted by law, Gmash shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Changes to These Terms
            </h2>
            <p className="text-gray-700">
              We may update these Terms from time to time. Changes are effective when posted to our website. Your continued use of our website constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              If you have questions about these Terms, contact us at:
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
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
