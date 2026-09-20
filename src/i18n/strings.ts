export type Lang = 'ru' | 'en'

export const sectionIds = ['services', 'projects', 'security', 'pricing', 'longterm', 'terms', 'start'] as const

export const strings = {
  ru: {
    meta: {
      title: 'Эвели. Telegram Mini Apps под ключ',
      description:
        'Разработка Telegram Mini Apps: бэкенд на Python, фронтенд на TypeScript, деплой на сервер. Проекты, цены и условия работы одной страницей.',
    },
    ui: {
      write: 'Написать',
      theme: 'Сменить тему',
      lang: 'Switch to English',
      menu: 'Содержание',
      close: 'Закрыть',
      contents: 'Содержание',
      toTop: 'Наверх',
    },
    masthead: {
      author: 'Эвели',
      title: 'Telegram Mini Apps под ключ',
      abstract:
        'Бэкенд на Python, фронтенд на TypeScript, деплой на сервер. Ты получаешь приложение, которое уже открывается по своей ссылке, и код к нему. Ниже что я делаю, что уже сделал, сколько это стоит и на каких условиях.',
      meta: [
        { key: 'Формат', value: 'Telegram Mini Apps' },
        { key: 'Цены', value: 'от $20 за проект' },
        { key: 'Срок', value: 'от 2 дней' },
        { key: 'Ответ', value: 'обычно в тот же день' },
      ],
    },
    contents: {
      title: 'Содержание',
      items: [
        { id: 'services', n: '01', label: 'Что я делаю', hint: 'Бэкенд, фронтенд, деплой' },
        { id: 'projects', n: '02', label: 'Проекты', hint: 'Пять, которые можно показать' },
        { id: 'security', n: '03', label: 'Безопасность', hint: 'Что именно закрыто в коде' },
        { id: 'pricing', n: '04', label: 'Цены', hint: 'Три тарифа за разовый проект' },
        { id: 'longterm', n: '05', label: 'Долгое сотрудничество', hint: 'Пакет, поддержка, подписка' },
        { id: 'terms', n: '06', label: 'Условия', hint: 'Оплата, правки, отмена' },
        { id: 'start', n: '07', label: 'Как начать', hint: 'Что написать в первом сообщении' },
      ],
    },
    services: {
      n: '01',
      title: 'Что я делаю',
      lead: 'Три части, которые обычно приходится собирать у трёх разных исполнителей.',
      items: [
        {
          title: 'Бэкенд',
          body: 'Python 3.12, aiogram, FastAPI, Postgres и Redis. Бот и API живут в одном процессе, поэтому сервер нужен один.',
        },
        {
          title: 'Фронтенд',
          body: 'React и TypeScript, аккуратная анимация, светлая и тёмная тема. Тема берётся из Telegram, приложение не бьёт по глазам ночью.',
        },
        {
          title: 'Деплой',
          body: 'Docker Compose и Caddy на твоём сервере, сертификат сразу. Дальше приложение работает без меня.',
        },
      ],
    },
    projects: {
      n: '02',
      title: 'Проекты',
      lead: 'Скриншоты настоящие, из работающих приложений. Чужой код я не открываю, и твой тоже не буду.',
      items: [
        {
          n: '2.1',
          name: 'Анонимный голосовой чат',
          kind: 'Telegram Mini App',
          body: 'Самый большой из моих проектов. Случайный собеседник голосом или текстом, новая маска в каждом разговоре, голосовые комнаты на несколько человек и набор игр поверх них: мафия, городская мафия, бункер, алиас, крестики-нолики. Сверху энергия, валюта, друзья, лидерборд и магазин. Русский и английский, светлая и тёмная тема.',
          stack: ['Python', 'aiogram', 'FastAPI', 'Postgres', 'Redis', 'React'],
          shots: [
            { src: '/shots/voice-home.webp', caption: 'Подбор собеседника: голосом или текстом, за энергию' },
            { src: '/shots/voice-games.webp', caption: 'Игры, каждая работает через голосовой канал' },
          ],
        },
        {
          n: '2.2',
          name: 'Анонка',
          kind: 'Telegram-бот и Mini App',
          body: 'Анонимные вопросы по личной ссылке. Кидаешь ссылку в сторис, тебе пишут, автора не видит никто. Входящие и ответы прямо в приложении, статистика по переходам и сообщениям, отдельные ссылки под каждую площадку и готовая карточка для сторис.',
          stack: ['Python', 'aiogram', 'FastAPI', 'Postgres', 'Redis', 'React'],
          shots: [
            { src: '/shots/anon-link.webp', caption: 'Своя ссылка, счётчики и разделы на главной' },
            { src: '/shots/anon-stats.webp', caption: 'Статистика переходов и сообщений за неделю' },
          ],
        },
        {
          n: '2.3',
          name: 'Проверка файлов и ссылок',
          kind: 'Telegram-бот и Mini App',
          body: 'Присылаешь файл, ссылку или хэш, получаешь отчёт: сколько антивирусов сработало из шестидесяти с лишним, что это за файл, когда его впервые увидели, все три отпечатка. Сам файл не хранится. Работает в личке и в группах, история проверок лежит в приложении.',
          stack: ['Python', 'aiogram', 'FastAPI', 'VirusTotal', 'ClamAV'],
          shots: [
            { src: '/shots/checker-report.webp', caption: 'Отчёт: вердикт, сработки антивирусов, отпечатки файла' },
            { src: '/shots/checker-history.webp', caption: 'История проверок с вердиктом по каждой' },
          ],
        },
        {
          n: '2.4',
          name: 'Загрузчик музыки и видео',
          kind: 'Telegram Mini App',
          body: 'Поиск трека по нескольким площадкам в одном окне, плеер внутри приложения, файл приходит прямо в чат. Видео забирается по ссылке из TikTok, Reels, Shorts и ещё десятка сайтов. Есть избранное, квоты, подписка и админка со статистикой.',
          stack: ['Python', 'aiogram', 'FastAPI', 'React', 'TypeScript'],
          shots: [
            { src: '/shots/downloader-search.webp', caption: 'Поиск по нескольким площадкам сразу' },
            { src: '/shots/downloader-player.webp', caption: 'Плеер и выгрузка файла в чат' },
          ],
        },
        {
          n: '2.5',
          name: 'Discord-сервер под ключ',
          kind: 'Discord',
          body: 'Шаблон сервера по образцу крупных сообществ: экономика, роли, каналы, модерация. Проверку новых участников ведёт ИИ, а не человек с анкетой на входе.',
          stack: ['Discord', 'Python'],
          shots: [],
          link: 'Зайти на сервер',
        },
      ],
    },
    security: {
      n: '03',
      title: 'Безопасность',
      lead: 'Mini App живёт внутри Telegram и обычно проверяет подпись один раз. Разбор ниже собран на проекте из раздела 2.4. Код закрыт, устройство защиты описать могу. Этот уровень идёт в тарифе Премиум.',
      items: [
        {
          title: 'Подпись Telegram',
          body: 'HMAC-SHA256 на каждом запросе, срок жизни 24 часа. Старый перехваченный initData не пройдёт.',
        },
        {
          title: 'Защита от подмены ссылок',
          body: 'Файлы скачиваются только с доверенных доменов. IP проверяется до запроса, а не по факту.',
        },
        {
          title: 'Лимиты по типам запросов',
          body: 'У загрузки, авторизации и чтения свои бюджеты. Один тяжёлый эндпоинт не кладёт остальные.',
        },
        {
          title: 'Шифрование данных',
          body: 'Персональные данные пользователей лежат зашифрованными через Fernet. Дамп базы сам по себе ничего не даёт.',
        },
        {
          title: 'Скрытая админка',
          body: 'Админ-маршруты отвечают 404 всем, кроме админов. Каждое действие уходит в журнал.',
        },
        {
          title: 'Security-заголовки',
          body: 'CSP и HSTS настроены под конкретное приложение. Не копипаста из статьи.',
        },
        {
          title: 'Тесты на безопасность',
          body: 'Отдельный набор тестов бьёт именно по этой поверхности. Регрессию видно в тот же день.',
        },
      ],
    },
    pricing: {
      n: '04',
      title: 'Цены',
      lead: 'Разовый проект, цена фиксированная. Срок считается от предоплаты, правки входят в тариф.',
      head: { name: 'Тариф', price: 'Цена', days: 'Срок', revisions: 'Правки' },
      note: 'Премиум это тот уровень, который описан в разделе 03.',
      rows: [
        {
          name: 'Базовый',
          price: '$20',
          days: '2 дня',
          revisions: '1 правка',
          body: 'Готовый шаблон, переодетый под твой бренд. Цвета, тексты и иконки, подключение к твоему боту, деплой на твой сервер.',
        },
        {
          name: 'Стандарт',
          price: '$60',
          days: '5 дней',
          revisions: '2 правки',
          body: 'Всё из Базового, плюс логика под твою задачу, проверка подписи Telegram, база данных и свои экраны вместо шаблонных.',
        },
        {
          name: 'Премиум',
          price: '$150',
          days: '10 дней',
          revisions: '3 правки',
          body: 'Всё из Стандарта, плюс шифрование персональных данных, лимиты по типам запросов, security-заголовки и тесты, настроенный деплой с бэкапами.',
          mark: true,
        },
      ],
    },
    longterm: {
      n: '05',
      title: 'Долгое сотрудничество',
      lead: 'Для тех, у кого не один бот, а поток задач.',
      head: { name: 'Формат', price: 'Цена' },
      rows: [
        {
          name: 'Пакет приложений',
          price: '−15%',
          unit: 'на каждое',
          body: 'Скидка, если заказываешь 2 и больше Mini App одним пакетом. Считается сразу, а не после сдачи.',
        },
        {
          name: 'Поддержка',
          price: '$40',
          unit: 'в месяц',
          body: 'До 3 мелких правок или багфиксов в месяц для приложения, которое уже работает. Подходит, если своего разработчика нет.',
        },
        {
          name: 'Постоянная разработка',
          price: '$150',
          unit: 'в месяц',
          body: 'Новые фичи регулярно и приоритетный ответ на сообщения. Беру, если задачи правда идут каждый месяц.',
        },
      ],
    },
    terms: {
      n: '06',
      title: 'Условия',
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
        {
          title: 'Твой код остаётся твоим',
          body: 'Исходники и доступы передаю на сдаче. В портфолио без твоего разрешения ничего не попадает.',
        },
      ],
    },
    start: {
      n: '07',
      title: 'Как начать',
      lead: 'Напиши в Telegram и опиши задачу в двух-трёх предложениях. Отвечу ценой и сроком, обычно в тот же день.',
      checklist: {
        title: 'Что полезно указать сразу',
        items: [
          'Что приложение должно делать, своими словами',
          'Есть ли уже бот и сервер, или начинаем с нуля',
          'Нужна ли работа с деньгами или личными данными',
          'К какому числу нужен результат',
        ],
      },
      button: 'Написать в Telegram',
    },
    footer: {
      name: 'Эвели',
      tagline: 'Telegram Mini Apps под ключ',
      rights: 'Все права защищены',
      built: 'Страница собрана вручную на React и TypeScript',
    },
  },

  en: {
    meta: {
      title: 'Evely. Telegram Mini Apps, built end to end',
      description:
        'Telegram Mini App development: Python backend, TypeScript frontend, deployed to your server. Projects, pricing and terms on one page.',
    },
    ui: {
      write: 'Message me',
      theme: 'Switch theme',
      lang: 'Переключить на русский',
      menu: 'Contents',
      close: 'Close',
      contents: 'Contents',
      toTop: 'Back to top',
    },
    masthead: {
      author: 'Evely',
      title: 'Telegram Mini Apps, built end to end',
      abstract:
        'Python on the backend, TypeScript on the frontend, deployed to your server. You get an app that already opens from its own link, and the code behind it. Below: what I do, what I have shipped, what it costs and on what terms.',
      meta: [
        { key: 'Format', value: 'Telegram Mini Apps' },
        { key: 'Pricing', value: 'from $20 per project' },
        { key: 'Delivery', value: 'from 2 days' },
        { key: 'Reply', value: 'usually the same day' },
      ],
    },
    contents: {
      title: 'Contents',
      items: [
        { id: 'services', n: '01', label: 'What I do', hint: 'Backend, frontend, deployment' },
        { id: 'projects', n: '02', label: 'Projects', hint: 'Five I am able to show' },
        { id: 'security', n: '03', label: 'Security', hint: 'What is actually closed off' },
        { id: 'pricing', n: '04', label: 'Pricing', hint: 'Three tiers per project' },
        { id: 'longterm', n: '05', label: 'Longer arrangements', hint: 'Bundles, support, retainer' },
        { id: 'terms', n: '06', label: 'Terms', hint: 'Payment, revisions, cancelling' },
        { id: 'start', n: '07', label: 'Getting started', hint: 'What to put in the first message' },
      ],
    },
    services: {
      n: '01',
      title: 'What I do',
      lead: 'Three parts you would normally have to source from three different people.',
      items: [
        {
          title: 'Backend',
          body: 'Python 3.12, aiogram, FastAPI, Postgres and Redis. The bot and the API share one process, so you only pay for one server.',
        },
        {
          title: 'Frontend',
          body: 'React and TypeScript with careful motion, light and dark themes. The theme follows Telegram, so nothing burns your eyes at night.',
        },
        {
          title: 'Deployment',
          body: 'Docker Compose and Caddy on your server, certificates from day one. After that the app runs without me.',
        },
      ],
    },
    projects: {
      n: '02',
      title: 'Projects',
      lead: 'Real screenshots from running apps. I do not open other people’s code, and I will not open yours.',
      items: [
        {
          n: '2.1',
          name: 'Anonymous voice chat',
          kind: 'Telegram Mini App',
          body: 'The largest thing I have built. A random partner by voice or text, a new mask every conversation, voice rooms for several people and a set of games on top of them: mafia, city mafia, bunker, alias, tic-tac-toe. Around that sit energy, currency, friends, a leaderboard and a shop. Russian and English, light and dark.',
          stack: ['Python', 'aiogram', 'FastAPI', 'Postgres', 'Redis', 'React'],
          shots: [
            { src: '/shots/voice-home.webp', caption: 'Matching a partner by voice or text, paid in energy' },
            { src: '/shots/voice-games.webp', caption: 'Games, each one running through a voice channel' },
          ],
        },
        {
          n: '2.2',
          name: 'Anonymous questions',
          kind: 'Telegram bot and Mini App',
          body: 'Anonymous questions through a personal link. You drop the link in your stories, people write to you, and nobody sees who sent what. Inbox and replies from inside the app, stats on clicks and messages, a separate link per platform and a card built for stories.',
          stack: ['Python', 'aiogram', 'FastAPI', 'Postgres', 'Redis', 'React'],
          shots: [
            { src: '/shots/anon-link.webp', caption: 'Your link, the counters and the main sections' },
            { src: '/shots/anon-stats.webp', caption: 'Clicks and messages over the week' },
          ],
        },
        {
          n: '2.3',
          name: 'File and link checker',
          kind: 'Telegram bot and Mini App',
          body: 'Send a file, a link or a hash and get a report: how many of sixty-odd engines flagged it, what the file is, when it was first seen, all three fingerprints. The file itself is never stored. Works in direct messages and in groups, and the check history lives in the app.',
          stack: ['Python', 'aiogram', 'FastAPI', 'VirusTotal', 'ClamAV'],
          shots: [
            { src: '/shots/checker-report.webp', caption: 'Report: verdict, engine hits, file fingerprints' },
            { src: '/shots/checker-history.webp', caption: 'Check history with a verdict on each entry' },
          ],
        },
        {
          n: '2.4',
          name: 'Music and video downloader',
          kind: 'Telegram Mini App',
          body: 'Search a track across several sources in one window, play it inside the app, and the file lands straight in the chat. Video is pulled by link from TikTok, Reels, Shorts and a dozen other sites. Favourites, quotas, a subscription and an admin panel with statistics.',
          stack: ['Python', 'aiogram', 'FastAPI', 'React', 'TypeScript'],
          shots: [
            { src: '/shots/downloader-search.webp', caption: 'Search across several sources at once' },
            { src: '/shots/downloader-player.webp', caption: 'Player, and the file sent into the chat' },
          ],
        },
        {
          n: '2.5',
          name: 'Discord server, set up end to end',
          kind: 'Discord',
          body: 'A server built on the pattern of the large communities: economy, roles, channels, moderation. New members are screened by an AI rather than by a person with a form at the door.',
          stack: ['Discord', 'Python'],
          shots: [],
          link: 'Open the server',
        },
      ],
    },
    security: {
      n: '03',
      title: 'Security',
      lead: 'A Mini App lives inside Telegram and usually verifies the signature once. The list below comes from the project in section 2.4. The code is closed, the shape of the defence is not. This is the level that ships in the Premium tier.',
      items: [
        {
          title: 'Telegram signature check',
          body: 'HMAC-SHA256 on every request with a 24 hour window. Replayed initData does not get through.',
        },
        {
          title: 'Download guard',
          body: 'Files are fetched only from trusted domains. The IP is resolved and checked before the request goes out.',
        },
        {
          title: 'Per-endpoint rate limits',
          body: 'Upload, auth and read have separate budgets. One heavy endpoint cannot take the rest down with it.',
        },
        {
          title: 'Encrypted user data',
          body: 'Personal data sits encrypted with Fernet. A database dump on its own gives nothing away.',
        },
        {
          title: 'Hidden admin routes',
          body: 'Admin paths answer 404 to everyone but admins, and every action lands in an audit log.',
        },
        {
          title: 'Security headers',
          body: 'CSP and HSTS tuned for this specific app. Not pasted from a blog post.',
        },
        {
          title: 'Tests on the security surface',
          body: 'A separate suite hits exactly this surface, so a regression shows up the same day.',
        },
      ],
    },
    pricing: {
      n: '04',
      title: 'Pricing',
      lead: 'One-off projects at a fixed price. The clock starts at the deposit, revisions are part of the tier.',
      head: { name: 'Tier', price: 'Price', days: 'Delivery', revisions: 'Revisions' },
      note: 'Premium is the level described in section 03.',
      rows: [
        {
          name: 'Basic',
          price: '$20',
          days: '2 days',
          revisions: '1 revision',
          body: 'A ready template dressed in your brand. Your colours, copy and icons, wired up to your bot, deployed to your server.',
        },
        {
          name: 'Standard',
          price: '$60',
          days: '5 days',
          revisions: '2 revisions',
          body: 'Everything in Basic, plus logic written for your case, Telegram signature verification, a database and custom screens instead of template ones.',
        },
        {
          name: 'Premium',
          price: '$150',
          days: '10 days',
          revisions: '3 revisions',
          body: 'Everything in Standard, plus encrypted personal data, per-endpoint rate limits, security headers and tests, deployment with backups already set up.',
          mark: true,
        },
      ],
    },
    longterm: {
      n: '05',
      title: 'Longer arrangements',
      lead: 'For people with a queue of work rather than a single bot.',
      head: { name: 'Arrangement', price: 'Price' },
      rows: [
        {
          name: 'Bundle of apps',
          price: '−15%',
          unit: 'on each',
          body: 'A discount when you order 2 or more Mini Apps as one package. Applied at the start, not after delivery.',
        },
        {
          name: 'Support plan',
          price: '$40',
          unit: 'per month',
          body: 'Up to 3 small changes or bug fixes a month for an app that already runs. Useful if you have no developer of your own.',
        },
        {
          name: 'Ongoing development',
          price: '$150',
          unit: 'per month',
          body: 'New features on a regular cadence and priority replies. I take this on when the work genuinely arrives every month.',
        },
      ],
    },
    terms: {
      n: '06',
      title: 'Terms',
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
        {
          title: 'Your code stays yours',
          body: 'Sources and access are handed over on delivery. Nothing goes into my portfolio without your say-so.',
        },
      ],
    },
    start: {
      n: '07',
      title: 'Getting started',
      lead: 'Write to me on Telegram and describe the task in two or three sentences. You get a price and a timeline back, usually the same day.',
      checklist: {
        title: 'Worth mentioning up front',
        items: [
          'What the app should do, in your own words',
          'Whether a bot and a server already exist, or we start from nothing',
          'Whether it touches money or personal data',
          'The date you need it by',
        ],
      },
      button: 'Message me on Telegram',
    },
    footer: {
      name: 'Evely',
      tagline: 'Telegram Mini Apps, built end to end',
      rights: 'All rights reserved',
      built: 'This page is hand-built with React and TypeScript',
    },
  },
} as const

export type Strings = (typeof strings)['ru']
