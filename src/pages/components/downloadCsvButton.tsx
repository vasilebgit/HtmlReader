import { Button } from '@mui/material';

interface ExtractResult {
  title: string | null;
  metaDescription: string | null;
  links: string[];
  images: string[];
  custom: string[];
}

const DownloadCsvButton = ({ result }: { result: ExtractResult }) => {
  const handleDownloadCsv = () => {
    const headers = ["Title", "MetaDescription", "Link", "Image", "CustomTag"];
    const links = result.links || [];
    const images = result.images || [];
    const customTags = result.custom || [];

    // Determinăm numărul maxim de rânduri necesar în funcție de array-uri
    // În acest caz, primul rând conține titlul, meta descrierea și primul element din fiecare array (dacă există)
    const maxArrayLength = Math.max(links.length, images.length, customTags.length);
    const rows: string[][] = [];
    console.log("CSV Result:", result);
    // Primul rând: afișează Title, MetaDescription și primul element din fiecare array
    rows.push([
      result.title || "",
      result.metaDescription || "",
      links[0] || "",
      images[0] || "",
      customTags[0] || ""
    ]);

    // Rândurile următoare: Title și MetaDescription rămân goale
    for (let i = 1; i < maxArrayLength; i++) {
      rows.push([
        "",  // Titlu gol
        "",  // MetaDescription gol
        links[i] || "",
        images[i] || "",
        customTags[i] || ""
      ]);
    }

    const csvContent = [
      headers.join(","), 
      ...rows.map(row => row.map(field => `"${field}"`).join(",")) 
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "extract_result.csv");
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <Button variant="contained" onClick={handleDownloadCsv}>
      Descarcă CSV
    </Button>
  );
};

export default DownloadCsvButton;