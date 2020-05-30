import { h, defineComponent, ref } from "vue";
import Counter from "./Counter";

// Simple "Hack" to get  JSX to work!
const React = {
  createElement(tag: string, attributes: any | null, ...children: any[]) {
    return h(tag, attributes, children);
  },
};

export default defineComponent({
  render() {
    return (
      <div>
        <Counter />
        <Counter stepSize={20} />
        <Counter initialCount={20} />
      </div>
    );
  },
});
