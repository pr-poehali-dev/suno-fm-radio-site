import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';
import RadioPlayer from '@/components/RadioPlayer';
import BroadcastSchedule from '@/components/BroadcastSchedule';
import ChatSection from '@/components/ChatSection';
import SongContest from '@/components/SongContest';
import TrackCatalog from '@/components/TrackCatalog';
import TeamPage from '@/components/TeamPage';
import ServicesPage from '@/components/ServicesPage';
import AIStudio from '@/components/AIStudio';
import RulesPage from '@/components/RulesPage';
import UserProfile from '@/components/UserProfile';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/40 sticky top-0 z-50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
              <Icon name="Radio" size={24} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              SUNO-FM
            </h1>
          </div>

          <nav className="hidden md:flex gap-1">
            {[
              { id: 'home', label: 'Главная', icon: 'Home' },
              { id: 'catalog', label: 'Каталог', icon: 'Music2' },
              { id: 'team', label: 'Команда', icon: 'Users' },
              { id: 'services', label: 'Услуги', icon: 'Briefcase' },
              { id: 'studio', label: 'AI Студия', icon: 'Sparkles' },
              { id: 'rules', label: 'Правила', icon: 'FileText' },
            ].map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? 'default' : 'ghost'}
                onClick={() => setActiveTab(tab.id)}
                className="gap-2"
              >
                <Icon name={tab.icon} size={16} />
                {tab.label}
              </Button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {!isLoggedIn ? (
              <Button variant="outline" onClick={() => setIsLoggedIn(true)} className="gap-2">
                <Icon name="User" size={16} />
                Войти
              </Button>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowProfile(!showProfile)}
                className="relative"
              >
                <Avatar>
                  <AvatarFallback className="bg-primary/20">
                    <Icon name="User" size={20} />
                  </AvatarFallback>
                </Avatar>
              </Button>
            )}
          </div>
        </div>

        <div className="md:hidden border-t border-border/40">
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex gap-1 p-2">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'catalog', label: 'Каталог', icon: 'Music2' },
                { id: 'team', label: 'Команда', icon: 'Users' },
                { id: 'services', label: 'Услуги', icon: 'Briefcase' },
                { id: 'studio', label: 'AI Студия', icon: 'Sparkles' },
                { id: 'rules', label: 'Правила', icon: 'FileText' },
              ].map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setActiveTab(tab.id)}
                  className="gap-2"
                >
                  <Icon name={tab.icon} size={14} />
                  {tab.label}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </header>

      {showProfile && isLoggedIn && (
        <UserProfile onClose={() => setShowProfile(false)} />
      )}

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <div className="space-y-8">
            <RadioPlayer />
            <BroadcastSchedule />
            <div className="grid lg:grid-cols-2 gap-8">
              <ChatSection />
              <SongContest />
            </div>
          </div>
        )}

        {activeTab === 'catalog' && <TrackCatalog />}
        {activeTab === 'team' && <TeamPage />}
        {activeTab === 'services' && <ServicesPage />}
        {activeTab === 'studio' && <AIStudio />}
        {activeTab === 'rules' && <RulesPage />}
      </main>

      <footer className="border-t border-border/40 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 SUNO-FM. Радио будущего с нейро-диджеем.
            </div>
            <div className="flex gap-4">
              {['Twitter', 'Instagram', 'Youtube'].map((social) => (
                <Button key={social} variant="ghost" size="icon">
                  <Icon name={social as any} size={20} />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
