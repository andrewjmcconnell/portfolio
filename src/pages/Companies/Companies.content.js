import Citybase from "../../img/companies/citybase.png";
import Optum from "../../img/companies/optum.png";
import Nielsen from "../../img/companies/nielsen.png";

export default [
  {
    img: Nielsen,
    position: "Technical Intern",
    description: [
      `Built a framework to migrate ODS (operational data store) DataStage code to Python script. The current platform provides an interface allowing Nielsen customers access to large stores of consumer data.`,
      `New code targeted two key ETL data requests associated with the Answers On Demand service, providing a cheaper, faster and easier-to-use customer interface intended for scale across all ETL use cases.`
    ]
  },
  {
    img: Optum,
    position:
      "Technology Development Program Senior Associate, Mobile Application Developer",
    description: [
      `Developer a Kibana application plugin in conjunction with setting up an Elasticsearch cluster for internal application monitoring. Using Cytoscape.js and React to create a real-time visualization suite to monitor business flows and search for and flag anomalies/system failures.`,
      `Spun up rapid prototype cross-platform diabetes management app. Used Cordova, Framework7 and Vue to create a working model app to be handed off for full production.`,
      `Created a native iOS mobile app from scratch in Swift to support specialty pharmacy business, to replace jQuery mobile app.`
    ]
  },
  {
    img: Citybase,
    position: "Software Engineer",
    description: [
      `Developing highly customizable Payment and Profile software-as-a-service applications that can be configured to any client or user.`,
      `Helped in the full stack development of an Invoice payment system, allowing client websites to redirect from their own website to Citybase's Checkout system while maintaining user and payment information.`,
      `Spent time in product support and developer-on-call rotations to assist clients' P0 issues, solving problems in production environments.`,
      `Development responsibilities include feature work, end-to-end testing, accessibility improvements, continuous integration and deployment, and more.`
    ]
  }
];
