import { h, defineComponent } from "vue";

// Simple "Hack" to get  JSX to work!
const React = {
  createElement(tag: string, attributes: any | null, ...children: any[]) {
    return h(tag, attributes, children);
  },
};

export default defineComponent({
  props: {
    initialCount: Number,
    stepSize: Number,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increase() {
      this.count += this.stepSize || 1;
    },
    decrease() {
      this.count -= this.stepSize || 1;
    },
  },
  computed: {
    // Doesn't compile
    // myCount() {
    //     return this.count.toFixed(10)
    // }
  },
  render() {
    return (
      <div>
        OLD STYLE:
        <button onClick={() => this.decrease()}>-</button>
        {this.count}
        <button onClick={() => this.increase()}>+</button>
      </div>
    );
  },
});
