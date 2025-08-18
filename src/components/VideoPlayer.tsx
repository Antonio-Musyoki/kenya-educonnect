import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

interface VideoPlayerProps {
  videoUrl: string;
  videoType: 'youtube' | 'vimeo' | 'direct';
  onTimeUpdate?: (currentTime: number, duration: number) => void;
  onProgress?: (watchedPercentage: number) => void;
}

export const VideoPlayer = ({ videoUrl, videoType, onTimeUpdate, onProgress }: VideoPlayerProps) => {
  const [embedUrl, setEmbedUrl] = useState('');

  useEffect(() => {
    const getEmbedUrl = () => {
      if (!videoUrl) return '';

      switch (videoType) {
        case 'youtube':
          // Extract video ID from various YouTube URL formats
          let videoId = '';
          const patterns = [
            /(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/,
            /(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
            /(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/,
            /(?:youtube\.com\/v\/)([a-zA-Z0-9_-]{11})/
          ];

          for (const pattern of patterns) {
            const match = videoUrl.match(pattern);
            if (match) {
              videoId = match[1];
              break;
            }
          }

          if (videoId) {
            return `https://www.youtube.com/embed/${videoId}?enablejsapi=1&modestbranding=1&rel=0`;
          }
          break;

        case 'vimeo':
          // Extract video ID from Vimeo URL
          const vimeoMatch = videoUrl.match(/(?:vimeo\.com\/)([0-9]+)/);
          if (vimeoMatch) {
            return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
          }
          break;

        case 'direct':
          return videoUrl;

        default:
          return videoUrl;
      }

      return videoUrl;
    };

    setEmbedUrl(getEmbedUrl());
  }, [videoUrl, videoType]);

  if (!embedUrl) {
    return (
      <Card className="w-full aspect-video flex items-center justify-center bg-muted">
        <p className="text-muted-foreground">Invalid video URL</p>
      </Card>
    );
  }

  if (videoType === 'direct') {
    return (
      <Card className="w-full aspect-video overflow-hidden">
        <video
          className="w-full h-full"
          controls
          src={embedUrl}
          onTimeUpdate={(e) => {
            const video = e.target as HTMLVideoElement;
            if (onTimeUpdate && video.duration) {
              onTimeUpdate(video.currentTime, video.duration);
            }
            if (onProgress && video.duration) {
              const percentage = (video.currentTime / video.duration) * 100;
              onProgress(percentage);
            }
          }}
        >
          Your browser does not support the video tag.
        </video>
      </Card>
    );
  }

  return (
    <Card className="w-full aspect-video overflow-hidden">
      <iframe
        className="w-full h-full"
        src={embedUrl}
        title="Video Player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Card>
  );
};