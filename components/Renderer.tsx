import DynamicForm from "./DynamicForm";
import DynamicTable from "./DynamicTable";
import DynamicCard from "./DynamicCard";
import DynamicLayout from "./DynamicLayout";

export default function Renderer({
  config,
}: any) {
  switch (config.component) {
    case "form":
      return (
        <DynamicForm config={config} />
      );

    case "table":
      return (
        <DynamicTable config={config} />
      );

    case "card":
      return (
        <DynamicCard config={config} />
      );

    case "layout":
     return (
       <DynamicLayout config={config} />
       );

    default:
      return (
        <div className="p-4 border rounded text-red-500">
          Unknown Component
        </div>
      );
  }
}