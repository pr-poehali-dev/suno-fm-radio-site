import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const AIStudio = () => {
  const [lyricsPrompt, setLyricsPrompt] = useState('');
  const [generatedLyrics, setGeneratedLyrics] = useState('');
  const [trackPrompt, setTrackPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateLyrics = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedLyrics(
        `Verse 1:\nIn the digital night\nWhere the data flows\nWe dance with the light\nAs the algorithm grows\n\nChorus:\nElectric dreams, neon streams\nNothing is quite what it seems\nIn the code we trust\nIn the beat we must`
      );
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2">AI Студия</h1>
        <p className="text-muted-foreground">
          Создавайте музыку с помощью искусственного интеллекта
        </p>
      </div>

      <Tabs defaultValue="lyrics" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="lyrics" className="gap-2">
            <Icon name="FileText" size={16} />
            Текст песни
          </TabsTrigger>
          <TabsTrigger value="music" className="gap-2">
            <Icon name="Music" size={16} />
            Музыка
          </TabsTrigger>
          <TabsTrigger value="mixer" className="gap-2">
            <Icon name="Sliders" size={16} />
            Микшер
          </TabsTrigger>
        </TabsList>

        <TabsContent value="lyrics" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Sparkles" size={24} />
                  Генератор текстов
                </CardTitle>
                <CardDescription>
                  Опишите настроение и тему вашей песни
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Тема и настроение</Label>
                  <Textarea
                    placeholder="Например: грустная песня о потерянной любви с элементами надежды"
                    value={lyricsPrompt}
                    onChange={(e) => setLyricsPrompt(e.target.value)}
                    rows={6}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Жанр</Label>
                  <Input placeholder="Electronic, Pop, Rock..." />
                </div>

                <div className="space-y-2">
                  <Label>Язык</Label>
                  <Input placeholder="Русский, English..." defaultValue="Русский" />
                </div>

                <Button 
                  onClick={generateLyrics} 
                  disabled={isGenerating}
                  className="w-full gap-2"
                >
                  {isGenerating ? (
                    <>
                      <Icon name="Loader2" size={16} className="animate-spin" />
                      Генерация...
                    </>
                  ) : (
                    <>
                      <Icon name="Sparkles" size={16} />
                      Сгенерировать текст
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="FileCheck" size={24} />
                  Результат
                </CardTitle>
              </CardHeader>
              <CardContent>
                {generatedLyrics ? (
                  <div className="space-y-4">
                    <Textarea
                      value={generatedLyrics}
                      onChange={(e) => setGeneratedLyrics(e.target.value)}
                      rows={15}
                      className="font-mono"
                    />
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1 gap-2">
                        <Icon name="Copy" size={16} />
                        Копировать
                      </Button>
                      <Button variant="outline" className="flex-1 gap-2">
                        <Icon name="Download" size={16} />
                        Скачать
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                    Сгенерированный текст появится здесь
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="music" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Music" size={24} />
                AI Композитор
              </CardTitle>
              <CardDescription>
                Создайте уникальный трек на основе ваших предпочтений
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Описание трека</Label>
                    <Textarea
                      placeholder="Например: энергичный electronic трек с глубоким басом и синтезаторными мелодиями"
                      value={trackPrompt}
                      onChange={(e) => setTrackPrompt(e.target.value)}
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Жанр</Label>
                    <Input placeholder="Electronic, House, Techno..." />
                  </div>

                  <div className="space-y-2">
                    <Label>Настроение</Label>
                    <div className="flex flex-wrap gap-2">
                      {['Энергичное', 'Спокойное', 'Меланхоличное', 'Танцевальное'].map((mood) => (
                        <Badge key={mood} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                          {mood}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Длительность (секунды)</Label>
                    <Input type="number" defaultValue="120" min="30" max="300" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>BPM (темп)</Label>
                    <Slider defaultValue={[128]} min={60} max={180} step={1} />
                    <div className="text-right text-sm text-muted-foreground">128 BPM</div>
                  </div>

                  <div className="space-y-2">
                    <Label>Креативность</Label>
                    <Slider defaultValue={[70]} min={0} max={100} step={1} />
                    <div className="text-right text-sm text-muted-foreground">70%</div>
                  </div>

                  <div className="space-y-2">
                    <Label>Энергия</Label>
                    <Slider defaultValue={[80]} min={0} max={100} step={1} />
                    <div className="text-right text-sm text-muted-foreground">80%</div>
                  </div>
                </div>
              </div>

              <Button className="w-full gap-2" size="lg">
                <Icon name="Sparkles" size={20} />
                Создать трек
              </Button>

              <div className="p-6 rounded-lg border border-dashed border-border bg-secondary/50 text-center text-sm text-muted-foreground">
                Сгенерированный трек появится здесь. Процесс может занять 2-5 минут.
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mixer" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Sliders" size={24} />
                Микшер и мастеринг
              </CardTitle>
              <CardDescription>
                Профессиональная обработка вашего трека
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 rounded-lg border border-dashed border-border bg-secondary/50 text-center">
                  <Icon name="Upload" size={32} className="mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm mb-2">Загрузите трек для обработки</p>
                  <Button variant="outline" className="gap-2">
                    <Icon name="File" size={16} />
                    Выбрать файл
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Icon name="Volume2" size={20} />
                      Громкость и динамика
                    </h3>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <Label>Master Volume</Label>
                          <span className="text-muted-foreground">-6 dB</span>
                        </div>
                        <Slider defaultValue={[40]} min={0} max={100} />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <Label>Compression</Label>
                          <span className="text-muted-foreground">Medium</span>
                        </div>
                        <Slider defaultValue={[50]} min={0} max={100} />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <Label>Limiter</Label>
                          <span className="text-muted-foreground">-0.3 dB</span>
                        </div>
                        <Slider defaultValue={[95]} min={0} max={100} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Icon name="Radio" size={20} />
                      Частоты и эффекты
                    </h3>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <Label>Low (Bass)</Label>
                          <span className="text-muted-foreground">+3 dB</span>
                        </div>
                        <Slider defaultValue={[60]} min={0} max={100} />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <Label>Mid</Label>
                          <span className="text-muted-foreground">0 dB</span>
                        </div>
                        <Slider defaultValue={[50]} min={0} max={100} />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <Label>High</Label>
                          <span className="text-muted-foreground">+2 dB</span>
                        </div>
                        <Slider defaultValue={[55]} min={0} max={100} />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <Label>Stereo Width</Label>
                          <span className="text-muted-foreground">120%</span>
                        </div>
                        <Slider defaultValue={[70]} min={0} max={100} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 gap-2">
                    <Icon name="Play" size={16} />
                    Прослушать результат
                  </Button>
                  <Button variant="outline" className="flex-1 gap-2">
                    <Icon name="Download" size={16} />
                    Экспортировать
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AIStudio;
