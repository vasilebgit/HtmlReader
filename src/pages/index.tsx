import { useState } from 'react';
import type { NextPage } from 'next';
import { Box, TextField, Button, Typography, Paper, List, ListItem, Stack } from '@mui/material';
import { ExtractResult } from '@/lib/types';
import DownloadCsvButton from '@/pages/components/downloadCsvButton';
import DownloadTxtButton from '@/pages/components/downloadTxtButton';

const Home: NextPage = () => {
  const [htmlContent, setHtmlContent] = useState<string>('');
  const [customTag, setCustomTag] = useState<string>('');
  const [results, setResults] = useState<ExtractResult | null>(null);

  const handleSubmit = async () => {
    const res = await fetch('/api/extract', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ html: htmlContent, tag: customTag }),
    });
    const data: ExtractResult = await res.json();
    setResults(data);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>HTML Extractor Tool</Typography>
      <Paper sx={{ p: 2, mb: 4 }}>
        <Stack spacing={2}>
          <TextField
            label="Conținut HTML"
            multiline
            rows={8}
            fullWidth
            value={htmlContent}
            onChange={(e) => setHtmlContent(e.target.value)}
          />
          <TextField
            label="Tag personalizat (ex: p)"
            fullWidth
            value={customTag}
            onChange={(e) => setCustomTag(e.target.value)}
          />
          <Button variant="contained" onClick={handleSubmit}>Analizează</Button>
        </Stack>
      </Paper>

      {results && (
        <Box>
          {/* Butoanele de descărcare deasupra rezultatelor */}
          <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
            <DownloadCsvButton result={results} />
            <DownloadTxtButton result={results} />
          </Stack>

          <Typography variant="h5">Rezultate</Typography>
          <Typography variant="body1"><strong>Titlu:</strong> {results.title || 'Niciun titlu'}</Typography>
          <Typography variant="body1"><strong>Meta Descriere:</strong> {results.metaDescription || 'Nicio meta descriere'}</Typography>

          <Typography variant="h6" sx={{ mt: 2 }}>Link-uri</Typography>
          <List>
            {results.links.map((link: string, i: number) => <ListItem key={i}>{link}</ListItem>)}
          </List>

          <Typography variant="h6" sx={{ mt: 2 }}>Imagini</Typography>
          <List>
            {results.images.map((img: string, i: number) => <ListItem key={i}>{img}</ListItem>)}
          </List>

          {customTag && customTag.trim() !== '' && (
            <>
              <Typography variant="h6" sx={{ mt: 2 }}>Conținut pentru &lt;{customTag}&gt;</Typography>
              <List>
                {results.custom.map((ct: string, i: number) => <ListItem key={i}>{ct}</ListItem>)}
              </List>
            </>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Home;