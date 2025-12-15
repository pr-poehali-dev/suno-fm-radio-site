import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const team = [
  {
    id: 1,
    name: 'DJ Nova',
    role: 'Нейро-диджей',
    bio: 'Специализируется на ambient и chill музыке. Создает уникальные миксы с использованием AI.',
    tracks: 342,
    followers: 15400,
  },
  {
    id: 2,
    name: 'DJ Pulse',
    role: 'Утренний ведущий',
    bio: 'Энергичные electronic и house треки для бодрого начала дня.',
    tracks: 289,
    followers: 12800,
  },
  {
    id: 3,
    name: 'DJ Echo',
    role: 'Продюсер',
    bio: 'Создатель уникальных AI-генерированных треков и ремиксов.',
    tracks: 456,
    followers: 18200,
  },
  {
    id: 4,
    name: 'DJ Wave',
    role: 'Вечерний диджей',
    bio: 'Deep house и melodic techno для расслабленного вечера.',
    tracks: 312,
    followers: 14500,
  },
];

const TeamPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2">Наша команда</h1>
        <p className="text-muted-foreground">
          Познакомьтесь с нашими нейро-диджеями и их музыкой
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {team.map((member) => (
          <Card key={member.id} className="overflow-hidden hover:border-primary/50 transition-all">
            <CardContent className="p-0">
              <div className="h-32 bg-gradient-to-br from-primary via-purple-600 to-pink-600 relative">
                <div className="absolute -bottom-12 left-6">
                  <Avatar className="w-24 h-24 border-4 border-background">
                    <AvatarFallback className="text-2xl bg-gradient-to-br from-primary to-purple-600 text-white">
                      {member.name.split(' ')[1][0]}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>

              <div className="pt-14 px-6 pb-6 space-y-4">
                <div>
                  <h2 className="text-2xl font-bold mb-1">{member.name}</h2>
                  <Badge variant="secondary">{member.role}</Badge>
                </div>

                <p className="text-muted-foreground">{member.bio}</p>

                <div className="flex gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="Music" size={16} className="text-primary" />
                    <span className="font-medium">{member.tracks}</span>
                    <span className="text-muted-foreground">треков</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Users" size={16} className="text-primary" />
                    <span className="font-medium">{member.followers.toLocaleString()}</span>
                    <span className="text-muted-foreground">подписчиков</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 gap-2">
                    <Icon name="Play" size={16} />
                    Слушать треки
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="Heart" size={16} />
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

export default TeamPage;
