// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest } from "next";
import React, { createElement } from "react";

import { ImageResponse } from "@vercel/og";
import { excerpt } from "@/lib/utils";

export const config = {
  runtime: "edge",
};

async function loadAssets(): Promise<
  [
    {
      name: string;
      data: ArrayBuffer;
      weight: 400 | 500 | 700;
      style: "normal";
    }[]
  ]
> {
  const [fontInterRegularData, fontInterSemiBoldData, fontInterBoldData] =
    await Promise.all([
      fetch(
        String(new URL("../../assets/fonts/Inter-Regular.ttf", import.meta.url))
      ).then((res) => res.arrayBuffer()),
      fetch(
        String(
          new URL("../../assets/fonts/Inter-SemiBold.ttf", import.meta.url)
        )
      ).then((res) => res.arrayBuffer()),
      fetch(
        String(new URL("../../assets/fonts/Inter-Bold.ttf", import.meta.url))
      ).then((res) => res.arrayBuffer()),
    ]);
  return [
    [
      {
        name: "Inter",
        data: fontInterRegularData,
        style: "normal",
        weight: 400,
      },
      {
        name: "Inter",
        data: fontInterSemiBoldData,
        style: "normal",
        weight: 500,
      },
      {
        name: "Inter",
        data: fontInterBoldData,
        style: "normal",
        weight: 700,
      },
    ],
  ];
}

export default async function openGraphImage(
  req: NextApiRequest
): Promise<ImageResponse> {
  try {
    const [fonts] = await loadAssets();
    const { searchParams } = new URL(req.url || "");

    // ?title=<title>
    const hasTitle = searchParams.has("title");
    const title = hasTitle ? searchParams.get("title") : "";
    // ?description=<description>
    const hasDescription = searchParams.has("description");
    const description = hasDescription ? searchParams.get("description") : "";

    return new ImageResponse(
      createElement(OGImage, {
        title: title || "",
        description: description || "",
      }),
      {
        width: 1200,
        height: 630,
        fonts,
      }
    );
  } catch (e: unknown) {
    return new Response(undefined, {
      status: 302,
      headers: {
        Location: "http://sei-docs.vercel.app/og/og-red.png",
      },
    });
  }
}

export function OGImage({
  title,
  description,
}: {
  title: string;
  description: string;
}): React.JSX.Element {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        width: "100%",
        height: "100%",
        fontFamily: "Inter",
        fontWeight: 500,
        padding: 80,
        gap: 8,
        backgroundImage: `url(http://sei-docs.vercel.app/og/og-red.png)`,
        backgroundSize: "1200px 630px",
        color: "#fff",
      }}
    >
      <div
        style={{
          fontSize: 18,
          color: "#78FFCC",
        }}
      >
        Seiyanization
      </div>
      {title && (
        <div
          style={{
            fontFamily: "Inter",
            fontSize: 48,
            fontWeight: 500,
            backgroundImage: "linear-gradient(to right, #fff, #94eadfe1)",
            backgroundClip: "text",
            color: "transparent",
            wordBreak: "break-word",
          }}
        >
          {excerpt(title, 80)}
        </div>
      )}
      {description && (
        <div
          style={{
            fontFamily: "Inter",
            fontSize: 28,
            marginTop: 18,
            color: "#fff",
            wordBreak: "break-word",
          }}
        >
          {excerpt(description, 120)}
        </div>
      )}
    </div>
  );
}
