import { createApp } from "vue";
import "./assets/global.css";
import Button from "ant-design-vue/lib/button";
import Checkbox from "ant-design-vue/lib/checkbox";
import List from "ant-design-vue/lib/list";
import Input from "ant-design-vue/lib/input";
import Spin from "ant-design-vue/lib/spin";
import Form from "ant-design-vue/lib/form";
import "ant-design-vue/dist/antd.css";
import App from "./App.vue";

import store from "./store";

const app = createApp(App);
app.use(List);
app.use(Checkbox);
app.use(Input);
app.use(Button);
app.use(Spin);
app.use(Form);
app.use(store);
app.mount("#app");
