# Egregius

Egregius is a song lyric annotation website built for people who people who have something to say. Confused? Say so. Frustrated with a particular half-rhyme? Shame it. Search for your favorite song, highlight the troublesome lyrics, and share your annotation with the world! [Click here to see the live site!](https://egregius.herokuapp.com/#/)

<p align="center" > 
  <img src="https://github.com/L412/Egregius/blob/master/app/assets/images/github/egregius-front-page.png" width="600" border="1px solid black"/>
</p>

# Technologies Used
* Ruby on Rails
* JavaScript
* React.js and Redux.js
* PostgreSQL
* Amazon Web Services S3
* Webpack

# Core Features
### Annotation
While the lyrics always live on the left side of the screen, what appears on the right side of the screen depends on many factors — whether the user is logged in and whether the annotation they want to view is their own, for example. By keeping track of those various factors in the Redux state shared among all components, I was able to use conditional rendering to create a smooth user experience fully dependent on the user's interaction with the webpage.

```javascript
if (open && !loggedIn) {
      return <LoginPrompt openModal={openModal} />
    } else if (open && loggedIn) {
      return <AnnotationForm trackId={trackId} />
    } else if (selected && !editing && annotation) {
      return <AnnotationShow annotation={annotation} />
    } else if (selected && editing && annotation) {
      return <AnnotationEdit annotation={annotation} trackId={trackId}/>
    } else {
      return null;
    };
```

### Custom Search
When Egregius takes the international scene by storm one day (which it will), there will be thousands upon thousands of songs and a dire need to speed up the browse process. By directing an asynchronous ajax request to the back-end and using eager-loading to prevent too many database queries, Eregreius allows real-time search by either artist or track! To prevent flickering during the asynchronous call, the local state keeps track of a `loading` variable and presents a loading icon. Give it a gander!

```javascript 
handleInput(e) {
    this.setState({ 
      searchString: e.currentTarget.value,
      loading: true }, () => {
      if (this.state.searchField !== "") {
        return this.props.getSearchResults(this.state)
                  .then(res => {
                    setTimeout( () => this.setState({ loading: false }), 500)
                  })
      }
    })
  };
```

### Session Management
Egregius takes your security very seriously! We would never think of storing your plain-text password in our database, so we carefully hash your letters (and numbers, hopefully!) and only store the encrypted result. Furthermore, we responsibly manage your session token so that you don't stay logged into Egregius forever!

```ruby
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end
```

# Future Goals
There is always more to do! On the horizon are the following projects:
* Likes: Agree with an annotation? Like it. Otherwise let it feel the wrath of your thumb down!
* Comments: Sometimes, your sentiment doesn't belong to a particular lyric. Leave your comment at the bottom of the track's page!
