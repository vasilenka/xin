let getAlbums = async () => {
  let albums = await fetch('http://rallycoding.herokuapp.com/api/music_albums');
  let json =  await albums.json();
  console.log(json);
}

getAlbums();
