
import styles from './AddMovieForm.module.css';
import {nanoid} from 'nanoid';
import {useState} from 'react';
import Error from '../Error/Error';



function AddMovieForm(props) {
  const {movies, setMovies} = props;

const [title, setTitle] = useState("");
const [isTitleError, setIsTitleError] = useState(false);
const [date, setDate] = useState("");
const [isDateError, setIsDateError] = useState(false);
const [image, setImage] = useState("");
const [isImageError, setIsImageError] = useState(false);
const [genre, setGenre] = useState("");
const [isGenreError, setIsGenreError] = useState(false);


function handleInputChange(event){
  setTitle(event.target.value);
}

function handleInputDate(event){
  setDate(event.target.value);
}

function handleInputImage(event){
  setImage(event.target.value);
}

function handleInputGenre(event){
  setGenre(event.target.value);
}

function handleSubmit(event){
  event.preventDefault();
  if (title === ""){
    setIsTitleError(true);
    return
  }
  else if (date === ""){
    setIsDateError(true);
    return
  }
  else if (image === ""){
    setIsImageError(true);
    return
  }
  else if (genre === ""){
    setIsGenreError(true);
    return
  }

  const newMovie = {
  id: nanoid(),
  title: title,
  year: date,
  type: genre,
  poster: image,
  };

  setMovies([...movies, newMovie]);

  setIsTitleError(false);
  setIsDateError(false);
  setIsImageError(false);
  setIsGenreError(false);

}

console.log(title)
  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className="form__left">
          <img
            className={styles.form__image}
            src="https://picsum.photos/536/354"
            alt="placeholder"
          />
        </div>
      <div className={styles.form__right}>
      <h2 className={styles.form__title}>Add Movie  </h2>
      <form onSubmit={handleSubmit}>
      <label for="Title">Title</label>
      <br />
      <input className={styles.form__input} id="title" type="text"  value={title} onChange={handleInputChange}/>
      {isTitleError ? <Error>wajib diisi</Error> : ""}
      <br/>
      <label for="Date">Date</label>
      <br />
      <input className={styles.form__input} id="date" type="text"  value={date} onChange={handleInputDate}/>
      {isDateError ? <Error>wajib diisi</Error>  : ""}
      <br/>
      <label for="Image">Image</label>
      <br />
      <input className={styles.form__input} id="Image" type="text" value={image} onChange={handleInputImage}  />
      {isImageError ? <Error>wajib diisi</Error> : ""}
      <br/>
      <label for="Genre">Genre:</label>
      <br/>
      <select className={styles.form__input} value={genre} onChange={handleInputGenre}>
        <option value="Action">Action</option>
        <option value="Drama">Drama</option>
        <option value="Horror">Horror</option>
        <option value="Comedy">Comedy</option>
      </select> 
      {isGenreError ? <Error>wajib diisi</Error> : ""}
      <br/>
      <button className={styles.form__button}>Submit</button>
      </form>
      </div>
      </section>
    </div>
  );
}


export default AddMovieForm;