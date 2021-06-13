import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import designData from './../../content/design.json'

export default function Index(props) {
  return (
      <>
      <div className="container">
        <div>
          <h1 style={{padding:'100px', color:'red'}}>
              {props.title}
          </h1>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
      </>
  );
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const data = {
        title : designData.title,
        date:'',
        slug:'',
        tags: '',
        author:'',
        mdxSource:''
    }
    return {
      props: {
        title: data.title,
        dateString: data.date,
        slug: data.slug,
        description: "",
        tags: data.tags,
        author: data.author,
        // source: mdxSource
      },
    };
    // const slug = params.post as string;
    // const source = fs.readFileSync(slugToPostContent[slug].fullPath, "utf8");
    // const { content, data } = matter(source, {
    //   engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object }
    // });
    // const mdxSource = await renderToString(content, { components, scope: data });
    // return {
    //   props: {
    //     title: data.title,
    //     dateString: data.date,
    //     slug: data.slug,
    //     description: "",
    //     tags: data.tags,
    //     author: data.author,
    //     source: mdxSource
    //   },
    // };
  };