# google.sheets-as-a-backend

Just a few helpers for accessing google sheets as json

## Usage

### FetchGoogleJSON
A wrapper around the fetch API, with a helper method to clean up Google's JSON

```javascript
new FetchGoogleJSON("https://spreadsheets.google.com/feeds/list/13qiQDk9L7YjSNTAOP-Hj8obRHRd9DuHt31GlvtDs99A/od6/public/values?alt=json", show);
function show(d){
    console.log(d)
}
```