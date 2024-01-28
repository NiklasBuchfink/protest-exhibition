import { getHtmlFromMarkdown } from '@/helper/getHtmlFromMarkdown'
import type {
  GetStaticPaths,
} from 'next'

const contentPaths = [
  {
    params: {
      id: "test"
    }
  }
]
 
export const getStaticPaths = (async () => {
  return {
    paths: contentPaths,
    fallback: false,
  }
}) satisfies GetStaticPaths
 
export async function getStaticProps({ params }: any) {
  // Add the "await" keyword like this:
  const contentData = await getHtmlFromMarkdown(params.id);
  
  return {
    props: {
      contentData,
    },
  };  
}
 
const ContentPage = ({ contentData }: any) => {
  return <div id="remark" className="max-w-4xl mx-auto font-rubik">
    {/* @ts-ignore */}
    {contentData && contentData.contentHtml && <div dangerouslySetInnerHTML={{ __html: contentData.contentHtml }} />}
  </div>
}

export default ContentPage