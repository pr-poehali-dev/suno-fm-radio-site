import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

interface UserProfileProps {
  onClose: () => void;
}

const favoriteTracks = [
  { id: 1, title: 'Midnight City', artist: 'Electronic Dreams', addedDate: '2 дня назад' },
  { id: 2, title: 'Neon Lights', artist: 'Retro Future', addedDate: '5 дней назад' },
  { id: 3, title: 'Digital Dreams', artist: 'AI Composer', addedDate: '1 неделя назад' },
];

const UserProfile = ({ onClose }: UserProfileProps) => {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="flex items-center gap-2">
            <Icon name="User" size={24} />
            Личный кабинет
          </CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <Icon name="X" size={20} />
          </Button>
        </CardHeader>

        <ScrollArea className="flex-1">
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <Avatar className="w-20 h-20">
                <AvatarFallback className="bg-gradient-to-br from-primary to-purple-600 text-white text-2xl">
                  DJ
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-1">DJ User</h2>
                <p className="text-sm text-muted-foreground mb-2">user@example.com</p>
                <div className="flex gap-2">
                  <Badge variant="secondary">
                    <Icon name="Music" size={12} className="mr-1" />
                    {favoriteTracks.length} избранных
                  </Badge>
                  <Badge variant="secondary">
                    <Icon name="Calendar" size={12} className="mr-1" />
                    Участник с января 2024
                  </Badge>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 p-4 rounded-lg bg-secondary/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24</div>
                <div className="text-xs text-muted-foreground">Лайков</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">12</div>
                <div className="text-xs text-muted-foreground">Комментариев</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3</div>
                <div className="text-xs text-muted-foreground">Треков</div>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <Icon name="Heart" size={20} />
                Избранные треки
              </h3>
              <div className="space-y-2">
                {favoriteTracks.map((track) => (
                  <div
                    key={track.id}
                    className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/50 transition-all"
                  >
                    <div className="w-10 h-10 rounded bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center flex-shrink-0">
                      <Icon name="Music" size={20} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold truncate">{track.title}</div>
                      <div className="text-sm text-muted-foreground truncate">{track.artist}</div>
                    </div>
                    <div className="text-xs text-muted-foreground">{track.addedDate}</div>
                    <Button variant="ghost" size="icon">
                      <Icon name="Play" size={16} />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start gap-2">
                <Icon name="Settings" size={16} />
                Настройки профиля
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <Icon name="Bell" size={16} />
                Уведомления
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <Icon name="Shield" size={16} />
                Безопасность
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2 text-destructive hover:text-destructive">
                <Icon name="LogOut" size={16} />
                Выйти
              </Button>
            </div>
          </CardContent>
        </ScrollArea>
      </Card>
    </div>
  );
};

export default UserProfile;
