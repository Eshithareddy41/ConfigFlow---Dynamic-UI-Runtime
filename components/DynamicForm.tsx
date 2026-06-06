export default function DynamicForm({
  config,
}: any) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">
        {config.title}
      </h2>

      {config.fields?.map(
        (field: any, index: number) => (
          <input
            key={index}
            type={field.type}
            placeholder={field.label}
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400"
          />
        )
      )}

      <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition">
      </button>
    </div>
  );
}