import { DefineComponent } from "vue";
import { ElMessage } from "element-plus";

declare module "*.vue" {
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    // elemetnt-plus $message
    $message: typeof ElMessage;
  }
}
