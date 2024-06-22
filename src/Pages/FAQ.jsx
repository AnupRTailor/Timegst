import React, { useState } from "react";
import "./FAQ.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("tab1"); // Set the default active tab
  const [activeAccordion, setActiveAccordion] = useState(null); // Track the active accordion item

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setActiveAccordion(null); 
  };

  const handleAccordionClick = (index) => {
    setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = getFAQData(activeTab);

  return (
    <div className="contact-area pt-100 pb-70">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="section-title">
            <span className="sp-color1"></span>
            <h2 className="que1">Frequently Asked Questions</h2>
          </div>
          <div className="que2">
            <div className="nav nav-pills faq-nav" id="faq-tabs" role="tablist" aria-orientation="vertical">
              {faqTabs.map((tab) => (
                <a
                  key={tab.id}
                  href={`#${tab.id}`}
                  className={`nav-link ${activeTab === tab.id ? "active show" : ""}`}
                  data-toggle="pill"
                  role="tab"
                  aria-controls={tab.id}
                  aria-selected={activeTab === tab.id}
                  onClick={() => handleTabClick(tab.id)}
                >
                  <i className={`mdi mdi-${tab.icon}`}></i> {tab.label}
                </a>
              ))}
            </div>
          </div>

          <div className="que3">
            <div className="accordion">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className={`contentBx ${activeAccordion === index ? 'active' : ''}`}
                  onClick={() => handleAccordionClick(index)}
                >
                  <div className="label">{item.label}</div>
                  <div className="content">
                    <p className="contentdis">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const faqTabs = [
  { id: "tab1", label: "All Categories", icon: "help-circle" },
  { id: "tab2", label: "Account", icon: "account" },
  { id: "tab3", label: "Invoicing & Billing", icon: "account-settings" },
  { id: "tab4", label: "Pricing", icon: "heart" },
  { id: "tab5", label: "Partner", icon: "coin" },
];

const getFAQData = (tabId) => {
  switch (tabId) {
    case "tab1":
      return [
            { 
            label: 'Q. What kind of businesses can use TimeGST for accounting?', 
            content: 'TimeGST is a business accounting application to manage your business digitally. It can be used for any small and micro scale businesses. All kinds of retail, wholesale, distributorship business can use TimeGST to manage their businesses hassle-free.' 
            },
            {
            label: "Q. I'm a Manufacturer. Can I use TimeGST?",
            content: 'Yes, manufacturing business can use TimeGST to manage their business',
            },
            {
            label: 'Q. Do you implement customised requirement?',
            content: 'Yes, We Provide This feature',
            },
            { 
            label: 'Q. Is Vyapar Cloud/Web-based?',
            content: 'Yes, TimeGST is Cloud and Web based software.',
            },
            {
            label: 'Q. How do I get support?',
            content: (
              <>
                Please contact us at <br />
                9428147709 For any queries
              </>
            ),
            },
            {
            label: 'Q. Can I upload Tally data into TimeGST?',
            content: 'Yes, We Provide This feature',
            },
            {
            label: 'Q. Can I export TimeGST data into tally?',
            content: 'Yes, We Provide This features',
            },
            {
            label: 'Q. Can I backup TimeGST data?',
            content: 'Yes, We Provide This feature',
            },
            {
            label: 'Q. How to see previous year data?',
            content: 'A backup of your previous year data will be created in your device/google-drive at the time of closing book. Restore that file to your TimeGST to see your previous year data.',
            },
            {
            label: 'Q. How to become a partner of TimeGST? Link partner with',
            content: (
              <>
                Visit our "Channel Partner" Page to find out about our Partner program >> {' '}
                <a href="/#Partner">Click Here</a>
              </>
            ),
            },
            {
            label: 'Q. Should I pay registration charges to become a Partner?',
            content: 'No, There is no registration fees to become a Partner of TimeGST',
            },
            {
            label: 'Q. Do you provide training for a Partner?',
            content: 'Yes, we provide online training to our Partner. Also, any business/technical queries will be answered by us even later on.',
            },
            {
            label: 'Q. What are the modes of payment for purchasing TimeGST?',
            content: 'We accept online payments through credit/debit card, netbanking, and wallets such as Freecharge, PayZapp, Airtel Money, Ola Money, PhonePe, YesPay etc.',
            },
            {
            label : 'Q. Where can I find the pricing detials?',
            content: (
              <>
                You can either visit our website {' '}
                <a href="/#Pricing">Click Here</a>
              </>
            ),
            },
            {
            label : 'Q. What are the charges for TimeGST?',
            content: (
              <>
                TimeGST has a price attached. <a href="/#Pricing">Click Here</a>  <br />
                View all plans here           <br/>
                TimeGST has a 15-day free trial.
              </>
            ),
            },
            {
            label: 'Q. What is my expected profit margin? For partner',
            content: 'For margin and related queries contact 9428147709.',
            },
            {
            label: 'Q. Can I access the same TimeGST account from any devices?',
            content: 'Yes',
            },
            {
            label: 'Q. How can I manage user permission?',
            content: 'You can enable user-role permission from settings.',
            },
            {
            label: 'Q. Can I export party details from existing company to new company in TimeGST?',
            content: 'Yes, You can by exporting all party reports from reports section & then go to the new companies utitity & download sample file & make sure your party details are fed based on the sample file and select the new file and restore it.',
            },
            {
            label: 'Q. How to generate pdf of outstanding bills?',
            content: 'You can generate outstanding bill list by filtering the unpaid ones from "all transactions report".',
            },
            {
            label: 'Q. Where can I see my balance sheet?',
            content: 'Balance Sheet is available in the Reports section.',
            },
            {
            label: 'Q. How can I check creditor/debitor list?',
            content: 'Check all parties report in report section and filter for receivables or payables based on your requirement.',
            },
            {
            label: 'Q. How to add packaging charge in bill?',
            content: 'Yes, you can add any amount of "Additional Charge" in the bill. You can enable it in transaction settings.',
            },
            {
            label: 'Q. Can we do Item grouping in TimeGST?',
            content: 'Yes, TimeGST lets you create different categories for your items. This can be enabled in your item settings.',
            },
            {
            label: 'Q. Can I take invoice print with my Label Printer?',
            content: 'Yes, To print an invoice with a Label printer, you can enable it in the "Print" option available in Settings.',
            },
            {
            label: 'Q. Can I reset my invoice number back to 1?',
            content: 'Yes, To reset your invoice number & other transactions, click on “Close Financial Year” from utilities. Under “Restart Transaction Numbers”, change prefixes for the invoice. This will reset your invoice number.',
            },
      ];
    case "tab2":
      return [
            { 
            label: "How can i login in time gst", 
            content: (
                <>
                  Please Click On Login from above menubar  {' '}
                  <a href="/Pages/Login">Click Here</a>
                </>
              ), 
            },
   
      ];
      case "tab3":
        return [
              { 
              label: "Q. Can I export party details from existing company to new company in TimeGST?", 
              content: "Yes, You can by exporting all party reports from reports section & then go to the new companies utitity & download sample file & make sure your party details are fed based on the sample file and select the new file and restore it.",
              },
              { 
                label: "Q. How to generate pdf of outstanding bills?", 
                content: 'You can generate outstanding bill list by filtering the unpaid ones from "all transactions report"',
              },
              { 
                label: "Q. Where can I see my balance sheet?", 
                content: "Balance Sheet is available in the Reports section.",
              },
              { 
                label: "Q. How can I check creditor/debitor list?", 
                content: "Check all parties report in report section and filter for receivables or payables based on your requirement.",
              },
              { 
                label: "Q. How to add packaging charge in bill?", 
                content: 'Yes, you can add any amount of "Additional Charge" in the bill. You can enable it in transaction settings.',
              },
              { 
                label: "Q. Can we do Item grouping in TimeGST?", 
                content: "Yes, TimeGST lets you create different categories for your items. This can be enabled in your item settings.",
              },
              { 
                label: "Q. Can I take invoice print with my Label Printer?", 
                content: 'Yes, To print an invoice with a Label printer, you can enable it in the "Print" option available in Settings.',
              },
              { 
                label: "Q. Can I reset my invoice number back to 1?", 
                content: "Yes, To reset your invoice number & other transactions, click on “Close Financial Year” from utilities. Under “Restart Transaction Numbers”, change prefixes for the invoice. This will reset your invoice number.",
              },
     
        ];
        case "tab4":
          return [
                { 
                label: "What are the charges for TimeGST?", 
                content: (
                  <>
                    You can either visit our website <a href="/#Pricing">Click Here</a>  
                  </>
                ),
                },
                { 
                  label: "What are the modes of payment for purchasing TimeGST?",
                  content: 'We accept online payments through credit/debit card, netbanking, and wallets such as Freecharge, PayZapp, Airtel Money, Ola Money, PhonePe, YesPay etc.',
                },
          ];
          case "tab5":
            return [
                  { 
                  label: "How to become a partner of TimeGST? Link partner with", 
                  content: (
                    <>
                      Visit our ""Channel Partner"" Page to find out about our Partner program >> <a href="/Pages/Partner">Click Here</a>  
                    </>
                  ),
                  },
                  { 
                    label: "Should I pay registration charges to become a Partner?",
                    content: "No, There is no registration fees to become a Partner of TimeGST",
                  },
                  { 
                    label: "Do you provide training for a Partner?",
                    content: "Yes, we provide online training to our Partner. Also, any business/technical queries will be answered by us even later on.",
                  },
            ];
    default:
      return [];
  }
};

export default FAQ;
