import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";
import { Store as StoreRoot } from "@/types/ITodo";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<StoreRoot>;
  }
}
