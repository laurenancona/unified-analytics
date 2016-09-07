# Using Google Tag Manager to Generate JSON-LD 

The goal of this is to better surface government-related information and open data in search results by generating structured data dynamically, via Google Tag Manager, without the need to change markup of the site itself.

_This is experimental and will require testing against current Google (et al) consumption of structured markup & algorithms._

Based on work outlined [here](https://moz.com/blog/using-google-tag-manager-to-dynamically-generate-schema-org-json-ld-tags) by @chrisgoddard

## Open Data

We'll start with a few attributes common to most open datasets:

|  **Property** | **Expected Type** | **Description** |
|  :------ | :------ | :------ |
|  **Properties from Dataset**   |
|  **distribution** | DataDownload | A downloadable form of this dataset, at a specific location, in a specific format. |
|  **includedInDataCatalog** | DataCatalog | A data catalog which contains this dataset. Supersedes catalog, includedDataCatalog.<br/>Inverse property: dataset. |
|  **Properties from CreativeWork** |  |  |
|  **about** | Thing | The subject matter of the content. |
|  **author** | Organization or <br/>Person | The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably. |
|  **comment** | Comment | Comments, typically from users. |
|  **dateCreated** | Date or <br/>DateTime | The date on which the CreativeWork was created or the item was added to a DataFeed. |
|  **dateModified** | Date or <br/>DateTime | The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed. |
|  **datePublished** | Date | Date of first broadcast/publication. |
|  **fileFormat** | Text or <br/>URL | Media type, typically MIME format (see IANA site) of the content e.g. application/zip of a SoftwareApplication binary. In cases where a CreativeWork has several media type representations, 'encoding' can be used to indicate each MediaObject alongside particular fileFormat information. Unregistered or niche file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia entry. |
|  **inLanguage** | Language or <br/>Text | The language of the content or performance or used in an action. Please use one of the language codes from the IETF BCP 47 standard. See also availableLanguage. Supersedes language. |
|  **keywords** | Text | Keywords or tags used to describe this content. Multiple entries in a keywords list are typically delimited by commas. |
|  **license** | CreativeWork or <br/>URL | A license document that applies to this content, typically indicated by URL. |
|  **sourceOrganization** | Organization | The Organization on whose behalf the creator was working. |
|  **thumbnailUrl** | URL | A thumbnail image relevant to the Thing. |
|  **Properties from Thing** |  |  |
|  **name** | Text | The name of the item. |
|  **url** | URL | URL of the item. |
|  **description** | Text | A description of the item. |

### References:

[Schema.org](https://schema.org) Types
   - [Data Catalog](https://schema.org/DataCatalog)
   - [Dataset](https://schema.org/Dataset)
   - [Data Download](https://schema.org/DataDownload)
   - [Data Feed](https://schema.org/DataFeed)
   

## Goverment Offices
 - coming soon

## Government Websites
 - coming soon

