#Unified Analytics for Government
This will be an ongoing documentation of one method for implementing web analytics to track many government agency website in a single Google Analytics profile, useful for publishing data with a tool such as analytics-reporter or 

_This guide is under active development_

##About this Guide
I've included 2 ways to get up and running: The Easy Way, and the _"I want to understand how to do this"_ way. In the near future, I'm planning to build a wizard-style version of The Easy Way (stay tuned).

     [The Easy Way](https://www.google.com/analytics)

_No? Okay keep reading for a detailed explanation of a simple intial Google Tag Manager implementation of a single Google Analytics Profile to track web traffic from an entire state/local government's online properties._

Common Terms:
================
|-----|-----|
| GTM | Google Tag Manager |
| GA | Google Analytics |

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

###Set up to include Google Analytics

Since Tag Manager acts as a “container” for code within a web page, it can include many different types of code snippets, used to measure everything from user interaction to advertising conversions. It was designed with native integration with Google Analytics, and also enables collection of a few extra dimensions in GA such as demographic data (age, gender) out of the box.

Each snippet we want to include is a “tag,” and we’ll add the GA Page View (the primary, required hit we need to send data to GA) to our container as the first one. This is the equivalent of adding the GA code snippet directly to your site.

     Click **Tags** in left sidebar
     ![]
     Click **New**
     ![]
     Enter a name for the tag, e.g. **example.gov GA pageview**
     ![]

####1 Choose Product
     Click **Google Analytics**

####2 Choose a Tag Type
     Select **Universal Analytics**

For now, this guide will discuss creating a **new** Rollup (umbrella) account. Using an extant account may be done in the same manner, but it’s unlikely you’d want to begin sending traffic from many government agencies’ sites into an account previously used for only one.

(note: all Google Analytics accounts have been migrated to Universal Analytics, if you have not yet upgraded your snippets this is a good time to do so. More: https://developers.google.com/analytics/devguides/collection/upgrade/)

**Continue**

####3 Configure Tag

     - Add **Tracking ID** (this is your Profile ID from Google Analytics, e.g. UA-123456-01)

     - Select **Enable Display Advertising Features**

     - Leave **Track Type** set at ‘Page View’

     - Click **More settings** to expand
     ![]
          - Under **Fields to Set**, choose **Add Field**
               - For **Field Name**, enter 'forceSSL' 
               - For **Value**, enter 'true'
               _(this ensures GTM will always send data to GA via HTTPS)_
          - **+Add Field**
               - For **Field Name**, enter 'anonymizeIp'
               - For **Value**, enter 'true'

     - Under **Advanced Configuration**
     ![]
          - Change **Enable Enhanced Link Attribution** to ‘True’

**Continue**

####4 Fire On
We need to tell Tag Manager which pages we want it to send data about to Google Analytics. It’s tempting to use ‘All Pages’ here, which would fire our GA tag wherever we have added the Tag Manager snippet. One reason *not* to do this is that, similar to the Google Analytics snippet itself, anyone with the account ID could send traffic to your GA Profile. We can also set up a Filter in GA to do this (and there's nothing wrong with doing both), but for continuity I'm choosing to manage as many factors as possible within the GTM interface.

     - Therefore, I recommend choosing **Some Pages**
          - Create **New**
          - **Save**

     - Your GA Page View tag should now look like this:
     ![]

     **Create Tag**

     Now you should have a GA Page View tag configured:
     ![]

####Publish
Your snippet will now be sending Google Analytics data from any site in which it is embedded _AND_ matches the Hostname you configured in the Page View tag we configured.

**Important:** 
GTM has several useful features specifically built for managing large implementations like this. More on this later, but one of these is **versioning**, which means each time you make changes, you need to **Publish** your container before changes affect your code. It also means if, after testing (see below) you find something in your container is borking your site, you can roll back to a previously testing version with 1 click.

####A Word on Testing
I recommend creating _an additional_ Google Analytics Profile for testing (e.g. ‘example.gov testing’) and using that Profile ID to send traffic to while you test the code snippet in your development workflow. When you’re deploying to production, simple change the ‘Tracking ID’ value in your GA Page View tag to that of your production Rollup Profile. This prevents junk traffic from being sent from staging sites to your GA Profile intended for useful reporting.

**Note:** _as you deploy the container snippet to agency or special interest sites that are not part of your primary .gov domain, you’ll need to add those hostnames to the above trigger, otherwise traffic to those sites will not be included in your Rollup account in GA._

###Roadmap:
- Auto configuration for debugging/testing workflow without changing Profile ID
- Sending tracking data to multiple GA Profiles from one GTM container (for example, if an agency has their own analytics installed already, you can easily send traffic to their GA account as well as your Rollup Profile)
- Advanced configurations using Variables and Triggers to automatically track forms, document downloads, button clicks, video plays, and other user interaction
- What should we measure?
- Advanced Google Analytics configuration using built in GTM functions: Custom Events, Goals, Segments, and Custom Dimensions and Metrics


