declare type NotebookOutput = {
  id: string;
  value: { [key: string]: any } | string;
}
declare interface NotebookResultSettings {
  appendResults?: boolean;
  scrollToBottom?: boolean;
}
declare type NotebookResultsState = NotebookOutput[];

declare var module: any;
declare var require: any;
