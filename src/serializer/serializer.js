import SyntaxHighlighter from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/dist/esm/styles/hljs/dracula";
import { urlFor } from "../util/sanityImageBuilder";

// serialize for code
export const serializers = {
  types: {
    code: (props) => {
      const { language, code } = props.node;
      return (
        <SyntaxHighlighter language={language} style={dark} showLineNumbers>
          {code}
        </SyntaxHighlighter>
      );
    },
    image: (props) => {
      return <img src={urlFor(props.node)} className="img-fluid rounded" />;
    },
  },
};
