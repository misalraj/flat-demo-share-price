# Flat Data Demo - Share Price

This demo is part of a larger Flat Data project created by [GitHub OCTO](https://octo.github.com/). Read more about the project [here](https://octo.github.com/projects/flat-data).

## What this demo does

This repository uses a [Flat Data Action](https://octo.github.com/blog/flat-data) to fetch the current price of Bitcoin [from this link](https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo) and downloads that data to `share-price.json` and a filtered version of the data to `share-price-postprocessResults.json`. Both files are updated every 5 minutes if there are changes.

## For more info

Check this [repo](https://github.com/githubocto/flat-demo-bitcoin-price).

## Using the Flat Editor VSCode extension

You can also create Flat Data Action files easily with Flat Editor, a VSCode extension: [https://github.com/githubocto/flat-editor](https://github.com/githubocto/flat-editor).


## License

[MIT](LICENSE)
