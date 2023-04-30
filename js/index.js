import { createHeader } from "./components/createHeader.js";
import { createMain } from "./components/createMain.js";

const initApp = () => {
    const body = document.body;
    createHeader(body);
    const main = createMain(body);
}

initApp();