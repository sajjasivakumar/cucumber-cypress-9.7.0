const report = require("multiple-cucumber-html-reporter");
report.generate({
theme: 'foundation',
jsonDir: "cypress/cucumber-json",  // ** Path of .json file **//
reportPath: "./reports/cucumber-htmlreport.html",
openReportInBrowser: true,
displayDuration: true,
useCDN: true,
pageTitle: "NetFoundry Report",
reportName: `Smoke test on ConsoleUI- ${new Date().toLocaleString()}`,
metadata: {
"App Version": "7.3.2",
"Test Environment": "SANDBOX",
browser: {
name: "chrome",
version: "110",
},
device: "Local test machine",
platform: {
name: "mac",
version: "Catalina",
},
customData: {
    title: 'Sanbox Smoke Execution',
    data: [
      { label: 'Project', value: 'NetFoundry' },
      { label: 'Release', value: '7.3.3' },
      { label: 'Cycle', value: 'itration-143' },
      { label: 'Execution Start Time', value: `${new Date().toLocaleString()}` },
      { label: 'Execution End Time', value: `${new Date().toLocaleString()}` },
    ],
  },
},
});