
import styles from './AddMovieForm.module.css';
import {nanoid} from 'nanoid';
import {useState} from 'react';
import Error from '../Error/Error';
import Button from '../ui/Button/button';



function AddMovieForm(props) {
  const { movies, setMovies } = props;

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    poster: "",
    type: "",
  });

  /**
   * TODO
   * - PROBLEM: 1 ERROR 1 STATE.
   * - TODO: REFACTOR SEMUA ERROR JADI 1 STATE.
   */
  const [errors, setErrors] = useState({
    isTitleError: false,
    isDateError: false,
    isPosterError: false,
  });
  
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function validate() {
    const { title, date, poster } = formData;
  
    if (title === "") {
      setErrors({ ...errors, isTitleError: true });
      return false;
    } else if (date === "") {
      setErrors({ ...errors, isTitleError: false, isDateError: true });
      return false;
    } else if (poster === "") {
      setErrors({ ...errors, isDateError: false, isPosterError: true });
      return false;
    } else {
      setErrors({ ...errors, isTitleError: false, isDateError: false, isPosterError: false });
      return true;
    }
  }

  function addMovie() {
    const movie = {
      id: nanoid(),
      title: formData.title,
      year: formData.date,
      type: formData.type,
      poster: formData.poster,
    };
  
    setMovies([...movies, movie]);
  }
  

  function handleSubmit(e) {
    e.preventDefault();

    validate() && addMovie();
  }

  const { title, date, poster, type } = formData;

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
      <form onSubmit={handleSubmit} >
      <label for="title">Title</label>
      <br />
      <input className={styles.form__input} id="title" type="text"  value={title} name="title" onChange={handleChange}/>
      {errors.isTitleError ? <Error>wajib diisi</Error> : ""}
      <br/>
      <label for="date">Date</label>
      <br />
      <input className={styles.form__input} id="date" type="number"  value={date} name="date" onChange={handleChange}/>
      {errors.isDateError ? <Error>wajib diisi</Error>  : ""}
      <br/>
      <label for="poster">Image</label>
      <br />
      <input className={styles.form__input} id="poster" type="text" value={poster} name="poster" onChange={handleChange}  />
      {errors.isPosterError ? <Error>wajib diisi</Error> : ""}
      <br/>
      <label for="type">Genre</label>
      <br/>
      <select className={styles.form__input} value={type} name="type" onChange={handleChange}>
        <option value="Action">Action</option>
        <option value="Drama">Drama</option>
        <option value="Horror">Horror</option>
        <option value="Comedy">Comedy</option>
      </select>
      <br/>
      <Button full={true}>Add Movie</Button>
      </form>
      </div>
      </section>
    </div>
  );
}



export default AddMovieForm;