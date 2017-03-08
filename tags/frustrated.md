# Frustrated Users

Example of loading a simple JavaScript in a custom HTML tag, triggering a custom event if a user clicks any element more than 5x in less than 800 milliseconds. Useful for further targeting user research tooling in existing large sites.

### There are 4 components:

#### Tags
 - **[Frustrated.js](https://github.com/laurenancona/unified-analytics/blob/gh-pages/tags/frustrated.js)** _(Custom HTML):_ Loads the script on any desired page (configure trigger accordingly, e.g. All Pages, etc)
 - **Frustrated User Event** _(Google Analytics Custom Event)_
   - Event Category: **Behavior**
   - Event Action: **Frustrated User**
   - Event Label: **{{Element Id}}**

#### Trigger
 - **Frustrated User**: Fires the **Frustrated User Event**

#### Variables
  - **Element Id** _(Auto-Event Variable):_ Captures the id (if present) of the element a user clicked to trigger the **Frustrated User Event** and passes it as the Event Label_ to Google Analytics.
  
### Configuration 

Download the [frustrated.json](/json/frustrated.json) and upload to Google Tag Manager to add all of the above configuration

### Reporting

Import [this custom configuration](https://www.google.com/analytics/web/template?uid=kxWo7ztZRpSQyl9p18EvLQ) to any Google Analytics view to report on the custom event data captured by this example.

##[Frustrated Users Custom Report Config](https://www.google.com/analytics/web/template?uid=kxWo7ztZRpSQyl9p18EvLQ)

- Includes a tab for viewing `Most Frustrated Users` by `clientId` (random string assigned by GA for a unique user during a unique session - requires customization of the Google Analytics Pageview tag to capture AND be mapped to a _Custom Dimension_ slot in Google Analytics admin interface)
- Includes a tab for viewing `Most Frustrating Pages` (largest total of `Frustrated` events)
- Includes a tab for viewing `Most Frustrating Directories` 
- Includes a tab for viewing `Most Frustrating Elements` where `Event Label` = `elementId`, includes `Full URL` of parent page 

![](/images/frustrated.png)

