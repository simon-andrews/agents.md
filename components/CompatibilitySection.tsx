import React from "react";
import Image from "next/image";
import Section from "@/components/Section";

export default function CompatibilitySection() {
  type AgentEntry = {
    name: string;
    url: string;
    from?: string;
    imageSrc?: string;
    imageSrcLight?: string;
    imageSrcDark?: string;
  };

  const agents: AgentEntry[] = [
    {
      name: "Codex",
      url: "https://openai.com/codex/",
      from: "OpenAI",
      imageSrc: "/logos/codex.svg",
    },
    {
      name: "Amp",
      url: "https://ampcode.com",
      imageSrc: "/logos/amp.svg",
    },
    {
      name: "Jules",
      url: "https://jules.google",
      from: "Google",
      imageSrc: "/logos/jules.svg",
    },
    {
      name: "Cursor",
      url: "https://cursor.com",
      imageSrcLight: "/logos/cursor-light.svg",
      imageSrcDark: "/logos/cursor-dark.svg",
    },
    {
      name: "Factory",
      url: "https://factory.ai",
      imageSrc: "/logos/factory.svg",
    },
    {
      name: "RooCode",
      url: "https://roocode.com",
      imageSrc: "/logos/roocode.svg",
    },
  ];
  return (
    <Section
      id="compatibility"
      title="One AGENTS.md works across many agents"
      className="py-12"
      center
      maxWidthClass="max-w-3xl"
    >
      <p className="text-xl font-light text-gray-500 dark:text-gray-400 text-center max-w-lg mx-auto">
        Your agent definitions are compatible with a growing ecosystem of AI
        coding agents and tools:
      </p>
      <div className="mt-6 flex flex-wrap justify-center items-center gap-4">
        {agents.map(
          ({
            name,
            url,
            from,
            imageSrc,
            imageSrcLight,
            imageSrcDark,
          }) => {
            return (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-56 h-20 p-3 items-center rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                 <div className="w-16 h-16 flex items-center justify-center mr-3">
                  {imageSrcLight && imageSrcDark ? (
                    <>
                      <Image
                        src={imageSrcLight}
                        alt={`${name} logo`}
                        width={64}
                        height={64}
                        className="block dark:hidden"
                      />
                      <Image
                        src={imageSrcDark}
                        alt={`${name} logo`}
                        width={64}
                        height={64}
                        className="hidden dark:block"
                      />
                    </>
                  ) : imageSrc ? (
                    <span
                      aria-hidden
                      className="block w-16 h-16 bg-gray-700 dark:bg-gray-400"
                      style={{
                        WebkitMaskImage: `url(${imageSrc})`,
                        maskImage: `url(${imageSrc})`,
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                      }}
                    />
                  ) : null}
                 </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xl font-semibold leading-tight text-gray-700 dark:text-gray-400">
                    {name}
                  </span>
                  {from ? (
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-light">from</span>{" "}
                      <span className="font-semibold">{from}</span>
                    </span>
                  ) : null}
                </div>
              </a>
            );
          }
        )}
      </div>
    </Section>
  );
}
