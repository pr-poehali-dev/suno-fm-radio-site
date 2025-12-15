import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const mockMessages = {
  rotation: [
    { user: 'DJ_Master', message: 'Добавил новый трек в ротацию!', time: '10:34' },
    { user: 'MusicLover', message: 'Отличная музыка сегодня', time: '10:35' },
  ],
  general: [
    { user: 'RadioFan', message: 'Привет всем!', time: '10:30' },
    { user: 'BeatMaker', message: 'Кто-нибудь был на концерте?', time: '10:32' },
  ],
  vip: [
    { user: 'ProUser', message: 'Эксклюзивный контент скоро', time: '10:20' },
  ],
};

const ChatSection = () => {
  const [message, setMessage] = useState('');
  const [activeChat, setActiveChat] = useState('rotation');

  return (
    <Card className="h-[600px] flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="MessageCircle" size={24} />
          Чаты сообщества
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-0">
        <Tabs value={activeChat} onValueChange={setActiveChat} className="flex-1 flex flex-col">
          <TabsList className="w-full justify-start rounded-none border-b px-4">
            <TabsTrigger value="rotation" className="gap-2">
              <Icon name="Music" size={16} />
              Ротация
            </TabsTrigger>
            <TabsTrigger value="general" className="gap-2">
              <Icon name="MessageSquare" size={16} />
              Общение
            </TabsTrigger>
            <TabsTrigger value="vip" className="gap-2">
              <Icon name="Lock" size={16} />
              VIP
            </TabsTrigger>
          </TabsList>

          {['rotation', 'general', 'vip'].map((chatType) => (
            <TabsContent key={chatType} value={chatType} className="flex-1 flex flex-col m-0">
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {mockMessages[chatType as keyof typeof mockMessages].map((msg, index) => (
                    <div key={index} className="flex gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-primary/20 text-xs">
                          {msg.user[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-sm">{msg.user}</span>
                          <span className="text-xs text-muted-foreground">{msg.time}</span>
                        </div>
                        <p className="text-sm">{msg.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    placeholder="Написать сообщение..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <Button size="icon">
                    <Icon name="Send" size={18} />
                  </Button>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ChatSection;
