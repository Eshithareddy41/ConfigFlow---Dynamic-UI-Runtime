export interface FormField {
  label: string;
  type: string;
}

export interface AppConfig {
  component: string;
  title?: string;
  fields?: FormField[];
}