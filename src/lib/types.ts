export interface ExtractResult {
    title: string | null;
    metaDescription: string | null;
    links: string[];
    images: string[];
    custom: string[];
  }
  
  export interface ExtractRequestBody {
    html: string;
    tag?: string;
  }