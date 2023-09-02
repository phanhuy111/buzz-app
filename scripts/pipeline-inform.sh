#!/usr/bin/env bash

curl --location --request POST 'https://api.telegram.org/bot5600076902:AAG36Cth8CADdnvf122vjGZy68HgHuUoCHI/sendMessage' \
--header 'Content-Type: application/json' \
--data-raw '{
    "chat_id": "-953629638",
    "text": "Pipeline '$4' https://github.com/'$1'/commit/'$2'/checks/'$3'"
}'