import React, { Fragment } from 'react'
import Link from 'next/link'

// --- Rename 'Node' to 'RichTextNode' to avoid conflict ---
export type RichTextNode = TextNode | ElementNode

type TextNode = {
  text: string
  bold?: boolean
  italic?: boolean
  code?: boolean
  strikethrough?: boolean
  underline?: boolean
  [key: string]: unknown 
}

type ElementNode = {
  type: string
  children: RichTextNode[] // Update reference here too
  url?: string
  [key: string]: unknown
}

function isTextNode(node: RichTextNode): node is TextNode {
  return 'text' in node && typeof (node as { text: unknown }).text === 'string'
}

type Props = {
  nodes: RichTextNode[] | null | undefined // Update prop type
}

export const Serialize: React.FC<Props> = ({ nodes }) => {
  if (!nodes || !Array.isArray(nodes)) return null

  return (
    <>
      {nodes.map((node, i) => {
        if (isTextNode(node)) {
          // ... (same text logic as before) ...
          let text: React.ReactNode = node.text
          if (node.bold) text = <strong key={i}>{text}</strong>
          if (node.italic) text = <em key={i}>{text}</em>
          if (node.code) text = <code key={i}>{text}</code>
          if (node.underline) {
            text = (
              <span style={{ textDecoration: 'underline' }} key={i}>
                {text}
              </span>
            )
          }
          if (node.strikethrough) {
            text = (
              <span style={{ textDecoration: 'line-through' }} key={i}>
                {text}
              </span>
            )
          }
          return <Fragment key={i}>{text}</Fragment>
        }

        // ... (same element logic as before) ...
        const children = Array.isArray(node.children) 
          ? (node.children as RichTextNode[]) 
          : []

        switch (node.type) {
           // ... cases h1, h2, etc remain exactly the same ...
           case 'h1':
            return <h1 key={i}><Serialize nodes={children} /></h1>
           case 'h2':
            return <h2 key={i}><Serialize nodes={children} /></h2>
           case 'h3':
            return <h3 key={i}><Serialize nodes={children} /></h3>
           case 'h4':
            return <h4 key={i}><Serialize nodes={children} /></h4>
           case 'h5':
            return <h5 key={i}><Serialize nodes={children} /></h5>
           case 'h6':
            return <h6 key={i}><Serialize nodes={children} /></h6>
           case 'ul':
            return <ul key={i}><Serialize nodes={children} /></ul>
           case 'ol':
            return <ol key={i}><Serialize nodes={children} /></ol>
           case 'li':
            return <li key={i}><Serialize nodes={children} /></li>
           case 'link':
            return (
              <Link 
                href={typeof node.url === 'string' ? node.url : '#'} 
                key={i} 
                className="text-blue-600 hover:underline"
              >
                <Serialize nodes={children} />
              </Link>
            )
           default:
             return <p key={i}><Serialize nodes={children} /></p>
        }
      })}
    </>
  )
}