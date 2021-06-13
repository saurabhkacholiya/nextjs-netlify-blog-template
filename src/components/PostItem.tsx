import { PostContent } from "../lib/posts";
import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";
import hydrate from "next-mdx-remote/hydrate";

type Props = {
  post: PostContent;
};
export default function PostItem({ post }: Props) {
  return (
    <Link href={"/posts/" + post.slug}>
      <article className='prose lg:prose-xl'>
        <Date date={parseISO(post.date)} />
        <h2>{post.title}</h2>
        <p>{hydrate(post.excerptToRender)}</p>
        <style jsx>
          {`
            a {
              color: #222;
              display: inline-block;
            }
            h2 {
              margin: 0;
              font-weight: 500;
            }
          `}
        </style>
      </article>
    </Link>
  );
}

