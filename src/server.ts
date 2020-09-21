import { app } from "./app";

const PORT = 8000;

app.listen(process.env.PORT || PORT, () => console.log(`Server is running!`));
