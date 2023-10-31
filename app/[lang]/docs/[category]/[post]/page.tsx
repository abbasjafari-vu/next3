import { posts } from "_appData";
import React from "react";

export async function generateStaticParams() {
  return posts.map(({ slug }) => ({
    post: slug,
  }));
}

type Props = { params: { post: string } };
export default function postPage(props: Props) {
  return <div>{props.params.post}</div>;
}
