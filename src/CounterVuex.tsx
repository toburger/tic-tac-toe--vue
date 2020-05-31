import { h, defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { State } from "./store";

export default defineComponent({
  setup() {
    const store = useStore<State>();

    return {
      count: computed(() => store.state.count),
      increase: () => store.dispatch("increment"),
      decrease: () => store.dispatch("decrement"),
      reset: () => store.dispatch("reset"), // Where is the type check?
    };
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
