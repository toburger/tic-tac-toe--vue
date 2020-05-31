declare module "*.vue" {
  import { defineComponent } from "vue";
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}

interface React {
  createElement(tag: string, attributes: {} | null, ...children: any[]): any;
}

declare var React: React;
