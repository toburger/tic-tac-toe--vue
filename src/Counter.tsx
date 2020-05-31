import { h, defineComponent, ref, computed } from "vue";

export default defineComponent({
  props: {
    initialCount: Number,
    stepSize: Number,
  },
  setup({ initialCount = 0, stepSize = 1 }) {
    const count = ref(initialCount);

    // Methods
    const increase = () => {
      count.value += stepSize;
    };
    const decrease = () => {
      count.value += stepSize;
    };
    const reset = () => {
      count.value = 0;
    };

    // Computed property
    const myCount = computed(() => count.value.toFixed(10));

    return {
      count,
      increase,
      decrease,
      reset,
      myCount,
    };
  },
  // works, but still a thing?
  methods: {
    doubleStepSize() {
      return (this.count += (this.stepSize || 1) * 2);
    },
  },
  // doesn't compile, this.count is unknown
  //   computed: {
  //     myCount2() {
  //       return this.count;
  //     },
  //   },
  render() {
    return (
      <div>
        {this.count}
        <button class="button" onClick={() => this.decrease()}>
          DECREASE + {this.stepSize || 1}
        </button>
        <button onClick={() => this.increase()}>
          INCREASE + {this.stepSize || 1}
        </button>
        <button onClick={() => this.doubleStepSize()}>
          INCREASE BY DOUBLE STEP SIZE
        </button>
        <button onClick={() => this.reset()}>RESET</button>
        {/* <div>{this.myCount}</div> */}
      </div>
    );
  },
  //   style() {
  //     return { button: { backgroundColor: "red" } };
  //   },
});
