export default function DynamicCard({
  config,
}: any) {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
      <h2 className="text-lg opacity-80">
        {config.title}
      </h2>

      <p className="text-5xl font-bold mt-2">
        {config.value}
      </p>
    </div>
  );
}