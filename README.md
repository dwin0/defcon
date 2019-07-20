# setup instructions

## prerequisites

-   git - https://git-scm.com/
-   node.js - https://nodejs.org/en/
-   npm (installed with node.js)

## steps

1. Download this repository

```bash
git clone git@github.com:dwin94/defcon.git
```

2. Navigate into the folder and install the dependencies

```bash
npm install
```

3. Compile sass into css and bundle js

```bash
npm run build
```

4. Copy content of public folder onto your server

# Editing instructions

-   Make sure the event name
    ```html
    <p class="event__name">Beer on tuesday</p>
    ```
    matches the exact event filter value
    ```html
    value="Beer on tuesday"
    ```
    in order to make the filter work
-   Make sure the location name matches the exact location filter value in order to make the filter work
