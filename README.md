# nodejs-api
NodeJS API

Miro diagram: https://miro.com/app/board/uXjVPqyWFI0=/?share_link_id=288699689830

● Instructions on how to build and start the web API locally

1 required tools

Download NodeJs: https://nodejs.org/en/download/   ( select version for you )
-Be sure to download recommended tools ( this will include NPM )

Postman ( if you will use for testing endpoints )

VSCode

Source: https://github.com/jmfinch/nodejs-api ( public - clonable or pull down zip )

2 initialize ( utilzing terminal, or VSCODE )
navigate to source folder 
npm init
npm install --save express
npm install --save-dev nodemon
npm install --save body-parser
npm install --save-in-memory-database
npm start

3 test endpoints (Postman Collection is included for easy testing of endpoints with existing parameters)
 -Supports curl or any other endpoint tool.


● Documentation for the API endpoints and any parameters required

    Miro diagram: https://miro.com/app/board/uXjVPqyWFI0=/?share_link_id=288699689830
    http://localhost:4300/device/store
    {
        "id": "6769789g798g69g77697",
        "readings": [
            {
            "timestamp": "2023-02-01T01:35:15.770Z",
            "count": 6
            },
                {
            "timestamp": "2023-02-01T01:37:15.770Z",
            "count": 8
            }
        ]
    }
    http://localhost:4300/device/detail?id=6769789g798g69g77697
    http://localhost:4300/device/latest?id=6769789g798g69g77697
    http://localhost:4300/device/cummulative?id=6769789g798g69g77697


● A brief summary of how the project is structured

    Server sets listening on http server with port.
    Handler processes all incoming requests and sends them to their proper route.
    handler/routes endpoint logic to handle individual requests.

● A list of improvements, items, optimizations you would have included if given
more time

    implement a better model structure ( put in sqllite3 - possibly )
    logging for debugging efforts
    rework some of the logic based on an update to using models ( make code more DRY )
