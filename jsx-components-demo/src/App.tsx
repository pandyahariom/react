import FunctionalComponentDemo from "./components/FunctionalComponent";
import ClassComponentDemo from "./components/ClassComponent";
import EmbeddingExpressionsDemo from "./components/EmbeddingExpressions";
import JsxIsExpressionDemo from "./components/JsxIsExpression";
import JsxAttributesDemo from "./components/JsxAttributes";
import LoopingListsDemo from "./components/LoopingLists";
import ReactFragmentDemo from "./components/ReactFragmentDemo";
import PropsExampleDemo from "./components/PropsExample";
import StateExampleDemo from "./components/StateExample";

function App() {
  return (
    <div>
      <h1>Components &amp; JSX</h1>

      <FunctionalComponentDemo />
      <ClassComponentDemo />
      <EmbeddingExpressionsDemo />
      <JsxIsExpressionDemo />
      <JsxAttributesDemo />
      <LoopingListsDemo />
      <ReactFragmentDemo />
      <PropsExampleDemo />
      <StateExampleDemo />
    </div>
  );
}

export default App;
