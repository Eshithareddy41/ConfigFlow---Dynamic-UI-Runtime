export default function DynamicTable({
  config,
}: any) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        {config.title}
      </h2>

      <table className="w-full overflow-hidden rounded-xl">
        <thead>
          <tr>
            className="bg-white/10"
            {config.columns?.map(
              (column: string) => (
                <th
                  key={column}
                  className="border p-2"
                >
                  {column}
                </th>
              )
            )}
          </tr>
        </thead>

        <tbody>
          {config.data?.map(
            (
              row: any,
              index: number
            ) => (
              <tr key={index}>
                {config.columns?.map(
                  (column: string) => (
                    <td
                      key={column}
                      className="border p-2"
                    >
                      {row[column]}
                    </td>
                  )
                )}
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}