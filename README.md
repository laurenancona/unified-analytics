#Unified Analytics for Government
ready-to-deploy custom web analytics collection & reporting for government

![](https://raw.githubusercontent.com/laurenancona/unified-analytics/gh-pages/images/config.png)

There are three basic components to any web analytics implementation: **configuration, collection, and reporting**. This setup gives a solid foundation for all three, using a single snippet of code that is installed on each page of every site to be included in tracking.

This will be an ongoing documentation of one method for implementing web analytics to track many government agency websites using Google Analytics, with the goal of populating a dashboarding tool such as [analytics-reporter](https://github.com/18F/analytics-reporter) or [city-analytics-dashboard](https://github.com/codeforamerica/city-analytics-dashboard).

**_This project is under active development and not (quite) ready for production_**

##How to use.

####1.  [Pre-configuration](https://github.com/laurenancona/unified-analytics/blob/gh-pages/prepare-ga.md) items for this setup in Google Analytics & GTM.

####2.  [Deploying Tag Manager](https://raw.githubusercontent.com/laurenancona/unified-analytics/gh-pages/deploy-tag-manager.html)

####3.  [Custom Reports](https://github.com/laurenancona/unified-analytics/blob/gh-pages/reporting.md)

---

##[Roadmap](https://github.com/laurenancona/unified-analytics/wiki/Roadmap)

#### Near Future
* ~~Add Frustrated.js to container and configure coresponding custom report~~
* Incorporate in-line [feedback form](https://github.com/luckyshot/ga-feedback) as a config option - sends user feedback comments to GA as custom events.
* Release universal reporting tool using the Google Analytics Embed API | *in progress*

#### Long Term
* Browser-based client-side app that allows user to auth to Google Tag Manager account, select custom features, fill in a few variables such as `domain` and Google Anaytics `Profile Id` and upload config (`json`) directly to a container. This would eliminate the need to touch both GA & GTM interfaces directly.
