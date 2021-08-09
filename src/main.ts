import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "normalize.css"
import "animate.css"
import "./assets/css/index.less"
import { registerElementUi } from "@/global"

const app = createApp(App)
app.use(registerElementUi)
app.use(store)
app.use(router)
app.mount("#app")
