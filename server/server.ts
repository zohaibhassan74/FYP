import { app } from "./app";
require("dotenv").config()

app.listen(process.env.PORT, () => {
    console.log(`Server is connected with the PORT ${process.env.PORT}`)
})
