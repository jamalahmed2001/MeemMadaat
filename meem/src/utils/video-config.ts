export interface VideoConfig {
  getVideoUrl: (filename: string) => string;
}

export const videoConfig: VideoConfig = {
  getVideoUrl: (filename: string) => {
    // In development, use local files
    if (process.env.NODE_ENV === 'development') {
      return `/videos/${filename}`;
    }
    
    // In production, use API route that handles redirects
    return `/api/videos/${encodeURIComponent(filename)}`;
  }
}; 