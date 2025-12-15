import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const RadioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([70]);

  return (
    <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-card via-card to-primary/5">
      <CardContent className="p-8">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="relative">
            <div className={`w-48 h-48 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center ${isPlaying ? 'live-pulse' : ''}`}>
              <Icon name="Radio" size={80} className="text-white" />
            </div>
            <Badge className="absolute -top-2 -right-2 bg-red-500 animate-pulse">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                LIVE
              </div>
            </Badge>
          </div>

          <div className="flex-1 space-y-6 w-full">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                Нейро-диджей в эфире
              </h2>
              <p className="text-muted-foreground">
                Сейчас играет: Electronic Dreams - Midnight City
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Button
                size="lg"
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90"
              >
                <Icon name={isPlaying ? 'Pause' : 'Play'} size={28} />
              </Button>

              <div className="flex-1 flex items-center gap-3">
                <Icon name="Volume2" size={20} className="text-muted-foreground" />
                <Slider
                  value={volume}
                  onValueChange={setVolume}
                  max={100}
                  step={1}
                  className="flex-1"
                />
                <span className="text-sm text-muted-foreground w-12 text-right">
                  {volume[0]}%
                </span>
              </div>
            </div>

            <div className="flex gap-2 flex-wrap">
              <Badge variant="secondary" className="gap-1">
                <Icon name="Headphones" size={14} />
                1,247 слушателей
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <Icon name="Music" size={14} />
                Electronic
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <Icon name="Clock" size={14} />
                24/7
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RadioPlayer;
