import { MovieType } from '@/app/movieApp';
import { BusDataType } from '@/app/redBus/TravelHistoryList';

export const movies: MovieType[] = [
  {
    id: 1,
    title: 'Venom: The Last Dance',
    genre: 'Action, Adventure, Sci-Fi',
    releaseDate: '24 Oct 2024',
    poster:
      'https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001625',
    backgroundColor: getRandomColor(),
  },
  {
    id: 2,
    title: 'The Wild Robot',
    genre: 'Animation, Adventure, Comedy',
    releaseDate: '10 Oct 2024',
    poster:
      'https://majorcineplex.com.kh/load_file/movie/file_20243207013226.jpg',
    backgroundColor: getRandomColor(),
  },
  {
    id: 3,
    title: 'Successor',
    genre: 'Comedy, Drama, Romance',
    releaseDate: '10 Oct 2024',
    poster:
      'https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001726',
    backgroundColor: getRandomColor(),
  },
  {
    id: 4,
    title: 'Twin Monsters',
    genre: 'Horror, Thriller',
    releaseDate: '10 Oct 2024',
    poster:
      'https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001739',
    backgroundColor: getRandomColor(),
  },
  {
    id: 5,
    title: 'EXIT',
    genre: 'Action, Adventure, Comedy',
    releaseDate: '10 Oct 2024',
    poster:
      'https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001727',
    backgroundColor: getRandomColor(),
  },
  {
    id: 6,
    title: 'Detective Conan: The Million-Dollar Pentagram',
    genre: 'Animation, Action, Adventure',
    releaseDate: '10 Oct 2024',
    poster:
      'https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001679',
    backgroundColor: getRandomColor(),
  },
  {
    id: 7,
    title: "Doraemon the Movie: Nobita's Earth Symphony",
    genre: 'Animation, Adventure, Comedy',
    releaseDate: '10 Oct 2024',
    poster:
      'https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001668',
    backgroundColor: getRandomColor(),
  },
  {
    id: 8,
    title: 'Red One',
    genre: 'Action, Adventure, comedy',
    releaseDate: '10 Oct 2024',
    poster:
      'https://majorcineplex.com.kh/load_file/movie/file_20244807014821.jpg',
    backgroundColor: getRandomColor(),
  },
  {
    id: 9,
    title: 'Dead MaMa',
    genre: 'Comedy, Horror',
    releaseDate: '10 Oct 2024',
    poster:
      'https://majorcineplex.com.kh/load_file/movie/file_20240616100653.jpg',
    backgroundColor: getRandomColor(),
  },
  {
    id: 10,
    title: 'Moana 2',
    genre: 'Animation, Adventure, Comedy',
    releaseDate: '10 Oct 2024',
    poster:
      'https://majorcineplex.com.kh/load_file/movie/file_20242725112750.jpg',
    backgroundColor: getRandomColor(),
  },
  {
    id: 11,
    title: 'Spring Garden',
    genre: 'Drama, Romance',
    releaseDate: '10 Oct 2024',
    poster:
      'https://majorcineplex.com.kh/load_file/movie/file_20243816093823.jpg',
    backgroundColor: getRandomColor(),
  },
  {
    id: 12,
    title: 'BOCCHI THE ROCK! Recap Part 2',
    genre: 'Animation, Action, Adventure',
    releaseDate: '10 Oct 2024',
    poster:
      'https://majorcineplex.com.kh/load_file/movie/file_20242421112455.jpg',
    backgroundColor: getRandomColor(),
  },
  {
    id: 13,
    title: 'Betting With Ghost',
    genre: 'Comedy, Horror',
    releaseDate: '10 Oct 2024',
    poster:
      'https://majorcineplex.com.kh/load_file/movie/file_20242416092428.jpg',
    backgroundColor: getRandomColor(),
  },
  {
    id: 14,
    title: 'Lord Of The Rings: The War Of The Rohirrim',
    genre: 'Animation, Action, Adventure',
    releaseDate: '10 Oct 2024',
    poster:
      'https://majorcineplex.com.kh/load_file/movie/file_20242727092729.jpg',
    backgroundColor: getRandomColor(),
  },
  {
    id: 15,
    title: 'Mufasa: The Lion King',
    genre: 'Animation, Adventure, Comedy',
    releaseDate: '10 Oct 2024',
    poster:
      'https://majorcineplex.com.kh/load_file/movie/file_20242830102820.jpg',
    backgroundColor: getRandomColor(),
  },
  {
    id: 16,
    title: 'នេសាទក្រពើ',
    genre: 'Action, Adventure, Comedy',
    releaseDate: '10 Oct 2024',
    poster:
      'https://oss2.tnaot.com/tnaot/image/2020/10/21/9b9da7c3f118449393e4df5be1693d8c.jpg',
    backgroundColor: getRandomColor(),
  },
];

export function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const tvShows: MovieType[] = [
  {
    id: 1,
    title: 'The Witcher',
    genre: 'Action, Adventure, Drama',
    releaseDate: '20 Dec 2019',
    poster:
      'https://files.ekmcdn.com/allwallpapers/images/the-witcher-3-movie-poster-61x91.5cm-large-38015-1-p.jpg',
  },
  {
    id: 2,
    title: 'The Mandalorian',
    genre: 'Action, Adventure, Fantasy',
    releaseDate: '12 Nov 2019',
    poster:
      'https://preview.redd.it/i-made-a-poster-for-the-mandalorian-grogu-movie-what-do-you-v0-eyu4zy4e8nbc1.jpeg?width=640&crop=smart&auto=webp&s=493fab854cd2a59bb46aaf6cbb252ea2b2455d85',
  },
  {
    id: 3,
    title: 'Peaky Blinders',
    genre: 'Crime, Drama',
    releaseDate: '12 Sep 2013',
    poster:
      'https://m.media-amazon.com/images/I/81yyXKfAZ4L._AC_UF894,1000_QL80_.jpg',
  },
  {
    id: 4,
    title: 'The Falcon and the Winter Soldier',
    genre: 'Action, Adventure, Drama',
    releaseDate: '19 Mar 2021',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYmJkOGNlNmEtMmQyOS00YjZiLTgxM2EtNmEzNzUzNTU5ODYwXkEyXkFqcGc@._V1_.jpg',
  },
  {
    id: 5,
    title: 'The Flash',
    genre: 'Action, Adventure, Drama',
    releaseDate: '07 Oct 2014',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYmE2NzBjNGUtNTJiMy00N2UxLWEyYzMtYzFjODFhMGZlOTgzXkEyXkFqcGc@._V1_.jpg',
  },
  {
    id: 6,
    title: 'Loki',
    genre: 'Action, Adventure, Fantasy',
    releaseDate: '09 Jun 2021',
    poster:
      'https://i.ebayimg.com/00/s/MTYwMFgxMDgw/z/p5YAAOSw3IBj7t6n/$_57.JPG?set_id=880000500F',
  },

  {
    id: 7,
    title: 'The Umbrella Academy',
    genre: 'Action, Adventure, Comedy',
    releaseDate: '15 Feb 2019',
    poster:
      'https://i.pinimg.com/564x/c3/e1/7f/c3e17f9883742ba2824639772db0d2e4.jpg',
  },

  {
    id: 8,
    title: 'Stranger Things',
    genre: 'Drama, Fantasy, Horror',
    releaseDate: '15 Jul 2016',
    poster:
      'https://files.ekmcdn.com/allwallpapers/images/stranger-things-movie-poster-61x91-5cm-large-size-37820-1-p.jpg',
  },
  {
    id: 9,
    title: 'The Crown',
    genre: 'Biography, Drama, History',
    releaseDate: '04 Nov 2016',
    poster: 'https://i.ebayimg.com/images/g/N5wAAOSwpgRi7DVb/s-l1200.jpg',
  },
  {
    id: 10,
    title: 'Lost in Space',
    genre: 'Adventure, Drama, Family',
    releaseDate: '13 Apr 2018',
    poster:
      'https://static1.tribute.ca/poster/660x980/lost-in-space-netflix-158875.jpg',
  },

  {
    id: 11,
    title: 'Breaking Bad',
    genre: 'Crime, Drama, Thriller',
    releaseDate: '20 Jan 2008',
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUOnXKnRL0jeo6y4_Nzt0RggJHYbxI_RjJUgCvmdG28BAwpAx',
  },
  {
    id: 12,
    title: 'Vikings',
    genre: 'Action, Adventure, Drama',
    releaseDate: '03 Mar 2013',
    poster:
      'https://lh3.googleusercontent.com/proxy/xegNIbcSSrtyg3MnKda_Yk2WwB38cVscODbtZfBfPfSp_HqPNZmCy8jiZqnR9MfyeQaaGAQL-3guhIzkH_fLXiTj3l7oeVAq0qbKFBm1ia8',
  },

  {
    id: 13,
    title: 'Game of Thrones',
    genre: 'Action, Adventure, Drama',
    releaseDate: '17 Apr 2011',
    poster:
      'https://i.pinimg.com/originals/62/94/4a/62944a08803343aea1be121735d55b0d.jpg',
  },
  {
    id: 14,
    title: 'Money Heist',
    genre: 'Action, Crime, Drama',
    releaseDate: '02 May 2017',
    poster:
      'https://image.tmdb.org/t/p/original/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg',
  },
];

export const animeSeries: MovieType[] = [
  {
    id: 1,
    title: 'Attack on Titan',
    genre: 'Animation, Action, Adventure',
    releaseDate: '06 Apr 2013',
    poster:
      'https://i.pinimg.com/564x/c1/2d/10/c12d10c1ee602d7684a82d7e70a30811.jpg',
  },
  {
    id: 2,
    title: 'One Piece',
    genre: 'Animation, Action, Adventure',
    releaseDate: '20 Oct 1999',
    poster:
      'https://m.media-amazon.com/images/M/MV5BOWNhMDU3NDQtYWViMC00M2Y4LTk4YTUtYjI2M2ZmN2Q5NDViXkEyXkFqcGc@._V1_.jpg',
  },
  {
    id: 3,
    title: 'Naruto',
    genre: 'Animation, Action, Adventure',
    releaseDate: '03 Oct 2002',
    poster:
      'https://image.tmdb.org/t/p/original/pZzdFmztwmg0FUOVCMa7vReHhQN.jpg',
  },
  {
    id: 4,
    title: 'My Hero Academia',
    genre: 'Animation, Action, Adventure',
    releaseDate: '03 Apr 2016',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYmZlNGYxZDQtZDQzNy00ZmIxLWEzMDUtNjUxZGM0Y2RlMzBjXkEyXkFqcGc@._V1_.jpg',
  },
  {
    id: 5,
    title: 'Demon Slayer',
    genre: 'Animation, Action, Adventure',
    releaseDate: '06 Apr 2019',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNzEzYjhkYTctMWNmZS00MTc5LWI4OWUtZjFkNzNkYTNkMTJlXkEyXkFqcGc@._V1_.jpg',
  },
  {
    id: 6,
    title: 'Death Note',
    genre: 'Animation, Crime, Drama',
    releaseDate: '03 Oct 2006',
    poster:
      'https://m.media-amazon.com/images/I/61k3qe5zitL._AC_UF894,1000_QL80_.jpg',
  },
  {
    id: 7,
    title: 'Tokyo Revengers',
    genre: 'Animation, Action, Adventure',
    releaseDate: '11 Apr 2021',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNGU3YzdhMWEtMGRkMC00MzY2LThkOGEtMDFmZDE0NGQxYzFjXkEyXkFqcGc@._V1_.jpg',
  },
  {
    id: 8,
    title: 'Jujutsu Kaisen',
    genre: 'Animation, Action, Adventure',
    releaseDate: '03 Oct 2020',
    poster:
      'https://i.pinimg.com/originals/ac/43/52/ac4352f877cd4265d69538bd7532b7b3.jpg',
  },
  {
    id: 9,
    title: 'Black Clover',
    genre: 'Animation, Action, Adventure',
    releaseDate: '03 Oct 2017',
    poster:
      'https://i.pinimg.com/736x/13/e5/6a/13e56a20b135f7de29eede34042b1711.jpg',
  },
  {
    id: 10,
    title: 'Dragon Ball Z',
    genre: 'Animation, Action, Adventure',
    releaseDate: '26 Apr 1989',
    poster:
      'https://i.pinimg.com/736x/0e/e6/53/0ee6535892f2c0a7e7bc6e2c43e60dae.jpg',
  },
  {
    id: 11,
    title: 'Dragon Ball Super',
    genre: 'Animation, Action, Adventure',
    releaseDate: '05 Jul 2015',
    poster:
      'https://i.pinimg.com/originals/d3/56/e6/d356e61518b8f646e9639d407c0e51ff.jpg',
  },
  {
    id: 12,
    title: 'Boruto: Naruto Next Generations',
    genre: 'Animation, Action, Adventure',
    releaseDate: '05 Apr 2017',
    poster:
      'https://i.pinimg.com/736x/8c/fc/ee/8cfcee27d577db832a1ada6ea07c5cd4.jpg',
  },
  {
    id: 13,
    title: 'Hunter x Hunter',
    genre: 'Animation, Action, Adventure',
    releaseDate: '02 Oct 2011',
    poster:
      'https://m.media-amazon.com/images/I/71Kelxa3EVL._AC_UF894,1000_QL80_.jpg',
  },

  {
    id: 14,
    title: 'One Punch',
    genre: 'Animation, Action, Adventure',
    releaseDate: '05 Oct 2015',
    poster:
      'https://m.media-amazon.com/images/I/71Fh8JX7B8L._AC_UF894,1000_QL80_.jpg',
  },

  {
    id: 15,
    title: 'Sword Art Online',
    genre: 'Animation, Action, Adventure',
    releaseDate: '08 Jul 2012',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNmUyNDctMmQ5Zi00OTM0LWI1ZjktN2Y5MzliZjU5MmNhXkEyXkFqcGc@._V1_.jpg',
  },
];

export const kdramaSeries: MovieType[] = [
  {
    id: 1,
    title: 'Crash Landing on You',
    poster: 'https://asianwiki.com/images/f/f8/Crash_Landing_on_You-P1.jpg',
    genre: 'Romance, Drama',
    releaseDate: '2019-12-14',
  },
  {
    id: 2,
    title: 'Itaewon Class',
    poster: 'https://miro.medium.com/v2/resize:fit:674/0*sAEt1ONWyJz6XKLZ.jpg',
    genre: 'Drama, Slice of Life',
    releaseDate: '2020-01-31',
  },
  {
    id: 3,
    title: 'Goblin (Guardian: The Lonely and Great God)',
    poster:
      'https://i.pinimg.com/564x/9f/b7/00/9fb70053ba01c5cff71e1cf0786a5021.jpg',
    genre: 'Fantasy, Romance',
    releaseDate: '2016-12-02',
  },
  {
    id: 4,
    title: 'Vincenzo',
    poster:
      'https://i.pinimg.com/736x/09/9c/0b/099c0bd7820c486379ae87edcbcdebc1.jpg',
    genre: 'Crime, Dark Comedy',

    releaseDate: '2021-02-20',
  },
  {
    id: 5,
    title: 'My Love from the Star',
    poster:
      'https://m.media-amazon.com/images/I/51yAHLvYxGL._AC_UF894,1000_QL80_.jpg',
    genre: 'Romantic Comedy, Fantasy',
    releaseDate: '2013-12-18',
  },
  {
    id: 6,
    title: 'Descendants of the Sun',
    poster:
      'https://image.tmdb.org/t/p/original/GtbPMgS8oLr0dvLpP9eYXWLLGe.jpg',
    genre: 'Romance, Action',
    releaseDate: '2016-02-24',
  },
  {
    id: 7,
    title: 'Strong Woman Do Bong Soon',
    poster:
      'https://image.tmdb.org/t/p/original/sPdS6oUdXfBNGKROE5RY5s5laqx.jpg',
    genre: 'Romantic Comedy, Fantasy',
    releaseDate: '2017-02-24',
  },
  {
    id: 8,
    title: "What's Wrong with Secretary Kim",
    poster:
      'https://image.tmdb.org/t/p/original/1xRtfycX6eGqD83IHdafWvOb0nk.jpg',
    genre: 'Romantic Comedy',
    releaseDate: '2018-06-06',
  },
  {
    id: 9,
    title: 'Hotel Del Luna',
    poster:
      'https://i.pinimg.com/736x/42/97/50/429750513e1b5685f096bd114a209114.jpg',
    genre: 'Fantasy, Romance',
    releaseDate: '2019-07-13',
  },
  {
    id: 10,
    title: 'Start-Up',
    poster:
      'https://i.pinimg.com/736x/a5/21/30/a5213041209095060cd2c94e460d0e5f.jpg',
    genre: 'Romance, Drama',
    releaseDate: '2020-10-17',
  },
  {
    id: 11,
    title: 'The Heirs',
    poster: 'https://m.media-amazon.com/images/I/718x5FZJd6L.jpg',
    genre: 'Romantic Comedy, Drama',
    releaseDate: '2013-10-09',
  },
  {
    id: 12,
    title: 'Mr. Sunshine',
    poster:
      'https://image.tmdb.org/t/p/original/iftMALeIzTYYOVmPOCsS1mQvoNz.jpg',
    genre: 'Historical, Drama',
    releaseDate: '2018-07-07',
  },
  {
    id: 13,
    title: 'Kingdom',
    poster:
      'https://image.tmdb.org/t/p/original/AsICtiVtz4icMQQRwDvOzfaTzjK.jpg',
    genre: 'Historical, Thriller, Horror',
    releaseDate: '2019-01-25',
  },
  {
    id: 14,
    title: "It's Okay to Not Be Okay",
    poster:
      'https://image.tmdb.org/t/p/original/5pKlA16OaTLm57alV4EWuxIfO2O.jpg',
    genre: 'Romance, Drama',
    releaseDate: '2020-06-20',
  },
  {
    id: 15,
    title: 'Signal',
    poster:
      'https://m.media-amazon.com/images/M/MV5BOGI3MzJjY2MtZTMzYy00OWJkLTkyOGUtNjAwNzM0YWEyODlmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    genre: 'Thriller, Crime, Sci-Fi',
    releaseDate: '2016-01-22',
  },
];

export const movieGenres = [
  'Action',
  'Adventure',
  'Animation',
  'Biography',
  'Comedy',
  'Crime',
  'Drama',
  'Family',
  'Fantasy',
  'History',
  'Horror',
  'Music',
  'Mystery',
  'Romance',
  'Sci-Fi',
  'Sport',
  'Thriller',
  'War',
  'Western',
];

export const tvGenres = [
  'Action',
  'Adventure',
  'Animation',
  'Biography',
  'Comedy',
  'Crime',
  'Documentary',
  'Drama',
  'Family',
  'Fantasy',
  'Game Show',
  'History',
  'Horror',
  'Music',
  'Musical',
  'Mystery',
  'News',
  'Reality-TV',
  'Romance',
  'Sci-Fi',
  'Sport',
  'Talk-Show',
  'Thriller',
  'War',
  'Western',
];

export const animeGenres = [
  'Action',
  'Adventure',
  'Comedy',
  'Drama',
  'Fantasy',
  'Horror',
  'Mecha',
  'Music',
  'Mystery',
  'Psychological',
  'Romance',
  'Sci-Fi',
  'Slice of Life',
  'Sports',
  'Supernatural',
  'Thriller',
];

export const animeMovies: MovieType[] = [
  {
    id: 1,
    title: 'Spirited Away',
    poster: 'https://example.com/spirited_away.jpg',
    genre: 'Fantasy, Adventure',
    releaseDate: '2001-07-20',
  },
  {
    id: 2,
    title: 'Your Name',
    poster: 'https://example.com/your_name.jpg',
    genre: 'Romance, Fantasy',
    releaseDate: '2016-08-26',
  },
  {
    id: 3,
    title: 'My Neighbor Totoro',
    poster: 'https://example.com/my_neighbor_totoro.jpg',
    genre: 'Family, Fantasy',
    releaseDate: '1988-04-16',
  },
  {
    id: 4,
    title: 'A Silent Voice',
    poster: 'https://example.com/a_silent_voice.jpg',
    genre: 'Drama, Romance',
    releaseDate: '2016-09-17',
  },
  {
    id: 5,
    title: 'Princess Mononoke',
    poster: 'https://example.com/princess_mononoke.jpg',
    genre: 'Fantasy, Adventure',
    releaseDate: '1997-07-12',
  },
  {
    id: 6,
    title: "Howl's Moving Castle",
    poster: 'https://example.com/howls_moving_castle.jpg',
    genre: 'Fantasy, Adventure',
    releaseDate: '2004-11-20',
  },
  {
    id: 7,
    title: 'Weathering with You',
    poster: 'https://example.com/weathering_with_you.jpg',
    genre: 'Romance, Fantasy',
    releaseDate: '2019-07-19',
  },
  {
    id: 8,
    title: 'Grave of the Fireflies',
    poster: 'https://example.com/grave_of_the_fireflies.jpg',
    genre: 'Drama, War',
    releaseDate: '1988-04-16',
  },
  {
    id: 9,
    title: 'The Girl Who Leapt Through Time',
    poster: 'https://example.com/the_girl_who_leapt_through_time.jpg',
    genre: 'Romance, Sci-Fi',
    releaseDate: '2006-07-15',
  },
  {
    id: 10,
    title: "Kiki's Delivery Service",
    poster: 'https://example.com/kikis_delivery_service.jpg',
    genre: 'Family, Fantasy',
    releaseDate: '1989-07-29',
  },
  {
    id: 11,
    title: 'Wolf Children',
    poster: 'https://example.com/wolf_children.jpg',
    genre: 'Drama, Fantasy',
    releaseDate: '2012-07-21',
  },
  {
    id: 12,
    title: 'The Wind Rises',
    poster: 'https://example.com/the_wind_rises.jpg',
    genre: 'Drama, Historical',
    releaseDate: '2013-07-20',
  },
  {
    id: 13,
    title: 'Akira',
    poster: 'https://example.com/akira.jpg',
    genre: 'Action, Sci-Fi',
    releaseDate: '1988-07-16',
  },
  {
    id: 14,
    title: 'Perfect Blue',
    poster: 'https://example.com/perfect_blue.jpg',
    genre: 'Psychological Thriller',
    releaseDate: '1997-07-05',
  },
  {
    id: 15,
    title: 'The Secret World of Arrietty',
    poster: 'https://example.com/the_secret_world_of_arrietty.jpg',
    genre: 'Fantasy, Adventure',
    releaseDate: '2010-07-17',
  },
];

export const travelHistory: BusDataType[] = [
  {
    busName: 'Gojo Transport',
    busImage:
      'https://www.coque-telephone.com/87994-large_default/pirate-sticker-one-piece-logo.jpg',
    busType: 'AC Sleeper',
    from: 'Phnom Penh',
    to: 'Siem Reap',
    departureDate: 'Mon, 20 Sep 2024',
    departureTime: '10:00 PM',
    price: 25,
  },
  {
    busName: 'Happy Trails',
    busImage:
      'https://static.vecteezy.com/system/resources/previews/021/623/400/non_2x/shirohige-pirate-one-piece-logo-anime-free-png.png',
    busType: 'Non-AC Seater',
    from: 'Siem Reap',
    to: 'Battambang',
    departureDate: 'Tue, 21 Sep 2024',
    departureTime: '6:00 AM',
    price: 15,
  },
  {
    busName: 'Sunset Express',
    busImage:
      'https://i.pinimg.com/736x/bb/94/59/bb9459b5d010848aac14c230f347d818.jpg',
    busType: 'AC Seater',
    from: 'Battambang',
    to: 'Kampot',
    departureDate: 'Wed, 22 Sep 2024',
    departureTime: '8:00 PM',
    price: 30,
  },
  {
    busName: 'Royal Bus',
    busImage:
      'https://www.coque-telephone.com/87994-large_default/pirate-sticker-one-piece-logo.jpg',
    busType: 'Sleeper',
    from: 'Phnom Penh',
    to: 'Sihanoukville',
    departureDate: 'Thu, 23 Sep 2024',
    departureTime: '9:00 PM',
    price: 28,
  },
  {
    busName: 'Budget Rides',
    busImage:
      'https://www.coque-telephone.com/87994-large_default/pirate-sticker-one-piece-logo.jpg',
    busType: 'Non-AC Seater',
    from: 'Kampot',
    to: 'Phnom Penh',
    departureDate: 'Fri, 24 Sep 2024',
    departureTime: '5:00 PM',
    price: 12,
  },
  {
    busName: 'Night Owl',
    busImage:
      'https://www.coque-telephone.com/87994-large_default/pirate-sticker-one-piece-logo.jpg',
    busType: 'AC Sleeper',
    from: 'Siem Reap',
    to: 'Phnom Penh',
    departureDate: 'Sat, 25 Sep 2024',
    departureTime: '11:30 PM',
    price: 35,
  },
  {
    busName: 'Express Travels',
    busImage:
      'https://www.coque-telephone.com/87994-large_default/pirate-sticker-one-piece-logo.jpg',
    busType: 'AC Seater',
    from: 'Sihanoukville',
    to: 'Battambang',
    departureDate: 'Sun, 26 Sep 2024',
    departureTime: '2:00 PM',
    price: 40,
  },
  {
    busName: 'Eco Bus',
    busImage:
      'https://www.coque-telephone.com/87994-large_default/pirate-sticker-one-piece-logo.jpg',
    busType: 'Non-AC Seater',
    from: 'Kampot',
    to: 'Siem Reap',
    departureDate: 'Mon, 27 Sep 2024',
    departureTime: '7:00 AM',
    price: 18,
  },
  {
    busName: 'Prime Travels',
    busImage:
      'https://www.coque-telephone.com/87994-large_default/pirate-sticker-one-piece-logo.jpg',
    busType: 'Sleeper',
    from: 'Phnom Penh',
    to: 'Kampot',
    departureDate: 'Tue, 28 Sep 2024',
    departureTime: '4:00 PM',
    price: 26,
  },
  {
    busName: 'Road King',
    busImage:
      'https://www.coque-telephone.com/87994-large_default/pirate-sticker-one-piece-logo.jpg',
    busType: 'AC Seater',
    from: 'Battambang',
    to: 'Siem Reap',
    departureDate: 'Wed, 29 Sep 2024',
    departureTime: '6:30 PM',
    price: 22,
  },
  {
    busName: 'Deluxe Coach',
    busImage:
      'https://www.coque-telephone.com/87994-large_default/pirate-sticker-one-piece-logo.jpg',
    busType: 'AC Sleeper',
    from: 'Phnom Penh',
    to: 'Battambang',
    departureDate: 'Thu, 30 Sep 2024',
    departureTime: '5:00 AM',
    price: 33,
  },
  {
    busName: 'Swift Travels',
    busImage:
      'https://www.coque-telephone.com/87994-large_default/pirate-sticker-one-piece-logo.jpg',
    busType: 'Non-AC Seater',
    from: 'Sihanoukville',
    to: 'Phnom Penh',
    departureDate: 'Fri, 1 Oct 2024',
    departureTime: '12:00 PM',
    price: 20,
  },
  {
    busName: 'Skyline',
    busImage:
      'https://www.coque-telephone.com/87994-large_default/pirate-sticker-one-piece-logo.jpg',
    busType: 'AC Sleeper',
    from: 'Siem Reap',
    to: 'Phnom Penh',
    departureDate: 'Sat, 2 Oct 2024',
    departureTime: '9:00 PM',
    price: 32,
  },
  {
    busName: 'Quick Rides',
    busImage:
      'https://www.coque-telephone.com/87994-large_default/pirate-sticker-one-piece-logo.jpg',
    busType: 'Non-AC Seater',
    from: 'Kampot',
    to: 'Sihanoukville',
    departureDate: 'Sun, 3 Oct 2024',
    departureTime: '3:00 PM',
    price: 14,
  },
  {
    busName: 'Value Bus',
    busImage:
      'https://www.coque-telephone.com/87994-large_default/pirate-sticker-one-piece-logo.jpg',
    busType: 'Sleeper',
    from: 'Phnom Penh',
    to: 'Siem Reap',
    departureDate: 'Mon, 4 Oct 2024',
    departureTime: '8:00 PM',
    price: 30,
  },
];

export const mallCategories = [
  // id, name and icon
  {
    id: 1,
    name: 'Express',
    icon: 'https://png.pngtree.com/png-vector/20240105/ourmid/pngtree-3d-delivery-man-red-scooter-png-image_11404978.png',
    path: 'express',
  },
  {
    id: 2,
    name: 'Grocery',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpyWD4TDKTEE8brIN8PAkD3NPvMam7ee4nWsDvI6Efyb-gf0qmU53GaPOelPP2KeZiFdg&usqp=CAU',
    path: 'grocery',
  },
  {
    id: 3,
    name: 'Pick-up',
    icon: 'https://cdn-icons-png.flaticon.com/512/10351/10351875.png',
    path: 'pickup',
  },
  {
    id: 4,
    name: 'Movie',
    icon: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/74d2a00a-b5c0-42d4-b131-fafcca22e4cf/d7ay4tw-1fa7c44d-2500-43ef-8d40-c16d939ca024.png',
    path: 'movieTicket',
  },
  {
    id: 5,
    name: 'Gift Card',
    icon: 'https://www.pngarts.com/files/11/Gift-Cards-PNG-Download-Image.png',
    path: 'giftCard',
  },
];

export const recentTransactions = [
  {
    id: 1,
    date: 'Sep 12, 2024',
    icon: 'https://cdn-icons-png.flaticon.com/512/1044/1044608.png',
    title: 'Treasure Hunt Prize',
    transactionData: 'Jun 12, 2024',
    transactionAmount: 200,
  },
  {
    id: 2,
    date: 'Sep 13, 2024',
    icon: 'https://cdn-icons-png.flaticon.com/512/1044/1044608.png',
    title: 'Game Night Reward',
    transactionData: 'Jun 15, 2024',
    transactionAmount: 150,
  },
  {
    id: 3,
    date: 'Sep 14, 2024',
    icon: 'https://cdn-icons-png.flaticon.com/512/1044/1044608.png',
    title: 'Weekly Bonus',
    transactionData: 'Jun 18, 2024',
    transactionAmount: 300,
  },
  {
    id: 4,
    date: 'Sep 15, 2024',
    icon: 'https://cdn-icons-png.flaticon.com/512/1044/1044608.png',
    title: 'Challenge Completion',
    transactionData: 'Jun 20, 2024',
    transactionAmount: 250,
  },
  {
    id: 5,
    date: 'Sep 16, 2024',
    icon: 'https://cdn-icons-png.flaticon.com/512/1044/1044608.png',
    title: 'Monthly Participation',
    transactionData: 'Jun 22, 2024',
    transactionAmount: 100,
  },
  {
    id: 6,
    date: 'Sep 17, 2024',
    icon: 'https://cdn-icons-png.flaticon.com/512/1044/1044608.png',
    title: 'Referral Bonus',
    transactionData: 'Jun 25, 2024',
    transactionAmount: 50,
  },
  {
    id: 7,
    date: 'Sep 18, 2024',
    icon: 'https://cdn-icons-png.flaticon.com/512/1044/1044608.png',
    title: 'End of Season Prize',
    transactionData: 'Jun 28, 2024',
    transactionAmount: 400,
  },
  {
    id: 8,
    date: 'Sep 19, 2024',
    icon: 'https://cdn-icons-png.flaticon.com/512/1044/1044608.png',
    title: 'Daily Challenge',
    transactionData: 'Jul 01, 2024',
    transactionAmount: 75,
  },
  {
    id: 9,
    date: 'Sep 20, 2024',
    icon: 'https://cdn-icons-png.flaticon.com/512/1044/1044608.png',
    title: 'Weekend Special',
    transactionData: 'Jul 04, 2024',
    transactionAmount: 125,
  },
  {
    id: 10,
    date: 'Sep 21, 2024',
    icon: 'https://cdn-icons-png.flaticon.com/512/1044/1044608.png',
    title: 'Mystery Box Prize',
    transactionData: 'Jul 07, 2024',
    transactionAmount: 300,
  },
];

export const activeWingpoint = [
  {
    id: 1,
    title: 'Wingpoints',
    date: 'Sep 12, 2024',
    icon: 'https://cdn-icons-png.flaticon.com/512/1044/1044608.png',
    transactionData: 'Jun 12, 2024',
    transactionAmount: 300,
  },
  {
    id: 2,
    title: 'Wingpoints',
    date: 'Sep 18, 2024',
    icon: 'https://cdn-icons-png.flaticon.com/512/1044/1044608.png',
    transactionData: 'Jun 15, 2024',
    transactionAmount: 150,
  },
  {
    id: 3,
    title: 'Wingpoints',
    date: 'Sep 14, 2024',
    icon: 'https://cdn-icons-png.flaticon.com/512/1044/1044608.png',
    transactionData: 'Jun 18, 2024',
    transactionAmount: 400,
  },
  {
    id: 4,
    title: 'Wingpoints',
    date: 'Sep 15, 2024',
    icon: 'https://cdn-icons-png.flaticon.com/512/1044/1044608.png',
    transactionData: 'Jun 20, 2024',
    transactionAmount: 250,
  },
  {
    id: 5,
    title: 'Wingpoints',
    date: 'Sep 16, 2024',
    icon: 'https://cdn-icons-png.flaticon.com/512/1044/1044608.png',
    transactionData: 'Jun 22, 2024',
    transactionAmount: 100,
  },
  {
    id: 6,
    title: 'Wingpoints',
    date: 'Sep 17, 2024',
    icon: 'https://cdn-icons-png.flaticon.com/512/1044/1044608.png',
    transactionData: 'Jun 25, 2024',
    transactionAmount: 500,
  },
  {
    id: 7,
    title: 'Wingpoints',
    date: 'Sep 18, 2024',
    icon: 'https://cdn-icons-png.flaticon.com/512/1044/1044608.png',
    transactionData: 'Jun 28, 2024',
    transactionAmount: 350,
  },
  {
    id: 8,
    title: 'Wingpoints',
    date: 'Sep 19, 2024',
    icon: 'https://cdn-icons-png.flaticon.com/512/1044/1044608.png',
    transactionData: 'Jul 01, 2024',
    transactionAmount: 450,
  },
  {
    id: 9,
    title: 'Wingpoints',
    date: 'Sep 20, 2024',
    icon: 'https://cdn-icons-png.flaticon.com/512/1044/1044608.png',
    transactionData: 'Jul 04, 2024',
    transactionAmount: 250,
  },
  {
    id: 10,
    title: 'Wingpoints',
    date: 'Sep 21, 2024',
    icon: 'https://cdn-icons-png.flaticon.com/512/1044/1044608.png',
    transactionData: 'Jul 07, 2024',
    transactionAmount: 300,
  },
];

export const productData = [
  {
    id: 1,
    storeName: 'Wingstop',
    name: 'Chicken Wings',
    price: 10.99,
    discount: '50%',
    priceAfterDiscount: 5.49,
    image:
      'https://cdn.cheapism.com/images/original-hot-wingstop.max-825x550.jpg',
  },
  {
    id: 2,
    storeName: 'Pizza Hut',
    name: 'Pepperoni Pizza',
    price: 15.99,
    discount: '20%',
    priceAfterDiscount: 12.79,
    image:
      'https://w7.pngwing.com/pngs/544/160/png-transparent-pizza-hut-restaurant-pizza-delivery-pizza-food-cheese-recipe.png',
  },
  {
    id: 3,
    storeName: "McDonald's",
    name: 'Big Mac',
    price: 5.99,
    discount: '10%',
    priceAfterDiscount: 5.39,
    image:
      'https://www.mcdonalds.com/content/dam/sites/mcdonaldsmenu/nfl/images/product_mcdonalds.png',
  },
  {
    id: 4,
    storeName: 'Subway',
    name: 'Italian BMT',
    price: 6.99,
    discount: '15%',
    priceAfterDiscount: 5.94,
    image:
      'https://www.allrecipes.com/thmb/r6AiELAYCRkEtawhdfSMSrxZYkM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ar-subway-taste-test-4x3-7089b564638a438d822f29712fb4b9aa.jpg',
  },
  {
    id: 5,
    storeName: 'Starbucks',
    name: 'Caramel Macchiato',
    price: 4.95,
    discount: '5%',
    priceAfterDiscount: 4.7,
    image:
      'https://cdn.cheapism.com/images/original-hot-wingstop.max-825x550.jpg',
  },
  {
    id: 6,
    storeName: 'KFC',
    name: 'Original Recipe Chicken',
    price: 12.99,
    discount: '25%',
    priceAfterDiscount: 9.74,
    image:
      'https://cdn.cheapism.com/images/original-hot-wingstop.max-825x550.jpg',
  },
  {
    id: 7,
    storeName: 'Taco Bell',
    name: 'Crunchy Tacos',
    price: 3.49,
    discount: '10%',
    priceAfterDiscount: 3.14,
    image:
      'https://cdn.cheapism.com/images/original-hot-wingstop.max-825x550.jpg',
  },
  {
    id: 8,
    storeName: "Domino's",
    name: 'Cheese Pizza',
    price: 11.99,
    discount: '15%',
    priceAfterDiscount: 10.19,
    image:
      'https://cdn.cheapism.com/images/original-hot-wingstop.max-825x550.jpg',
  },
  {
    id: 9,
    storeName: "Dunkin' Donuts",
    name: 'Boston Kreme Donut',
    price: 1.99,
    discount: '20%',
    priceAfterDiscount: 1.59,
    image:
      'https://cdn.cheapism.com/images/original-hot-wingstop.max-825x550.jpg',
  },
  {
    id: 10,
    storeName: 'Chipotle',
    name: 'Chicken Burrito',
    price: 8.99,
    discount: '15%',
    priceAfterDiscount: 7.64,
    image:
      'https://cdn.cheapism.com/images/original-hot-wingstop.max-825x550.jpg',
  },
];

export const wingmallFoodBanner = [
  {
    id: 1,
    image:
      'https://scontent.fpnh7-1.fna.fbcdn.net/v/t39.30808-6/463613273_528555306593660_7856442987142661283_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=hzeOwprLkvoQ7kNvgGAYn9W&_nc_zt=23&_nc_ht=scontent.fpnh7-1.fna&_nc_gid=A5lMuJH3224wJLrbphM2B16&oh=00_AYBKPiS0krx1cCrBAaa3aAUOCWz1M_a7-MObVPD1Qs1Xeg&oe=67291277',
    text: 'ORDER NOW',
  },
  {
    id: 2,
    image:
      'https://scontent.fpnh7-1.fna.fbcdn.net/v/t39.30808-6/463613273_528555306593660_7856442987142661283_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=hzeOwprLkvoQ7kNvgGAYn9W&_nc_zt=23&_nc_ht=scontent.fpnh7-1.fna&_nc_gid=A5lMuJH3224wJLrbphM2B16&oh=00_AYBKPiS0krx1cCrBAaa3aAUOCWz1M_a7-MObVPD1Qs1Xeg&oe=67291277',
    text: 'LEARN MORE',
  },
  {
    id: 3,
    image:
      'https://scontent.fpnh7-1.fna.fbcdn.net/v/t39.30808-6/463613273_528555306593660_7856442987142661283_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=hzeOwprLkvoQ7kNvgGAYn9W&_nc_zt=23&_nc_ht=scontent.fpnh7-1.fna&_nc_gid=A5lMuJH3224wJLrbphM2B16&oh=00_AYBKPiS0krx1cCrBAaa3aAUOCWz1M_a7-MObVPD1Qs1Xeg&oe=67291277',
    text: 'ORDER NOW',
  },
  {
    id: 4,
    image:
      'https://scontent.fpnh7-1.fna.fbcdn.net/v/t39.30808-6/463613273_528555306593660_7856442987142661283_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=hzeOwprLkvoQ7kNvgGAYn9W&_nc_zt=23&_nc_ht=scontent.fpnh7-1.fna&_nc_gid=A5lMuJH3224wJLrbphM2B16&oh=00_AYBKPiS0krx1cCrBAaa3aAUOCWz1M_a7-MObVPD1Qs1Xeg&oe=67291277',
    text: 'LEARN MORE',
  },
  {
    id: 5,
    image:
      'https://scontent.fpnh7-1.fna.fbcdn.net/v/t39.30808-6/463613273_528555306593660_7856442987142661283_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=hzeOwprLkvoQ7kNvgGAYn9W&_nc_zt=23&_nc_ht=scontent.fpnh7-1.fna&_nc_gid=A5lMuJH3224wJLrbphM2B16&oh=00_AYBKPiS0krx1cCrBAaa3aAUOCWz1M_a7-MObVPD1Qs1Xeg&oe=67291277',
    text: 'ORDER NOW',
  },
  {
    id: 6,
    image:
      'https://scontent.fpnh7-1.fna.fbcdn.net/v/t39.30808-6/463613273_528555306593660_7856442987142661283_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=hzeOwprLkvoQ7kNvgGAYn9W&_nc_zt=23&_nc_ht=scontent.fpnh7-1.fna&_nc_gid=A5lMuJH3224wJLrbphM2B16&oh=00_AYBKPiS0krx1cCrBAaa3aAUOCWz1M_a7-MObVPD1Qs1Xeg&oe=67291277',
    text: 'LEARN MORE',
  },
];

export const promotionData = [
  {
    id: 1,
    storeName: 'Lukaku Coffee',
    name: 'Cappuccino',
    price: 4.99,
    priceAfterDiscount: 3.99,
    type: ['Discount', 'Free Delivery', 'Breakfast Deals'],
    image:
      'https://eacnews.asia/uploads/images/1667784624_9e336d199d495e998d23.jpg',
    discount: 'Buy 1 Get 1 Free',
    deliveryCharge: 'Free',
    duration: '38min',
    rating: 4.5,
  },
  {
    id: 2,
    storeName: 'GG Coffee',
    name: 'Cappuccino',
    price: 4.99,
    priceAfterDiscount: 3.99,
    type: ['Free Delivery', 'Lunch Specials'],
    image: 'https://www.ggear.com.kh/wp-content/uploads/2019/03/Web-banner.jpg',
    discount: '30%',
    deliveryCharge: 'Free',
    duration: '25min',
    rating: 4.8,
  },
  {
    id: 3,
    storeName: 'Lukaku Coffee',
    name: 'Cappuccino',
    price: 4.99,
    priceAfterDiscount: 3.99,
    type: ['Discount', 'Dinner Deals'],
    image:
      'https://i.ytimg.com/vi/VcNEdwqPnQM/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgWShUMA8=&rs=AOn4CLCjAVIVGc-1vMapQKyhDQligv0CWQ',
    discount: '20%',
    deliveryCharge: '$1.99',
    duration: '40min',
    rating: 4.3,
  },
  {
    id: 4,
    storeName: 'Lukaku Coffee',
    name: 'Cappuccino',
    price: 4.99,
    priceAfterDiscount: 3.99,
    type: ['Discount', 'Healthy Options'],
    image:
      'https://www.royalphnompenhhospital.com/royalpp/storage/app/uploads/2/2024-03-28/khmer_new_year_promotion_web_01_01.jpg',
    discount: '15%',
    deliveryCharge: 'Free',
    duration: '30min',
    rating: 4.7,
  },
  {
    id: 5,
    storeName: 'Lukaku Coffee',
    name: 'Cappuccino',
    price: 4.99,
    priceAfterDiscount: 3.99,
    type: ['Discount', 'Free Delivery'],
    image:
      'https://pressocm.gov.kh/wp-content/uploads/2023/11/History-of-Water-Festival-Floating-Lanterns-and-Praying-to-the-Moon-001.jpg',
    discount: '25%',
    deliveryCharge: 'Free',
    duration: '20min',
    rating: 4.6,
  },
  {
    id: 6,
    storeName: 'Lukaku Coffee',
    name: 'Cappuccino',
    price: 4.99,
    priceAfterDiscount: 3.99,
    type: ['Discount', 'Italian Cuisine'],
    image:
      'https://scontent.fpnh7-1.fna.fbcdn.net/v/t39.30808-6/463613273_528555306593660_7856442987142661283_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=hzeOwprLkvoQ7kNvgGAYn9W&_nc_zt=23&_nc_ht=scontent.fpnh7-1.fna&_nc_gid=A5lMuJH3224wJLrbphM2B16&oh=00_AYBKPiS0krx1cCrBAaa3aAUOCWz1M_a7-MObVPD1Qs1Xeg&oe=67291277',
    discount: '40%',
    deliveryCharge: '$2.50',
    duration: '50min',
    rating: 4.2,
  },
  {
    id: 7,
    storeName: 'Lukaku Coffee',
    name: 'Cappuccino',
    price: 4.99,
    priceAfterDiscount: 3.99,
    type: ['Discount', 'Free Delivery', 'Japanese Cuisine'],
    image:
      'https://scontent.fpnh7-1.fna.fbcdn.net/v/t39.30808-6/463613273_528555306593660_7856442987142661283_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=hzeOwprLkvoQ7kNvgGAYn9W&_nc_zt=23&_nc_ht=scontent.fpnh7-1.fna&_nc_gid=A5lMuJH3224wJLrbphM2B16&oh=00_AYBKPiS0krx1cCrBAaa3aAUOCWz1M_a7-MObVPD1Qs1Xeg&oe=67291277',
    discount: '35%',
    deliveryCharge: 'Free',
    duration: '60min',
    rating: 4.4,
  },
  {
    id: 8,
    storeName: 'Lukaku Coffee',
    name: 'Cappuccino',
    price: 4.99,
    priceAfterDiscount: 3.99,
    type: ['Discount', 'Sweet Treats'],
    image:
      'https://scontent.fpnh7-1.fna.fbcdn.net/v/t39.30808-6/463613273_528555306593660_7856442987142661283_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=hzeOwprLkvoQ7kNvgGAYn9W&_nc_zt=23&_nc_ht=scontent.fpnh7-1.fna&_nc_gid=A5lMuJH3224wJLrbphM2B16&oh=00_AYBKPiS0krx1cCrBAaa3aAUOCWz1M_a7-MObVPD1Qs1Xeg&oe=67291277',
    discount: '10%',
    deliveryCharge: '$1.50',
    duration: '45min',
    rating: 4.9,
  },
  {
    id: 9,
    storeName: 'Lukaku Coffee',
    name: 'Cappuccino',
    price: 4.99,
    priceAfterDiscount: 3.99,
    type: ['Discount', 'Mexican Cuisine'],
    image:
      'https://scontent.fpnh7-1.fna.fbcdn.net/v/t39.30808-6/463613273_528555306593660_7856442987142661283_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=hzeOwprLkvoQ7kNvgGAYn9W&_nc_zt=23&_nc_ht=scontent.fpnh7-1.fna&_nc_gid=A5lMuJH3224wJLrbphM2B16&oh=00_AYBKPiS0krx1cCrBAaa3aAUOCWz1M_a7-MObVPD1Qs1Xeg&oe=67291277',
    discount: '50%',
    deliveryCharge: 'Free',
    duration: '55min',
    rating: 4.6,
  },
  {
    id: 10,
    storeName: 'Lukaku Coffee',
    name: 'Cappuccino',
    price: 4.99,
    priceAfterDiscount: 3.99,
    type: ['Discount', 'Italian Cuisine', 'Family Meals'],
    image:
      'https://scontent.fpnh7-1.fna.fbcdn.net/v/t39.30808-6/463613273_528555306593660_7856442987142661283_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=hzeOwprLkvoQ7kNvgGAYn9W&_nc_zt=23&_nc_ht=scontent.fpnh7-1.fna&_nc_gid=A5lMuJH3224wJLrbphM2B16&oh=00_AYBKPiS0krx1cCrBAaa3aAUOCWz1M_a7-MObVPD1Qs1Xeg&oe=67291277',
    discount: '45%',
    deliveryCharge: '$3.00',
    duration: '70min',
    rating: 4.3,
  },
];

export const SURGAR_LEVEL = [
  {
    id: 1,
    label: 'Extra Sweet',
    value: 'extraSweet',
  },
  {
    id: 2,
    label: 'Less Sweet',
    value: 'lessSweet',
  },
  {
    id: 3,
    label: 'Sweet',
    value: 'sweet',
  },
];
