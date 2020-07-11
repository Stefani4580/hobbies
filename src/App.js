import React from 'react';
import './App.css';
import Hobbies from "./components/Hobbies"

function App() {


  return (
    <div className="App">
      <Hobbies name="Tennis" pic="https://photoresources.wtatennis.com/photo-resources/2019/08/15/dbb59626-9254-4426-915e-57397b6d6635/tennis-origins-e1444901660593.jpg?width=1200&height=630" details="Tennis is a racket sport that can be played individually against a single opponent (singles) or between two teams of two players each (doubles). Each player uses a tennis racket that is strung with cord to strike a hollow rubber ball covered with felt over or around a net and into the opponent's court. The object of the game is to maneuver the ball in such a way that the opponent is not able to play a valid return. The player who is unable to return the ball will not gain a point, while the opposite player will."/>
      <Hobbies name="Quilting" pic="https://secureservercdn.net/45.40.149.159/a50.772.myftpupload.com/wp-content/uploads/2017/09/IMG_9669-480x384.jpg" details="Quilting is the term given to the process of joining a minimum of three layers of fabric together either through stitching manually by hand using a needle and thread, or mechanically with a sewing machine or specialised longarm quilting system. An array of stitches is passed through all layers of the fabric to create a three dimensional padded surface. The three layers are typically referred to as the top fabric or quilt top, batting or insulating material and the backing."/>
      <Hobbies name="Tap Dance" pic="https://pbs.twimg.com/media/DmiAJl7WwAAiAgu.jpg" details="Tap dance is a type of dance characterised by using the sounds of tap shoes striking the floor as a form of percussion. The sound is made by shoes that have a metal tap on the heel and toe. There are several styles of tap dance, including rhythm (jazz), classical, Broadway, and post-modern."/>

    </div>
  );
}

export default App;
