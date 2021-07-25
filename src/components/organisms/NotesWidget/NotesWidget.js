import React, { useState } from 'react';
import Note from 'components/molecules/Note/Note';
import { NotesWrapper, WidgetHandler, Wrapper } from './NotesWidget.styles';
import { useGetNotesQuery } from 'store';

const NotesWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading } = useGetNotesQuery();

  const handleToggleWidget = () => setIsOpen((prevState) => !prevState);

  return (
    <Wrapper isOpen={isOpen}>
      <WidgetHandler onClick={handleToggleWidget}>notes</WidgetHandler>
      <NotesWrapper>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            {data.notes.length ? (
              data.notes.map(({ id, title, content }) => <Note key={id} title={title} content={content} />)
            ) : (
              <p>Create your first note</p>
            )}
          </>
        )}
      </NotesWrapper>
    </Wrapper>
  );
};

export default NotesWidget;
