const SHOP_DATA = [
  {
    title: 'NES',
    items: [
      {
        id: 1,
        name: 'Super Mario Bros.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/0/03/Super_Mario_Bros._box.png',
        price: 20,
      },
      {
        id: 2,
        name: 'Super Mario Bros. 2',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/0/00/Super_Mario_Bros_2.jpg',
        price: 25,
      },
      {
        id: 3,
        name: 'Super Mario Bros. 3',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a5/Super_Mario_Bros._3_coverart.png',
        price: 30,
      },
      {
        id: 4,
        name: "Kirby's Adventure",
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Kirby%27s_Adventure_Coverart.png',
        price: 35,
      },
      {
        id: 5,
        name: 'Mega Man 2',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/be/Megaman2_box.jpg',
        price: 30,
      },
      {
        id: 6,
        name: 'Castlevania',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/51/Castlevania_1_cover.png',
        price: 30,
      },
      {
        id: 7,
        name: 'The Legend of Zelda',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/41/Legend_of_zelda_cover_%28with_cartridge%29_gold.png',
        price: 25,
      },
      {
        id: 8,
        name: 'Zelda II: Adventure of Link',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/fd/Zelda_II_The_Adventure_of_Link_box.jpg',
        price: 30,
      },
      {
        id: 9,
        name: 'Tetris',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/7d/Tetris_NES_cover_art.jpg',
        price: 25,
      },
    ],
  },
  {
    title: 'SNES',
    items: [
      {
        id: 10,
        name: 'Super Mario World',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/32/Super_Mario_World_Coverart.png',
        price: 30,
      },
      {
        id: 11,
        name: 'Mario Paint',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/ea/Mario_paint_box.jpg',
        price: 25,
      },
      {
        id: 12,
        name: 'Super Castlevania IV',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c2/Super_Castlevania_IV_North_American_SNES_box_art.png',
        price: 30,
      },
      {
        id: 13,
        name: 'Earthbound',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1f/EarthBound_Box.jpg',
        price: 80,
      },
      {
        id: 14,
        name: 'Donkey Kong Country',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1a/Donkey_Kong_Country_SNES_cover.png',
        price: 30,
      },
      {
        id: 15,
        name: 'Mega Man X',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f1/Mega_Man_X_Coverart.png',
        price: 30,
      },
      {
        id: 16,
        name: 'Star Fox',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/52/Star_Fox_SNES.jpg',
        price: 35,
      },
      {
        id: 17,
        name: 'The Legend of Zelda: A Link to the Past',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/2/21/The_Legend_of_Zelda_A_Link_to_the_Past_SNES_Game_Cover.jpg',
        price: 35,
      },
    ],
  },
  {
    title: 'N64',
    items: [
      {
        id: 18,
        name: 'Super Mario 64',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/6a/Super_Mario_64_box_cover.jpg',
        price: 60,
      },
      {
        id: 19,
        name: 'The Legend of Zelda: Ocarina of Time',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/57/The_Legend_of_Zelda_Ocarina_of_Time.jpg',
        price: 60,
      },
      {
        id: 20,
        name: 'Mario Party',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/cd/Marioparty1.jpg',
        price: 45,
      },
      {
        id: 21,
        name: 'Donkey Kong 64',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/ae/DonkeyKong64CoverArt.jpg',
        price: 50,
      },
      {
        id: 22,
        name: 'Star Fox 64',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/63/StarFox64_N64_Game_Box.jpg',
        price: 50,
      },
    ],
  },
  {
    title: 'Playstation',
    items: [
      {
        id: 23,
        name: 'Final Fantasy VIII',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5d/Final_Fantasy_8_ntsc-front.jpg',
        price: 30,
      },
      {
        id: 24,
        name: 'Metal Gear Solid',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/33/Metal_Gear_Solid_cover_art.png',
        price: 35,
      },
      {
        id: 25,
        name: 'Resident Evil 2',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/40/NTSC_Resident_Evil_2_Cover.png',
        price: 30,
      },
      {
        id: 26,
        name: 'Boku no Natsuyasumi',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/0/05/Boku_no_Natsuyasumi_Cover.jpg',
        price: 55,
      },
      {
        id: 27,
        name: "Spyro the Dragon 2: Ripto's Rage",
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/91/Spyro_2_-_Ripto%27s_Rage%21_Coverart.png',
        price: 30,
      },
      {
        id: 28,
        name: 'Crash Bandicoot',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/44/Crash_Bandicoot_Cover.png',
        price: 20,
      },
      {
        id: 29,
        name: 'Crash Bandicoot 2: Cortex Strikes Back',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e6/Crash_Bandicoot_2_Cortex_Strikes_Back_Game_Cover.jpg',
        price: 40,
      },
    ],
  },
  {
    title: 'Playstation 2',
    items: [
      {
        id: 30,
        name: 'Final Fantasy X',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Ffxboxart.jpg',
        price: 60,
      },
      {
        id: 31,
        name: 'Metal Gear Solid 2: Sons of Liberty',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/6a/Metalgear2boxart.jpg',
        price: 55,
      },
      {
        id: 32,
        name: 'Metal Gear Solid 3: Snake Eater',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b3/Mgs3box.jpg',
        price: 60,
      },
      {
        id: 33,
        name: 'Silent Hill 2',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/95/Silent_Hill_2.jpg',
        price: 50,
      },
      {
        id: 34,
        name: 'Dragon Quest VIII',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/94/Dragon_Quest_VIII_Journey_of_the_Cursed_King.jpeg',
        price: 40,
      }
    ],
  },
];

export default SHOP_DATA;