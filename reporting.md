#Reporting

####Below are links to reporting configurations for the standard Google Analytics UI. These are built to work with the Google Tag Manager configuration available as part of Unified Analytics, designed to pull out the custom data we are passing to GA.

To use, you should make sure you're logged in to the Google Analytics account in which you wish to view data, then click the links below. GA will ask you which views you'd like to have the custom report available. Select and click `Ok` and the reports will be available under the `Customization` in the top menu.

##[PDF Downloads](https://github.com/laurenancona/unified-analytics/blob/gh-pages/deploy-tag-manager.md)

Currently this report is configured to be used with the `Reporting` profile included in the Unified Analytics configuration

- Uses the anchor text of the link to PDF file as `Event Label`
- Includes `Full URL`, a custom dimension to surface the complete, unaltered URI of the page on which the PDF link resides
- Uses `Page` to connote the path to the PDF file itself

##[Frustrated Users](https://www.google.com/analytics/web/template?uid=kxWo7ztZRpSQyl9p18EvLQ)

This report is configured to work with the `Testing` profile included in the Unified Analytics configuration

- Includes a tab for viewing `Most Frustrated Users` by `clientId` (random string assigned by GA for a unique user during a unique session)
- Includes a tab for viewing `Most Frustrating Pages` (largest total of `Frustrated` events)
- Includes a tab for viewing `Most Frustrating Directories` 
- Includes a tab for viewing `Most Frustrating Elements` where `Event Label` = `elementId`, includes `Full URL` of parent page 

![](/images/frustrated.png)