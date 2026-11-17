"use client";

import { useState, useEffect } from "react";

interface ProjectCardImageProps {
  title: string;
  category: string;
  year?: string;
  stack?: string[];
  sourceUrl?: string;
}

const GITHUB_DEFAULT_FALLBACK = "/github-fallback.png";

function getGitHubOgUrl(sourceUrl?: string): string {
  if (!sourceUrl || !sourceUrl.includes("github.com/")) {
    return GITHUB_DEFAULT_FALLBACK;
  }

  const cleanPath = sourceUrl
    .replace(/^https?:\/\/(www\.)?github\.com\//i, "")
    .replace(/\.git$/i, "")
    .replace(/\/+$/, "")
    .trim();

  if (!cleanPath) {
    return GITHUB_DEFAULT_FALLBACK;
  }

  return `https://opengraph.githubassets.com/1/${cleanPath}`;
}

export function ProjectCardImage({
  title,
  category,
  year = "2026",
  sourceUrl,
}: ProjectCardImageProps) {
  const targetOgUrl = getGitHubOgUrl(sourceUrl);
  const [imgSrc, setImgSrc] = useState(targetOgUrl);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setImgSrc(getGitHubOgUrl(sourceUrl));
  }, [sourceUrl]);

  const handleError = () => {
    if (imgSrc !== GITHUB_DEFAULT_FALLBACK) {
      setImgSrc(GITHUB_DEFAULT_FALLBACK);
    }
  };

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-[#0D1117] border-b border-slate-200/70 dark:border-white/8 select-none">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imgSrc}
        alt={`${title} GitHub preview`}
        loading="lazy"
        onError={handleError}
        className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

      <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 pointer-events-none z-20">
        <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium backdrop-blur-xl bg-slate-900/85 text-white border border-white/12 shadow-xs">
          {category}
        </span>
        <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium backdrop-blur-xl bg-slate-900/85 text-slate-300 border border-white/12 shadow-xs">
          {year}
        </span>
      </div>
    </div>
  );
}
