import * as React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const Component = (props = {}) => {
  return (
    <div className="markdown-body">
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          code(props) {
            const {children, className, node, ...rest} = props
            return (
              <code {...rest} className={className || ''}>
                {children}
              </code>
            )
          }
        }}
      >
        {props.data}
      </Markdown>
    </div>
  );
}
