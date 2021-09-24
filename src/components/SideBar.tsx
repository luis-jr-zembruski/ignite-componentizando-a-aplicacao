import { useState } from 'react';
import { Button } from '../components/Button';

import '../styles/sidebar.scss';


interface SideBarProps {
  genres: Array<GenreResponseProps>,
  handleClickButton: Function

}

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar(props: SideBarProps) {

  const [selectedGenreId, setSelectedGenreId] = useState(1);

 return (
  <nav className="sidebar">
    <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
  </nav>
 )
}