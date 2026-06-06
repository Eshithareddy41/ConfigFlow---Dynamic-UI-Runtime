export default function DynamicLayout({
  config,
}: any) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {config.items?.map(
        (item: any, index: number) => (
          <div
            key={index}
            className="border rounded p-4"
          >
            <h3 className="font-bold">
              {item.title}
            </h3>
            <p>{item.value}</p>
          </div>
        )
      )}
    </div>
  );
}