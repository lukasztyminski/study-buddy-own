import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import Note from 'components/molecules/Note/Note';
import { FormWrapper, NotesWrapper, StyledFormField, Wrapper } from './Notes.styles';
import { useForm } from 'react-hook-form';
import { useGetNotesQuery, useAddNoteMutation } from 'store';

const Notes = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { data, isLoading } = useGetNotesQuery();
  const [addNote] = useAddNoteMutation();

  const handleAddNote = ({ title, content }) => {
    addNote({ title, content });
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(handleAddNote)}>
        <FormWrapper>
          <StyledFormField {...register('title', { required: true })} label="Title" name="title" id="title" />
          {errors.title && <span>Title is required</span>}
          <StyledFormField {...register('content', { required: true })} isTextarea label="Content" name="content" id="content" />
          {errors.content && <span>Content is required</span>}
          <Button type="submit">Add</Button>
        </FormWrapper>
      </form>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <NotesWrapper>
          {data.notes.length ? (
            data.notes.map(({ id, title, content }) => <Note id={id} key={id} title={title} content={content} />)
          ) : (
            <p>Create your first note</p>
          )}
        </NotesWrapper>
      )}
    </Wrapper>
  );
};

export default Notes;
