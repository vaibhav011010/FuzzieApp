// custom-elements.d.ts
export {}; // forces global augmentation

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "lr-config": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        "ctx-name"?: string;
        pubkey?: string;
      };
      "lr-file-uploader-regular": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        "ctx-name"?: string;
        "css-src"?: string;
      };
      "lr-upload-ctx-provider": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        "ctx-name"?: string;
      };
    }
  }
}
