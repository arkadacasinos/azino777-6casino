const quickLinks = [
  { href: '#start', label: 'С чего начать' },
  { href: '#mobile', label: 'Азино мобиль' },
  { href: '#games', label: 'Игры' },
  { href: '#payments', label: 'Платежи' },
  { href: '#faq', label: 'FAQ' },
]

const steps = [
  ['01', 'Проверьте адрес', 'Используйте официальный источник и внимательно сверяйте домен перед входом.'],
  ['02', 'Создайте профиль', 'Заполните только необходимые поля и задайте уникальный пароль.'],
  ['03', 'Выберите формат', 'Откройте браузерную версию или адаптированный интерфейс на телефоне.'],
]

const gameTypes = [
  { number: '01', title: 'Слоты', text: 'Категория для коротких игровых сессий: разные механики, темп и визуальные темы. Перед запуском смотрите правила конкретного автомата.' },
  { number: '02', title: 'Рулетка', text: 'Классический формат с понятной последовательностью раундов. Размер ставки и лимиты всегда стоит проверить до начала игры.' },
  { number: '03', title: 'Карточные игры', text: 'Варианты для тех, кто предпочитает знакомые правила и более вдумчивый темп. Изучите таблицу выплат и условия раунда.' },
]

export default function Page() {
  return (
    <main className="az7-page">
      <header className="az7-header">
        <a className="az7-brand" href="#top" aria-label="Azino777 — на главную">
          <span className="az7-brand-mark">A7</span>
          <span><b>Azino</b><em>777</em></span>
        </a>
        <nav className="az7-nav" aria-label="Основная навигация">
          {quickLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <a className="az7-header-cta" href="#start">Открыть гид <span aria-hidden="true">↗</span></a>
      </header>

      <section className="az7-hero" id="top" aria-labelledby="hero-title">
        <img className="az7-hero-image" src="/azino777-hero.png" alt="Игровой стол с рулеткой, картами и золотыми фишками" />
        <div className="az7-hero-overlay" />
        <div className="az7-hero-content">
          <p className="az7-kicker"><span className="az7-live-dot" /> Навигация по платформе <span className="az7-kicker-line" /></p>
          <h1 id="hero-title">Азино777 официальный: спокойный старт без лишнего шума</h1>
          <p className="az7-hero-lead">Разбираем, как найти Азино777 официальный сайт, открыть его с телефона и понять основные правила до первой игровой сессии.</p>
          <div className="az7-hero-actions">
            <a className="az7-button az7-button-gold" href="#start">Перейти к инструкции <span aria-hidden="true">→</span></a>
            <a className="az7-text-link" href="#responsible">Ответственная игра <span aria-hidden="true">↘</span></a>
          </div>
          <div className="az7-hero-meta"><span>01</span><span className="az7-meta-rule" /><span>Редакционный гид</span><span>18+</span></div>
        </div>
      </section>

      <section className="az7-intro az7-section" id="start" aria-labelledby="intro-title">
        <div className="az7-section-label">Навигация / 01</div>
        <div className="az7-intro-grid">
          <h2 id="intro-title">Что нужно знать про <span>Азино 777</span></h2>
          <div className="az7-intro-copy">
            <p className="az7-lead-copy">Azino 777 — это название, по которому пользователи ищут игровую платформу, мобильный вход и актуальные сведения о доступных форматах. В поиске встречаются разные написания: «Азино», «Азино777», «azino 777» и «азино777 казино». Важно не само написание, а проверка страницы, условий и возраста пользователя.</p>
            <p>Эта страница собрана как короткий маршрут: от проверки адреса до выбора игры и пополнения баланса. Здесь нет обещаний гарантированного выигрыша или «секретных» схем. Любая игра на деньги связана с риском, поэтому принимайте решения только в пределах заранее определённого бюджета.</p>
          </div>
        </div>
        <div className="az7-note"><span className="az7-note-icon">i</span><p><strong>Только для совершеннолетних.</strong> Азартные игры предназначены для пользователей 18+. Если игра перестаёт быть развлечением, сделайте паузу и обратитесь за профессиональной помощью.</p></div>
      </section>

      <section className="az7-steps az7-section" aria-labelledby="steps-title">
        <div className="az7-section-heading"><div><div className="az7-section-label">Первый вход / 02</div><h2 id="steps-title">Три шага до понятного старта</h2></div><p>Не торопитесь с пополнением: сначала проверьте среду, правила и лимиты.</p></div>
        <div className="az7-step-grid">{steps.map(([number, title, text]) => <article className="az7-step-card" key={number}><span className="az7-step-number">{number}</span><h3>{title}</h3><p>{text}</p><a href="#faq" aria-label={`Подробнее: ${title}`}>Подробнее <span aria-hidden="true">↗</span></a></article>)}</div>
      </section>

      <section className="az7-split az7-section" id="mobile" aria-labelledby="mobile-title">
        <div className="az7-split-art"><img src="/azino777-mobile.png" alt="Смартфон с интерфейсом рулетки на тёмном игровом столе" loading="lazy" decoding="async" /><span className="az7-art-caption">Адаптивный формат / 02</span></div>
        <div className="az7-split-copy"><div className="az7-section-label">Экран в кармане / 03</div><h2 id="mobile-title">Азино мобиль: игра начинается с удобного экрана</h2><p>Запрос «Азино мобиль» обычно означает желание открыть платформу на смартфоне без отдельной сложной установки. Современный адаптивный интерфейс подстраивает ширину блоков под экран, сохраняет меню и помогает не терять важные кнопки на небольшом дисплее.</p><p>Перед входом проверьте адресную строку, соединение и разрешения браузера. Не устанавливайте файлы из случайных рекламных окон и не вводите пароль на страницах, которые выглядят иначе, чем ожидаемый официальный интерфейс. Для телефона особенно полезны стабильный Wi-Fi или надёжная мобильная сеть и актуальная версия браузера.</p><div className="az7-check-list"><div><span>✓</span><b>Без лишних загрузок</b><small>Открывайте веб-версию в привычном браузере.</small></div><div><span>✓</span><b>Читаемые лимиты</b><small>На мобильном экране сначала увеличьте блок с условиями.</small></div></div></div>
      </section>

      <section className="az7-games az7-section" id="games" aria-labelledby="games-title">
        <div className="az7-section-heading"><div><div className="az7-section-label">Игровой каталог / 04</div><h2 id="games-title">Азино казино: выбирайте формат, а не обещание</h2></div><p>Понятные правила важнее яркой витрины. Сравните механику, темп и возможный размер ставки.</p></div>
        <div className="az7-game-grid">{gameTypes.map((game) => <article className="az7-game-card" key={game.number}><div className="az7-game-top"><span>{game.number}</span><span className="az7-game-symbol" aria-hidden="true">◆</span></div><h3>{game.title}</h3><p>{game.text}</p><a href="#responsible">Проверить лимиты <span aria-hidden="true">→</span></a></article>)}</div>
      </section>

      <section className="az7-feature-band" aria-label="Полезная заметка">
        <div className="az7-feature-mark">A<span>7</span></div><div><p className="az7-section-label">Практический ориентир</p><h2>Официальный сайт — это не громкое слово, а проверяемый маршрут</h2></div><p>Сверяйте домен, защищённое соединение, раздел помощи и правила. Если страница требует срочного перевода или обещает гарантированный результат, остановитесь.</p>
      </section>

      <section className="az7-info-grid az7-section" id="payments" aria-labelledby="payments-title">
        <article><div className="az7-section-label">Баланс / 05</div><h2 id="payments-title">Платежи и бонусы: читайте мелкий текст</h2><p>На странице пополнения смотрите доступные способы, минимальную сумму и возможные комиссии. Не используйте чужие платёжные данные и не передавайте коды подтверждения третьим лицам. Сроки обработки могут зависеть от выбранного метода и правил банка.</p><p>Бонусные предложения, если они доступны, имеют условия: отыгрыш, сроки, ограничения по играм и максимальный размер вывода. Проверяйте их до активации. Само наличие бонуса не означает безрисковую игру и не отменяет финансовой ответственности пользователя.</p></article>
        <aside className="az7-security-card"><div className="az7-lock" aria-hidden="true">▣</div><h3>Цифровая гигиена</h3><ul><li>Уникальный пароль без повторного использования.</li><li>Проверка адреса перед авторизацией.</li><li>Никаких кодов в переписке с «поддержкой».</li><li>Выход из аккаунта на чужом устройстве.</li></ul></aside>
      </section>

      <section className="az7-responsible az7-section" id="responsible" aria-labelledby="responsible-title"><div className="az7-responsible-inner"><div className="az7-section-label">Контроль / 06</div><h2 id="responsible-title">Азино777 официальный сайт — только в рамках личного плана</h2><p>Определите сумму и время заранее. Не пытайтесь отыграться, не занимайте деньги для игры и не повышайте ставку из-за эмоций. Полезно установить собственный лимит расходов, делать перерывы и вести простой учёт пополнений.</p><div className="az7-responsible-points"><div><strong>Бюджет</strong><span>Только свободные средства</span></div><div><strong>Время</strong><span>Паузы до усталости</span></div><div><strong>Стоп</strong><span>Без попыток отыграться</span></div></div><a className="az7-button az7-button-outline" href="#faq">Посмотреть FAQ <span aria-hidden="true">↘</span></a></div></section>

      <section className="az7-faq az7-section" id="faq" aria-labelledby="faq-title"><div className="az7-section-heading"><div><div className="az7-section-label">Вопросы / 07</div><h2 id="faq-title">Частые вопросы об Азино777</h2></div><p>Короткие ответы, чтобы не искать базовые ориентиры по разным страницам.</p></div><div className="az7-faq-list"><details open><summary>Как найти Азино777 официальный сайт?</summary><p>Начните с проверки точного адреса, защищённого соединения и раздела с правилами. Не переходите по случайным копиям и не вводите данные на странице, которая вызывает сомнения. Название «Азино777 официальный» само по себе не доказывает подлинность ресурса.</p></details><details><summary>Есть ли отдельное приложение Азино мобиль?</summary><p>Запрос «Азино мобиль» может относиться к адаптивной веб-версии. Откройте официальный адрес в браузере и следуйте только проверенным инструкциям. Не скачивайте APK или профили из непонятных источников.</p></details><details><summary>Что означает запрос «азино777 казино»?</summary><p>Это одно из распространённых поисковых написаний бренда. Вне зависимости от варианта — «Азино», «Азино 777», «azino 777» — проверяйте домен, условия, возрастные ограничения и правила конкретной игры.</p></details><details><summary>Можно ли гарантировать выигрыш?</summary><p>Нет. В азартных играх невозможно гарантировать результат. Любые формулировки о гарантированной прибыли, секретной стратегии или возврате потерь должны восприниматься как тревожный сигнал.</p></details><details><summary>Что делать, если игра перестала быть контролируемой?</summary><p>Остановите сессию, заблокируйте доступ к средствам и поговорите с близким или специалистом по проблемному игровому поведению. Чем раньше запросить помощь, тем проще вернуть контроль.</p></details></div></section>

      <footer className="az7-footer"><div className="az7-footer-brand"><a className="az7-brand" href="#top"><span className="az7-brand-mark">A7</span><span><b>Azino</b><em>777</em></span></a><p>Информационный гид о безопасной навигации и ответственном подходе.</p></div><div className="az7-footer-links"><a href="#start">О платформе</a><a href="#mobile">Мобильная версия</a><a href="#responsible">Ответственная игра</a></div><div className="az7-footer-note"><span>18+</span><p>Играйте ответственно.<br />Не является финансовой рекомендацией.</p></div></footer>
    </main>
  )
}
