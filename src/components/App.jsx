import { CssBaseline } from '@mui/material';
import {Route, Routes } from 'react-router-dom';
import useStyles from "./styles"

import { Movies, Actors, MovieInfo, NavBar, Profile } from './index';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <CssBaseline>
    <NavBar />
    <main className={classes.content}>
    <div className={classes.toolbar}/>
    <Routes>
        <Route path="/" element={<Movies />} />
        <Route exact path='/approved' element={<Movies />} />
        <Route exact path='/movie/:id' element={<MovieInfo />} />
        <Route exact path="/actors/:id" element={<Actors />} />
        <Route exact path="/profile/:id" element={<Profile />} />
    </Routes>
    </main>
    </CssBaseline>
    </div>
  )
}

export default App;