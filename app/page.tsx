"use client";

import { useState } from "react";

import Renderer from "../components/Renderer";
import JsonEditor from "../components/JsonEditor";
import ValidationPanel from "../components/ValidationPanel";
import { sampleConfig } from "../data/sampleConfig";

export default function Home() {
  const [jsonText, setJsonText] = useState(
    JSON.stringify(sampleConfig, null, 2)
  );

  let parsedConfig = null;

  try {
    parsedConfig = JSON.parse(jsonText);
  } catch {
    parsedConfig = null;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-950 text-white p-8">
      
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          ConfigFlow AI
        </h1>

        <p className="text-slate-300 mt-4 text-lg">
          Dynamic Application Runtime Powered By JSON Metadata
        </p>
      </div>

      {/* Feature Badges */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {[
          "Forms",
          "Tables",
          "Cards",
          "Layouts",
          "Validation",
          "Live Preview",
        ].map((item) => (
          <span
            key={item}
            className="px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* JSON Editor */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl">
          <h2 className="text-2xl font-bold mb-4">
            JSON Configuration
          </h2>

          <JsonEditor
            jsonText={jsonText}
            setJsonText={setJsonText}
          />
        </div>

        {/* Preview Section */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl">
          <h2 className="text-2xl font-bold mb-4">
            Live Preview
          </h2>

          {parsedConfig ? (
            <>
              <ValidationPanel
                config={parsedConfig}
              />

              <div className="mt-6">
                <Renderer
                  config={parsedConfig}
                />
              </div>
            </>
          ) : (
            <div className="border border-red-500 bg-red-500/20 p-4 rounded-xl text-red-300">
              Invalid JSON Configuration
            </div>
          )}
        </div>

      </div>

      {/* Footer */}
      <div className="text-center mt-12 text-slate-400 text-sm">
        Built using Next.js + Tailwind CSS • Metadata Driven UI Engine
      </div>

    </main>
  );
}