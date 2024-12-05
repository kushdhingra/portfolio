import { useEffect } from 'react';
import Prism from 'prismjs';

// Import the languages you need
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-python';

interface CodeBlockProps {
  language: string; // Language for syntax highlighting (e.g., 'javascript', 'typescript')
  children: string; // Code to display
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, children }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre className={`language-${language}`}>
      <code className={`language-${language}`}>{children}</code>
    </pre>
  );
};

export default CodeBlock;
