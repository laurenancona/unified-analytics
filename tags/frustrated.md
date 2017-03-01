# Frustrated Users

Example of using a load a simple JavaScript in a custom HTML tag that fires a custom event if a user clicks any element more than 5x in less than 800 milliseconds.

### There are 4 components:

#### Tags
 - **Frustrated.js** _(Custom HTML):_ Loads the script on any desired page (configure trigger accordingly, e.g. All Pages, etc)
 - **Frustrated User Event** _(Google Analytics Custom Event)_
   - Event Category: Behavior
   - Event Action: Frustrated User
   - Event Label: {{Element Id}}

#### Trigger
 - **Frustrated User**: Fires the **Frustrated User Event**

#### Variables
  - **Element Id** _(Auto-Event Variable):_ Captures the id (if present) of the element a user clicked to trigger the **Frustrated User Event** and passes it as the Event Label_ to Google Analytics.
