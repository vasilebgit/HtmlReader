import { Button } from '@mui/material';

interface ExtractResult {
  title: string | null;
  metaDescription: string | null;
  links: string[];
  images: string[];
  custom: string[];
}

interface DownloadTxtButtonProps {
  result: ExtractResult;
}

const DownloadTxtButton = ({ result }: DownloadTxtButtonProps) => {
  const handleDownloadTxt = () => {
    const txtContent = `Title: ${result.title || ""}
MetaDescription: ${result.metaDescription || ""}
Links: ${result.links.join(", ")}
Images: ${result.images.join(", ")}
Custom Tags: ${result.custom.join(", ")}`;

    const blob = new Blob([txtContent], { type: "text/plain;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "extract_result.txt");
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <Button variant="contained" onClick={handleDownloadTxt}>
      Descarcă TXT
    </Button>
  );
};

export default DownloadTxtButton;