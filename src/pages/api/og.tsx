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
    const xUsername = searchParams.get("x_username");
    const author = searchParams.get("author");
    const description = hasDescription ? searchParams.get("description") : "";

    return new ImageResponse(
      createElement(OGImage, {
        title: title || "",
        description: description || "",
        xUsername: xUsername || "",
        author: author || "",
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
        Location: "https://seiyanization.com//og/og-red.png",
      },
    });
  }
}

export function OGImage({
  title,
  description,
  xUsername,
  author,
}: {
  title: string;
  description: string;
  xUsername: string;
  author?: string;
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
        backgroundImage: `url(https://seiyanization.com/og/og-red.png)`,
        backgroundSize: "1200px 630px",
        color: "#fff",
      }}
    >
      {xUsername && xUsername != "undefined" && (
        <div
          style={{
            fontSize: 18,
            color: "#fff",
            position: "absolute",
            top: 50,
            left: 80,
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
            gap: 8,
            height: 18,
          }}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_101_632)">
              <path
                d="M24 0C10.7456 0 0 10.7456 0 24C0 37.2544 10.7456 48 24 48C37.2544 48 48 37.2544 48 24C48 10.7456 37.2544 0 24 0Z"
                fill="white"
              />
              <path
                d="M26.6259 21.8281L36.9 9.88525H34.4654L25.5444 20.2551L18.4192 9.88525H10.2012L20.9758 25.5662L10.2012 38.0901H12.6359L22.0568 27.1392L29.5815 38.0901H37.7995L26.6253 21.8281H26.6259ZM13.5132 11.7181H17.2529L34.4665 36.3406H30.7269L13.5132 11.7181Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_101_632">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div
            style={{
              display: "flex",
              marginTop: "-18px",
              flexDirection: "column",
            }}
          >
            {author && <p>{author}</p>}
            <p>{xUsername}</p>
          </div>
        </div>
      )}

      <div
        style={{
          display: "flex",
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
