type Props = {
  config: any;
};

export default function ValidationPanel({
  config,
}: Props) {
  const errors: string[] = [];

  if (!config.component) {
    errors.push(
      "Missing required field: component"
    );
  }

  if (
    config.component === "form" &&
    !config.fields
  ) {
    errors.push(
      "Form component requires fields"
    );
  }

  if (
    config.component === "table" &&
    (!config.columns || !config.data)
  ) {
    errors.push(
      "Table requires columns and data"
    );
  }

  if (
    config.component === "card" &&
    !config.value
  ) {
    errors.push(
      "Card requires value"
    );
  }

  return (
    <div className="border rounded p-4 bg-wjite">
      <h2 className="font-bold mb-2">
        Validation
      </h2>

      {errors.length === 0 ? (
        <p className="text-green-600">
          Configuration Valid
        </p>
      ) : (
        <ul className="text-red-500">
          {errors.map(
            (error, index) => (
              <li key={index}>
                • {error}
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
}