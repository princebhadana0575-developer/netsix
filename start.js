<<<<<<< HEAD
// 1. SELECTORS (Sabse upar)
const banner = document.querySelector(".banner");
const bannerImg = document.getElementById("bannerImg");
const bannername = document.querySelector(".bannername");
const cross = document.querySelector(".cross");
const herocontainer = document.querySelector(".herocontainer");
const videoPlaceholder = document.getElementById("video-placeholder");
const banneroverlay = document.querySelector(".banneroverlay");

// 2. PLAY VIDEO FUNCTION
// (Isko upar rakha hai taaki baaki functions ise pehchane)
function playVideo(id) {
  if (!id) {
    alert("Video ID not available");
    return;
  }

  videoPlaceholder.style.display = "block";
  videoPlaceholder.innerHTML = `
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/${id}?autoplay=1"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen>
    </iframe>
  `;
}

// 3. DATA (Sections)
const sections = [
  {
    container: ".TVshows",
    shows: [
      {
        name: "THE BABY SITTER",
        Image: "./Attachments/babysitter.jpg",
        category: "Comedy • Horror",
        genre: "Comedy, Horror",
        cast: "Judah Lewis, Samara Weaving",
        year: "2017",
        rating: "6.3",
        about:
          "Ek awkward teenager ko pata chalta hai ki uski babysitter ek satanic cult ka hissa hai.",
        age: "18+",
        seasons: "Movie",
        match: "94%",
        id: "8WzUYkzRgBE",
      },
      {
        name: "ANIMAL",
        Image: "./Attachments/animal.jpg",
        category: "Drama",
        genre: "Action, Crime, Drama",
        cast: "Ranbir Kapoor, Rashmika Mandanna",
        year: "2023",
        rating: "6.5",
        about: "Ek beta apne pita ke liye obsession ki had tak chala jata hai.",
        age: "18+",
        seasons: "Movie",
        match: "91%",
        id: "WuH9ahB-68Q",
      },
      {
        name: "DEVIL IN OHIO",
        Image: "./Attachments/devil.jpg",
        category: "Mystery • Thriller",
        genre: "Mystery, Thriller",
        cast: "Emily Deschanel, Madeleine Arthur",
        year: "2022",
        rating: "5.9",
        about:
          "Ek psychiatrist ek mysterious ladki ko ghar laati hai jiske baad ajeeb cheezein hone lagti hain.",
        age: "16+",
        seasons: "1 Season",
        match: "96%",
        id: "WFDXlIKPHFo",
      },
      {
        name: "HEAT",
        Image: "./Attachments/heat.jpg",
        category: "Crime • Action",
        genre: "Crime, Action, Thriller",
        cast: "Al Pacino, Robert De Niro",
        year: "1995",
        rating: "8.3",
        about:
          "Ek master thief aur detective ke beech dangerous cat-and-mouse game.",
        age: "18+",
        seasons: "Movie",
        match: "95%",
        id: "0xbBLJ1WGwQ",
      },
      {
        name: "WOUNDS",
        Image: "./Attachments/wounds.jpg",
        category: "Psychological • Horror",
        genre: "Psychological Horror",
        cast: "Armie Hammer, Dakota Johnson",
        year: "2019",
        rating: "4.1",
        about:
          "Ek bartender ko ek lost phone milta hai jiske baad horrifying events shuru ho jate hain.",
        age: "18+",
        seasons: "Movie",
        match: "88%",
        id: "g4tMNiPY9fA",
      },
      {
        name: "NO ONE GETS ALIVE",
        Image: "./Attachments/no one.jpg",
        category: "Horror • Thriller",
        genre: "Horror, Thriller",
        cast: "Cristina Rodlo, Marc Menchaca",
        year: "2021",
        rating: "5.3",
        about:
          "Ek immigrant ladki ko apne boarding house mein supernatural horror ka samna karna padta hai.",
        age: "18+",
        seasons: "Movie",
        match: "90%",
        id: "FcO5EXZ7jrE",
      },
      {
        name: "DIPLOMAT",
        Image: "./Attachments/diplomat.jpg",
        category: "Political • Thriller",
        genre: "Political Thriller",
        cast: "Keri Russell, Rufus Sewell",
        year: "2023",
        rating: "8.0",
        about:
          "Ek diplomat international politics aur dangerous conspiracies ke beech phans jata hai.",
        age: "16+",
        seasons: "1 Season",
        match: "92%",
        id: "lV6sJlBbhPs",
      },
    ],
  },
  {
    container: ".NetflixTrendings",
    shows: [
      {
        name: "DONT KILL ME",
        Image: "./Attachments/dont kill me.jpg",
        category: "Drama • Thriller",
        genre: "Drama, Fantasy, Thriller",
        cast: "Alice Pagani, Rocco Fasano",
        year: "2021",
        rating: "4.3",
        about:
          "Ek ladki maut ke baad wapas zinda hoti hai aur dark supernatural reality discover karti hai.",
        age: "16+",
        seasons: "Movie",
        match: "89%",
        id: "KDMFV4WNkNk",
      },
      {
        name: "DARK",
        Image: "./Attachments/dark.jpg",
        category: "Drama • Thriller",
        genre: "Sci-Fi, Mystery, Thriller",
        cast: "Louis Hofmann, Lisa Vicari",
        year: "2017",
        rating: "8.7",
        about:
          "Ek small town mein bachon ke disappear hone se time travel mystery khulti hai.",
        age: "16+",
        seasons: "3 Seasons",
        match: "99%",
        id: "ESEUoa-mz2c",
      },
      {
        name: "YOUNGER",
        Image: "./Attachments/young.jpg",
        category: "Drama • Thriller",
        genre: "Comedy, Drama",
        cast: "Sutton Foster, Hilary Duff",
        year: "2015",
        rating: "7.8",
        about:
          "Ek woman apni career bachane ke liye younger pretend karti hai.",
        age: "13+",
        seasons: "7 Seasons",
        match: "87%",
        id: "424g85QPo4g",
      },
      {
        name: "LOVE DEATH",
        Image: "./Attachments/love.jpg",
        category: "Drama • Thriller",
        genre: "Animation, Sci-Fi, Horror",
        cast: "Multiple Cast",
        year: "2019",
        rating: "8.4",
        about:
          "Animated short stories ka collection jo sci-fi aur horror ko mix karta hai.",
        age: "18+",
        seasons: "3 Seasons",
        match: "98%",
        id: "wUFwunMKa4E",
      },
      {
        name: "SAKAMOTOO DAYS",
        Image: "./Attachments/sakamoto.jpg",
        category: "Drama • Thriller",
        genre: "Action, Comedy",
        cast: "Tomokazu Sugita",
        year: "2025",
        rating: "8.0",
        about:
          "Ek retired assassin family life enjoy karte hue enemies se ladta hai.",
        age: "16+",
        seasons: "1 Season",
        match: "93%",
        id: "fPopd3ZOGUY",
      },
      {
        name: "SUPERSTORE",
        Image: "./Attachments/super store.jpg",
        category: "Drama • Thriller",
        genre: "Comedy",
        cast: "America Ferrera, Ben Feldman",
        year: "2015",
        rating: "7.9",
        about:
          "Retail store employees ki funny aur relatable daily life situations.",
        age: "13+",
        seasons: "6 Seasons",
        match: "90%",
        id: "CvqlrkiVHtY",
      },
    ],
  },
  {
    container: ".dramaShow",
    shows: [
      {
        name: "BODYGUARD",
        Image: "./Attachments/bodyguard.jpg",
        category: "Drama",
        genre: "Crime, Political Thriller",
        cast: "Richard Madden, Keeley Hawes",
        description:
          "Ek war veteran ko ek powerful politician ki hifazat karne ka kaam milta hai.",
        year: "2018",
        rating: "8.1",
        about:
          "Political conspiracies aur security threats ke beech ek bodyguard ki intense kahani.",
        age: "16+",
        seasons: "1 Season",
        match: "97%",
        id: "tLfLU6-9lxY",
      },
      {
        name: "MY NAME",
        Image: "./Attachments/my name.jpg",
        category: "Drama",
        genre: "Action, Revenge",
        cast: "Han So-hee, Ahn Bo-hyun",
        description:
          "Apne pita ki maut ka badla lene ke liye ek ladki undercover police banti hai.",
        year: "2021",
        rating: "7.8",
        about:
          "Revenge aur undercover missions se bhari ek action-packed Korean drama.",
        age: "18+",
        seasons: "1 Season",
        match: "96%",
        id: "mRfG-E3H08Q",
      },
      {
        name: "ANIMAL",
        Image: "./Attachments/animal.jpg",
        category: "Drama",
        genre: "Action, Family Crime",
        cast: "Ranbir Kapoor, Rashmika Mandanna",
        description: "Ek bete ka apne baap ke liye pagalpan ki had tak prem.",
        year: "2023",
        rating: "6.5",
        about:
          "Father-son relationship aur extreme violence ke around ghoomti intense story.",
        age: "18+",
        seasons: "Movie",
        match: "91%",
        id: "8FkLRUJj-o0",
      },
      {
        name: "QUEEN OF TEARS",
        Image: "./Attachments/queen.jpg",
        category: "Drama",
        genre: "Romance, Melodrama",
        cast: "Kim Soo-hyun, Kim Ji-won",
        description:
          "Ameer parivaar ki beti aur lawyer ki shadi shuda zindagi ke utaar-chadhav.",
        year: "2024",
        rating: "8.3",
        about:
          "Marriage, emotions aur family pressure ke beech emotional Korean drama.",
        age: "13+",
        seasons: "1 Season",
        match: "98%",
        id: "Gg2D8zrzlOA",
      },
    ],
  },
  {
    container: ".loveShow",
    shows: [
      {
        name: "THE LINCOLN LAWYER",
        Image: "./Attachments/the lincoln.jpg",
        category: "Love • Romance",
        genre: "Legal Drama, Mystery",
        cast: "Manuel Garcia-Rulfo",
        description:
          "Ek lawyer jo apni car ki pichli seat se apna pura qanooni karobaar chalata hai.",
        year: "2022",
        rating: "7.7",
        about: "Ek smart defense lawyer dangerous legal cases solve karta hai.",
        age: "16+",
        seasons: "3 Seasons",
        match: "95%",
        id: "pVvVNbLf7Ig",
      },
      {
        name: "BROOKLYN NINE-NINE",
        Image: "./Attachments/broklyn.jpg",
        category: "Love • Romance",
        genre: "Comedy, Crime",
        cast: "Andy Samberg, Terry Crews",
        description:
          "Brooklyn ke 99th precinct ke detectives ki mazedaar kahaniyan.",
        year: "2013",
        rating: "8.4",
        about:
          "Funny detectives aur hilarious police station moments se bhara sitcom.",
        age: "13+",
        seasons: "8 Seasons",
        match: "99%",
        id: "ZpIeorlwVQc",
      },
      {
        name: "QUEEN OF TEARS",
        Image: "./Attachments/queen.jpg",
        category: "Drama",
        genre: "Romance, Melodrama",
        cast: "Kim Soo-hyun, Kim Ji-won",
        description:
          "Shadi shuda zindagi mein aane wale utaar-chadhav ki bhavuk kahani.",
        year: "2024",
        rating: "8.3",
        about:
          "Love aur marriage struggles ki emotional aur heart-touching story.",
        age: "13+",
        seasons: "1 Season",
        match: "98%",
        id: "Gg2D8zrzlOA",
      },
    ],
  },
];

const hyped = [
  {
    id: "YksuyHV6mqw",
    name: "STRANGER THINGS",
    img: "./Attachments/stranger things.jpg",
    category: "Mystery • Sci-Fi",
    genre: "Sci-Fi, Horror",
    cast: "Millie Bobby Brown, Finn Wolfhard",
    about:
      "A small town uncovers a mystery involving secret experiments and supernatural forces.",
    match: "98",
    age: "18",
    seasons: "5",
    rating: "8.7",
    year: "2016",
    duration: "5 Seasons",
  },
  {
    id: "OQmJfxStYpM",
    name: "GAME OF THRONES",
    img: "./Attachments/game of thrones.jpg",
    category: "Fantasy • Drama",
    genre: "Action, Adventure, Fantasy",
    cast: "Emilia Clarke, Kit Harington",
    about:
      "Powerful families playing a deadly game for control of the Seven Kingdoms.",
    match: "99",
    age: "18",
    seasons: "8",
    rating: "9.2",
    year: "2011",
    duration: "8 Seasons",
  },
  {
    id: "ydCReLLSYO0",
    name: "THOR",
    img: "./Attachments/thor.jpg",
    category: "Action • Marvel",
    genre: "Action, Fantasy",
    cast: "Chris Hemsworth, Natalie Portman",
    about: "The god Thor is cast out of Asgard to live among humans on Earth.",
    match: "95",
    age: "16",
    seasons: "Movie",
    rating: "7.0",
    year: "2011",
    duration: "1h 55m",
  },
  {
    id: "HQiFlg0DFdo",
    name: "MONEY HEIST",
    img: "./Attachments/money.jpg",
    category: "Crime • Thriller",
    genre: "Crime, Drama, Thriller",
    cast: "Álvaro Morte, Úrsula Corberó",
    about: "A criminal mastermind plans the biggest heist in recorded history.",
    match: "97",
    age: "18",
    seasons: "5",
    rating: "8.2",
    year: "2017",
    duration: "5 Seasons",
  },
  {
    id: "2JgPJpgnut4",
    name: "SNEAKY LINKS",
    img: "./Attachments/sneaky.jpg",
    category: "Mystery • Drama",
    genre: "Drama, Mystery",
    cast: "Unknown Cast",
    about:
      "A supernatural mystery set in a small town where hidden connections unfold.",
    match: "95",
    age: "16",
    seasons: "3",
    rating: "7.5",
    year: "2023",
    duration: "3 Seasons",
  },
  {
    id: "E7kKBbsSQKw",
    name: "WEDNSDAY",
    img: "./Attachments/wednwsday.jpg",
    category: "Comedy • Fantasy",
    genre: "Comedy, Crime, Fantasy",
    cast: "Jenna Ortega, Hunter Doohan",
    about:
      "Wednesday Addams attempts to master her psychic ability at Nevermore Academy.",
    match: "96",
    age: "16",
    seasons: "1",
    rating: "8.1",
    year: "2022",
    duration: "1 Season",
  },
  {
    id: "IjEPGbdCBU8",
    name: "THE WITCHER",
    img: "./Attachments/the witcher.jpg",
    category: "Adventure • Fantasy",
    genre: "Action, Adventure, Fantasy",
    cast: "Henry Cavill, Anya Chalotra",
    about:
      "Geralt of Rivia, a mutated monster-hunter, journeys through a turbulent world.",
    match: "94",
    age: "18",
    seasons: "3",
    rating: "8.0",
    year: "2019",
    duration: "3 Seasons",
  },
  {
    id: "EkMOrrdMtIc",
    name: "LUCIFER",
    img: "./Attachments/lucifer.jpg",
    category: "Crime • Fantasy",
    genre: "Crime, Drama, Fantasy",
    cast: "Tom Ellis, Lauren German",
    about:
      "Lucifer Morningstar leaves Hell to live in Los Angeles and solve crimes.",
    match: "93",
    age: "18",
    seasons: "6",
    rating: "8.1",
    year: "2016",
    duration: "6 Seasons",
  },
  {
    id: "59-450ItOFY",
    name: "PEAKY BLINDERS",
    img: "./Attachments/peaky.jpg",
    category: "Crime • Drama",
    genre: "Crime, Drama",
    cast: "Cillian Murphy, Paul Anderson",
    about:
      "A gangster family epic set in 1900s England centering on boss Tommy Shelby.",
    match: "96",
    age: "18",
    seasons: "6",
    rating: "8.8",
    year: "2013",
    duration: "6 Seasons",
  },
  {
    id: "mScYq7PzagY",
    name: "ALL OF US ARE DEAD",
    img: "./Attachments/all of us are.jpg",
    category: "Horror • Zombie",
    genre: "Action, Horror, Sci-Fi",
    cast: "Park Ji-hu, Yoon Chan-young",
    about:
      "Trapped students must fight their way out of a zombie virus outbreak.",
    match: "92",
    age: "18",
    seasons: "1",
    rating: "7.5",
    year: "2022",
    duration: "1 Season",
  },
  {
    id: "XNQbH1SDPRk",
    name: "THE BOYS",
    img: "./Attachments/the boys.jpg",
    category: "Action • Satire",
    genre: "Action, Comedy, Crime",
    cast: "Karl Urban, Jack Quaid",
    about:
      "Vigilantes set out to take down corrupt superheroes who abuse their powers.",
    match: "97",
    age: "18",
    seasons: "4",
    rating: "8.7",
    year: "2019",
    duration: "4 Seasons",
  },
  {
    id: "SbAKYgfYET8",
    name: "SQUID GAME",
    img: "./Attachments/sqid games.jpg",
    category: "Thriller • Drama",
    genre: "Action, Drama, Mystery",
    cast: "Lee Jung-jae, Jung Ho-yeon",
    about:
      "Cash-strapped players compete in deadly children's games for a tempting prize.",
    match: "98",
    age: "18",
    seasons: "2",
    rating: "8.0",
    year: "2021",
    duration: "2 Seasons",
  },
];

const history = [
  {
    id: "",
    name: "ELITE",
    img: "Attachments/elite.png",

    category: "Teen Drama • Thriller",
    genre: "Drama, Crime, Mystery",
    cast: "Itzan Escamilla, Omar Ayuso",
    about:
      "Students at an elite school become involved in secrets, betrayal, and murder after a mysterious tragedy.",
    match: "95",
    age: "18",
    seasons: "8",
    rating: "7.3",
    year: "2018",
    duration: "8 Seasons",
  },

  {
    id: "",
    name: "TITANIC",
    img: "Attachments/titanic.jpg",

    category: "Romance • Drama",
    genre: "Romance, Disaster",
    cast: "Leonardo DiCaprio, Kate Winslet",
    about:
      "A young couple from different social classes fall in love aboard the doomed RMS Titanic.",
    match: "99",
    age: "13",
    seasons: "Movie",
    rating: "7.9",
    year: "1997",
    duration: "3h 14m",
  },

  {
    id: "",
    name: "MY FAULT",
    img: "Attachments/my fault.jpg",

    category: "Romance • Drama",
    genre: "Romance, Teen Drama",
    cast: "Nicole Wallace, Gabriel Guevara",
    about:
      "Noah moves into a new home and develops an intense relationship with her rebellious stepbrother Nick.",
    match: "94",
    age: "16",
    seasons: "Movie",
    rating: "6.2",
    year: "2023",
    duration: "1h 57m",
  },

  {
    id: "",
    name: "DAY DREAMER",
    img: "Attachments/daydreamer.jpg",

    category: "Romance • Comedy",
    genre: "Romance, Comedy",
    cast: "Can Yaman, Demet Özdemir",
    about:
      "A cheerful young woman begins working at an advertising agency and unexpectedly falls in love.",
    match: "96",
    age: "13",
    seasons: "1",
    rating: "7.4",
    year: "2018",
    duration: "1 Season",
  },

  {
    id: "",
    name: "DOCTOR STRANGE",
    img: "Attachments/wanda.jpg",

    category: "Action • Fantasy",
    genre: "Superhero, Adventure",
    cast: "Benedict Cumberbatch, Elizabeth Olsen",
    about:
      "A brilliant surgeon discovers mystical powers and protects reality from dangerous multiverse threats.",
    match: "97",
    age: "13",
    seasons: "Movie",
    rating: "7.5",
    year: "2016",
    duration: "1h 55m",
  },

  {
    id: "",
    name: "KRRISH 3",
    img: "Attachments/krish.jpg",

    category: "Action • Sci-Fi",
    genre: "Sci-Fi, Superhero",
    cast: "Hrithik Roshan, Vivek Oberoi",
    about:
      "Krishna faces a powerful villain and mutant army while protecting humanity using his superpowers.",
    match: "91",
    age: "13",
    seasons: "Movie",
    rating: "5.3",
    year: "2013",
    duration: "2h 32m",
  },
];
// 4. RENDER FUNCTION (Normal Cards)
function renderShows(containerSelector, shows) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  shows.forEach((show) => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <img src="${show.Image}" alt="movie">
      <div class="panel">
        <div class="pnl-btn">
          <button>▶</button>
          <button>+</button>
          <button><i class="fa-solid fa-thumbs-up"></i></button>
        </div>
        <div class="info">
          <span id="matchpop">${show.match} Match</span>
          <span class="ua">U / A ${show.age}</span>
          <span class="qlty">HD</span>
          <div class="category">${show.category}</div>
        </div>
      </div>
    `;

    div.addEventListener("click", () => {
      openBanner(
        show.Image,
        show.name,
        show.id,

        show.about,
        show.age,
        show.match,
        show.seasons,
        show.genre,
        show.cast,
        show.year,
        show.rating,
      );
      banneroverlay.style.visibility = "visible";
    });

    container.appendChild(div);
  });
}

const continueWatching = document.querySelector(".continue-watching");

// render history
function renderHistory() {
  history.forEach((item) => {
    const div = document.createElement("div");
    div.className = "Continue-box";
    div.innerHTML = `
      
  <img
    src="${item.img}"
    alt=""
  />

<div class="history">
  <div class="history-content">
    <h2>${item.name}</h2>
    <h5>${item.genre}</h5>

    <div class="btns">
      <button>▶ Play</button>
      <button>＋ Watchlist</button>
    </div>
  </div>
</div>
      
    `;

    div.addEventListener("click", () => {
      openBanner(
        item.img,
        item.name,
        item.id,
        item.about,
        item.age,
        item.match,
        item.seasons,
        item.genre,
        item.cast,
        item.year,
        item.category,
        item.rating,
      );
      banneroverlay.style.visibility = "visible";
      document.body.style.overflow = "hidden";
    });

    continueWatching.appendChild(div);
  });
}

renderHistory();

// 5. RENDER TRENDING (Hero Slider)
function renderTrending() {
  if (!herocontainer) return;
  hyped.forEach((item) => {
    const div = document.createElement("div");
    div.className = "hero";
    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}" />
      <div class="overlay"></div>
      <div class="hero-content">
        <span class="top-title">Netflix Series</span>
        <h1>${item.name}</h1>
        <div class="details">
          <span class="match">${item.match}% Match</span>
          <span>2024</span>
          <span class="age">${item.age}+</span>
          <span>${item.seasons} Seasons</span>
          <span class="quality">HD</span>
        </div>
        <p>${item.about}</p>
        <div class="buttons">
          <button class="play-btn">▶ Play</button>
          <button class="list-btn">+ My List</button>
          <button class="info-btn">i</button>
        </div>
      </div>
    `;

    div.addEventListener("click", () => {
      openBanner(
        item.img,
        item.name,
        item.id,
        item.about,
        item.age,
        item.match,
        item.seasons,
        item.genre,
        item.cast,
        item.year,
        item.rating,
      );
      banneroverlay.style.visibility = "visible";
      document.body.style.overflow = "hidden";
    });

    herocontainer.appendChild(div);
  });
}

const details = document.querySelector(".details");
const bannerDesc = document.querySelector("#bannerDesc");
const descriptions = document.querySelector(".descriptions");
// 6. OPEN BANNER HELPER
function openBanner(
  img,
  name,
  id,
  about,
  age,
  match,
  seasons,
  cast,
  genre,
  category,
  year,
  rating,
) {
  // Reset video first
  videoPlaceholder.innerHTML = "";
  videoPlaceholder.style.display = "none";

  banner.classList.add("open");
  bannerImg.src = img;
  bannername.innerHTML = name || "Netflix Show";
  bannerDesc.innerHTML = about;

  details.innerHTML = ` <span class="match">${match}% Match</span>
                    <span>2024</span>
                    <span class="age">${age}+</span>
                    <span>${seasons} Seasons</span>
                    <span class="quality">HD</span>`;

  descriptions.innerHTML = `
    <div class="right">
        <h3 class="movie-info-title">Genre</h3>
        <p id="cast" class="movie-info-text">${cast}</p>
        
        <h3 class="movie-info-title">Cast</h3>
        <p id="genre" class="movie-info-text">${genre},${category}</p>

        <div class="movie-stats-row">
            <div class="stats-item">
                <h3 class="movie-info-title">Year</h3>
                <p id="year" class="movie-info-text">${year}</p>
            </div>
            <div class="stats-item">
                <h3 class="movie-info-title">Rating</h3>
                <p id="rating" class="movie-info-text">⭐ ${rating}</p>
            </div>
        </div>
    </div>
`;

  // Setup play button in banner
  const mainPlayBtn = document.querySelector(".play-btn-banner");
  if (mainPlayBtn) {
    mainPlayBtn.onclick = (e) => {
      e.stopPropagation();
      playVideo(id);
    };
  }
}

// 7. INITIALIZE
sections.forEach((section) => renderShows(section.container, section.shows));
renderTrending();

// 8. CLOSE BANNER
cross.addEventListener("click", () => {
  banner.classList.remove("open");
  videoPlaceholder.innerHTML = "";
  videoPlaceholder.style.display = "none";
  banneroverlay.style.visibility = "hidden";
  document.body.style.overflow = "hidden";
  document.body.style.overflow = "auto";
});

// 9. AUTO SCROLL SLIDER
let scrollIndex = 0;
setInterval(() => {
  scrollIndex++;
  if (scrollIndex >= hyped.length) scrollIndex = 0;

  if (herocontainer) {
    herocontainer.scrollTo({
      left: scrollIndex * herocontainer.offsetWidth,
      behavior: "smooth",
    });
  }
}, 3000);
=======
// 1. SELECTORS (Sabse upar)
const banner = document.querySelector(".banner");
const bannerImg = document.getElementById("bannerImg");
const bannername = document.querySelector(".bannername");
const cross = document.querySelector(".cross");
const herocontainer = document.querySelector(".herocontainer");
const videoPlaceholder = document.getElementById("video-placeholder");
const banneroverlay = document.querySelector(".banneroverlay");

// 2. PLAY VIDEO FUNCTION
// (Isko upar rakha hai taaki baaki functions ise pehchane)
function playVideo(id) {
  if (!id) {
    alert("Video ID not available");
    return;
  }

  videoPlaceholder.style.display = "block";
  videoPlaceholder.innerHTML = `
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/${id}?autoplay=1"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen>
    </iframe>
  `;
}

// 3. DATA (Sections)
const sections = [
  {
    container: ".TVshows",
    shows: [
      {
        name: "THE BABY SITTER",
        Image: "./Attachments/babysitter.jpg",
        category: "Comedy • Horror",
        genre: "Comedy, Horror",
        cast: "Judah Lewis, Samara Weaving",
        year: "2017",
        rating: "6.3",
        about:
          "Ek awkward teenager ko pata chalta hai ki uski babysitter ek satanic cult ka hissa hai.",
        age: "18+",
        seasons: "Movie",
        match: "94%",
        id: "8WzUYkzRgBE",
      },
      {
        name: "ANIMAL",
        Image: "./Attachments/animal.jpg",
        category: "Drama",
        genre: "Action, Crime, Drama",
        cast: "Ranbir Kapoor, Rashmika Mandanna",
        year: "2023",
        rating: "6.5",
        about: "Ek beta apne pita ke liye obsession ki had tak chala jata hai.",
        age: "18+",
        seasons: "Movie",
        match: "91%",
        id: "WuH9ahB-68Q",
      },
      {
        name: "DEVIL IN OHIO",
        Image: "./Attachments/devil.jpg",
        category: "Mystery • Thriller",
        genre: "Mystery, Thriller",
        cast: "Emily Deschanel, Madeleine Arthur",
        year: "2022",
        rating: "5.9",
        about:
          "Ek psychiatrist ek mysterious ladki ko ghar laati hai jiske baad ajeeb cheezein hone lagti hain.",
        age: "16+",
        seasons: "1 Season",
        match: "96%",
        id: "WFDXlIKPHFo",
      },
      {
        name: "HEAT",
        Image: "./Attachments/heat.jpg",
        category: "Crime • Action",
        genre: "Crime, Action, Thriller",
        cast: "Al Pacino, Robert De Niro",
        year: "1995",
        rating: "8.3",
        about:
          "Ek master thief aur detective ke beech dangerous cat-and-mouse game.",
        age: "18+",
        seasons: "Movie",
        match: "95%",
        id: "0xbBLJ1WGwQ",
      },
      {
        name: "WOUNDS",
        Image: "./Attachments/wounds.jpg",
        category: "Psychological • Horror",
        genre: "Psychological Horror",
        cast: "Armie Hammer, Dakota Johnson",
        year: "2019",
        rating: "4.1",
        about:
          "Ek bartender ko ek lost phone milta hai jiske baad horrifying events shuru ho jate hain.",
        age: "18+",
        seasons: "Movie",
        match: "88%",
        id: "g4tMNiPY9fA",
      },
      {
        name: "NO ONE GETS ALIVE",
        Image: "./Attachments/no-one.jpg",
        category: "Horror • Thriller",
        genre: "Horror, Thriller",
        cast: "Cristina Rodlo, Marc Menchaca",
        year: "2021",
        rating: "5.3",
        about:
          "Ek immigrant ladki ko apne boarding house mein supernatural horror ka samna karna padta hai.",
        age: "18+",
        seasons: "Movie",
        match: "90%",
        id: "FcO5EXZ7jrE",
      },
      {
        name: "DIPLOMAT",
        Image: "./Attachments/diplomat.jpg",
        category: "Political • Thriller",
        genre: "Political Thriller",
        cast: "Keri Russell, Rufus Sewell",
        year: "2023",
        rating: "8.0",
        about:
          "Ek diplomat international politics aur dangerous conspiracies ke beech phans jata hai.",
        age: "16+",
        seasons: "1 Season",
        match: "92%",
        id: "lV6sJlBbhPs",
      },
    ],
  },
  {
    container: ".NetflixTrendings",
    shows: [
      {
        name: "DONT KILL ME",
        Image: "./Attachments/dont-kill-me.jpg",
        category: "Drama • Thriller",
        genre: "Drama, Fantasy, Thriller",
        cast: "Alice Pagani, Rocco Fasano",
        year: "2021",
        rating: "4.3",
        about:
          "Ek ladki maut ke baad wapas zinda hoti hai aur dark supernatural reality discover karti hai.",
        age: "16+",
        seasons: "Movie",
        match: "89%",
        id: "KDMFV4WNkNk",
      },
      {
        name: "DARK",
        Image: "./Attachments/dark.jpg",
        category: "Drama • Thriller",
        genre: "Sci-Fi, Mystery, Thriller",
        cast: "Louis Hofmann, Lisa Vicari",
        year: "2017",
        rating: "8.7",
        about:
          "Ek small town mein bachon ke disappear hone se time travel mystery khulti hai.",
        age: "16+",
        seasons: "3 Seasons",
        match: "99%",
        id: "ESEUoa-mz2c",
      },
      {
        name: "YOUNGER",
        Image: "./Attachments/young.jpg",
        category: "Drama • Thriller",
        genre: "Comedy, Drama",
        cast: "Sutton Foster, Hilary Duff",
        year: "2015",
        rating: "7.8",
        about:
          "Ek woman apni career bachane ke liye younger pretend karti hai.",
        age: "13+",
        seasons: "7 Seasons",
        match: "87%",
        id: "424g85QPo4g",
      },
      {
        name: "LOVE DEATH",
        Image: "./Attachments/love.jpg",
        category: "Drama • Thriller",
        genre: "Animation, Sci-Fi, Horror",
        cast: "Multiple Cast",
        year: "2019",
        rating: "8.4",
        about:
          "Animated short stories ka collection jo sci-fi aur horror ko mix karta hai.",
        age: "18+",
        seasons: "3 Seasons",
        match: "98%",
        id: "wUFwunMKa4E",
      },
      {
        name: "SAKAMOTOO DAYS",
        Image: "./Attachments/sakamoto.jpg",
        category: "Drama • Thriller",
        genre: "Action, Comedy",
        cast: "Tomokazu Sugita",
        year: "2025",
        rating: "8.0",
        about:
          "Ek retired assassin family life enjoy karte hue enemies se ladta hai.",
        age: "16+",
        seasons: "1 Season",
        match: "93%",
        id: "fPopd3ZOGUY",
      },
      {
        name: "SUPERSTORE",
        Image: "./Attachments/super-store.jpg",
        category: "Drama • Thriller",
        genre: "Comedy",
        cast: "America Ferrera, Ben Feldman",
        year: "2015",
        rating: "7.9",
        about:
          "Retail store employees ki funny aur relatable daily life situations.",
        age: "13+",
        seasons: "6 Seasons",
        match: "90%",
        id: "CvqlrkiVHtY",
      },
    ],
  },
  {
    container: ".dramaShow",
    shows: [
      {
        name: "BODYGUARD",
        Image: "./Attachments/bodyguard.jpg",
        category: "Drama",
        genre: "Crime, Political Thriller",
        cast: "Richard Madden, Keeley Hawes",
        description:
          "Ek war veteran ko ek powerful politician ki hifazat karne ka kaam milta hai.",
        year: "2018",
        rating: "8.1",
        about:
          "Political conspiracies aur security threats ke beech ek bodyguard ki intense kahani.",
        age: "16+",
        seasons: "1 Season",
        match: "97%",
        id: "tLfLU6-9lxY",
      },
      {
        name: "MY NAME",
        Image: "./Attachments/my-name.jpg",
        category: "Drama",
        genre: "Action, Revenge",
        cast: "Han So-hee, Ahn Bo-hyun",
        description:
          "Apne pita ki maut ka badla lene ke liye ek ladki undercover police banti hai.",
        year: "2021",
        rating: "7.8",
        about:
          "Revenge aur undercover missions se bhari ek action-packed Korean drama.",
        age: "18+",
        seasons: "1 Season",
        match: "96%",
        id: "mRfG-E3H08Q",
      },
      {
        name: "ANIMAL",
        Image: "./Attachments/animal.jpg",
        category: "Drama",
        genre: "Action, Family Crime",
        cast: "Ranbir Kapoor, Rashmika Mandanna",
        description: "Ek bete ka apne baap ke liye pagalpan ki had tak prem.",
        year: "2023",
        rating: "6.5",
        about:
          "Father-son relationship aur extreme violence ke around ghoomti intense story.",
        age: "18+",
        seasons: "Movie",
        match: "91%",
        id: "8FkLRUJj-o0",
      },
      {
        name: "QUEEN OF TEARS",
        Image: "./Attachments/queen.jpg",
        category: "Drama",
        genre: "Romance, Melodrama",
        cast: "Kim Soo-hyun, Kim Ji-won",
        description:
          "Ameer parivaar ki beti aur lawyer ki shadi shuda zindagi ke utaar-chadhav.",
        year: "2024",
        rating: "8.3",
        about:
          "Marriage, emotions aur family pressure ke beech emotional Korean drama.",
        age: "13+",
        seasons: "1 Season",
        match: "98%",
        id: "Gg2D8zrzlOA",
      },
    ],
  },
  {
    container: ".loveShow",
    shows: [
      {
        name: "THE LINCOLN LAWYER",
        Image: "./Attachments/the-lincoln.jpg",
        category: "Love • Romance",
        genre: "Legal Drama, Mystery",
        cast: "Manuel Garcia-Rulfo",
        description:
          "Ek lawyer jo apni car ki pichli seat se apna pura qanooni karobaar chalata hai.",
        year: "2022",
        rating: "7.7",
        about: "Ek smart defense lawyer dangerous legal cases solve karta hai.",
        age: "16+",
        seasons: "3 Seasons",
        match: "95%",
        id: "pVvVNbLf7Ig",
      },
      {
        name: "BROOKLYN NINE-NINE",
        Image: "./Attachments/broklyn.jpg",
        category: "Love • Romance",
        genre: "Comedy, Crime",
        cast: "Andy Samberg, Terry Crews",
        description:
          "Brooklyn ke 99th precinct ke detectives ki mazedaar kahaniyan.",
        year: "2013",
        rating: "8.4",
        about:
          "Funny detectives aur hilarious police station moments se bhara sitcom.",
        age: "13+",
        seasons: "8 Seasons",
        match: "99%",
        id: "ZpIeorlwVQc",
      },
      {
        name: "QUEEN OF TEARS",
        Image: "./Attachments/queen.jpg",
        category: "Drama",
        genre: "Romance, Melodrama",
        cast: "Kim Soo-hyun, Kim Ji-won",
        description:
          "Shadi shuda zindagi mein aane wale utaar-chadhav ki bhavuk kahani.",
        year: "2024",
        rating: "8.3",
        about:
          "Love aur marriage struggles ki emotional aur heart-touching story.",
        age: "13+",
        seasons: "1 Season",
        match: "98%",
        id: "Gg2D8zrzlOA",
      },
    ],
  },
];

const hyped = [
  {
    id: "YksuyHV6mqw",
    name: "STRANGER THINGS",
    img: "./Attachments/stranger-things.jpg",
    category: "Mystery • Sci-Fi",
    genre: "Sci-Fi, Horror",
    cast: "Millie Bobby Brown, Finn Wolfhard",
    about:
      "A small town uncovers a mystery involving secret experiments and supernatural forces.",
    match: "98",
    age: "18",
    seasons: "5",
    rating: "8.7",
    year: "2016",
    duration: "5 Seasons",
  },
  {
    id: "OQmJfxStYpM",
    name: "GAME OF THRONES",
    img: "./Attachments/game-of-thrones.jpg",
    category: "Fantasy • Drama",
    genre: "Action, Adventure, Fantasy",
    cast: "Emilia Clarke, Kit Harington",
    about:
      "Powerful families playing a deadly game for control of the Seven Kingdoms.",
    match: "99",
    age: "18",
    seasons: "8",
    rating: "9.2",
    year: "2011",
    duration: "8 Seasons",
  },
  {
    id: "ydCReLLSYO0",
    name: "THOR",
    img: "./Attachments/thor.jpg",
    category: "Action • Marvel",
    genre: "Action, Fantasy",
    cast: "Chris Hemsworth, Natalie Portman",
    about: "The god Thor is cast out of Asgard to live among humans on Earth.",
    match: "95",
    age: "16",
    seasons: "Movie",
    rating: "7.0",
    year: "2011",
    duration: "1h 55m",
  },
  {
    id: "HQiFlg0DFdo",
    name: "MONEY HEIST",
    img: "./Attachments/money.jpg",
    category: "Crime • Thriller",
    genre: "Crime, Drama, Thriller",
    cast: "Álvaro Morte, Úrsula Corberó",
    about: "A criminal mastermind plans the biggest heist in recorded history.",
    match: "97",
    age: "18",
    seasons: "5",
    rating: "8.2",
    year: "2017",
    duration: "5 Seasons",
  },
  {
    id: "2JgPJpgnut4",
    name: "SNEAKY LINKS",
    img: "./Attachments/sneaky.jpg",
    category: "Mystery • Drama",
    genre: "Drama, Mystery",
    cast: "Unknown Cast",
    about:
      "A supernatural mystery set in a small town where hidden connections unfold.",
    match: "95",
    age: "16",
    seasons: "3",
    rating: "7.5",
    year: "2023",
    duration: "3 Seasons",
  },
  {
    id: "E7kKBbsSQKw",
    name: "WEDNSDAY",
    img: "./Attachments/wednwsday.jpg",
    category: "Comedy • Fantasy",
    genre: "Comedy, Crime, Fantasy",
    cast: "Jenna Ortega, Hunter Doohan",
    about:
      "Wednesday Addams attempts to master her psychic ability at Nevermore Academy.",
    match: "96",
    age: "16",
    seasons: "1",
    rating: "8.1",
    year: "2022",
    duration: "1 Season",
  },
  {
    id: "IjEPGbdCBU8",
    name: "THE WITCHER",
    img: "./Attachments/the-witcher.jpg",
    category: "Adventure • Fantasy",
    genre: "Action, Adventure, Fantasy",
    cast: "Henry Cavill, Anya Chalotra",
    about:
      "Geralt of Rivia, a mutated monster-hunter, journeys through a turbulent world.",
    match: "94",
    age: "18",
    seasons: "3",
    rating: "8.0",
    year: "2019",
    duration: "3 Seasons",
  },
  {
    id: "EkMOrrdMtIc",
    name: "LUCIFER",
    img: "./Attachments/lucifer.jpg",
    category: "Crime • Fantasy",
    genre: "Crime, Drama, Fantasy",
    cast: "Tom Ellis, Lauren German",
    about:
      "Lucifer Morningstar leaves Hell to live in Los Angeles and solve crimes.",
    match: "93",
    age: "18",
    seasons: "6",
    rating: "8.1",
    year: "2016",
    duration: "6 Seasons",
  },
  {
    id: "59-450ItOFY",
    name: "PEAKY BLINDERS",
    img: "./Attachments/peaky.jpg",
    category: "Crime • Drama",
    genre: "Crime, Drama",
    cast: "Cillian Murphy, Paul Anderson",
    about:
      "A gangster family epic set in 1900s England centering on boss Tommy Shelby.",
    match: "96",
    age: "18",
    seasons: "6",
    rating: "8.8",
    year: "2013",
    duration: "6 Seasons",
  },
  {
    id: "mScYq7PzagY",
    name: "ALL OF US ARE DEAD",
    img: "./Attachments/all-of-us-are.jpg",
    category: "Horror • Zombie",
    genre: "Action, Horror, Sci-Fi",
    cast: "Park Ji-hu, Yoon Chan-young",
    about:
      "Trapped students must fight their way out of a zombie virus outbreak.",
    match: "92",
    age: "18",
    seasons: "1",
    rating: "7.5",
    year: "2022",
    duration: "1 Season",
  },
  {
    id: "XNQbH1SDPRk",
    name: "THE BOYS",
    img: "./Attachments/the-boys.jpg",
    category: "Action • Satire",
    genre: "Action, Comedy, Crime",
    cast: "Karl Urban, Jack Quaid",
    about:
      "Vigilantes set out to take down corrupt superheroes who abuse their powers.",
    match: "97",
    age: "18",
    seasons: "4",
    rating: "8.7",
    year: "2019",
    duration: "4 Seasons",
  },
  {
    id: "SbAKYgfYET8",
    name: "SQUID GAME",
    img: "./Attachments/sqid-games.jpg",
    category: "Thriller • Drama",
    genre: "Action, Drama, Mystery",
    cast: "Lee Jung-jae, Jung Ho-yeon",
    about:
      "Cash-strapped players compete in deadly children's games for a tempting prize.",
    match: "98",
    age: "18",
    seasons: "2",
    rating: "8.0",
    year: "2021",
    duration: "2 Seasons",
  },
];

const history = [
  {
    id: "",
    name: "ELITE",
    img: "Attachments/elite.png",

    category: "Teen Drama • Thriller",
    genre: "Drama, Crime, Mystery",
    cast: "Itzan Escamilla, Omar Ayuso",
    about:
      "Students at an elite school become involved in secrets, betrayal, and murder after a mysterious tragedy.",
    match: "95",
    age: "18",
    seasons: "8",
    rating: "7.3",
    year: "2018",
    duration: "8 Seasons",
  },

  {
    id: "",
    name: "TITANIC",
    img: "Attachments/titanic.jpg",

    category: "Romance • Drama",
    genre: "Romance, Disaster",
    cast: "Leonardo DiCaprio, Kate Winslet",
    about:
      "A young couple from different social classes fall in love aboard the doomed RMS Titanic.",
    match: "99",
    age: "13",
    seasons: "Movie",
    rating: "7.9",
    year: "1997",
    duration: "3h 14m",
  },

  {
    id: "",
    name: "MY FAULT",
    img: "Attachments/my-fault.jpg",

    category: "Romance • Drama",
    genre: "Romance, Teen Drama",
    cast: "Nicole Wallace, Gabriel Guevara",
    about:
      "Noah moves into a new home and develops an intense relationship with her rebellious stepbrother Nick.",
    match: "94",
    age: "16",
    seasons: "Movie",
    rating: "6.2",
    year: "2023",
    duration: "1h 57m",
  },

  {
    id: "",
    name: "DAY DREAMER",
    img: "Attachments/daydreamer.jpg",

    category: "Romance • Comedy",
    genre: "Romance, Comedy",
    cast: "Can Yaman, Demet Özdemir",
    about:
      "A cheerful young woman begins working at an advertising agency and unexpectedly falls in love.",
    match: "96",
    age: "13",
    seasons: "1",
    rating: "7.4",
    year: "2018",
    duration: "1 Season",
  },

  {
    id: "",
    name: "DOCTOR STRANGE",
    img: "Attachments/wanda.jpg",

    category: "Action • Fantasy",
    genre: "Superhero, Adventure",
    cast: "Benedict Cumberbatch, Elizabeth Olsen",
    about:
      "A brilliant surgeon discovers mystical powers and protects reality from dangerous multiverse threats.",
    match: "97",
    age: "13",
    seasons: "Movie",
    rating: "7.5",
    year: "2016",
    duration: "1h 55m",
  },

  {
    id: "",
    name: "KRRISH 3",
    img: "Attachments/krish.jpg",

    category: "Action • Sci-Fi",
    genre: "Sci-Fi, Superhero",
    cast: "Hrithik Roshan, Vivek Oberoi",
    about:
      "Krishna faces a powerful villain and mutant army while protecting humanity using his superpowers.",
    match: "91",
    age: "13",
    seasons: "Movie",
    rating: "5.3",
    year: "2013",
    duration: "2h 32m",
  },
];
// 4. RENDER FUNCTION (Normal Cards)
function renderShows(containerSelector, shows) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  shows.forEach((show) => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <img src="${show.Image}" alt="movie">
      <div class="panel">
        <div class="pnl-btn">
          <button>▶</button>
          <button>+</button>
          <button><i class="fa-solid fa-thumbs-up"></i></button>
        </div>
        <div class="info">
          <span id="matchpop">${show.match} Match</span>
          <span class="ua">U / A ${show.age}</span>
          <span class="qlty">HD</span>
          <div class="category">${show.category}</div>
        </div>
      </div>
    `;

    div.addEventListener("click", () => {
      openBanner(
        show.Image,
        show.name,
        show.id,

        show.about,
        show.age,
        show.match,
        show.seasons,
        show.genre,
        show.cast,
        show.year,
        show.rating,
      );
      banneroverlay.style.visibility = "visible";
    });

    container.appendChild(div);
  });
}

const continueWatching = document.querySelector(".continue-watching");

// render history
function renderHistory() {
  history.forEach((item) => {
    const div = document.createElement("div");
    div.className = "Continue-box";
    div.innerHTML = `
      
  <img
    src="${item.img}"
    alt=""
  />

<div class="history">
  <div class="history-content">
    <h2>${item.name}</h2>
    <h5>${item.genre}</h5>

    <div class="btns">
      <button>▶ Play</button>
      <button>＋ Watchlist</button>
    </div>
  </div>
</div>
      
    `;

    div.addEventListener("click", () => {
      openBanner(
        item.img,
        item.name,
        item.id,
        item.about,
        item.age,
        item.match,
        item.seasons,
        item.genre,
        item.cast,
        item.year,
        item.category,
        item.rating,
      );
      banneroverlay.style.visibility = "visible";
      document.body.style.overflow = "hidden";
    });

    continueWatching.appendChild(div);
  });
}

renderHistory();

// 5. RENDER TRENDING (Hero Slider)
function renderTrending() {
  if (!herocontainer) return;
  hyped.forEach((item) => {
    const div = document.createElement("div");
    div.className = "hero";
    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}" />
      <div class="overlay"></div>
      <div class="hero-content">
        <span class="top-title">Netflix Series</span>
        <h1>${item.name}</h1>
        <div class="details">
          <span class="match">${item.match}% Match</span>
          <span>2024</span>
          <span class="age">${item.age}+</span>
          <span>${item.seasons} Seasons</span>
          <span class="quality">HD</span>
        </div>
        <p>${item.about}</p>
        <div class="buttons">
          <button class="play-btn">▶ Play</button>
          <button class="list-btn">+ My List</button>
          <button class="info-btn">i</button>
        </div>
      </div>
    `;

    div.addEventListener("click", () => {
      openBanner(
        item.img,
        item.name,
        item.id,
        item.about,
        item.age,
        item.match,
        item.seasons,
        item.genre,
        item.cast,
        item.year,
        item.rating,
      );
      banneroverlay.style.visibility = "visible";
      document.body.style.overflow = "hidden";
    });

    herocontainer.appendChild(div);
  });
}

const details = document.querySelector(".details");
const bannerDesc = document.querySelector("#bannerDesc");
const descriptions = document.querySelector(".descriptions");
// 6. OPEN BANNER HELPER
function openBanner(
  img,
  name,
  id,
  about,
  age,
  match,
  seasons,
  cast,
  genre,
  category,
  year,
  rating,
) {
  // Reset video first
  videoPlaceholder.innerHTML = "";
  videoPlaceholder.style.display = "none";

  banner.classList.add("open");
  bannerImg.src = img;
  bannername.innerHTML = name || "Netflix Show";
  bannerDesc.innerHTML = about;

  details.innerHTML = ` <span class="match">${match}% Match</span>
                    <span>2024</span>
                    <span class="age">${age}+</span>
                    <span>${seasons} Seasons</span>
                    <span class="quality">HD</span>`;

  descriptions.innerHTML = `
    <div class="right">
        <h3 class="movie-info-title">Genre</h3>
        <p id="cast" class="movie-info-text">${cast}</p>
        
        <h3 class="movie-info-title">Cast</h3>
        <p id="genre" class="movie-info-text">${genre},${category}</p>

        <div class="movie-stats-row">
            <div class="stats-item">
                <h3 class="movie-info-title">Year</h3>
                <p id="year" class="movie-info-text">${year}</p>
            </div>
            <div class="stats-item">
                <h3 class="movie-info-title">Rating</h3>
                <p id="rating" class="movie-info-text">⭐ ${rating}</p>
            </div>
        </div>
    </div>
`;

  // Setup play button in banner
  const mainPlayBtn = document.querySelector(".play-btn-banner");
  if (mainPlayBtn) {
    mainPlayBtn.onclick = (e) => {
      e.stopPropagation();
      playVideo(id);
    };
  }
}

// 7. INITIALIZE
sections.forEach((section) => renderShows(section.container, section.shows));
renderTrending();

// 8. CLOSE BANNER
cross.addEventListener("click", () => {
  banner.classList.remove("open");
  videoPlaceholder.innerHTML = "";
  videoPlaceholder.style.display = "none";
  banneroverlay.style.visibility = "hidden";
  document.body.style.overflow = "hidden";
  document.body.style.overflow = "auto";
});

// 9. AUTO SCROLL SLIDER
let scrollIndex = 0;
setInterval(() => {
  scrollIndex++;
  if (scrollIndex >= hyped.length) scrollIndex = 0;

  if (herocontainer) {
    herocontainer.scrollTo({
      left: scrollIndex * herocontainer.offsetWidth,
      behavior: "smooth",
    });
  }
}, 3000);

>>>>>>> 4d144a6 (Fix attachment file paths for GitHub Pages)
