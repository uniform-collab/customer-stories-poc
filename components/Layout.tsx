import React from "react";
import Head from "next/head";
import { RootComponentInstance } from "@uniformdev/canvas";
import { UniformComposition } from "@uniformdev/canvas-react";
import { useSetViewportQuirk } from "@/hooks/useSetViewportQuirk";

export interface PageCompositionProps {
  data: RootComponentInstance;
}

export default function PageComposition({
  data: composition,
}: PageCompositionProps) {
  const { metaTitle } = composition?.parameters || {};
  // set initial viewport quirk
  useSetViewportQuirk();
  return (
    <>
      <Head>
        <title>{metaTitle?.value as string}</title>
      </Head>
      <main className="main">
        <UniformComposition data={composition} />
      </main>
    </>
  );
}
