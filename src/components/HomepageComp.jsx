import React from 'react';
import Box from "@material-ui/core/Box";
import MenuComp from "./MenuComp";
import "../style/style.css";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';



function HomepageComp() {
  return (
    <div className="root">
      <Box className="App-icon">
      <MenuComp /> </Box>

    <Box className="App-main">
    <div>
    <Box className="App-main-first">
        <h1 className="App-main-title">
        Science Magazine</h1>
        <h1 className="App-main-title">11.12.2018</h1>
        <p className="App-main-text">    Want to master your professional and social networks to maximize recognition? Want to learn how to build productive teams that create lasting impact? In this new book, The Formula: The uUniveresal Laws of Success, Albert-László Barabási translates almost a decade of scholarly reseírch on the science of suceess into a lively...</p></Box>
        <Box> <h3 className="App-main-more">Read more</h3></Box>
        </div>
        <div>
    <Box className="App-main-first" style={{backgroundColor: "#fff"}}>
        <h1 className="App-main-title">
        Nature</h1>
        <h1 className="App-main-title">27.11.208</h1>
        <p className="App-main-text" style={{color:"#000"}}> Origially printed by the National Academies of Sciences as a poster to accompany the publication of a research paper on how diseases connect, it was subsequently reproduced by the New York Times and included in the Mapping It Out: Atlas of Contemporary Cartographies exhibition at the Serpentine Gallery in London...</p></Box>
        <Box> <h3 className="App-main-more">Read more</h3></Box>
        </div>

        <div className="video">
        <Box className="App-main-first">
          <p className="App-main-play" style={{marginTop:"8em"}}>   </p>
        <PlayCircleFilledIcon style={{color: "#fff", fontSize: "100px", margin: "auto"}} />
        <h1 className="App-main-title" style={{width:"80%", paddingTop:"5em"}}>
        Lecture at NYU</h1></Box>
        <Box> <h3 className="App-main-more">Watch</h3></Box>
        </div>
    </Box>
        
 
 

    </div>
  )
}

export default HomepageComp

