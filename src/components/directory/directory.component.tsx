import { Key } from 'react';

import DirectoryItem from '../directory-item/directory-item.component';

import { CategoriesContainer } from './directory.styles';

export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  route: string;
};

const categories: DirectoryCategory[] = [
  {
    "id": 1,
    "title": "NES",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/82/NES-Console-Set.jpg",
    "route": "/shop/nes"
  },
  {
    "id": 2,
    "title": "SNES",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/SNES-Mod1-Console-Set.jpg/1280px-SNES-Mod1-Console-Set.jpg",
    "route": "/shop/snes"
  },
  {
    "id": 3,
    "title": "N64",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e9/Nintendo-64-wController-L.jpg",
    "route": "/shop/n64"
  },
  {
    "id": 4,
    "title": "Playstation",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/39/PSX-Console-wController.jpg",
    "route": "/shop/playstation"
  },
  {
    "id": 5,
    "title": "Playstation 2",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Sony-PlayStation-2-30001-wController-L.jpg/1024px-Sony-PlayStation-2-30001-wController-L.jpg",
    "route": "/shop/playstation%202"
  }
];

const Directory = () => {
  return(
    <CategoriesContainer>
      {categories.map((category)=> (
        <DirectoryItem key={category.id} category={category}/>
      ))}
    </CategoriesContainer>
  );
};


export default Directory;