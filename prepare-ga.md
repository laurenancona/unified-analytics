_In preparation for the Unified Analytics implementation, we need two things (should take ~10 minutes total):_

## 1. Create a Google Tag Manager Account
_You will need a Google account; for convenience use the same email used to log in to Google Analytics._

![](https://raw.githubusercontent.com/laurenancona/unified-analytics/master/images/1-signup-screen.png)
- Go to the **[Google Tag Manager](https://tagmanager.google.com)** website. Log in to Google if required.
- Enter **Account Name** (e.g. `Example Government Name`)
- Enter **primary domain** to be measured, e.g. `example.gov`
- Agree to **Google Tag Manager Use Policy**

The snippet of code to embed on every page will be displayed next. You can always retrieve this from the control panel, but copy and save this for later _(we keep ours in a [gist on Github](https://gist.github.com/laurenancona/f65dac64e66eedce1115))._

- _**You'll be prompted to "create a tag" - ignore this for now.**_

_example snippet:_
```javascript
<!-- Google Tag Manager [example.gov] -->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-5WL4TR"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5WL4TR');</script>
<!-- End Google Tag Manager -->
```

## 2. Create __TWO__ new Google Analytics Properties:

- Name the 1st: __`yourcity.gov Reporting`__

	![](https://raw.githubusercontent.com/laurenancona/analytics-container/gh-pages/img/createproperty.gif)


- Rename the default **View** "All Web Site Data" to **`yourcity.gov Reporting`**

	![](https://raw.githubusercontent.com/laurenancona/analytics-container/gh-pages/img/renameview.gif)


- Create a **2nd View** in that Property by clicking `copy`, and name it **`yourcity.gov No Filters`**

	![](https://raw.githubusercontent.com/laurenancona/analytics-container/gh-pages/img/copyview.gif)
	

- Name the 2nd Property: **`yourcity.gov Testing`**
- Rename the default **View** from "All Web Site Data" to **`yourcity.gov Testing`**

	![](https://raw.githubusercontent.com/laurenancona/analytics-container/gh-pages/img/createtesting.gif)

---

#### More reading: 
- [Google Tag Manager Documentation](https://support.google.com/tagmanager/answer/2574370?hl=en)
- [Google Analytics for Government](https://www.digitalgov.gov/files/2014/05/2ND_EDITION__GOOGLE_ANALYTICS_FOR_GOVERNMENT_TRAINING_MANUAL-4.pdf), Sarah Kaczmarek

---

## Next: [deploying Google Tag Manager](https://github.com/laurenancona/unified-analytics/blob/gh-pages/deploy-tag-manager.md)
