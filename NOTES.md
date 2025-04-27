## Notes

I did have to modify the following in order to get things working on my Windows machine:
- Bump the `target` to `es6` in the `tsconfig.ts` file as I kept getting a `Uncaught TypeError: Failed to construct 'HTMLElement'` error initially but bumping this up enabled the component to render in the browser.
- Remove the initial `package-lock.json` file as the packages were using an internal URL of https://npm.parliament.uk/, this may require the tester to delete my updated `package-lock.json` file if viewing internally.

Hopefully this was OK to do and overall I believe the test went pretty well, I've completed the three requirements listed in the `README.md` file:

1. I've extended the webpack build pipeline to include [Sass](https://sass-lang.com/), I have tested this out to make sure it is generated in the `public/` directory. For a future upgrade I would look at optimizing this by minifing the styling.
2. The new copmponent can be found in the `src/components/` directory, I was going to keep the styling for the component here as that is what I normally tend to do but I've included it in the `src/styles/` directory as the first requirement mentions this is where the styles should be.
3. If you add a query string to the url, for example `?id=4031`, you will get a card populated for [Rachel Reeves](http://localhost:8080/?id=4031) and likewise, if you add `?id=4639`, you will get a card for [Bim Afolami](http://localhost:8080/?id=4639). Currently if there is no query string, nothing will render (a potentential upgrade here could be rendering a default ID if one isn't present in the URL or a messaged displayed).

### Styling

I have broken up some of the styling into some reusable varibles and mixins, this could be extended further if needed. I also seperated some global styles that just apply to the page body to keep the component stying just relevant to the member card. For the member card styling, I have combined all the defaults together first, then I have specific styling set for each break point to help reduce repitition.

### Types

I used the [Members API](https://members-api.parliament.uk/) to set up some types for the members API, this is used in the MemberCard component for the data recieved and used to display the card information. I also used strict mode inside the component to make sure I didn't miss anything.
