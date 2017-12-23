
export interface JupyterSettings {
    appendResults: boolean;
    scrollToBottom: boolean;
    languages: JupyterLanguageSetting[];
}

export interface JupyterLanguageSetting {
    languageId: string;
    defaultKernel?: string;
    cellIdentificationPattern?: string;
    startupCode?: string[];
}