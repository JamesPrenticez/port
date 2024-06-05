[https://www.reddit.com/r/webdev/comments/1ct9us2/in_react_how_do_i_prevent_these_little_layout/?%24deep_link=true&correlation_id=082d8682-105d-4b7b-97af-e2738e91e430&post_fullname=t3_1ct9us2&post_index=0&ref=email_digest&ref_campaign=email_digest&ref_source=email&utm_content=post_title&%243p=e_as&_branch_match_id=1144787994995242525&utm_medium=Email+Amazon+SES&_branch_referrer=H4sIAAAAAAAAA22P0WrDMAxFvyZ7S9raaZsOyhiM%2FYZwbaURdWxjy83291PWbU8Dgy5HvrrSxJzK82aT0TnizqTUeQq3jU4vjep1OiOY8iQyZrpSMB5q9udpdTX6tVHv8pZl6X78Ns4C8grx4vAuQtCMgYvIneVTLUoUBchoLMMUF3ARCFLGu3wDnrAgeGL2UsxnrAxlonGN0pK2V71DTLBu2eg3zhUbdbAxZ%2FSGKQYgJ3w7KDccBtXutnvX9pfjpT0dzdiiOuoBTzvs9VZ8KRaGsXofzIzrOA1%2FSz6aFBx%2BrAMFZBxF4WzIg6MrFn5AsGZOhq7h%2F26JNVv87QmsPIONgeVeod8xTHLvFzuyF6%2BNAQAA]

```html
<div class="responsive-media" style='padding-bottom:50%'>
  <img>
</div>
```

```css
.responsive-media {
  position: relative;
  height: 0;
  padding-bottom: 75%; /* Adjust this value inline based on the aspect ratio */
  overflow: hidden;
}

.responsive-media img,
.responsive-media object,
.responsive-media video,
.responsive-media iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

or

```css
img {
    width: 100%;
    aspect-ratio: 4/3;
    object-fit: cover;
}
```