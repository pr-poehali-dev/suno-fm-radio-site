import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const services = [
  {
    id: 1,
    icon: 'FileText',
    title: 'Написание текста',
    description: 'Создание уникальных текстов для ваших песен с помощью AI',
    price: 'от 1,500₽',
    features: ['До 3 куплетов', 'Припев', 'Ревизия текста', 'Коммерческое использование'],
  },
  {
    id: 2,
    icon: 'Headphones',
    title: 'Разбор трека',
    description: 'Профессиональный анализ композиции и рекомендации по улучшению',
    price: 'от 2,000₽',
    features: ['Детальный анализ', 'Отчет на 5+ страниц', 'Рекомендации', 'Видео-разбор'],
  },
  {
    id: 3,
    icon: 'Disc',
    title: 'Мастеринг',
    description: 'Финальная обработка трека для профессионального звучания',
    price: 'от 3,500₽',
    features: ['Loudness optimization', 'Частотный баланс', 'Стерео-расширение', 'До 3 ревизий'],
  },
  {
    id: 4,
    icon: 'Sliders',
    title: 'Сведение',
    description: 'Профессиональное сведение до 32 треков',
    price: 'от 5,000₽',
    features: ['До 32 треков', 'EQ и компрессия', 'Пространственные эффекты', 'Без ограничений по времени'],
  },
  {
    id: 5,
    icon: 'Library',
    title: 'Добавление в каталог',
    description: 'Размещение вашего трека в нашем каталоге для тысяч слушателей',
    price: 'от 1,000₽',
    features: ['Промо на 7 дней', 'Плейлист редакции', 'Статистика прослушиваний', 'Отзывы слушателей'],
  },
  {
    id: 6,
    icon: 'Video',
    title: 'Создание видеоклипа',
    description: 'AI-генерация уникального видеоклипа для вашего трека',
    price: 'от 8,000₽',
    features: ['HD качество', 'До 4 минут', '2 концепта на выбор', 'Брендирование'],
  },
];

const ServicesPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2">Наши услуги</h1>
        <p className="text-muted-foreground">
          Профессиональные решения для ваших музыкальных проектов
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="flex flex-col hover:border-primary/50 transition-all">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <Icon name={service.icon} size={24} className="text-primary" />
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between space-y-4">
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3 pt-4 border-t">
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-bold">{service.price}</span>
                  <Badge variant="secondary">за проект</Badge>
                </div>
                <Button className="w-full gap-2">
                  <Icon name="ShoppingCart" size={16} />
                  Заказать
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 border-primary/30">
        <CardContent className="p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold">Нужен индивидуальный проект?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы создаем уникальные решения под ваши задачи. Свяжитесь с нами для обсуждения вашего проекта.
          </p>
          <Button size="lg" className="gap-2">
            <Icon name="MessageCircle" size={20} />
            Связаться с нами
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServicesPage;
