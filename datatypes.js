/* Homework1: declare various datatypes, access them/thier-values, 
 * use various methods(if any) on them
 */
title = 'My Love';
album = 'Simple Album';
publisher = 'Dummy publisher';
format = 'mp3';
frame_rate = 23.3
available_oneline = false;
tracks = [title, 'second', "third", "forth", "sixth-"+title, 
    title+"-sevent", "eigth", "9", 10]
total_tracks = tracks.length;

file_metadata = {
    'title': title,
    'album': album,
    'publisher': publisher,
    'format': format,
    codec: 'zimba'
}

function FileMetadata(t, a, p, f, fr){
    this.title = t;
    this.album = a;
    this.publisher = p;
    this.format = f;
    this.frame_rate = fr;
    getTitle = function(){
        return this.title;
    }
    getFilename = function(){
        return this.title + "." + this.format
    }
}

function Jukebox(tracks){
    this.collection = tracks
    this.play = function(){
        console.log("playing you " + this.collection[Math.floor(Math.random() * 10)]);
    }
}

a = new Jukebox(tracks);
a.play()
