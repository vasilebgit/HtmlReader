export function extractTitle(html: string): string | null {
    const titleRegex = /<title>(.*?)<\/title>/i;
    const match = html.match(titleRegex);
    return match ? match[1] : null;
  }
  
  export function extractMetaDescription(html: string): string | null {
    const metaDescRegex = /<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i;
    const match = html.match(metaDescRegex);
    return match ? match[1] : null;
  }
  
  export function extractLinks(html: string): string[] {
    const linkRegex = /<a[^>]*href=["']([^"']+)["']/gi;
    const links: string[] = [];
    let match: RegExpExecArray | null;
    while ((match = linkRegex.exec(html)) !== null) {
      links.push(match[1]);
    }
    return links;
  }
  
  export function extractImages(html: string): string[] {
    const imgRegex = /<img[^>]*src=["']([^"']+)["']/gi;
    const images: string[] = [];
    let match: RegExpExecArray | null;
    while ((match = imgRegex.exec(html)) !== null) {
      images.push(match[1]);
    }
    return images;
  }
  
  export function extractCustomTag(html: string, tag: string): string[] {
    // Această expresie va potrivi doar conținut care conține cel puțin un caracter non-spațiu
    const customRegex = new RegExp(`<${tag}[^>]*>\\s*(\\S[\\s\\S]*?)\\s*</${tag}>`, 'gi');
    const contents: string[] = [];
    let match: RegExpExecArray | null;
    while ((match = customRegex.exec(html)) !== null) {
      contents.push(match[1].trim());
    }
    return contents;
  }
  