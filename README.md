
1.  There are several ways to speed up an SPA depending on what's  let me explain

    if you are trying to make your website faster by decreasing the initial load time for your SPA, then you could

    - applying code splitting to reduce the time it initially takes to load your application. Rather than having one large bundle have multiple bundles that will be        dynamically loaded. This way your application's entire bundle doesn't have to be be loaded up before the user sees anything.

    - Also make sure your files are well minified and gzipped to reduce bundle sizes

    - Cache the data returned from your api's and re-validate (in the background preferably) when necessary to make sure you cache is up-to-date. Caching helps you           deal    with latency and will make your app feel much faster to the user.

    - optimize code where necessary, for instance for React, use useCallback, useMemo and React.memo to prevent unnecessary re-renders 

    - apply techniques like pre-fetching, Optimistic UI to make your site and activities performed faster.

      could go on and on listing different things that can be done to speed up an SPA, however it's always best to figure out what's making the app slower and               improve/make   the necessary fixes along those lines. using Light house and monitoring tools like Datadog to monitor performance metrics and make necessary fixes.


2.  To insert a string into an html element, you would have to do something like this

    ```
       <div>{string goes here}</div>
    ```
 
    if the string you are trying to insert is a html markup, you could insertHtml, known as **dangerouslySetInnerHTML**. if you are using this ensure to sanitize your     string markup first to avoid a potential xss attack.

3. Ability to thoroughly think through, research and come up with a solid solution to a problem.


4.  Create a function that will reproduce the way JavaScript generators works.


5. for content box, the width and height property of an element is only determined by the content while for border-box its the content, padding and border. so 
     ```
       border box = content + padding + border
    ``` 
6. Accessibility has to do with making your app usable for everyone. It involves making your app easy to use for people with disabilities who rely on assistive     technologies. To make your app accesible you have to pay attention to making sure that assistive technologies like screen reader's integrate well with your app. this ranges from using semantic markup for your app, adding alt text to images e.t.c.

7. cookie have a much smaller size than local storage and session storage and for each requet in a domain, all the cookies in the domrnain are sent. Cookies are for sending information back and forth between the server and client on every HTTP request, while local storage and session storage is for storing information on the client. session storage gets cleared once that tab is cloase while local storage stays untill cleared.

8. Yes

9. For css, using css-in-js file has been my go to option in recent years and no longer Sass for me. I set up Theming for whatever needs to be ,systematicaly applied everywhere like colors, font, breakpoints etc.The global Component for Global styles and then localize evry other styling as much as possible. Using a css-in-js library like emotion saves you from usually having this issue where you possibly do not know which styles or classNames are cascading over your expected styling, aslso  since it-s css-in-js code splitting also benefits you. For js also I keep stufs that only needs to be global, globally. Try to share logic as much as possible using utility function and hooks in React. then try localizing and co-locating every other thing.

10. bluebic.com, demo found at https://demo.bluebic.com/

11. All in for resusable components and simplicity certainly not for preamture-optimizations. I believe optimizations should be done when needed, this doesn't mean you shouldn't think properly of the code you write and try to future proof when necessary. But if this is done in such a way its hard for any team member to make sense of it why going through a codebase, then probably some simplficationsn can be done. In building things to be re-usable I believe in trying to build stuff to be as composable as possible and losely coupled, where trying to implement a simple change doesn't have to involve reaing so much apart.

12. Investigate to be sure, there is nothing in your dependency array that is chaning uncessary (maybe a function or an object that is being re-created unecessarily) and memoize using the useCallbak and useMemo hook where necesary.

13. Always trying to sanitize inputs where necessary e.g when using  ```dangerouslySetInnerHTML ``` to help prevent possible XSS, if you are using cookies use your samSite flag to potentilly prevent CSFR attacka and httpOnlyto mitigate against XSS attack.





