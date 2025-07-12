import type { NextApiRequest, NextApiResponse } from 'next';
import { env } from '../../../env';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { filename } = req.query;

  if (!filename || typeof filename !== 'string') {
    return res.status(400).json({ error: 'Invalid filename' });
  }

  // Check if we have a CDN URL configured
  if (env.VIDEO_CDN_URL) {
    const cdnUrl = `${env.VIDEO_CDN_URL}/videos/${filename}`;
    return res.redirect(302, cdnUrl);
  }

  // Fallback to GitHub LFS if repo info is provided
  if (env.GITHUB_OWNER && env.GITHUB_REPO) {
    const githubLfsUrl = `https://github.com/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/raw/main/meem/public/videos/${filename}`;
    return res.redirect(302, githubLfsUrl);
  }

  // If no external hosting is configured, return an error
  return res.status(503).json({ 
    error: 'Video hosting not configured. Please set up VIDEO_CDN_URL or GITHUB_OWNER/GITHUB_REPO environment variables.' 
  });
} 