import React, { useState } from 'react';
import Note from 'components/molecules/Note/Note';
import { NotesWrapper, WidgetHandler, Wrapper } from './NotesWidget.styles';
import { useSelector } from 'react-redux';

const NotesWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const notes = useSelector((state) => state.notes);

  const handleToggleWidget = () => setIsOpen((prevState) => !prevState);

  return (
    <Wrapper isOpen={isOpen}>
      <WidgetHandler onClick={handleToggleWidget}>notes</WidgetHandler>
      <NotesWrapper>
        {notes.length ? notes.map(({ id, title, content }) => <Note key={id} title={title} content={content} />) : <p>Create your first note</p>}
      </NotesWrapper>
    </Wrapper>
  );
};

export default NotesWidget;
