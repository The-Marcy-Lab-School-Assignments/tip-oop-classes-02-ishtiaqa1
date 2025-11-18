/**
 * Song Class
 * 
 * A class to manage songs with title, artist, play count, and rating.
 */

class Song {
  //write your code here
  static playlist = [];
  #playCount;
  #rating;
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.#playCount = 0;
    this.#rating = 0;
    Song.playlist.push(this);
  }
  get playCount() {
    return this.#playCount;
  }
  get rating() {
    return this.#rating;
  }
  play() {
    this.#playCount++;
    console.log(`Now playing: ${this.title} by ${this.artist}`);
  }
  rate(stars) {
    this.#rating = stars;
    console.log(`You rated ${this.title} ${this.#rating} stars`)
  }
  isPopular() {
    return this.#playCount >= 10 ? true : false;
  }
  static getTotalSongs() {
    return Song.playlist.length;
  }
  static findByTitle(title) {
    return Song.playlist.find((s) => s.title === title);
  }
}

// Export the Song class for testing
module.exports = { Song };
