import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

const genres = ['Все', 'Electronic', 'House', 'Techno', 'Ambient', 'Synthwave', 'Drum & Bass'];

const tracks = [
  { id: 1, title: 'Midnight City', artist: 'Electronic Dreams', genre: 'Electronic', duration: '4:32', likes: 128 },
  { id: 2, title: 'Deep Space', artist: 'Cosmic Waves', genre: 'Ambient', duration: '6:45', likes: 96 },
  { id: 3, title: 'Neon Lights', artist: 'Retro Future', genre: 'Synthwave', duration: '3:58', likes: 215 },
  { id: 4, title: 'Underground', artist: 'Bass Master', genre: 'Drum & Bass', duration: '5:12', likes: 187 },
  { id: 5, title: 'Sunrise', artist: 'Morning Glory', genre: 'House', duration: '4:20', likes: 156 },
  { id: 6, title: 'Digital Dreams', artist: 'AI Composer', genre: 'Electronic', duration: '4:05', likes: 203 },
];

const TrackCatalog = () => {
  const [selectedGenre, setSelectedGenre] = useState('Все');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredTracks = tracks.filter(
    (track) =>
      (selectedGenre === 'Все' || track.genre === selectedGenre) &&
      (track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        track.artist.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const toggleFavorite = (trackId: number) => {
    setFavorites((prev) =>
      prev.includes(trackId) ? prev.filter((id) => id !== trackId) : [...prev, trackId]
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2">Каталог треков</h1>
        <p className="text-muted-foreground">
          Исследуйте нашу коллекцию из более чем 10,000 треков
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Поиск треков или исполнителей..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex gap-2 pb-2">
          {genres.map((genre) => (
            <Button
              key={genre}
              variant={selectedGenre === genre ? 'default' : 'outline'}
              onClick={() => setSelectedGenre(genre)}
              size="sm"
            >
              {genre}
            </Button>
          ))}
        </div>
      </ScrollArea>

      <div className="grid gap-4">
        {filteredTracks.map((track) => (
          <Card key={track.id} className="hover:border-primary/50 transition-all">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center flex-shrink-0">
                  <Icon name="Music" size={28} className="text-white" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-bold truncate">{track.title}</h3>
                  <p className="text-sm text-muted-foreground truncate">{track.artist}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="secondary" className="text-xs">
                      {track.genre}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{track.duration}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="flex-shrink-0">
                    <Icon name="Play" size={20} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleFavorite(track.id)}
                    className="flex-shrink-0"
                  >
                    <Icon
                      name="Heart"
                      size={20}
                      className={favorites.includes(track.id) ? 'fill-primary text-primary' : ''}
                    />
                  </Button>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Icon name="ThumbsUp" size={16} />
                    {track.likes}
                  </div>
                  <Button variant="ghost" size="icon" className="flex-shrink-0">
                    <Icon name="MessageCircle" size={20} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TrackCatalog;
