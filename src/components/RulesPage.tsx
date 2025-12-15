import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const RulesPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2">Правила и рекомендации</h1>
        <p className="text-muted-foreground">
          Всё что нужно знать о работе с SUNO-FM
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="FileText" size={24} />
                Правила сайта
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Общие правила поведения</AccordionTrigger>
                  <AccordionContent className="space-y-2 text-sm text-muted-foreground">
                    <p>• Уважайте других пользователей</p>
                    <p>• Запрещен спам и реклама без разрешения</p>
                    <p>• Не публикуйте контент для взрослых</p>
                    <p>• Соблюдайте авторские права</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Правила чата</AccordionTrigger>
                  <AccordionContent className="space-y-2 text-sm text-muted-foreground">
                    <p>• Общайтесь вежливо и конструктивно</p>
                    <p>• Не используйте ненормативную лексику</p>
                    <p>• Запрещены оскорбления и провокации</p>
                    <p>• За нарушения возможна блокировка</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Авторские права</AccordionTrigger>
                  <AccordionContent className="space-y-2 text-sm text-muted-foreground">
                    <p>• Загружайте только свой контент</p>
                    <p>• Указывайте соавторов, если они есть</p>
                    <p>• При использовании сэмплов убедитесь в наличии прав</p>
                    <p>• Нарушение авторских прав карается удалением контента</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Music" size={24} />
                Отправка трека в ротацию
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Технические требования</AccordionTrigger>
                  <AccordionContent className="space-y-2 text-sm text-muted-foreground">
                    <p>• Формат: WAV или MP3 (320 kbps)</p>
                    <p>• Битрейт: минимум 256 kbps</p>
                    <p>• Длительность: от 2 до 8 минут</p>
                    <p>• Максимальный размер файла: 50 МБ</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Процесс отбора</AccordionTrigger>
                  <AccordionContent className="space-y-2 text-sm text-muted-foreground">
                    <p>• Модерация занимает 2-3 рабочих дня</p>
                    <p>• Треки оцениваются по качеству и уникальности</p>
                    <p>• При одобрении трек попадет в ротацию в течение недели</p>
                    <p>• Отклоненные треки можно доработать и отправить повторно</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Оформление трека</AccordionTrigger>
                  <AccordionContent className="space-y-2 text-sm text-muted-foreground">
                    <p>• Обязательны: название, исполнитель, жанр</p>
                    <p>• Рекомендуется добавить обложку (1000x1000px)</p>
                    <p>• Укажите теги для лучшей находимости</p>
                    <p>• Добавьте описание и историю создания</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Lightbulb" size={24} />
                Рекомендации
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={16} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Качество превыше всего</h4>
                    <p className="text-sm text-muted-foreground">
                      Используйте профессиональное сведение и мастеринг для лучшего звучания
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={16} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Активное участие</h4>
                    <p className="text-sm text-muted-foreground">
                      Общайтесь с сообществом, комментируйте треки других авторов
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={16} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Экспериментируйте</h4>
                    <p className="text-sm text-muted-foreground">
                      Используйте AI-инструменты студии для создания уникального звучания
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={16} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Регулярность</h4>
                    <p className="text-sm text-muted-foreground">
                      Публикуйте новые треки регулярно для роста аудитории
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="lg:sticky lg:top-24 h-fit">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="MessageCircle" size={24} />
              Обратная связь
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Имя</Label>
                <Input id="name" placeholder="Ваше имя" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Тема</Label>
                <Input id="subject" placeholder="Тема сообщения" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Сообщение</Label>
                <Textarea
                  id="message"
                  placeholder="Расскажите нам о вашем вопросе или предложении..."
                  rows={6}
                />
              </div>

              <Button className="w-full gap-2">
                <Icon name="Send" size={16} />
                Отправить
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t space-y-3">
              <h4 className="font-semibold mb-3">Другие способы связи</h4>
              <div className="flex items-center gap-3 text-sm">
                <Icon name="Mail" size={16} className="text-primary" />
                <span>support@suno-fm.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Icon name="Phone" size={16} className="text-primary" />
                <span>+7 (800) 123-45-67</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Icon name="MessageCircle" size={16} className="text-primary" />
                <span>Telegram: @sunofm_support</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RulesPage;
