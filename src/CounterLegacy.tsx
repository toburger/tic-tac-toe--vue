import { h, defineComponent } from "vue";

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
        <button onClick={() => this.decrease()}>-</button>
        {this.count}
        <button onClick={() => this.increase()}>+</button>
      </div>
    );
  },
});
