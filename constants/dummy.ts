import { MovieType } from '@/app/movieApp';

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
