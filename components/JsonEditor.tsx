type Props = {
  jsonText: string;
  setJsonText: (value: string) => void;
};

export default function JsonEditor({
  jsonText,
  setJsonText,
}: Props) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">
        JSON Configuration
      </h2>

      <textarea
        value={jsonText}
        onChange={(e) =>
          setJsonText(e.target.value)
        }
        className="w-full h-[500px] rounded-xl p-4 font-mono bg-slate-900 text-green-400 border border-white/20 focus:outline-none"
      />
    </div>
  );
}
