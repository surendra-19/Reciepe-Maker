import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';

function Reciepe({ recipe }) {
  return (
    <>
      <section>
        <h2>Recipe Maker recommends:</h2>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {String(recipe)}
        </ReactMarkdown>
      </section>
    </>
  )
}

export default Reciepe