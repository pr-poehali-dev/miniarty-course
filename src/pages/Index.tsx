import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface Slide {
  id: number;
  type: 'title' | 'content' | 'image' | 'list' | 'break';
  title?: string;
  subtitle?: string;
  content?: string;
  items?: string[];
  comment?: string;
  question?: string;
  imageUrl?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    type: 'title',
    title: 'Курс «Художник миниатюрной росписи»',
    subtitle: 'Занятие 1',
    content: 'Введение в курс',
    comment: 'Сегодня мы начинаем курс, в котором вы попробуете себя в роли художников. В конце обучения каждый из вас создаст авторскую расписную шкатулку.'
  },
  {
    id: 2,
    type: 'list',
    title: 'Зачем мы здесь',
    items: ['Учиться рисовать', 'Осваивать миниатюрную роспись', 'Работать руками', 'Создать итоговую работу'],
    comment: 'Это практический курс. Здесь важно не «уметь», а научиться.'
  },
  {
    id: 3,
    type: 'content',
    title: 'Итог курса',
    content: 'Итоговая работа — художественная роспись шкатулки',
    comment: 'Все шкатулки будут разными, потому что каждая — отражение автора.'
  },
  {
    id: 4,
    type: 'content',
    title: 'Что такое миниатюрная роспись',
    content: 'Миниатюрная роспись — это живопись малого формата с высокой детализацией.',
    comment: '«Миниатюра» — значит маленький размер, но большая работа.'
  },
  {
    id: 5,
    type: 'list',
    title: 'Основные особенности',
    items: ['Малый формат', 'Тонкая кисть', 'Аккуратность', 'Терпение'],
    comment: 'Здесь важно не спешить. Каждый мазок имеет значение.'
  },
  {
    id: 6,
    type: 'list',
    title: 'Почему это сложно',
    items: ['Мелкие детали', 'Работа тонкой кистью', 'Высокая концентрация'],
    comment: 'Но именно поэтому миниатюрная роспись так ценится.'
  },
  {
    id: 7,
    type: 'list',
    title: 'Где встречается миниатюрная роспись',
    items: ['Шкатулки', 'Лаковые изделия', 'Сувениры', 'Иконы'],
    question: 'Где вы уже видели такие вещи?'
  },
  {
    id: 8,
    type: 'content',
    title: 'Русская миниатюрная роспись',
    content: 'Россия — родина уникальных школ миниатюрной росписи'
  },
  {
    id: 9,
    type: 'list',
    title: 'Палех',
    items: ['Чёрный фон', 'Золото', 'Сказочные сюжеты'],
    comment: 'Палех часто напоминает иллюстрации к сказкам.'
  },
  {
    id: 10,
    type: 'image',
    title: 'Палех',
    question: 'Какие чувства вызывает эта работа?',
    imageUrl: 'https://cdn.poehali.dev/projects/ae0e2ca4-45b1-44fd-be32-cd5b29b12dca/files/19b8b824-8b55-4089-92fd-f6bf4d2ca56e.jpg'
  },
  {
    id: 11,
    type: 'list',
    title: 'Федоскино',
    items: ['Реализм', 'Свет и тень', 'Объём'],
    comment: 'Здесь художник стремится к «живости» изображения.'
  },
  {
    id: 12,
    type: 'image',
    title: 'Федоскино',
    imageUrl: 'https://cdn.poehali.dev/projects/ae0e2ca4-45b1-44fd-be32-cd5b29b12dca/files/0f00bac4-cba6-4a8b-a247-814889cbe5a3.jpg'
  },
  {
    id: 13,
    type: 'list',
    title: 'Мстёра',
    items: ['Светлый фон', 'Декоративность', 'Пейзажи']
  },
  {
    id: 14,
    type: 'list',
    title: 'Холуй',
    items: ['Яркие цвета', 'Народные сюжеты', 'Динамика']
  },
  {
    id: 15,
    type: 'content',
    title: 'Сравнение школ',
    content: 'Все школы разные, но объединены миниатюрной техникой',
    question: 'Какая школа вам ближе?'
  },
  {
    id: 16,
    type: 'break',
    title: 'Перерыв 10 минут'
  },
  {
    id: 17,
    type: 'content',
    title: 'Техника безопасности',
    content: 'Художник = аккуратный человек'
  },
  {
    id: 18,
    type: 'list',
    title: 'Основные правила',
    items: ['Не брать кисти в рот', 'Не размахивать инструментами', 'Следить за водой']
  },
  {
    id: 19,
    type: 'list',
    title: 'Рабочее место',
    items: ['Чистота', 'Порядок', 'Удобство']
  },
  {
    id: 20,
    type: 'list',
    title: 'Инструменты художника',
    items: ['Кисти', 'Краски', 'Палитра', 'Вода']
  },
  {
    id: 21,
    type: 'content',
    title: 'Кисти',
    content: 'Основной инструмент миниатюриста — кисть'
  },
  {
    id: 22,
    type: 'list',
    title: 'Виды кистей',
    items: ['Круглые', 'Тонкие', 'Разных номеров']
  },
  {
    id: 23,
    type: 'list',
    title: 'Краски',
    items: ['Гуашь', 'Акрил'],
    comment: 'Мы будем учиться работать с обеими.'
  },
  {
    id: 24,
    type: 'content',
    title: 'Палитра',
    content: 'Цвета нужно смешивать, а не брать сразу из банки'
  },
  {
    id: 25,
    type: 'list',
    title: 'Уход за кистями',
    items: ['Мыть после работы', 'Не оставлять в воде', 'Сушить правильно']
  },
  {
    id: 26,
    type: 'content',
    title: 'Переходим к практике',
    content: 'Сейчас мы начнём пробовать себя в роли художника'
  },
  {
    id: 27,
    type: 'list',
    title: 'Что будем делать',
    items: ['Линии', 'Точки', 'Простые элементы']
  },
  {
    id: 28,
    type: 'image',
    title: 'Линии',
    imageUrl: 'https://cdn.poehali.dev/projects/ae0e2ca4-45b1-44fd-be32-cd5b29b12dca/files/05b3ef0c-44ef-48b8-a891-ec6b6c23cb20.jpg'
  },
  {
    id: 29,
    type: 'image',
    title: 'Точки и капли',
    imageUrl: 'https://cdn.poehali.dev/projects/ae0e2ca4-45b1-44fd-be32-cd5b29b12dca/files/a7f8c5ec-71c4-4a33-9803-5673b3eb0e0e.jpg'
  },
  {
    id: 30,
    type: 'image',
    title: 'Практическая работа',
    imageUrl: 'https://cdn.poehali.dev/projects/ae0e2ca4-45b1-44fd-be32-cd5b29b12dca/files/a513070f-99bf-4009-a00d-624eb8cfe4dc.jpg'
  },
  {
    id: 31,
    type: 'image',
    title: 'Практическая работа',
    imageUrl: 'https://cdn.poehali.dev/projects/ae0e2ca4-45b1-44fd-be32-cd5b29b12dca/files/05b3ef0c-44ef-48b8-a891-ec6b6c23cb20.jpg'
  },
  {
    id: 32,
    type: 'image',
    title: 'Практическая работа',
    imageUrl: 'https://cdn.poehali.dev/projects/ae0e2ca4-45b1-44fd-be32-cd5b29b12dca/files/a7f8c5ec-71c4-4a33-9803-5673b3eb0e0e.jpg'
  },
  {
    id: 33,
    type: 'content',
    title: 'Рефлексия',
    question: 'Что было самым сложным?'
  },
  {
    id: 34,
    type: 'content',
    title: 'Что понравилось',
    question: 'Что получилось лучше всего?'
  },
  {
    id: 35,
    type: 'list',
    title: 'Что дальше',
    items: ['Учимся рисовать', 'Создаём эскизы', 'Готовим шкатулку']
  },
  {
    id: 36,
    type: 'content',
    title: 'Домашнее задание (по желанию)',
    content: 'Найти понравившийся стиль. Придумать идею.'
  },
  {
    id: 37,
    type: 'content',
    title: 'Итог',
    content: 'Сегодня вы сделали первый шаг к созданию своей авторской работы'
  },
  {
    id: 38,
    type: 'title',
    title: 'Спасибо за работу',
    subtitle: '🎨'
  }
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const progress = ((currentSlide + 1) / slides.length) * 100;
  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-primary rounded-full animate-ornament-rotate" />
        <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-secondary rounded-full animate-ornament-rotate" style={{ animationDirection: 'reverse' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-4 border-accent rounded-full animate-ornament-rotate" style={{ animationDelay: '5s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 flex flex-col min-h-screen">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">
              Слайд {currentSlide + 1} из {slides.length}
            </span>
            <span className="text-sm font-medium text-primary">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="flex-1 flex items-center justify-center">
          <Card className="w-full max-w-4xl p-8 md:p-12 shadow-2xl border-2 border-primary/20 animate-fade-in bg-card/95 backdrop-blur-sm">
            {slide.type === 'title' && (
              <div className="text-center space-y-6">
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-4">
                    {slide.title}
                  </h1>
                  {slide.subtitle && (
                    <p className="text-2xl md:text-3xl text-primary font-semibold">
                      {slide.subtitle}
                    </p>
                  )}
                  {slide.content && (
                    <p className="text-xl md:text-2xl text-muted-foreground mt-6">
                      {slide.content}
                    </p>
                  )}
                </div>
                {slide.comment && (
                  <div className="mt-8 p-6 bg-muted/50 rounded-lg border-l-4 border-primary">
                    <p className="text-lg text-foreground italic">{slide.comment}</p>
                  </div>
                )}
              </div>
            )}

            {slide.type === 'content' && (
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 text-center">
                  {slide.title}
                </h2>
                {slide.content && (
                  <p className="text-2xl md:text-3xl text-foreground text-center leading-relaxed">
                    {slide.content}
                  </p>
                )}
                {slide.comment && (
                  <div className="mt-8 p-6 bg-muted/50 rounded-lg border-l-4 border-primary">
                    <p className="text-lg text-foreground italic">{slide.comment}</p>
                  </div>
                )}
                {slide.question && (
                  <div className="mt-8 p-6 bg-secondary/10 rounded-lg border-2 border-secondary">
                    <p className="text-xl font-semibold text-secondary">{slide.question}</p>
                  </div>
                )}
              </div>
            )}

            {slide.type === 'list' && (
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-8 text-center">
                  {slide.title}
                </h2>
                <ul className="space-y-4">
                  {slide.items?.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-4 text-xl md:text-2xl text-foreground animate-slide-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="text-primary text-3xl flex-shrink-0">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {slide.comment && (
                  <div className="mt-8 p-6 bg-muted/50 rounded-lg border-l-4 border-primary">
                    <p className="text-lg text-foreground italic">{slide.comment}</p>
                  </div>
                )}
                {slide.question && (
                  <div className="mt-8 p-6 bg-secondary/10 rounded-lg border-2 border-secondary">
                    <p className="text-xl font-semibold text-secondary">{slide.question}</p>
                  </div>
                )}
              </div>
            )}

            {slide.type === 'image' && (
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-8 text-center">
                  {slide.title}
                </h2>
                {slide.imageUrl ? (
                  <div className="rounded-lg overflow-hidden border-4 border-primary/20 shadow-xl">
                    <img 
                      src={slide.imageUrl} 
                      alt={slide.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center p-12 bg-muted/30 rounded-lg border-2 border-dashed border-primary/30 min-h-[300px]">
                    <div className="text-center space-y-4">
                      <Icon name="Image" size={64} className="text-primary mx-auto" />
                      <p className="text-lg text-muted-foreground">Визуальный пример</p>
                    </div>
                  </div>
                )}
                {slide.question && (
                  <div className="mt-8 p-6 bg-secondary/10 rounded-lg border-2 border-secondary">
                    <p className="text-xl font-semibold text-secondary">{slide.question}</p>
                  </div>
                )}
              </div>
            )}

            {slide.type === 'break' && (
              <div className="text-center space-y-6">
                <Icon name="Coffee" size={80} className="text-primary mx-auto animate-pulse" />
                <h2 className="text-5xl md:text-6xl font-bold text-secondary">
                  {slide.title}
                </h2>
                <p className="text-2xl text-muted-foreground">Время отдохнуть ☕</p>
              </div>
            )}
          </Card>
        </div>

        <div className="flex items-center justify-between mt-8 gap-4">
          <Button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            variant="outline"
            size="lg"
            className="flex items-center gap-2"
          >
            <Icon name="ChevronLeft" size={20} />
            Назад
          </Button>

          <div className="flex gap-2 overflow-x-auto max-w-md">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-primary w-8'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Перейти к слайду ${index + 1}`}
              />
            ))}
          </div>

          <Button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            size="lg"
            className="flex items-center gap-2"
          >
            Далее
            <Icon name="ChevronRight" size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;