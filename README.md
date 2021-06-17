# JermaDebt

Website to track Jerma985's Debt to chat

Make a PR or File an Issue if you want something changed! :)

### To change the debt

Submit a PR with a new entry in `_data/debt.csv`

`DebtChange` is the amount to change it by (negative is down)

**Please ensure this is a number and not a string (no quotation marks, commas or any non-numerical values)**

`Date` is a short date corresponding to when the change happened in the format of `Jan. 1st, 1970`

`Reason` is a very short summary to be used on graphs and the like.

`ReasonMarkdown` is a longer summary with markdown support to add citation URLs.

`Active` is set to `FALSE` when an item that was previously added to the site has since been overruled. It is only here for historical purposes, any other time it should be set to `TRUE`.
