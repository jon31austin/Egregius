# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# DON'T DELETE DEMO USER
User.create!(username: "Happy Wanderer", password: "justlooking!")
# DON'T DELETE ABOVE

#CREATE USERS
User.create!(username: "Adam", password: "AdamPass")
User.create!(username: "Bob", password: "BobPass")
User.create!(username: "Charlie", password: "CharliePass")
User.create!(username: "David", password: "DavidPass")
User.create!(username: "Edward", password: "EdwardPass")
User.create!(username: "Frank", password: "FrankPass")
User.create!(username: "Greg", password: "GregPass")
User.create!(username: "Henry", password: "HenryPass")
User.create!(username: "Ian", password: "IanPass")
User.create!(username: "Jack", password: "JackPass")
#END CREATE USERS

#CREATE ARTISTS
Artist.create!(name: "Madonna")
Artist.create!(name: "Justin Timberlake")
Artist.create!(name: "Eminem")
Artist.create!(name: "The Notorious BIG")
Artist.create!(name: "Enya")
Artist.create!(name: "Gwen Stefani")
#END CREATE ARTISTS

#CREATE ALBUMS
Album.create!(name: "Music", year: 2000, artist_id: 1)
Album.create!(name: "Justified", year: 2002, artist_id: 2)
Album.create!(name: "The Eminem Show", year: 2002, artist_id: 3)
Album.create!(name: "Ready to Die", year: 1994, artist_id: 4)
Album.create!(name: "Watermark", year: 1988, artist_id: 5)
Album.create!(name: "Love Angel Music Baby", year: 2004, artist_id: 6)
#END CREATE ALBUMS

#CREATE TRACKS
Track.create!(title: "Don't Tell Me", lyrics: "Tell the rain not to drop...", 
    artist_id: 1, album_id: 1)
Track.create!(title: "Senorita", lyrics: "I feel for you", 
    artist_id: 2, album_id: 2)
Track.create!(title: "Business", lyrics: "I ain't got to time to play around, what is this?...", 
    artist_id: 3, album_id: 3)
Track.create!(title: "Who Shot Ya?", lyrics: "Separate the weak from the obsolete...", 
    artist_id: 4, album_id: 4)
Track.create!(title: "Orinoco Flow", lyrics: "Let me sail, let me flow...", 
    artist_id: 5, album_id: 5)
Track.create!(title: "Hollaback", lyrics: "Uh huh, that's my shit...", 
    artist_id: 6, album_id: 6)
#END CREATE TRACKS
