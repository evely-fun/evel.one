export type Lang = 'ru' | 'en'

export const strings = {
  ru: {
    meta: {
      title: 'Эвели. Telegram Mini Apps под ключ',
      description:
        'Разработка Telegram Mini Apps: бэкенд на Python, фронтенд на TypeScript, деплой на сервер. Цены от 20 долларов, поддержка на подписке.',
    },
    nav: {
      work: 'Работы',
      security: 'Безопасность',
      pricing: 'Цены',
      terms: 'Условия',
      write: 'Написать',
      menu: 'Меню',
      close: 'Закрыть',
      theme: 'Сменить тему',
      lang: 'Switch to English',
    },
    hero: {
      kicker: 'Эвели, разработка под Telegram',
      title: 'Telegram Mini Apps под ключ',
      lead: 'Бэкенд на Python, фронтенд на TypeScript, деплой на сервер. Ты получаешь приложение, которое уже открывается по своей ссылке. Код тоже твой.',
      primary: 'Написать в Telegram',
      secondary: 'Посмотреть цены',
      facts: [
        { value: 'от 2 дней', label: 'срок сдачи' },
        { value: '50%', label: 'предоплата' },
        { value: 'деплой', label: 'входит в цену' },
      ],
    },
    stack: {
      title: 'Что входит в работу',
      lead: 'Три части, которые обычно приходится собирать у трёх разных исполнителей.',
      items: [
        {
          icon: 'sliders',
          title: 'Бэкенд',
          body: 'Python 3.12, aiogram, FastAPI, Postgres и Redis. Бот и API живут в одном процессе, поэтому сервер нужен один.',
        },
        {
          icon: 'sparkles',
          title: 'Фронтенд',
          body: 'React и TypeScript, аккуратная анимация, светлая и тёмная тема. Тема берётся из Telegram, приложение не бьёт по глазам ночью.',
        },
        {
          icon: 'globe',
          title: 'Деплой',
          body: 'Docker Compose и Caddy на твоём сервере, сертификат сразу. Дальше приложение работает без меня.',
        },
      ],
    },
    security: {
      title: 'Безопасность, которую можно проверить',
      lead: 'Mini App живёт внутри Telegram и обычно проверяет подпись один раз. Ниже то, что закрыто в моём последнем коммерческом проекте. Это тот уровень, который идёт в тарифе Премиум.',
      items: [
        {
          icon: 'key',
          title: 'Подпись Telegram',
          body: 'HMAC-SHA256 на каждом запросе, срок жизни 24 часа. Старый перехваченный initData не пройдёт.',
        },
        {
          icon: 'link',
          title: 'Защита от подмены ссылок',
          body: 'Файлы скачиваются только с доверенных доменов. IP проверяется до запроса, а не по факту.',
        },
        {
          icon: 'clock',
          title: 'Лимиты по типам запросов',
          body: 'У загрузки, авторизации и чтения свои бюджеты. Один тяжёлый эндпоинт не кладёт остальные.',
        },
        {
          icon: 'lock',
          title: 'Шифрование данных',
          body: 'Персональные данные пользователей лежат зашифрованными через Fernet. Дамп базы сам по себе ничего не даёт.',
        },
        {
          icon: 'eye',
          title: 'Скрытая админка',
          body: 'Админ-маршруты отвечают 404 всем, кроме админов. Каждое действие уходит в журнал.',
        },
        {
          icon: 'shield',
          title: 'Security-заголовки',
          body: 'CSP и HSTS настроены под конкретное приложение. Не копипаста из статьи.',
        },
        {
          icon: 'chart-bars',
          title: 'Тесты на безопасность',
          body: 'Отдельный набор тестов бьёт именно по этой поверхности. Регрессию видно в тот же день.',
        },
      ],
    },
    work: {
      title: 'Работы',
      lead: 'Показываю то, что можно показать. Чужой код я не открываю, и твой тоже не буду.',
      items: [
        {
          name: 'KachniBot',
          status: 'Коммерческий проект, код закрыт',
          body: 'Mini App для скачивания и обработки медиа. Бэкенд, фронтенд и голосовой модуль разнесены по отдельным сервисам, деплой через Docker Compose и Caddy. Разбор защиты выше собран как раз на этом проекте.',
          tags: ['Python', 'FastAPI', 'TypeScript', 'Docker'],
          tone: 'work',
        },
        {
          name: 'Остальные заказы',
          status: 'Под NDA',
          body: 'Заказчики закрыли и код, и описание, поэтому подробностей не будет. С твоим проектом я поведу себя так же.',
          tags: ['NDA'],
          tone: 'note',
        },
      ],
    },
    pricing: {
      title: 'Разовый заказ',
      lead: 'Цена фиксированная, срок считается от предоплаты. Правки входят в тариф.',
      badge: 'Чаще берут',
      per: 'за проект',
      revisionsOne: 'правка',
      revisionsFew: 'правки',
      days: 'дней',
      daysTwo: 'дня',
      tiers: [
        {
          name: 'Базовый',
          price: '$20',
          days: 2,
          revisions: 1,
          summary: 'Готовый шаблон, переодетый под твой бренд',
          features: [
            'Цвета, тексты и иконки под тебя',
            'Подключение к твоему боту',
            'Деплой на твой сервер',
          ],
          featured: false,
        },
        {
          name: 'Стандарт',
          price: '$60',
          days: 5,
          revisions: 2,
          summary: 'Своя логика вместо шаблона',
          features: [
            'Всё из Базового',
            'Логика под твою задачу',
            'Проверка подписи Telegram',
            'База данных и свои экраны',
          ],
          featured: false,
        },
        {
          name: 'Премиум',
          price: '$150',
          days: 10,
          revisions: 3,
          summary: 'Продакшн-уровень, который не стыдно открыть людям',
          features: [
            'Всё из Стандарта',
            'Шифрование персональных данных',
            'Лимиты по типам запросов',
            'Security-заголовки и тесты',
            'Настроенный деплой и бэкапы',
          ],
          featured: true,
        },
      ],
    },
    longterm: {
      title: 'Долгое сотрудничество',
      lead: 'Для тех, у кого не один бот, а поток задач.',
      items: [
        {
          icon: 'medal-gold',
          name: 'Пакет приложений',
          price: '−15%',
          unit: 'на каждое',
          body: 'Скидка, если заказываешь 2 и больше Mini App одним пакетом. Считается сразу, а не после сдачи.',
        },
        {
          icon: 'heart',
          name: 'Поддержка',
          price: '$40',
          unit: 'в месяц',
          body: 'До 3 мелких правок или багфиксов в месяц для приложения, которое уже работает. Подходит, если своего разработчика нет.',
        },
        {
          icon: 'infinity',
          name: 'Постоянная разработка',
          price: '$150',
          unit: 'в месяц',
          body: 'Новые фичи регулярно и приоритетный ответ на сообщения. Беру, если задачи правда идут каждый месяц.',
        },
      ],
    },
    terms: {
      title: 'Как мы работаем',
      lead: 'Скучная часть, которую лучше прочитать до, а не после.',
      items: [
        {
          title: '50% перед стартом',
          body: 'Остаток после сдачи и твоей проверки. Пока не принял, деньги за вторую половину не прошу.',
        },
        {
          title: 'Подписка в начале месяца',
          body: 'Касается поддержки и постоянной разработки. Месяц не идёт, пока оплата не пришла.',
        },
        {
          title: 'Правки сверх тарифа',
          body: 'Считаются отдельно по фиксированной цене. Цену называю до того, как сажусь их делать.',
        },
        {
          title: 'Отмена до сдачи',
          body: 'Предоплата за уже сделанную часть не возвращается. Всё, что успел написать, отдаю.',
        },
      ],
    },
    cta: {
      title: 'Напиши, что нужно',
      lead: 'Опиши задачу в двух-трёх предложениях. Отвечу ценой и сроком, обычно в тот же день.',
      button: 'Написать в Telegram',
      note: 'Отвечаю по Киеву, примерно с 10 до 23.',
    },
    footer: {
      name: 'Эвели',
      tagline: 'Telegram Mini Apps под ключ',
      rights: 'Все права защищены',
      built: 'Сайт собран вручную на React и TypeScript',
    },
  },

  en: {
    meta: {
      title: 'Evely. Telegram Mini Apps, built end to end',
      description:
        'Telegram Mini App development: Python backend, TypeScript frontend, deployed to your server. From $20, with monthly support plans.',
    },
    nav: {
      work: 'Work',
      security: 'Security',
      pricing: 'Pricing',
      terms: 'Terms',
      write: 'Message me',
      menu: 'Menu',
      close: 'Close',
      theme: 'Switch theme',
      lang: 'Переключить на русский',
    },
    hero: {
      kicker: 'Evely, Telegram development',
      title: 'Telegram Mini Apps, built end to end',
      lead: 'Python on the backend, TypeScript on the frontend, deployed to your server. You get an app that already opens from its own link. The code is yours as well.',
      primary: 'Message me on Telegram',
      secondary: 'See pricing',
      facts: [
        { value: 'from 2 days', label: 'delivery' },
        { value: '50%', label: 'up front' },
        { value: 'deploy', label: 'included' },
      ],
    },
    stack: {
      title: 'What the work covers',
      lead: 'Three parts you would normally have to source from three different people.',
      items: [
        {
          icon: 'sliders',
          title: 'Backend',
          body: 'Python 3.12, aiogram, FastAPI, Postgres and Redis. The bot and the API share one process, so you only pay for one server.',
        },
        {
          icon: 'sparkles',
          title: 'Frontend',
          body: 'React and TypeScript with careful motion, light and dark themes. The theme follows Telegram, so nothing burns your eyes at night.',
        },
        {
          icon: 'globe',
          title: 'Deployment',
          body: 'Docker Compose and Caddy on your server, certificates from day one. After that the app runs without me.',
        },
      ],
    },
    security: {
      title: 'Security you can actually check',
      lead: 'A Mini App lives inside Telegram and usually verifies the signature once. Below is what is closed off in my last commercial project. This is the level that ships in the Premium tier.',
      items: [
        {
          icon: 'key',
          title: 'Telegram signature check',
          body: 'HMAC-SHA256 on every request with a 24 hour window. Replayed initData does not get through.',
        },
        {
          icon: 'link',
          title: 'Download guard',
          body: 'Files are fetched only from trusted domains. The IP is resolved and checked before the request goes out.',
        },
        {
          icon: 'clock',
          title: 'Per-endpoint rate limits',
          body: 'Upload, auth and read have separate budgets. One heavy endpoint cannot take the rest down with it.',
        },
        {
          icon: 'lock',
          title: 'Encrypted user data',
          body: 'Personal data sits encrypted with Fernet. A database dump on its own gives nothing away.',
        },
        {
          icon: 'eye',
          title: 'Hidden admin routes',
          body: 'Admin paths answer 404 to everyone but admins, and every action lands in an audit log.',
        },
        {
          icon: 'shield',
          title: 'Security headers',
          body: 'CSP and HSTS tuned for this specific app. Not pasted from a blog post.',
        },
        {
          icon: 'chart-bars',
          title: 'Tests on the security surface',
          body: 'A separate suite hits exactly this surface, so a regression shows up the same day.',
        },
      ],
    },
    work: {
      title: 'Work',
      lead: 'I show what I am allowed to show. I do not open other people’s code, and I will not open yours.',
      items: [
        {
          name: 'KachniBot',
          status: 'Commercial project, closed source',
          body: 'A Mini App for downloading and processing media. Backend, frontend and the voice module are split into separate services, deployed with Docker Compose and Caddy. The security list above comes from this project.',
          tags: ['Python', 'FastAPI', 'TypeScript', 'Docker'],
          tone: 'work',
        },
        {
          name: 'Other clients',
          status: 'Under NDA',
          body: 'The clients closed both the code and the description, so there are no details to give. Your project gets the same treatment.',
          tags: ['NDA'],
          tone: 'note',
        },
      ],
    },
    pricing: {
      title: 'One-off projects',
      lead: 'Fixed price, and the clock starts at the deposit. Revisions are part of the tier.',
      badge: 'Most picked',
      per: 'per project',
      revisionsOne: 'revision',
      revisionsFew: 'revisions',
      days: 'days',
      daysTwo: 'days',
      tiers: [
        {
          name: 'Basic',
          price: '$20',
          days: 2,
          revisions: 1,
          summary: 'A ready template, dressed in your brand',
          features: [
            'Your colours, copy and icons',
            'Wired up to your bot',
            'Deployed to your server',
          ],
          featured: false,
        },
        {
          name: 'Standard',
          price: '$60',
          days: 5,
          revisions: 2,
          summary: 'Your own logic instead of a template',
          features: [
            'Everything in Basic',
            'Logic written for your case',
            'Telegram signature verification',
            'Database and custom screens',
          ],
          featured: false,
        },
        {
          name: 'Premium',
          price: '$150',
          days: 10,
          revisions: 3,
          summary: 'Production grade, safe to hand to real users',
          features: [
            'Everything in Standard',
            'Encrypted personal data',
            'Per-endpoint rate limits',
            'Security headers and tests',
            'Deployment and backups set up',
          ],
          featured: true,
        },
      ],
    },
    longterm: {
      title: 'Longer arrangements',
      lead: 'For people with a queue of work rather than a single bot.',
      items: [
        {
          icon: 'medal-gold',
          name: 'Bundle of apps',
          price: '−15%',
          unit: 'on each',
          body: 'A discount when you order 2 or more Mini Apps as one package. Applied at the start, not after delivery.',
        },
        {
          icon: 'heart',
          name: 'Support plan',
          price: '$40',
          unit: 'per month',
          body: 'Up to 3 small changes or bug fixes a month for an app that already runs. Useful if you have no developer of your own.',
        },
        {
          icon: 'infinity',
          name: 'Ongoing development',
          price: '$150',
          unit: 'per month',
          body: 'New features on a regular cadence and priority replies. I take this on when the work genuinely arrives every month.',
        },
      ],
    },
    terms: {
      title: 'How we work',
      lead: 'The boring part, better read before than after.',
      items: [
        {
          title: '50% before I start',
          body: 'The rest once it is delivered and you have checked it. I do not ask for the second half until you accept the work.',
        },
        {
          title: 'Subscriptions billed at the start of the month',
          body: 'This covers support and ongoing development. The month does not begin until payment lands.',
        },
        {
          title: 'Revisions beyond the tier',
          body: 'Quoted separately at a fixed price. You hear the number before I start on them.',
        },
        {
          title: 'Cancelling before delivery',
          body: 'The deposit covering finished work is not refunded. Everything already written is handed over.',
        },
      ],
    },
    cta: {
      title: 'Tell me what you need',
      lead: 'Describe the task in two or three sentences. You get a price and a timeline back, usually the same day.',
      button: 'Message me on Telegram',
      note: 'I reply on Kyiv time, roughly 10:00 to 23:00.',
    },
    footer: {
      name: 'Evely',
      tagline: 'Telegram Mini Apps, built end to end',
      rights: 'All rights reserved',
      built: 'This site is hand-built with React and TypeScript',
    },
  },
} as const

export type Strings = (typeof strings)['ru']
