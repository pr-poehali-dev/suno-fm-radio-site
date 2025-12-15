import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const schedule = [
  { time: '00:00 - 06:00', show: 'Ночная волна', host: 'AI-DJ Nova', genre: 'Ambient & Chill' },
  { time: '06:00 - 10:00', show: 'Утренний драйв', host: 'AI-DJ Pulse', genre: 'Electronic' },
  { time: '10:00 - 14:00', show: 'Дневной микс', host: 'AI-DJ Echo', genre: 'House & Techno' },
  { time: '14:00 - 18:00', show: 'Вечерний вайб', host: 'AI-DJ Wave', genre: 'Deep House' },
  { time: '18:00 - 22:00', show: 'Ночной город', host: 'AI-DJ Storm', genre: 'Progressive' },
  { time: '22:00 - 00:00', show: 'Полуночный сет', host: 'AI-DJ Synth', genre: 'Synthwave' },
];

const BroadcastSchedule = () => {
  const currentHour = new Date().getHours();
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="Calendar" size={24} />
          Сетка вещания
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {schedule.map((slot, index) => {
            const [startHour] = slot.time.split(' - ')[0].split(':').map(Number);
            const isCurrent = currentHour >= startHour && currentHour < (startHour + 4 > 24 ? startHour + 4 - 24 : startHour + 4);
            
            return (
              <div
                key={index}
                className={`p-4 rounded-lg border ${
                  isCurrent
                    ? 'border-primary bg-primary/10'
                    : 'border-border bg-secondary/50'
                } transition-all hover:border-primary/50`}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    {slot.time}
                  </span>
                  {isCurrent && (
                    <Badge className="bg-primary animate-pulse">
                      В эфире
                    </Badge>
                  )}
                </div>
                <h3 className="font-bold mb-1">{slot.show}</h3>
                <p className="text-sm text-muted-foreground mb-2">{slot.host}</p>
                <Badge variant="secondary" className="text-xs">
                  {slot.genre}
                </Badge>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default BroadcastSchedule;
