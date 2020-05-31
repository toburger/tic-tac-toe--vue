import { h, defineComponent, ref } from "vue";
import Counter from "./Counter";
import CounterLegacy from "./CounterLegacy";
import CounterVuex from "./CounterVuex";
import CounterWithTemplate from "./CounterWithTemplate.vue";

export default defineComponent({
  render() {
    return (
      <div>
        NEW STYLE
        <Counter />
        <Counter stepSize={20} />
        <Counter initialCount={20} />
        LEGACY
        <CounterLegacy />
        VUEX
        <CounterVuex />
        <CounterVuex />
        <CounterVuex />
        TEMPLATE STYLE
        <CounterWithTemplate />
      </div>
    );
  },
});
