import type { App } from "vue"
import "element-plus/lib/theme-chalk/index.css"
import { ElButton, ElImage } from "element-plus"

const components = [ElButton, ElImage]

export function registerElementUi(app: App) {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}
