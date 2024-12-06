import type { NextApiRequest, NextApiResponse } from 'next';
import { extractTitle, extractMetaDescription, extractLinks, extractImages, extractCustomTag } from '@/lib/regexExtractors';
import { ExtractRequestBody, ExtractResult } from '@/lib/types';

export default function handler(req: NextApiRequest, res: NextApiResponse<ExtractResult>) {
  const { html, tag } = req.body as ExtractRequestBody;

  const title = extractTitle(html);
  const metaDescription = extractMetaDescription(html);
  const links = extractLinks(html);
  const images = extractImages(html);
  const custom = tag ? extractCustomTag(html, tag) : [];

  res.status(200).json({ title, metaDescription, links, images, custom });
}