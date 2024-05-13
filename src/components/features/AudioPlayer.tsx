"use client";
import { Pause, Play } from "lucide-react";
import { Button } from "../ui/button";
import { useRef, useState, useEffect } from "react";

type Props = {
  audioUrl: string;
  surah: string;
};

export default function AudioPlayer({ audioUrl, surah }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);

  useEffect(() => {
    if (audioUrl) {
      const audioElement = new Audio(audioUrl);
      audioRef.current = audioElement;
      setAudioLoaded(true);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [audioUrl]);

  const handleClick = () => {
    if (audioLoaded) {
      if (isPlaying) {
        audioRef.current?.pause();
      } else {
        audioRef.current?.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="container fixed bottom-0 left-0 right-0 flex w-full items-center justify-between border-y bg-background py-3 sm:pl-20">
      <div className="">
        <p className="text-lg font-medium">{surah}</p>
        <p className="text-sm text-muted">syekh Misyari Rasyid Al-afasi</p>
      </div>
      <Button
        className="rounded-full"
        size="icon"
        about=""
        onClick={handleClick}
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </Button>
    </div>
  );
}
