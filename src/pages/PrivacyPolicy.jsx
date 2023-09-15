import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-[100px]">
      <h3 className="text-[#283d50] text-center font-semibold text-4xl mb-5 pt-10 pb-5 border-b border-b-[#0000001a]">
        Privacy Policy NDrive
      </h3>
      <div className="text-xl">
        <p className="mb-5">
          This Privacy Policy describes how Ndrive collects, uses, and discloses
          your personal information when you visit, use our services, or make a purchase
          from Ndrive (the "Site") or otherwise communicate with us (collectively, the "Services").
          For purposes of this Privacy Policy, "you" and "your" means you as the user of the Services,
          whether you are a customer, website visitor, or another individual whose information we have
          collected pursuant to this Privacy Policy.
        </p>
        <p className="mb-5">
          Please read this Privacy Policy carefully.
          By using and accessing any of the Services, you agree to the collection, use,
          and disclosure of your information as described in this Privacy Policy.
          If you do not agree to this Privacy Policy, please do not use or access any of the Services.
        </p>
        <h4 className="mb-5 pb-5 pt-10 font-medium text-3xl border-b border-b-[#0000001a]">
          1. Changes to This Privacy Policy
        </h4>
        <p className="mb-5 pt-5">
          We may update this Privacy Policy from time to time,
          including to reflect changes to our practices or for other operational,
          legal, or regulatory reasons. We will post the revised Privacy Policy on the Site,
          update the "Last updated" date and take any other steps required by applicable law.
        </p>
        <h4 className="mb-5 pt-10 font-medium text-3xl">
          2. How We Collect and Use Your Personal Information
        </h4>
        <p className="mb-5">
          To provide the Services, we collect and have collected over the past 12 months personal
          information about you from a variety of sources, as set out below. The information that
          we collect and use varies depending on how you interact with us.
        </p>
        <p className="mb-5">
          In addition to the specific uses set out below, we may use information we collect about you to
          communicate with you, provide the Services, comply with any applicable legal obligations, enforce
          any applicable terms of service, and to protect or defend the Services, our rights, and the rights
          of our users or others.
        </p>
        <h4 className="mb-5 pt-10 font-medium text-3xl">
          3. What Personal Information We Collect
        </h4>
        <p className="mb-5">
          The types of personal information we obtain about you depends on how you interact with our Site and
          use our Services. When we use the term "personal information", we are referring to information that identifies,
          relates to, describes or can be associated with you. The following sections describe the categories and specific
          types of personal information we collect.
        </p>

        <h4 className="mb-5 pt-10 font-medium text-3xl">
          4. Information We Collect Directly from You
        </h4>
        <p className="mb-5">
          Information that you directly submit to us through our Services may include:
        </p>
        <p className="mb-5">
          4.1. Basic contact details including your name, address, phone number, email.
        </p>
        <p className="mb-5">
          4.2. Order information including your name, billing address, shipping address, payment confirmation, email address, phone number.
        </p>
        <p className="mb-5">
          4.3. Account information including your username, password, security questions.
        </p>
        <p className="mb-5">
          4.4. Shopping information including the items you view, put in your cart or add to your wishlist.
        </p>
        <p className="mb-5">
          4.5. Customer support information including the information you choose to include in communications with us, for example,
          when sending a message through the Services.
        </p>
        <p className="mb-5">
          4.6. Some features of the Services may require you to directly provide us with certain information about yourself.
          You may elect not to provide this information, but doing so may prevent you from using or accessing these features.
        </p>
        <h4 className="mb-5 pt-10 font-medium text-3xl">
          5. Information We Collect through Cookies
        </h4>
        <p className="mb-5">
          We also automatically collect certain information about your interaction with the Services ("Usage Data"). To do this,
          we may use cookies, pixels and similar technologies ("Cookies"). Usage Data may include information about how you access
          and use our Site and your account, including device information, browser information, information about your network connection,
          your IP address and other information regarding your interaction with the Services
        </p>
        <h4 className="mb-5 pt-10 font-medium text-3xl">
          6. Information We Obtain from Third Parties
        </h4>
        <p className="mb-5">
          Finally, we may obtain information about you from third parties, including from vendors
          and service providers who may collect information on our behalf, such as:
        </p>
        <h4 className="mb-5 pt-10 font-medium text-3xl">
          7. How We Use Your Personal Information
        </h4>
        <p className="mb-5">
          7.1  Providing Products and Services. We use your personal information to provide you with the
          Services in order to perform our contract with you, including to process your payments, fulfill your orders,
          to send notifications to you related to you account, purchases, returns, exchanges or other transactions,
          to create, maintain and otherwise manage your account, to arrange for shipping, facilitate any returns and
          exchanges and to enable you to post reviews.
        </p>
        <p className="mb-5">
          7.2 Marketing and Advertising. We use your personal information for marketing and promotional purposes,
          such as to send marketing, advertising and promotional communications by email, text message or postal mail,
          and to show you advertisements for products or services. This may include using your personal information to
          better tailor the Services and advertising on our Site and other websites.
        </p>
        <p className="mb-5">
          7.3 Security and Fraud Prevention. We use your personal information to detect, investigate or take action
          regarding possible fraudulent, illegal or malicious activity. If you choose to use the Services and register
          an account, you are responsible for keeping your account credentials safe. We highly recommend that you do not
          share your username, password, or other access details with anyone else. If you believe your account
        </p>
        <h4 className="mb-5 pt-10 font-medium text-3xl">Consent</h4>
        <p className="mb-5">
          By using our website, you hereby consent to our{" "}
          <Link to="/privacy-policy">Privacy Policy</Link> and agree to its{" "}
          <Link to="/terms-of-service">Terms and Conditions</Link>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
