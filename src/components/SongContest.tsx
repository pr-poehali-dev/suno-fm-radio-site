import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const contestSongs = [
  { id: 1, title: 'Neon Dreams', artist: 'SynthMaster', votes: 245, percentage: 35 },
  { id: 2, title: 'Digital Horizon', artist: 'ByteBeat', votes: 198, percentage: 28 },
  { id: 3, title: 'Electric Soul', artist: 'WaveRider', votes: 156, percentage: 22 },
  { id: 4, title: 'Cyber Love', artist: 'AIComposer', votes: 105, percentage: 15 },
];

const SongContest = () => {
  const [voted, setVoted] = useState<number | null>(null);

  return (
    <Card className="h-[600px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="Trophy" size={24} />
          Конкурс песен
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Голосуйте за лучший трек недели
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {contestSongs.map((song) => (
          <div
            key={song.id}
            className={`p-4 rounded-lg border ${
              voted === song.id
                ? 'border-primary bg-primary/10'
                : 'border-border bg-secondary/50'
            } transition-all hover:border-primary/50`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold">{song.title}</h3>
                  {voted === song.id && (
                    <Badge className="bg-primary">
                      <Icon name="Check" size={12} />
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{song.artist}</p>
              </div>
              <Button
                size="sm"
                variant={voted === song.id ? 'default' : 'outline'}
                onClick={() => setVoted(song.id)}
                disabled={voted !== null && voted !== song.id}
                className="gap-2"
              >
                <Icon name="Heart" size={14} />
                Голос
              </Button>
            </div>

            <div className="space-y-2">
              <Progress value={song.percentage} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{song.votes} голосов</span>
                <span>{song.percentage}%</span>
              </div>
            </div>
          </div>
        ))}

        <div className="pt-4 border-t text-center text-sm text-muted-foreground">
          Конкурс завершится через 3 дня
        </div>
      </CardContent>
    </Card>
  );
};

export default SongContest;
