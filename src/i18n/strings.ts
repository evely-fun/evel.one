export type Lang = 'ru' | 'en'

export const sectionIds = ['services', 'projects', 'security', 'pricing', 'longterm', 'terms', 'start'] as const

export const strings = {
  ru: {
    meta: {
      title: 'Эвели. Боты и сайты под ключ',
      description:
        'Telegram-боты и мини-приложения, Discord-боты, сайты под ключ. Бэкенд на Python, фронтенд на TypeScript, деплой на сервер. Проекты, цены и условия одной страницей.',
    },
    ui: {
      write: 'Написать',
      theme: 'Сменить тему',
      lang: 'Switch to English',
      menu: 'Содержание',
      close: 'Закрыть',
      contents: 'Содержание',
      toTop: 'Наверх',
      open: 'Открыть',
    },
    masthead: {
      author: 'Эвели',
      title: 'Telegram, Discord и сайты под ключ',
      abstract:
        'Боты, мини-приложения и сайты. Бэкенд на Python, фронтенд на TypeScript, деплой на сервер. Ты получаешь то, что уже работает по своей ссылке, и код к нему. Ниже что я делаю, что уже сделал, сколько это стоит и на каких условиях.',
      meta: [
        { key: 'Платформы', value: 'Telegram, Discord, веб' },
        { key: 'Цены', value: 'от $30 за проект' },
        { key: 'Оплата', value: '50% до старта' },
        { key: 'Ответ', value: 'обычно в тот же день' },
      ],
    },
    contents: {
      title: 'Содержание',
      items: [
        { id: 'services', n: '01', label: 'Что я делаю', hint: 'Telegram, Discord, сайты' },
        { id: 'projects', n: '02', label: 'Проекты', hint: 'Шесть, можно открыть и потыкать' },
        { id: 'security', n: '03', label: 'Безопасность', hint: 'Что именно закрыто в коде' },
        { id: 'pricing', n: '04', label: 'Цены', hint: 'Полный прайс по всем форматам' },
        { id: 'longterm', n: '05', label: 'Долгое сотрудничество', hint: 'Договор и что он значит' },
        { id: 'terms', n: '06', label: 'Условия', hint: 'Оплата, правки, отмена' },
        { id: 'start', n: '07', label: 'Как начать', hint: 'Что написать в первом сообщении' },
      ],
    },
    services: {
      n: '01',
      title: 'Что я делаю',
      lead: 'Четыре направления. Внутри каждого я закрываю всю цепочку сам, от базы данных до деплоя.',
      items: [
        {
          title: 'Telegram',
          body: 'Боты и мини-приложения. От простого бота на одну задачу до приложения с базой, оплатами, админкой и статистикой.',
        },
        {
          title: 'Discord',
          body: 'Боты под сервер: экономика, роли, каналы, модерация, проверка новых участников. Или сервер целиком, под ключ.',
        },
        {
          title: 'Сайты',
          body: 'Бэкенд, фронтенд, тесты и правки. React и TypeScript спереди, Python сзади, светлая и тёмная тема.',
        },
        {
          title: 'Деплой и графика',
          body: 'Docker Compose и Caddy на твоём сервере, сертификат сразу. Ассеты под бренд делаю отдельно, если нужны.',
        },
      ],
    },
    projects: {
      n: '02',
      title: 'Проекты',
      lead: 'Скриншоты настоящие, из работающих приложений. Любое можно открыть и потыкать прямо сейчас. Чужой код я не открываю, и твой тоже не буду.',
      items: [
        {
          n: '2.1',
          name: 'Анонимный голосовой чат',
          kind: 'Telegram Mini App',
          url: 'https://t.me/AnteikuAnonBot',
          link: 'Открыть в Telegram',
          body: 'Самый большой из моих проектов. Случайный собеседник голосом или текстом, новая маска в каждом разговоре, голосовые комнаты на несколько человек и набор игр поверх них: мафия, городская мафия, бункер, алиас, крестики-нолики. Сверху энергия, валюта, друзья, лидерборд и магазин. Русский и английский, светлая и тёмная тема.',
          stack: ['Python', 'aiogram', 'FastAPI', 'Postgres', 'Redis', 'React'],
          shots: [
            { src: '/shots/voice-search.webp', caption: 'Главная: подбор собеседника, друзья в сети, комнаты' },
            { src: '/shots/voice-rooms.webp', caption: 'Комната на восемь человек, у каждого маска и ведущий' },
            { src: '/shots/voice-rating.webp', caption: 'Оценка собеседника звёздами прямо в разговоре' },
          ],
        },
        {
          n: '2.2',
          name: 'Анонка',
          kind: 'Telegram-бот и Mini App',
          url: 'https://t.me/AnteikuAnonkaBot',
          link: 'Открыть в Telegram',
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
          url: 'https://t.me/AnteikuChekniBot',
          link: 'Открыть в Telegram',
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
          url: 'https://t.me/KachniBot',
          link: 'Открыть в Telegram',
          body: 'Поиск трека по нескольким площадкам в одном окне, плеер внутри приложения, файл приходит прямо в чат. Видео забирается по ссылке из TikTok, Reels, Shorts и ещё десятка сайтов. Есть избранное, квоты, подписка и админка со статистикой.',
          stack: ['Python', 'aiogram', 'FastAPI', 'React', 'TypeScript'],
          shots: [
            { src: '/shots/downloader-search.webp', caption: 'Поиск по нескольким площадкам сразу' },
            { src: '/shots/downloader-player.webp', caption: 'Плеер и выгрузка файла в чат' },
          ],
        },
        {
          n: '2.5',
          name: 'Kali',
          kind: 'Сайт продукта',
          url: 'https://kali-bep.pages.dev/',
          link: 'Открыть сайт',
          body: 'Лендинг десктопного приложения: экран загрузки, каталог скриптов, документация и FAQ. Тёмная тема, скролл-анимации на всю страницу, окно приложения показано прямо на первом экране. Next.js, деплой на Cloudflare Pages.',
          stack: ['Next.js', 'React', 'TypeScript', 'Cloudflare Pages'],
          shots: [
            { src: '/shots/kali-site.jpg', caption: 'Первый экран: заголовок, кнопки и окно приложения', ratio: '16/10' },
          ],
        },
        {
          n: '2.6',
          name: 'Discord-сервер под ключ',
          kind: 'Discord',
          url: 'https://discord.gg/jZCU7KjgH7',
          link: 'Зайти на сервер',
          body: 'Шаблон сервера по образцу крупных сообществ: экономика, роли, каналы, модерация. Проверку новых участников ведёт ИИ, а не человек с анкетой на входе.',
          stack: ['Discord', 'Python'],
          shots: [],
        },
      ],
    },
    security: {
      n: '03',
      title: 'Безопасность',
      lead: 'Mini App живёт внутри Telegram и обычно проверяет подпись один раз. Разбор ниже собран на проекте из раздела 2.4. Код закрыт, устройство защиты описать могу.',
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
      lead: 'Три колонки это три режима работы. Разово, пакетом от двух проектов и по договору на долгое сотрудничество. Условия договора в разделе 05.',
      head: {
        name: 'Что делаю',
        once: 'Разово',
        bundle: 'От 2 проектов',
        contract: 'По договору',
      },
      rows: [
        {
          name: 'Discord-бот по готовому ТЗ',
          body: 'Тема любая. План и список функций у тебя уже есть, я просто делаю.',
          extra: 'Пак ассетов под каждый пост, анимации: +$30',
          once: '$100',
          bundle: '$50',
          contract: '$30',
        },
        {
          name: 'Discord-бот без ТЗ',
          body: 'Требования собираем по ходу, много правок, что-то добавляется, что-то выкидывается.',
          extra: 'Ассеты: +$30–50. Видео: +$50',
          once: '$200–500',
          bundle: '$100–250',
          contract: '$70–200',
        },
        {
          name: 'Сайт под ключ',
          body: 'Бэкенд, фронтенд, тесты и правки. Всё, что нужно, чтобы сайт работал.',
          extra: 'Все ассеты под бренд, включая донаты и секции: +$100',
          once: '$300',
          bundle: '$150',
          contract: '$100',
        },
        {
          name: 'Сайт с графикой и видео',
          body: 'То же самое плюс вся графика, ассеты и видео, сделанные под проект.',
          extra: '',
          once: '$400–700',
          bundle: '$200–350',
          contract: '$130–200',
        },
        {
          name: 'Telegram-бот',
          body: 'Тема любая, без мини-приложения.',
          extra: '',
          once: '$100',
          bundle: '$50',
          contract: '$30',
        },
        {
          name: 'Telegram-бот с Mini App',
          body: 'Уровня проектов из раздела 02. Без работы дизайнера над индивидуальными ассетами.',
          extra: 'Ассеты: +$50',
          once: 'от $300',
          bundle: 'от $150',
          contract: 'от $100',
        },
        {
          name: 'Telegram-бот с Mini App, полный цикл',
          body: 'Всё из строки выше плюс ассеты, правки, полный цикл тестов и дальнейшие обновления.',
          extra: '',
          once: 'от $500',
          bundle: 'от $250',
          contract: 'от $150',
        },
      ],
      note: 'Вилка значит, что цена зависит от объёма. Точную называю после того, как пойму задачу, и дальше она не меняется.',
    },
    longterm: {
      n: '05',
      title: 'Долгое сотрудничество',
      lead: 'Третья колонка в прайсе это цены по договору. Они ниже обычных примерно втрое, и за это есть встречное обязательство.',
      items: [
        {
          title: 'Подписывается документ',
          body: 'С ФИО и другими данными обеих сторон. Без подписанного документа цены по договору не действуют.',
        },
        {
          title: 'Четыре проекта в месяц',
          body: 'Это минимум, который ты обязуешься заказать. На нём и держится скидка.',
        },
        {
          title: 'Если объём не выбран',
          body: 'Я вправе требовать оплату за невыполненное обязательство, вплоть до обращения в суд. Это написано в договоре прямым текстом, чтобы потом не было сюрпризов.',
        },
        {
          title: 'Кому это подходит',
          body: 'Тем, у кого поток задач, а не один бот. Если проектов меньше четырёх в месяц, бери пакетную колонку, там обязательств нет.',
        },
      ],
    },
    terms: {
      n: '06',
      title: 'Условия',
      lead: 'Скучная часть, которую лучше прочитать до, а не после.',
      paymentsTitle: 'Чем можно платить',
      paymentsNote: 'Если криптой неудобно, договоримся в личке и пропишем способ в договоре.',
      items: [
        {
          title: '50% перед стартом',
          body: 'Остаток после сдачи и твоей проверки. Можно внести всю сумму сразу, если так удобнее.',
        },
        {
          title: 'Срок считается от предоплаты',
          body: 'Не от переписки и не от момента, когда ты решил заказать. Деньги пришли, отсчёт пошёл.',
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
        {
          title: 'Что я не беру',
          body: 'Скам, накрутки, обход блокировок и всё, за что твой сервер или бот прилетит бан. Скажу сразу, не буду тянуть.',
        },
      ],
    },
    start: {
      n: '07',
      title: 'Как начать',
      lead: 'Напиши в Telegram или в Discord и опиши задачу в двух-трёх предложениях. Отвечу ценой и сроком, обычно в тот же день.',
      checklist: {
        title: 'Что полезно указать сразу',
        items: [
          'Что должно получиться, своими словами',
          'Платформа: Telegram, Discord или сайт',
          'Есть ли готовое ТЗ, или собираем по ходу',
          'Нужны ли ассеты и видео под бренд',
          'Нужна ли работа с деньгами или личными данными',
          'К какому числу нужен результат',
        ],
      },
      button: 'Написать в Telegram',
      discordButton: 'Написать в Discord',
      serverLink: 'Зайти на сервер',
    },
    footer: {
      name: 'Эвели',
      tagline: 'Telegram, Discord и сайты под ключ',
      rights: 'Все права защищены',
      built: 'Страница собрана вручную на React и TypeScript',
    },
  },

  en: {
    meta: {
      title: 'Evely. Bots and websites, built end to end',
      description:
        'Telegram bots and Mini Apps, Discord bots, websites. Python backend, TypeScript frontend, deployed to your server. Projects, pricing and terms on one page.',
    },
    ui: {
      write: 'Message me',
      theme: 'Switch theme',
      lang: 'Переключить на русский',
      menu: 'Contents',
      close: 'Close',
      contents: 'Contents',
      toTop: 'Back to top',
      open: 'Open',
    },
    masthead: {
      author: 'Evely',
      title: 'Telegram, Discord and websites, end to end',
      abstract:
        'Bots, Mini Apps and websites. Python on the backend, TypeScript on the frontend, deployed to your server. You get something that already works from its own link, and the code behind it. Below: what I do, what I have shipped, what it costs and on what terms.',
      meta: [
        { key: 'Platforms', value: 'Telegram, Discord, web' },
        { key: 'Pricing', value: 'from $30 per project' },
        { key: 'Payment', value: '50% up front' },
        { key: 'Reply', value: 'usually the same day' },
      ],
    },
    contents: {
      title: 'Contents',
      items: [
        { id: 'services', n: '01', label: 'What I do', hint: 'Telegram, Discord, websites' },
        { id: 'projects', n: '02', label: 'Projects', hint: 'Six, open and try them' },
        { id: 'security', n: '03', label: 'Security', hint: 'What is actually closed off' },
        { id: 'pricing', n: '04', label: 'Pricing', hint: 'The full rate card' },
        { id: 'longterm', n: '05', label: 'Long-term work', hint: 'The contract and what it means' },
        { id: 'terms', n: '06', label: 'Terms', hint: 'Payment, revisions, cancelling' },
        { id: 'start', n: '07', label: 'Getting started', hint: 'What to put in the first message' },
      ],
    },
    services: {
      n: '01',
      title: 'What I do',
      lead: 'Four areas. Inside each one I cover the whole chain myself, from the database to the deployment.',
      items: [
        {
          title: 'Telegram',
          body: 'Bots and Mini Apps. From a small single-purpose bot to an app with a database, payments, an admin panel and statistics.',
        },
        {
          title: 'Discord',
          body: 'Bots for your server: economy, roles, channels, moderation, screening new members. Or the whole server, set up end to end.',
        },
        {
          title: 'Websites',
          body: 'Backend, frontend, tests and revisions. React and TypeScript at the front, Python behind, light and dark themes.',
        },
        {
          title: 'Deployment and art',
          body: 'Docker Compose and Caddy on your server, certificates from day one. Branded assets are a separate line if you want them.',
        },
      ],
    },
    projects: {
      n: '02',
      title: 'Projects',
      lead: 'Real screenshots from running apps. Every one of them opens right now. I do not open other people’s code, and I will not open yours.',
      items: [
        {
          n: '2.1',
          name: 'Anonymous voice chat',
          kind: 'Telegram Mini App',
          url: 'https://t.me/AnteikuAnonBot',
          link: 'Open in Telegram',
          body: 'The largest thing I have built. A random partner by voice or text, a new mask every conversation, voice rooms for several people and a set of games on top of them: mafia, city mafia, bunker, alias, tic-tac-toe. Around that sit energy, currency, friends, a leaderboard and a shop. Russian and English, light and dark.',
          stack: ['Python', 'aiogram', 'FastAPI', 'Postgres', 'Redis', 'React'],
          shots: [
            { src: '/shots/voice-search.webp', caption: 'Home: partner matching, friends online, open rooms' },
            { src: '/shots/voice-rooms.webp', caption: 'A room of eight, everyone masked, one of them hosting' },
            { src: '/shots/voice-rating.webp', caption: 'Rating your partner in stars during the call' },
          ],
        },
        {
          n: '2.2',
          name: 'Anonymous questions',
          kind: 'Telegram bot and Mini App',
          url: 'https://t.me/AnteikuAnonkaBot',
          link: 'Open in Telegram',
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
          url: 'https://t.me/AnteikuChekniBot',
          link: 'Open in Telegram',
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
          url: 'https://t.me/KachniBot',
          link: 'Open in Telegram',
          body: 'Search a track across several sources in one window, play it inside the app, and the file lands straight in the chat. Video is pulled by link from TikTok, Reels, Shorts and a dozen other sites. Favourites, quotas, a subscription and an admin panel with statistics.',
          stack: ['Python', 'aiogram', 'FastAPI', 'React', 'TypeScript'],
          shots: [
            { src: '/shots/downloader-search.webp', caption: 'Search across several sources at once' },
            { src: '/shots/downloader-player.webp', caption: 'Player, and the file sent into the chat' },
          ],
        },
        {
          n: '2.5',
          name: 'Kali',
          kind: 'Product website',
          url: 'https://kali-bep.pages.dev/',
          link: 'Open the site',
          body: 'A landing page for a desktop app: download screen, script catalogue, documentation and FAQ. Dark theme, scroll-driven animation across the whole page, the app window shown on the first screen. Next.js, deployed to Cloudflare Pages.',
          stack: ['Next.js', 'React', 'TypeScript', 'Cloudflare Pages'],
          shots: [
            { src: '/shots/kali-site.jpg', caption: 'First screen: headline, buttons and the app window', ratio: '16/10' },
          ],
        },
        {
          n: '2.6',
          name: 'Discord server, set up end to end',
          kind: 'Discord',
          url: 'https://discord.gg/jZCU7KjgH7',
          link: 'Open the server',
          body: 'A server built on the pattern of the large communities: economy, roles, channels, moderation. New members are screened by an AI rather than by a person with a form at the door.',
          stack: ['Discord', 'Python'],
          shots: [],
        },
      ],
    },
    security: {
      n: '03',
      title: 'Security',
      lead: 'A Mini App lives inside Telegram and usually verifies the signature once. The list below comes from the project in section 2.4. The code is closed, the shape of the defence is not.',
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
      lead: 'Three columns, three ways of working. One-off, as a bundle of two or more projects, and under a long-term contract. The contract terms are in section 05.',
      head: {
        name: 'What I build',
        once: 'One-off',
        bundle: 'From 2 projects',
        contract: 'Under contract',
      },
      rows: [
        {
          name: 'Discord bot from a finished brief',
          body: 'Any subject. You already have the plan and the feature list, I just build it.',
          extra: 'Asset pack for every post, animations: +$30',
          once: '$100',
          bundle: '$50',
          contract: '$30',
        },
        {
          name: 'Discord bot without a brief',
          body: 'We work the requirements out as we go, with plenty of revisions, additions and removals.',
          extra: 'Assets: +$30–50. Video: +$50',
          once: '$200–500',
          bundle: '$100–250',
          contract: '$70–200',
        },
        {
          name: 'Website, end to end',
          body: 'Backend, frontend, tests and revisions. Everything it takes for the site to actually run.',
          extra: 'Full branded assets, donations and section art included: +$100',
          once: '$300',
          bundle: '$150',
          contract: '$100',
        },
        {
          name: 'Website with art and video',
          body: 'The same, plus all the graphics, assets and video made for the project.',
          extra: '',
          once: '$400–700',
          bundle: '$200–350',
          contract: '$130–200',
        },
        {
          name: 'Telegram bot',
          body: 'Any subject, without a Mini App.',
          extra: '',
          once: '$100',
          bundle: '$50',
          contract: '$30',
        },
        {
          name: 'Telegram bot with a Mini App',
          body: 'At the level of the projects in section 02. Without a designer working on custom assets.',
          extra: 'Assets: +$50',
          once: 'from $300',
          bundle: 'from $150',
          contract: 'from $100',
        },
        {
          name: 'Telegram bot with a Mini App, full cycle',
          body: 'Everything in the row above plus assets, revisions, a full test cycle and later updates.',
          extra: '',
          once: 'from $500',
          bundle: 'from $250',
          contract: 'from $150',
        },
      ],
      note: 'A range means the price depends on scope. I name the exact number once I understand the task, and it does not move after that.',
    },
    longterm: {
      n: '05',
      title: 'Long-term work',
      lead: 'The third column in the rate card is the contract price. It runs roughly three times lower than the standard rate, and there is an obligation on the other side of it.',
      items: [
        {
          title: 'A document gets signed',
          body: 'With legal names and details on both sides. Without a signed document the contract prices do not apply.',
        },
        {
          title: 'Four projects a month',
          body: 'That is the minimum you commit to ordering. The discount rests on it.',
        },
        {
          title: 'If the volume is not met',
          body: 'I am entitled to claim payment for the unmet commitment, up to and including going to court. It is written into the contract in plain words so there are no surprises later.',
        },
        {
          title: 'Who this suits',
          body: 'People with a queue of work rather than a single bot. If it is fewer than four projects a month, take the bundle column instead, it carries no obligation.',
        },
      ],
    },
    terms: {
      n: '06',
      title: 'Terms',
      lead: 'The boring part, better read before than after.',
      paymentsTitle: 'How you can pay',
      paymentsNote: 'If crypto does not work for you, we agree on another way privately and write it into the contract.',
      items: [
        {
          title: '50% before I start',
          body: 'The rest once it is delivered and you have checked it. You can pay the whole amount up front if that suits you better.',
        },
        {
          title: 'The clock starts at the deposit',
          body: 'Not at the first message, and not at the moment you decided to order. The money lands, the countdown begins.',
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
        {
          title: 'What I turn down',
          body: 'Scams, engagement farming, ban evasion and anything that gets your server or bot taken down. I say so straight away rather than dragging it out.',
        },
      ],
    },
    start: {
      n: '07',
      title: 'Getting started',
      lead: 'Write to me on Telegram or Discord and describe the task in two or three sentences. You get a price and a timeline back, usually the same day.',
      checklist: {
        title: 'Worth mentioning up front',
        items: [
          'What it should end up doing, in your own words',
          'The platform: Telegram, Discord or web',
          'Whether a brief exists, or we work it out together',
          'Whether you need branded assets and video',
          'Whether it touches money or personal data',
          'The date you need it by',
        ],
      },
      button: 'Message me on Telegram',
      discordButton: 'Message me on Discord',
      serverLink: 'Open the server',
    },
    footer: {
      name: 'Evely',
      tagline: 'Telegram, Discord and websites, end to end',
      rights: 'All rights reserved',
      built: 'This page is hand-built with React and TypeScript',
    },
  },
} as const

export type Strings = (typeof strings)['ru']
