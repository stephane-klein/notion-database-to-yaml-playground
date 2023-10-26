#!/usr/bin/env node
import yaml from "js-yaml";
import { Client } from "@notionhq/client";

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
})

let databaseResult = await notion.databases.query({
    // https://www.notion.so/61b0ae8cade84ef08870ca24680fd605?v=c6f401cc136346959ad031eb4dede3b7
    database_id: "61b0ae8cade84ef08870ca24680fd605",
    sorts: [
        {
            timestamp: "created_time",
            direction: "ascending"
        }
    ]
});

const outputData = {
    "rows": []
}

for (const page of databaseResult.results) {
    if (page.properties.Name.title.length > 0) {
        outputData.rows.push({
            "Name": page.properties.Name.title[0].plain_text,
            "Age": page.properties.Age.number
        });
    }
}

console.log(yaml.dump(outputData));
