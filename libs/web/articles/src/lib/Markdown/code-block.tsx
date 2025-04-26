import { CheckIcon, ClipboardIcon } from 'lucide-react';
import { FC, memo, useEffect, useState } from 'react';
import { Prism } from 'react-syntax-highlighter';
import prismStyle from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Button } from './button';

const { darcula } = prismStyle;

export const fence = {
  render: 'CodeBlock',
  attributes: {
    language: {
      type: String,
    },
    value: {
      type: String,
    },
  },
};

interface Props {
  language: string;
  children: string;
}

const customStyle = {
  ...darcula,
  'code[class*="language-"]': {
    ...darcula['code[class*="language-"]'],
    fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    fontSize: '0.9rem',
  },
  'pre[class*="language-"]': {
    ...darcula['pre[class*="language-"]'],
    fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    fontSize: '0.9rem',
  },
};

export const CodeBlock: FC<Props> = memo(({ language, children }) => {
  const [isIconChecked, setIsIconChecked] = useState(false);

  const handleButtonClick = () => {
    navigator.clipboard.writeText(children);
    setIsIconChecked(true);
  };

  const buttonColor = darcula['code[class*="language-"]']?.color as string;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsIconChecked(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [isIconChecked]);

  return (
    <div className="relative group py-2">
      <Button
        variant={'ghost'}
        size={'sm'}
        title="Copy code"
        className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ color: buttonColor }}
        onClick={handleButtonClick}
      >
        {isIconChecked ? <CheckIcon size={16} /> : <ClipboardIcon size={16} />}
      </Button>

      <Prism
        language={language}
        style={customStyle}
        PreTag="pre"
        className="rounded-md"
      >
        {children}
      </Prism>
    </div>
  );
});

CodeBlock.displayName = 'CodeBlock';
