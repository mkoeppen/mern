const express = require("express");
const port = 3000;
const app = express();
app.use(express.static("static"));

const issues = [
    {
        id: 1,
        status: "Open",
        owner: "Ravan",
        created: new Date("2017-08-15"),
        effort: 5,
        completionDate: undefined,
        title: "Error in console when clicking Add"
    },
    {
        id: 2,
        status: "Assigned",
        owner: "Eddie",
        created: new Date("2017-08-16"),
        effort: 14,
        completionDate: new Date("2017-08-30"),
        title: "Missing bottom border on panel"
    }
];

app.get("/api/issues", (request, response) => {
    const metadata = { total_count: issues.length };
    response.json({ _metadata: metadata, records: issues });
});

app.listen(port, function () {
    console.log("App started on port " + port);
});

