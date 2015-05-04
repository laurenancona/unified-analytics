#Unified Analytics for Government
This will be an ongoing documentation of one method for implementing web analytics to track many government agency website in a single Google Analytics profile.

Common Terms:
|-----|-----|
| GTM | Google Tag Manager |
| GA | Google Analytics |

================
##Google Analytics

Create new [Google Analytics](https://www.google.com/analytics) **Profile**
Write down the GA Profile ID
![]
================

##Setting up Google Tag Manager Container

You will need a Google account; for convenience use the same email used to log in to Google Analytics if you already have a GA account.

    - Go to [Google Tag Manager](https://tagmanager.google.com) website and log in to Google if asked

    - Enter **Account Name** (e.g. Example Government Name)

    - Enter **primary domain** to be measured, e.g. _example.gov_

    - Agree to Google Tag Manager Use Policy

	The snippet of code to embed on every page will be displayed next. You can always retrieve this from the control panel, but copy and save this for later if you wish.

##Preconfigured Container
For convenience, I've created a preconfigured Google Tag Manager that includes all of the features discussed in the [how-to guide](README.md).
This is possible because GTM features the ability to export/import entire container configurations as JSON files.

[Download the container template](assets/example-container.json)

