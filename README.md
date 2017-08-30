# google.sheets-as-a-backend

Just a few helpers for accessing google sheets as json

## Usage
`new FetchGoogleJSON(url or id, callback, prettify=true);``

| parameter     | Description |
| ------------- |:-----------:|
| url/id        | The id of the google sheet, or the entire url in the format: "https://spreadsheets.google.com/feeds/list/13qiQDk9L7YjSNTAOP-Hj8obRHRd9DuHt31GlvtDA/od6/public/values?alt=json" or "13qiQDk9L7YjSNTAOP-Hj8obRHRd9DuHt31GlvtDA" |

### FetchGoogleJSON
A wrapper around the fetch API, with a helper method to clean up Google's JSON

```javascript
new FetchGoogleJSON("https://spreadsheets.google.com/feeds/list/13qiQDk9L7YjSNTAOP-Hj8obRHRd9DuHt31GlvtDs99A/od6/public/values?alt=json", show);
function show(d){
    console.log(d)
}
```

You can also pass in the id of the sheet, like
```javascript
new FetchGoogleJSON("13qiQDk9L7YjSNTAOP-Hj8obRHRd9DuHt31GlvtDs99A", show);
function show(d){
    console.log(d)
}
```